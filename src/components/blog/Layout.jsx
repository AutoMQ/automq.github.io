import Head from "next/head";
import {Header} from "@/components/index/Header";
import {Footer} from "@/components/index/Footer";
import {Prose} from "@/components/docs/Prose";
import Toc from "@/components/Toc";


export default function BlogLayout(props) {
    const {children} = props
    const info = children?.props?.markdoc?.frontmatter
    return (
        <>
            <Head>
                <title>{props?.title ?? "Hellocorp"}</title>
                <meta
                    name="description"
                    content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
                />
            </Head>
            <Header/>
            {/*<div*/}
            {/*    className="flex flex-row items-center justify-center text-base text-gray-900 font-semibold tracking-wide uppercase"*/}
            {/*>*/}
            {/*    {info?.author}*/}
            {/*    <div className="ml-2 flex space-x-1 text-gray-500">*/}
            {/*        <time dateTime={moment(info?.published_at).format("MMM DD YYYY")}>*/}
            {/*            {moment(info?.published_at).format("MMM DD YYYY")}*/}
            {/*        </time>*/}
            {/*        <span aria-hidden="true">&middot;</span>*/}
            {/*        <span>{info?.readtime}</span>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
                <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
                    <article>
                        {props.title && (
                            <header className="mb-9 space-y-1">
                                {props.title && (
                                    <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                                        {props.title}
                                    </h1>
                                )}
                            </header>
                        )}
                        <Prose id='content'>{props.children}</Prose>
                    </article>
                </div>
                <Toc tableOfContents={props.tableOfContents}/>
            </div>

            <Footer/>
        </>
    )
}