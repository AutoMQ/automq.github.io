import { sortedIndex, throttle } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react"
const ACTIVE_TITLE_OFFSET = 4;
const TITLE_HEIGHT = 28;
const Toc = (props) => {
    const router = useRouter()
    const [activeHashId, setActiveHashId] = useState("");
    const container = useRef()
    const [toc, setToc] = useState([])
    useEffect(() => {
        const contentContainer = document.querySelector("#content-container");
        const titleElementList = Array.from(
            document.querySelectorAll("#content h2, #content h3")
        );
        let list = []
        titleElementList.forEach((item, index) => {
            item.id = index
            // console.log(item);
            list.push({
                text: item.outerText,
                depth: item.localName.substring(1),
                id: index
            })
        })
        setToc(list)
        setActiveHashId("")
        const onScroll = () => {
            const scrollTop = contentContainer?.scrollTop || 0;
            const titleOffsetTops = titleElementList
                .map((el) => el.offsetTop)
                .sort((a, b) => a - b);
            const activeIndex = sortedIndex(titleOffsetTops, scrollTop + props.scrollOffset) - 1;
            if (activeIndex >= 0) {
                setActiveHashId(titleElementList[activeIndex].id)
                container.current?.scrollTo({
                    top: (activeIndex - ACTIVE_TITLE_OFFSET) * TITLE_HEIGHT,
                    behavior: "smooth",
                });
            }else{
                setActiveHashId(1)
            }
        };
        onScroll()
        contentContainer?.removeEventListener('scroll',throttle(onScroll,500));
        contentContainer?.addEventListener("scroll", throttle(onScroll, 500));
    }, [router.asPath])
    return (
        toc.length > 0 && (
            <aside className="hidden xl:flex flex-col justify-start items-start sticky w-52 top-0 pb-36 right-6 2xl:right-10 pr-4 h-full max-h-screen flex-shrink-0 overflow-x-hidden overflow-y-auto text-sm md:flex">
                <span className="text-black pb-2 pl-4 border-l border-gray-200 truncate">
                    Table of Contents
                </span>
                <div ref={container} className="flex flex-col w-52 h-full overflow-y-auto hide-scrollbar">
                    {
                        toc?.map((item, index) => {
                            return (
                                <a
                                    onClick={() => {
                                        setActiveHashId(item.id)
                                    }}
                                    key={index}
                                    className={` pl-${item.depth == 2 ? "4" : item.depth == 3 ? "6" : "9"} runcate leading-7 text-gray-500 flex-shrink-0 w-full whitespace-nowrap border-l border-gray-200 ${activeHashId === String(item.id) ? 'text-accent border-accent' : ''} hover:text-accent`}
                                    href={`#${item.id}`}
                                >
                                    {item.text}
                                </a>
                            )
                        })
                    }
                </div>
            </aside >
        )
    )
}

export default Toc