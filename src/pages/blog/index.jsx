import {getMdInfoList} from "@/common/util";
import clsx from "clsx";

import {postTagStyle} from "@/common/util";
import Link from '@/components/Link'
import {BlogList} from "@/components/blog/List";

export default function Blog(props) {
    return (
        <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 sm:h-2/3"/>
            </div>
            <BlogList list={props.list}/>
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
