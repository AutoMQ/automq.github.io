import boost from '@/images/boost-ui.jpg'
import {Container} from "@/components/index/Container";
import Image from "next/image";

export function Introduction() {
    return (
        <section className='bg-black py-4'>
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
                <div>
                    <Image src={boost} alt={'boost'} />
                </div>
                <div></div>
            </Container>
        </section>
    )
}