import {Container} from "@/components/index/Container";
import Connect from '@/images/logos/connect.svg'
import Link from '@/images/logos/link.svg'
import Tag from '@/images/logos/tag.svg'
import Schema from '@/images/logos/schema.svg'
import Image from "next/image";
import {useEffect} from "react";
import slugify from "slugify";

const clsLeft = 'relative z-1 w-1/2'
const clsRight = 'w-1/2 h-full md:relative md:bottom-auto flex justify-end'


const describeList = [
    {
        title: "The database for DevOps",
        describe: "100% online schema changes deployed automatically from your database branch. Never before has a database been a force multiplier in your software development lifecycle.",
        info: "Move fast,break nothing",
        icon: Connect
    },
    {
        title: "The database for DevOps",
        describe: "100% online schema changes deployed automatically from your database branch. Never before has a database been a force multiplier in your software development lifecycle.",
        info: "Move fast,break nothing",
        icon: Link
    },
    {
        title: "The database for DevOps",
        describe: "100% online schema changes deployed automatically from your database branch. Never before has a database been a force multiplier in your software development lifecycle.",
        info: "Move fast,break nothing",
        icon: Tag
    },
    {
        title: "The database for DevOps",
        describe: "100% online schema changes deployed automatically from your database branch. Never before has a database been a force multiplier in your software development lifecycle.",
        info: "Move fast,break nothing",
        icon: Schema
    }
]

function OneDescribe({info, index}) {
    return (
        <div className="relative flex flex-row justify-between place-items-center items-center bg-black mb-32">
            <div className='opacity-0' id={`${slugify(info.title)}-left-${index}`}>
                <div className="mb-1 space-y-2 sm:mb-2">
                    <span className="pipe-trim-left block text-[14px] leading-none text-slate-400">{info.info}</span>
                    <span
                        className="block text-[24px] font-semibold leading-tight tracking-tight text-white">{info.title}</span>
                </div>
                <p className="mb-2 text-[16px] sm:mb-3 text-slate-400">
                    {info.describe}
                </p>
                <span tabIndex="0" role="button"
                      className="text-white inline-flex cursor-pointer no-underline button-cta border box-border cursor-pointer flex-shrink-0 focus-ring font-semibold group-scope inline-flex items-center justify-center leading-none no-underline overflow-hidden py-1.5 relative rounded-full select-none text-[16px] text-center text-primary transition whitespace-nowrap disabled:border-primary disabled:bg-secondary disabled:pointer-events-none disabled:text-secondary hover:text-primary border-transparent hover:!border-transparent"
                >
                    Read more
                    </span>
                <div>

                </div>
            </div>
            <div className='opacity-0' id={`${slugify(info.title)}-right-${index}`}>
                <div className=''>
                    <Image src={info.icon} alt={'test'} unoptimized/>
                </div>
            </div>
        </div>

    )
}

export function Describe() {
    useEffect(() => {
        const observerLeft = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                entries.map(item => {
                    item.target.className = clsLeft + " animate-fade-in-x-left"
                })
            }
        }, {threshold: 0.1})
        const observerRight = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                entries.map(item => {
                    item.target.className = clsRight + " animate-fade-in-x-right"
                })
            }
        }, {threshold: 0.1})
        describeList.map((item, index) => {
            observerLeft.observe(document.getElementById(`${slugify(item.title)}-left-${index}`))
            observerRight.observe(document.getElementById(`${slugify(item.title)}-right-${index}`))
        })
    }, [])
    return (
        <div className='relative bg-primary pt-12 pb-16 sm:pt-12 bg-black'>
            <Container className='pt-40 md:py-5 lg:py-4 xl:py-8 2xl:py-20 overflow-hidden bg-black'>
                {
                    describeList.map((item, index) => {
                        return <OneDescribe info={item} key={`${slugify(item.title)}-${index}`} index={index}/>
                    })
                }
            </Container>

        </div>
    )
}