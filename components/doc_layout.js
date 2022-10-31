import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { getCatacory, getPath } from '../lib/util';
import Breadcrumb from './breadcrumb';
import DocsHead from './docshead';
import Sidebar from './sidebar';
import Toc from './toc';

const DocLayout = ({ children }) => {
    const ref = useRef()
    const router = useRouter()
    const [prev, setPrev] = useState(undefined)
    const [next, setNext] = useState(undefined)
    useEffect(() => {
        const catagory = getCatacory(router.asPath, children.props)
        const path = getPath(router.asPath)
        if (Array.isArray(catagory)) {
            const linkableNodes = catagory.filter((n) => n.path !== undefined && n.path != '');
            const linkableIndex = linkableNodes.findIndex((n) =>
                path.endsWith(n.path)
            );
            setPrev(linkableNodes[linkableIndex - 1])
            setNext(linkableNodes[linkableIndex + 1]);
        }
    }, [router.asPath])
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
                        ) : <Sidebar info={children.props?.side_bar_doc} />
                    }
                    {/* <Sidebar info={children.props}/> */}
                </div>
                <div id="content-container" className='flex flex-col justify-start items-start px-4 lg:pr-64 w-full h-auto relative overflow-x-hidden overflow-y-auto'>
                    <div ref={ref} id="content" className="flex flex-col justify-start items-center w-full mx-auto lg:max-w-3xl 2xl:max-w-4xl">
                        <Breadcrumb info={children.props} />
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
                            {
                                prev && (
                                    <Link href={`/docs${prev.path}`}>
                                        <a className="py-2 flex flex-row justify-start items-center text-base text-gray-600 hover:text-accent"
                                        >
                                            {"← " + prev.title}
                                        </a>
                                    </Link>
                                )
                            }
                            {
                                !prev && (
                                    <div className="py-2 flex flex-row justify-start items-center text-base text-gray-600 hover:text-accent"></div>
                                )
                            }
                            {
                                next && (
                                    <Link href={`/docs${next.path}`}>
                                        <a className="py-2 flex flex-row justify-end items-center text-base text-gray-600 hover:text-accent">
                                            {next.title + " →"}
                                        </a>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                    <div className='hidden fixed right-0 top-32 w-60 py-2 pt-12 h-full flex-shrink-0 lg:flex flex-col justify-start items-start overflow-y-auto text-sm'>
                        <Toc content={children} scrollOffset={20} />
                    </div>
                </div>
            </main>
        </div>
    );
}
export default DocLayout