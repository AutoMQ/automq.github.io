import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { getCatacory, getPath } from "../lib/util";

const Breadcrumb = (props) => {
    const router = useRouter()
    const [breadcrumb, setBreadcrumb] = useState([])
    useEffect(() => {
        const catagory = getCatacory(router.asPath, props.info)
        const iCrumb = [];
        const path = getPath(router.asPath)
        if (Array.isArray(catagory)) {
            const indexCatagory = catagory.findIndex(item => path.endsWith(item.path) && item.path != "");
            let currentNodeLevel = catagory[indexCatagory].level;
            for (let i = indexCatagory - 1; i >= 0; i--) {
                const node = catagory[i];
                if (node.level < currentNodeLevel) {
                    currentNodeLevel = node.level;
                    iCrumb.unshift(node);
                }
                if (currentNodeLevel === 1) {
                    break;
                }
            }
            iCrumb.push({ ...catagory[indexCatagory] })
        }
        setBreadcrumb(iCrumb)
    }, [router.asPath])
    return (
        breadcrumb.length > 1 && (
            <div
                className="w-full flex flex-row justify-start items-center mt-4 flex-wrap"
            >
                {
                    breadcrumb.map((item, index) => {
                        return (
                            <div key={item.path} className="flex flex-row justify-start items-center flex-wrap text-base leading-7">
                                {
                                    item.path && (
                                        <Link href={`/docs${item.path}`}>
                                            <a className="text-gray-500 no-underline hover:text-accent" >{item.title}</a>
                                        </Link>
                                    )
                                }
                                {
                                    !item.path && (
                                        <span className="text-gray-500">
                                            {item.title}
                                        </span>
                                    )
                                }
                                {
                                    index !== breadcrumb.length - 1 && (
                                        <span className="font-mono mx-2 text-gray-300">/</span>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div >
        )
    )
}

export default Breadcrumb