import {ChevronRightIcon} from '@heroicons/react/20/solid'
import {useTranslation} from "next-export-i18n";


export function Hero() {
    const {t} = useTranslation()
    return (
        <div className="bg-black grid grid-rows-2 lg:grid-rows-1">
            <div
                className="lg:row-start-1 justify-center col-start-[1] grid grid-cols-4 gap-[16px] lg:grid-cols-12 lg:gap-[32px] z-10 mx-auto w-full max-w-7xl pb-16 text-center lg:py-40 lg:text-left">
                <div className="col-span-4 lg:col-span-7 px-4 sm:px-8 xl:pr-16">
                    <h1 className="text-4xl  tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span className="block">{t('hero.title')}</span>
                    </h1>
                    <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                        sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 md:px-10"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent text-white px-8 py-2 text-base font-medium md:px-10"
                            >
                                Live demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-start-1 col-start-[-1] max-w-[80%] ml-[20%] grid justify-end items-end">
                <img
                    className=""
                    src="/static/index_pic.svg"
                    alt=""
                />
            </div>
        </div>
    )
}
