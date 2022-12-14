import Link from './Link'
import clsx from "clsx";
import {useCallback, useEffect, useState} from "react";


export default function Toc(props) {

    let currentSection = useTableOfContents(props.tableOfContents)
    function useTableOfContents(tableOfContents) {
        let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

        let getHeadings = useCallback((tableOfContents) => {
            return tableOfContents
                .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
                .map((id) => {
                    let el = document.getElementById(id)
                    if (!el) return

                    let style = window.getComputedStyle(el)
                    let scrollMt = parseFloat(style.scrollMarginTop)

                    let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
                    return {id, top}
                })
        }, [])

        useEffect(() => {
            if (tableOfContents.length === 0) return
            let headings = getHeadings(tableOfContents)

            function onScroll() {
                let top = window.scrollY
                let current = headings[0].id
                for (let heading of headings) {
                    if (top >= heading.top) {
                        current = heading.id
                    } else {
                        break
                    }
                }
                setCurrentSection(current)
            }

            window.addEventListener('scroll', onScroll, {passive: true})
            onScroll()
            return () => {
                window.removeEventListener('scroll', onScroll, {passive: true})
            }
        }, [getHeadings, tableOfContents])

        return currentSection
    }

    function isActive(section) {
        if (section.id === currentSection) {
            return true
        }
        if (!section.children) {
            return false
        }
        return section.children.findIndex(isActive) > -1
    }
    return (
        <div
            className="space-y-4 hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
            <div className='text-sm text-gray-500 cursor-pointer'>??????PDF</div>
            <div className='text-sm text-gray-500 cursor-pointer'>????????????</div>
            <div className='text-sm text-gray-500 cursor-pointer'>????????????</div>
            <nav aria-labelledby="on-this-page-title" className="w-56">
                {props.tableOfContents.length > 0 && (
                    <>
                        <h2
                            id="on-this-page-title"
                            className="font-display text-sm font-medium text-slate-900 dark:text-white"
                        >
                            Table of Content
                        </h2>
                        <ol role="list" className="mt-4 space-y-3 text-sm">
                            {props.tableOfContents.map((section) => (
                                <li key={section.id}>
                                    <h3>
                                        <Link
                                            href={`#${section.id}`}
                                            className={clsx(
                                                isActive(section)
                                                    ? 'text-sky-500'
                                                    : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                                            )}
                                        >
                                            {section.title}
                                        </Link>
                                    </h3>
                                    {section.children.length > 0 && (
                                        <ol
                                            role="list"
                                            className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                                        >
                                            {section.children.map((subSection) => (
                                                <li key={subSection.id}>
                                                    <Link
                                                        href={`#${subSection.id}`}
                                                        className={
                                                            isActive(subSection)
                                                                ? 'text-sky-500'
                                                                : 'hover:text-slate-600 dark:hover:text-slate-300'
                                                        }
                                                    >
                                                        {subSection.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </>
                )}
            </nav>
        </div>
    )
}