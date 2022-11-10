import Image from 'next/future/image'
import {useRouter} from 'next/router'
import clsx from 'clsx'
import {useState} from "react";
import arrow from '@/images/chevron-right.svg'
import Link from "@/components/Link";
import {sortBy} from "lodash";


function getNavigation(navigation, pathname, list = [], handleClick, level) {
    return sortBy(navigation, (o) => o.rank).map((item) => {
        if (item.hasOwnProperty("links")) {
            return (
                <ul key={item.title}
                    role="list"
                    className={`mt-2 space-y-2 lg:mt-4 lg:space-y-4 lg:border-slate-200 list-none pl-2 dark:border-slate-800`}>
                    <div
                        onClick={() => handleClick(item)}
                        className={clsx(`flex flex-row justify-between cursor-pointer text-slate-900`,
                            item.hasOwnProperty('href') && item.href === pathname ?
                                "font-semibold text-sky-500"
                                : "hover:text-blue-400"
                        )}>
                        <Link
                            href={item.href}
                            className="truncate w-2/3 dark:text-white"
                        >
                            {item.title}
                        </Link>
                        <span
                            onClick={(e) => {
                                handleClick(item)
                                e.stopPropagation()
                            }}
                            className="flex-shrink-0 h-6 mr-5 flex flex-row justify-center items-center cursor-pointer select-none">
                            <Image
                                className={clsx('relative w-4 h-auto transition-all opacity-60 hover:opacity-40 hover:rounded',
                                    list.includes(item.title) ? 'rotate-90' : ''
                                )}
                                src={arrow}
                                alt="toggle"
                            />
                        </span>
                    </div>
                    {list.includes(item.title) && getNavigation(item.links, pathname, list, handleClick, level + 4)}
                </ul>
            )
        } else {
            return (
                <li key={item.href} className={`relative pl-2`}>
                    <Link
                        onClick={() => handleClick(item)}
                        href={item.href}
                        className={clsx(
                            `truncate w-2/3 block before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full`,
                            item.href === pathname
                                ? 'font-semibold text-sky-500'
                                : 'before:hidden before:bg-slate-300 hover:text-blue-400 dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                        )}
                    >
                        {item.title}
                    </Link>
                </li>
            )
        }
    })
}

export function Navigation({navigation, className}) {
    const [expand, setExpand] = useState([]);
    let router = useRouter()
    const handleClick = (section) => {
        let arr = [...expand]
        let id = expand.indexOf(section.title)
        if (id > -1) {
            arr.splice(id, 1)
        } else {
            arr.push(section.title)
        }
        setExpand(arr)
    }
    return (
        <nav className={clsx('text-base lg:text-sm', className)}>
            <ul role="list" className="space-y-4  list-none">
                {getNavigation(navigation, router.pathname, expand, handleClick, 0)}
            </ul>
        </nav>
    )
}
