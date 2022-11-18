import lArrow from '@/images/svg/leftArrow.svg'
import rArrow from '@/images/svg/rightArrow.svg'
import p from '@/images/picture.jpeg'
import {useState} from "react";
import clsx from "clsx";
import Image from "next/image";


const list = [
    {
        first: '1111',
        second: "2222",
        third: "3333",
        url: './static/picture.jpeg'
    },
    {
        first: '1111',
        second: "2222",
        third: "3333",
        url: './static/picture.jpeg'
    },
    {
        first: '1111',
        second: "2222",
        third: "3333",
        url: './static/picture.jpeg'
    }
]

export function IntroList() {
    const [current, setCurrent] = useState(0)
    return (
        <div className='w-full bg-white'>
            <div className='px-12 max-w-[1280px] grid grid-cols-12 gap-4 mx-auto mt-12'>
                <div className='hidden md:block col-span-4 pt-6 sticky top-1.5 h-fit'>
                    <div className='text-pink-500 mb-6'>
                        +
                    </div>
                    <div className='font-light text-sm'>
                        xxxxxx
                    </div>
                </div>
                <div className='col-span-full  md:col-start-6 flex flex-col gap-4'>
                    <div className='flex flex-row gap-4 mb-6'>
                        {
                            list.map((item, index) => (
                                <div key={index}
                                     className={clsx('h-[2px] bg-opacity-40 duration-300', index === current ? "w-[196px]  bg-orange-400" : " bg-gray-400 w-[48px]")}/>
                            ))
                        }
                    </div>
                    <div className='flex flex-row gap-4'>
                        {
                            list.map((item, index) => {
                                return (
                                    <div key={index}
                                         className={clsx('shadow shadow-white cursor-pointer h-full pb-6 aspect-[1/1.5] min-w-[296px] space-y-4 text-white flex flex-col justify-end px-12 rounded rounded-[24px] duration-200'
                                         )}
                                         style={{
                                             background: `url(${item.url})`,
                                             backgroundSize: 'cover',
                                             backgroundRepeat: 'no-repeat',
                                             transform: `translateX(-${(current) * 100}%)`
                                         }}>
                                        <div className='text-3xl'>first line</div>
                                        <div className='text-xl font-light'>second line</div>
                                        <div className='pb-4'>third line</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-row space-x-4 pt-8 pl-4'>
                        <div className='cursor-pointer text-3xl' onClick={() => {
                            const length = list.length
                            if (current === 0) setCurrent(length - 1)
                            else setCurrent(current - 1)
                        }}>
                            <Image src={lArrow} alt={'left'} />
                        </div>
                        <div className='cursor-pointer' onClick={() => {
                            const length = list.length
                            if (current === length - 1) setCurrent(0)
                            else setCurrent(current + 1)
                        }}>
                            <Image src={rArrow} alt={'right'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}