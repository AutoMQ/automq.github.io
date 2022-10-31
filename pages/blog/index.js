import Link from "next/link";
import { useEffect, useState } from "react"
import { getFileData, getFileIds } from "../../lib/posts-md";
import { postTagStyle } from "../../lib/util";
import moment from 'moment'
import { first } from "lodash";
import { getTeammateByName } from "../../common/teammateList";

const postdir = 'content/blog'
function uniqueFunc(arr, uniId) {
    const res = new Map();
    return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}
export default function Index(props) {
    const [blog, setBlog] = useState([])
    const [featuredbloglist, setFeaturedbloglist] = useState([])
    const [lastedfeaturedblog, setLastedfeaturedblog] = useState(undefined)
    const [recentfeaturedbloglist, setRencentfeaturedbloglist] = useState([])
    useEffect(() => {
        // console.log(props.mdArr);
        let list = uniqueFunc(props.mdArr, 'title')
        list = list
            .filter(item => !item.tags.includes('Hidden'))
            .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
            .map(item => {
                let id = item.id
                if (Array.isArray(id)) {
                    id = id.join('/')
                }
                item.id = id
                const teammate = getTeammateByName(item.author);
                if (teammate) {
                    item.avatar = `/people/${teammate.name.toLowerCase()}.webp`;
                }
                return {
                    ...item,
                }
            })
        setBlog(list)
        console.log(list);
        const feature_list = list.filter(item => item.featured)
        setFeaturedbloglist(feature_list)
        setLastedfeaturedblog(first(feature_list))
        setRencentfeaturedbloglist(feature_list.slice(1, 5))
    }, [])

    return (
        <div className="w-full relative bg-white">
            <div className="w-full max-w-full flex flex-col lg:grid lg:grid-cols-2 mx-auto lg:py-2 lg:max-w-7xl">
                <Link href={`/blog/${lastedfeaturedblog?.id}`}>
                    <a className="w-full h-auto flex flex-col justify-center items-center hover:opacity-80 lg:pl-8">
                        <img className="w-full h-auto object-cover lg:rounded" src={lastedfeaturedblog?.feature_image} />
                    </a>
                </Link>
                <div className="w-full h-auto lg:row-start-1 flex flex-col justify-center items-start p-4 lg:pr-0">
                    <div className="w-full flex flex-row justify-start items-center">
                        {
                            lastedfeaturedblog?.tags?.map((item, index) => {
                                return (
                                    <div className="inline-flex" key={index}>
                                        <span className={`items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium ${postTagStyle(item)}`}>
                                            {item}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Link href={`/blog/${lastedfeaturedblog?.id}`}>
                        <a className="w-full flex flex-col justify-start items-start py-2 hover:opacity-80">
                            <p className="mt-4 text-2xl sm:text-6xl font-semibold text-gray-900">
                                {lastedfeaturedblog?.title}
                            </p>
                            <p className="mt-6 text-base text-gray-500">
                                {lastedfeaturedblog?.description}
                            </p>
                        </a>
                    </Link>
                    <div className="mt-4 flex items-center">
                        {
                            lastedfeaturedblog?.avatar && (
                                <img
                                    className="w-8 mr-2 h-auto rounded-full"
                                    src={lastedfeaturedblog.avatar}

                                />
                            )
                        }
                        <span className="text-sm font-medium text-gray-500">
                            {lastedfeaturedblog?.author}
                        </span>
                        <span className="mx-2" aria-hidden="true">&middot;</span>
                        <span className="text-sm text-gray-500">{lastedfeaturedblog?.wordcount}</span>
                    </div>
                </div>
            </div>
            <hr className="block my-4" />

            <div className="w-full lg:max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-8">
                {
                    recentfeaturedbloglist.map((item, index) => {
                        return (
                            <Link href={`/blog/${item?.id}`} key={index}>
                                <a className="w-full py-2 flex flex-col justify-start items-start hover:opacity-80">
                                    <p className="text-lg py-2 font-semibold text-gray-700">
                                        {item.title}
                                    </p>
                                    <div className="flex flex-wrap mb-3 gap-2">
                                        {
                                            item?.tags?.map((item, index) => {
                                                return (
                                                    <span key={index} className={`items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium ${postTagStyle(item)}`}>
                                                        {item}
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime={moment(item.published_at).format("MMM DD YYYY")}>
                                            {moment(item.published_at).format("MMM DD YYYY")}
                                        </time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>{item.wordcount}</span>
                                    </p>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="w-full border mx-auto px-8 sm:px-12 py-8 sm:py-12 flex flex-wrap bg-indigo-700 rounded-3xl flex-col justify-start">
                    <div className="w-full flex flex-col justify-start text-white">
                        <p className="text-3xl font-semibold tracking-tight text-white sm:text-6xl">
                            了解数据库行业洞见和产品更新
                        </p>
                    </div>
                    <div className="flex-shrink-0 flex flex-row flex-wrap py-3 text-white mt-4">
                        <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-start sm:items-center">
                            <label htmlFor="email-address" className="sr-only">邮箱地址</label>
                            <input id="email-address" name="email-address" type="email" autoComplete="email" required="required" placeholder="输入您的邮箱" className="w-72 border border-gray-300 flex-grow shadow-sm placeholder-gray-400 mr-3 sm:max-w-xs text-xl rounded-md px-5 py-3" />
                            <button type="submit" className="w-36 flex items-center justify-center border border-transparent text-xl font-medium rounded-md text-gray-900 bg-white hover:opacity-80 px-5 py-3">
                                订阅
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="relative w-full mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl mt-8 mb-8 grid grid-cols-1 p-4 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    blog.map((item, index) => {
                        return (
                            <div className="flex flex-col border shadow-md overflow-hidden" key={index}>
                                <Link href={`/blog/${item?.id}`}>
                                    <img className="h-48 w-full object-cover" src={item.feature_image} />
                                </Link>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        {
                                            item.tags.map((item, index) => {
                                                return (
                                                    <div className="inline-flex" key={index}>
                                                        <span className={`items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium ${postTagStyle(item)}`}>
                                                            {item}
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                        <Link href={`/blog/${item?.id}`}>
                                            <a className="block mt-2 no-underline">
                                                <p className="text-xl font-semibold text-gray-900">
                                                    {item.title}
                                                </p>
                                                <p className="mt-3 text-base text-gray-500">
                                                    {item.description}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        <div className="flex-shrink-0">
                                            <span className="sr-only">{item.author}</span>
                                            {
                                                item.avatar && (
                                                    <img
                                                        src={item.avatar}
                                                        className="h-10 w-10 rounded-full"
                                                        alt="avatar"
                                                    />
                                                )
                                            }
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                {item.author}
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime={moment(item.published_at).format("MMM DD YYYY")}>
                                                    {moment(item.published_at).format("MMM D YYYY")}
                                                </time>
                                                <span aria-hidden="true">&middot;</span>
                                                <span>{item.wordcount}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
export const getStaticProps = async () => {
    const allPosts = await getFileIds(postdir)
    let mdArr = []
    for (const el of allPosts) {
        const element = await getFileData(postdir, el, 1);
        // console.log(element);
        mdArr.push(element);
    }
    return {
        props: {
            mdArr
        },
    };
}
