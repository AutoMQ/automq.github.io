import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import {useRouter} from "next/router";
import Link from "@/components/Link";


function getParentId(list, property,value) {
    for (let i in list) {
        if (list[i][property] === value) {
            return [list[i]]
        }
        if (list[i].links) {
            let node = getParentId(list[i].links, property,value);
            if (node !== undefined) {
                return node.concat(list[i])
            }
        }
    }
}

export default function Breadcrumbs({nav}) {
    const router = useRouter();
    const pages = getParentId(nav,'href',router.pathname) ?? []
    console.log(pages)
    return (
        <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <Link href="/" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </div>
                </li>
                {pages.reverse().map((page,index) => (
                    <li key={page.title}>
                        <div className="flex items-center">
                            <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <Link
                                href={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={index === pages.length - 1 ? 'page' : undefined}
                            >
                                {page.title}
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
