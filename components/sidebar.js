import { last } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { getPath } from "../lib/util";

const Sidebar = ({ info }) => {
    const router = useRouter()
    const [expand_list, setExpandList] = useState([])
    const [current_select,setCurrentSelect] = useState(null)
    const [tree_list, setTreeList] = useState({
        path: "",
        title: "",
        type: "text",
        children: [],
        displayChildren: true,
    })
    useEffect(() => {
        if (!info || !Array.isArray(info)) {
            return
        }
        const path = getPath(router.asPath)
        console.log(path);
        const indexCatagory = info.findIndex(item => path.endsWith(item.path) && item.path != "");
        console.log(indexCatagory);
        setCurrentSelect(info[indexCatagory]['title'])
        const tree_info = {
            path: "",
            title: "",
            type: "text",
            children: [],
            displayChildren: true,
        }
        for (const document of info) {
            if (document.level === 1) {
                tree_info.children.push({
                    title: document.title,
                    path: document.path,
                    type: document.type,
                    children: [],
                    displayChildren: document.displayChildren,
                });
            } else if (document.level === 2) {
                const parentNode = last(tree_info.children);
                if (parentNode) {
                    parentNode.children.push({
                        title: document.title,
                        path: document.path,
                        type: document.type,
                        children: [],
                        displayChildren: false,
                    });
                }
            } else if (document.level === 3) {
                const parentNode = last(last(tree_info.children)?.children);
                if (parentNode) {
                    parentNode.children.push({
                        title: document.title,
                        path: document.path,
                        type: document.type,
                        children: [],
                        displayChildren: false,
                    });
                }
            }
        }
        setTreeList(tree_info)
    }, [router.asPath])
    const handleClick = (title) => {
        let iExpand = [...expand_list]
        let index = iExpand.indexOf(title)
        if (index > -1) {
            iExpand.splice(index, 1)
        } else {
            iExpand.push(title)
        }
        setExpandList(iExpand)
    }
    const checkDis = (title) => {
        return expand_list.indexOf(title) > -1
    }
    return (
        <div className="relative pb-6 w-full h-full flex flex-col flex-shrink-0 bg-gray-50 border-r border-gray-200 transition-all overflow-y-auto">
            {
                tree_list.children.map((item, index) => {
                    return (
                        <div key={index} className="w-full flex flex-col justify-start items-start">
                            {
                                item.type == "thematicBreak" && (
                                    <hr className="w-full my-1 mt-4" />
                                )
                            }
                            {
                                item.type != "thematicBreak" && (
                                    <div onClick={() => {
                                        handleClick(item.title)
                                    }} className="pl-3 mt-3 w-full flex flex-row justify-between cursor-pointer items-start">
                                        {
                                            item.type == 'text' && (
                                                <div className="pl-3 py-2 w-full flex flex-row justify-between items-start text-gray-600 font-bold text-sm border border-transparent border-r-0 whitespace-pre-wrap break-all hover:text-gray-700">
                                                    <span className="pr-1 leading-6">{item.title}</span>
                                                    {
                                                        item.children.length != 0 && (
                                                            <span className="flex-shrink-0 h-6 mr-5 flex flex-row justify-center items-center cursor-pointer select-none">
                                                                <img
                                                                    className={`relative w-4 h-auto transition-all opacity-60 ${checkDis(item.title) ? 'rotate-90-arrow' : ''}`}
                                                                    src="/svg/chevron-right.svg"
                                                                    alt="toggle"
                                                                />
                                                            </span>
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                        {
                                            item.type == 'page-link' && (
                                                <Link href={`/docs${item.path}`}>
                                                    <a className={`pl-3 py-2 w-full flex flex-row justify-between items-start text-gray-600 font-bold text-sm border border-transparent border-r-0 whitespace-pre-wrap break-all  ${current_select == item.title ? "select-link" : "hover:text-gray-700"}`}>
                                                        <span className="pr-1 leading-6">{item.title}</span>
                                                        {
                                                            item.children.length != 0 && (
                                                                <span
                                                                    className="flex-shrink-0 h-6 mr-5 flex flex-row justify-center items-center cursor-pointer select-none"
                                                                >
                                                                    <img
                                                                        className={`relative w-4 h-auto transition-all opacity-60 ${item.displayChildren ? 'rotate-90-arrow' : ''}`}
                                                                        src="/svg/chevron-right.svg"
                                                                        alt="toggle"
                                                                    />
                                                                </span>
                                                            )
                                                        }</a>
                                                </Link>
                                            )
                                        }
                                    </div>
                                )
                            }
                            {
                                checkDis(item.title) && item.children.map((subitem, index) => {
                                    return (
                                        <div onClick={() => {
                                            handleClick(subitem.title)
                                        }} className="w-full flex flex-col justify-start items-start" key={subitem.title}>
                                            <div className="pl-6 w-full">
                                                <Link
                                                    href={`/docs${subitem.path}`}>
                                                    <a className={`pl-3 pr-1 py-2 flex flex-row justify-between items-center flex-shrink-0 text-gray-500 w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap  ${current_select == subitem.title ? 'select-link' : 'hover:text-gray-700'}`}>
                                                        <span>
                                                            {subitem.title}
                                                        </span>
                                                        {
                                                            subitem.children.length != 0 && (
                                                                <span
                                                                    className="flex-shrink-0 mr-4"
                                                                >
                                                                    <img
                                                                        className={`relative w-4 h-auto transition-all opacity-60 ${checkDis(subitem.title) ? 'rotate-90-arrow' : ''}`}
                                                                        src="/svg/chevron-right.svg"
                                                                        alt="toggle"
                                                                    />
                                                                </span>
                                                            )
                                                        }
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="pl-9 w-full">
                                                {
                                                    checkDis(subitem.title) && subitem.children.map((leafnode, index) => {
                                                        return (
                                                            <Link key={leafnode.title} href={`/docs${leafnode.path}`}>
                                                                <a onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    handleClick(leafnode.title)
                                                                }} className={`pl-3 pr-1 py-2 block flex-shrink-0 text-gray-500 w-full text-sm border border-transparent border-r-0 whitespace-pre-wrap  ${current_select == leafnode.title ? 'select-link' : 'hover:text-gray-700'}`}>
                                                                    <span>{leafnode.title}</span>
                                                                </a>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Sidebar