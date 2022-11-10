import Head from 'next/head'
import DocsLayout from '@/components/docs/Layout'
// import IndexLayout from '@/components/index/Layout'
// import BlogLayout from "@/components/blog/Layout";
import ErrorPage from "@/pages/404";
import slugify from "slugify";

import 'focus-visible'
import '@/styles/tailwind.css'
import dynamic from "next/dynamic";
import f_t from '@/constant/foot_topic.json'

const IndexLayout = dynamic(() => import('@/components/index/Layout'), {ssr: false})
const BlogLayout = dynamic(() => import('@/components/blog/Layout'), {ssr: false})

function getNodeText(node) {
    let text = ''
    for (let child of node.children ?? []) {
        if (typeof child === 'string') {
            text += child
        }
        text += getNodeText(child)
    }
    return text
}

function collectHeadings(nodes) {
    let sections = []
    for (let node of nodes) {
        if (node.name === 'h2' || node.name === 'h3') {
            let title = getNodeText(node)
            if (title) {
                let id = slugify(title)
                node.attributes.id = id
                if (node.name === 'h3') {
                    if (!sections[sections.length - 1]) {
                        continue
                        // throw new Error(
                        //     'Cannot add `h3` to table of contents without a preceding `h2`'
                        // )
                    }
                    sections[sections.length - 1].children.push({
                        ...node.attributes,
                        title,
                    })
                } else {
                    sections.push({...node.attributes, title, children: []})
                }
            }
        }

        sections.push(...collectHeadings(node.children ?? [], slugify))
    }
    return sections
}

function getArticle(router) {
    if(router.pathname.startsWith('/blog/')){
        return true
    }
    for(let i = 0;i <= f_t.length - 1;i++){
        if(router.pathname.startsWith(f_t[i].topicPath)){
            return true
        }
    }
    return false
}

const App = ({Component, pageProps, router}) => {
    let title = pageProps.markdoc?.frontmatter.title
    let pageTitle =
        pageProps.markdoc?.frontmatter.pageTitle ||
        `${pageProps.markdoc?.frontmatter.title} - Docs`

    let description = pageProps.markdoc?.frontmatter.description

    let tableOfContents = pageProps.markdoc?.content
        ? collectHeadings(pageProps.markdoc.content)
        : []
    const flag = function () {}
    if (router.pathname.startsWith('/404')) {
        return <ErrorPage/>
    }

    if (router.asPath.startsWith('/docs')) {
        return (
            <>
                <Head>
                    <title>{pageTitle}</title>
                    {description && <meta name="description" content={description}/>}
                </Head>
                <DocsLayout title={title} tableOfContents={tableOfContents}>
                    <Component {...pageProps} />
                </DocsLayout>
            </>
        )
    }
    if (getArticle(router)) {
        return (
            <>
                <Head>
                    <title>{pageTitle}</title>
                    {description && <meta name="description" content={description}/>}
                </Head>
                <BlogLayout title={title} tableOfContents={tableOfContents}>
                    <Component {...pageProps} />
                </BlogLayout>
            </>
        )
    }
    return (
        <>
            <IndexLayout>
                <Component {...pageProps} />
            </IndexLayout>
        </>
    )
}

export default App
