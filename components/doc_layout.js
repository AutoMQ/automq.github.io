import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import Breadcrumb from './breadcrumb';
import DocsHead from './docshead';
import Sidebar from './sidebar';
import Toc from './toc';

const DocLayout = ({ children }) => {
    const ref = useRef()
    const router = useRouter()
    return (
        <div className='page-wrapper w-full h-screen'>
            <DocsHead />
            <main className='main-wrapper w-full h-auto flex-grow overflow-y-auto overflow-x-hidden'>
                <div className='relative pb-6 w-full h-full flex flex-col flex-shrink-0 bg-gray-50 border-r border-gray-200 transition-all overflow-y-auto'>
                    {
                        router.asPath.startsWith('/docs/api') ? (
                            <Sidebar info={children.props?.side_bar_api} />
                        ) : router.asPath.startsWith('/docs/cli') ? (
                            <Sidebar info={children.props?.side_bar_cli} />
                        ) : router.asPath.startsWith('/docs/how-to') ? (
                            <Sidebar info={children.props?.side_bar_how} />
                        ) : router.asPath.startsWith('/docs') ? (
                            <Sidebar info={children.props?.side_bar_doc} />
                        ) : <></>
                    }
                    {/* <Sidebar info={children.props}/> */}
                </div>
                <div id="content-container" className='flex flex-col justify-start items-start px-4 lg:pr-64 w-full h-auto relative overflow-x-hidden overflow-y-auto'>
                    {/* {children} */}
                    <div ref={ref} id="content" className="flex flex-col justify-start items-center w-full mx-auto lg:max-w-3xl 2xl:max-w-4xl">
                        <div className="w-full flex flex-row justify-start items-center mt-4 flex-wrap">
                            <Breadcrumb info={children.props?.side_bar} />
                        </div>
                        {children}
                        <div
                            className="w-full flex flex-col sm:flex-row sm:justify-start sm:items-center text-base"
                        >
                            <a
                                className=" cursor-pointer py-1 flex flex-row justify-start items-center text-gray-600 hover:text-accent"
                                target="_blank"
                            >
                                Edit this page on GitHub
                                <img
                                    className="h-4 ml-2"
                                    src="/svg/external-link.svg"
                                    alt="prev"
                                />
                            </a>
                        </div>
                        <div
                            className="w-full mt-4 pb-12 pt-4 flex flex-row justify-between border-t border-gray-200"
                        >
                            <Link
                            href={"/"}
                                className="py-2 flex flex-row justify-start items-center text-base text-gray-600 hover:text-accent"
                            >
                                <a>{"← "}</a>
                            </Link>
                            <Link
                            href={'/'}
                                className="py-2 flex flex-row justify-end items-center text-base text-gray-600 hover:text-accent"
                            >
                                <a>{" →"}</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='hidden fixed right-0 top-32 w-60 py-2 pt-12 h-full flex-shrink-0 lg:flex flex-col justify-start items-start overflow-y-auto text-sm'>
                    <Toc content={children} scrollOffset={20} className='md:flex' />
                </div>
            </main>
        </div>
    );
}
export default DocLayout