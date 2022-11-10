import {Container} from "@/components/index/Container";
import connect from '@/images/logos/connect.svg'
import Image from "next/future/image";
export function Describe() {
    return (
        <div className='relative bg-primary pt-12 pb-16 sm:pt-12 md:pb-0 h-fit bg-black'>
            <Container className='mb-12 pt-40 sm:mb-12 md:py-5 lg:py-4 xl:py-8 2xl:py-20 overflow-hidden bg-black'>
                <div className="relative flex flex-row justify-between place-items-center items-center bg-black">
                    <div className="relative z-1 w-1/2">
                        <div className="mb-1 space-y-2 sm:mb-2">
                            <span className="pipe-trim-left block text-[14px] leading-none text-slate-400">Move fast, break nothing</span>
                            <span className="block text-[24px] font-semibold leading-tight tracking-tight text-white">The database
                            <br className="hidden md:inline lg:hidden"/>for DevOps</span>
                        </div>
                        <p className="mb-2 text-[16px] sm:mb-3 text-slate-400">
                            100% online schema changes deployed
                            automatically from your database branch. Never before has a database been a force multiplier in
                            your software development lifecycle.
                        </p>
                        <span tabIndex="0" role="button"
                              className="text-white inline-flex cursor-pointer no-underline button-cta border box-border cursor-pointer flex-shrink-0 focus-ring font-semibold group-scope inline-flex items-center justify-center leading-none no-underline overflow-hidden py-1.5 relative rounded-full select-none text-[16px] text-center text-primary transition whitespace-nowrap disabled:border-primary disabled:bg-secondary disabled:pointer-events-none disabled:text-secondary hover:text-primary border-transparent hover:!border-transparent"
                        >Read more
                    </span>
                        <div>

                        </div>
                    </div>
                    <div className='w-1/2 h-full md:relative md:bottom-auto flex justify-center'>
                        <div className=''>
                            <Image src={connect} alt={'test'} unoptimized/>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}