import {getMdInfoList} from "@/common/util";
import clsx from "clsx";

import {postTagStyle} from "@/common/util";
import Link from '@/components/Link'

export default function Blog(props) {
    return (
        <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 sm:h-2/3"/>
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque,
                        ducimus sed.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {props.list?.map((post) => (
                        <div key={post.href} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            {
                                post?.feature_image && (
                                    <div className="flex-shrink-0">
                                        <Link href={post.href}>
                                            <img className="h-48 w-full object-cover" src={post.feature_image} alt=""/>
                                        </Link>
                                    </div>
                                )
                            }
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    {
                                        post?.tags && (
                                            <p className="text-sm font-medium text-indigo-600">
                                                {
                                                    post.tags.map((item, index) => (
                                                        <Link key={index} href={post.href}
                                                              className={clsx("px-3 py-0.5 mr-2 rounded-full", postTagStyle(item))}>
                                                            {item}{' '}
                                                        </Link>
                                                    ))
                                                }
                                            </p>
                                        )
                                    }
                                    <Link href={post.href} className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        {
                                            post?.description && (
                                                <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                            )
                                        }
                                    </Link>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <Link href={post.href}>
                                            <span className="sr-only">{post.author}</span>
                                            {/*<img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />*/}
                                        </Link>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <Link href={'/'} className="hover:underline">
                                                {post.author}
                                            </Link>
                                        </p>
                                        {
                                            post?.published_at && (
                                                <div className="flex space-x-1 text-sm text-gray-500">
                                                    <time dateTime={post.published_at}>{post.published_at}</time>
                                                    <span aria-hidden="true">&middot;</span>
                                                    <span>{post.readtime}</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({locale}) {
    let list = await getMdInfoList('src/pages/blog')
    list = list
        .filter(item => Array.isArray(item.tags) && !item.tags.includes('Hidden'))
        .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    return {
        props: {
            list
        }
    }
}
