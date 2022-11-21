import boost from '@/images/boost-ui.jpg'
import {Container} from "@/components/index/Container";
import Image from "next/image";

export function Introduction() {
    return (
        <section className='bg-black py-4 pb-20'>
            <Container>
                <div className='flex flex-col space-y-2 text-center'>
                    <div></div>
                    <div className='text-slate-400'>Introducing</div>
                    <div className='text-white text-2xl'>
                        <span>AutoMQ Boost</span>
                    </div>
                    <div
                        className='z-10 bg-gradient-to-b from-gray-50 to-blue-300 bg-clip-text text-lg text-transparent md:text-xl'>
                        Write message P99 Latency index P99.99 &lt; 5ms
                        <br/>
                        with our technology
                    </div>
                </div>
                <div
                    className='relative hidden h-[280px] items-end justify-center px-1 will-change-[perspective] [perspective:1000px] sm:flex md:h-[320px] lg:h-[400px]'>
                    <div
                        className='shadow-md relative h-[364px] w-full origin-bottom rounded-lg bg-gradient-to-b from-blue-500/15 to-transparent p-4 md:h-[420px] lg:h-[594px] xl:h-[604px] xl:w-[938px]'
                        style={{transform: 'rotateX(45deg)',boxShadow:'0 -1px 1px rgba(30, 157, 231, 0.2),\n' +
                                '                  0 0 0 1px rgba(255, 255, 255, 0.05),\n' +
                                '                  0 -40px 180px -20px rgba(30, 157, 231, 0.3),\n' +
                                '                  0 40px 80px rgba(0, 0, 0, 0.8)'}}
                    >
                        <div className=''>
                            <div>
                                <Image src={boost} alt={'boost'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </Container>
        </section>
    )
}