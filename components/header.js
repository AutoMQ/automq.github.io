import Link from "next/link"
import { useState } from "react"

const GlobalHeader = () => {
    const [menu_visible, setVisible] = useState(false)
    const top_submenu = ['For DBA', 'For Tech Lead', 'For Developer']
    const top_index = {
        '1': 'dba',
        '2': 'lead',
        '3': 'developer'
    }
    const top_menu = ['博客', '文档', '价格']
    const top_link = ['/blog', '/docs', '/pricing']
    return (
        <div className="w-full bg-white z-20 shadow">
            <div className="w-full relative bg-indigo-500 mb-2">
                <div className="max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8">
                    <div className="text-center sm:px-16">
                        <p className="font-medium text-white">
                            <span className="inline">
                                基于 Github 的数据库 CI/CD 最佳实践
                            </span>
                            <span className="block sm:ml-2 sm:inline-block">
                                <a href="www.baidu.com" className="text-white font-bold underline">
                                    现在查看
                                    <span aria-hidden={true}>→</span>
                                </a>
                            </span>
                        </p>
                    </div>

                </div>
            </div>
            <header className="relative pt-5 pb-3 w-full">
                <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
                    <nav aria-label="Global" className="relative w-full flex items-center justify-between sm:h-10 lg:justify-center lg:grid lg:grid-cols-3">
                        <div className="hidden sm:flex flex-shrink-0 flex-row justify-start items-center sm:mr-8 lg:mr-0">
                            <Link href={'/'} aria-current="page" >
                                <a className="flex-shrink-0 underline">
                                    <span className="sr-only cursor-pointer">Bytebase</span>
                                    <img src="https://www.bytebase.com/_nuxt/img/logo-full.79b60e4.svg" className="h-6 sm:h-8 w-auto" />
                                </a>
                            </Link>
                        </div>
                        <div className="flex flex-row items-center justify-center text-sm sm:text-xl font-semibold space-x-2 sm:space-x-6">
                            <div className="flyout-menu-container bg-white w-auto h-auto p-3 px-5 rounded flex-col justify-start items-start">
                                <div onMouseEnter={() => {
                                    setVisible(true)
                                }} onMouseLeave={() => {
                                    setVisible(false)
                                }} className="relative flyout-menu-trigger hidden text-gray-700 hover:text-gray-500 sm:flex">
                                    <div className="flex flex-row justify-start items-center flex-nowrap cursor-pointer">
                                        <span className="whitespace-nowrap">
                                            解决方案
                                        </span>
                                    </div>
                                    {menu_visible && (
                                        <div className="flyout-menu-wrapper absolute top-4 -left-4 pt-4 w-auto h-auto">
                                            <div className="flyout-menu-container flex bg-white w-auto h-auto p-3 px-5 shdow-lg rounded flex-col justify-start items-start">
                                                {
                                                    top_submenu.map((item, index) => {
                                                        return (
                                                            <Link href={`/solve/${top_index[index + 1]}`} key={item} >
                                                                <a className="cursor-pointer text-vase font-normal whitespace-nowrap leading-8 text-gray-700 hover:text-gray-500 hover:underline">{item}</a>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {
                                top_menu.map((item, index) => {
                                    return (
                                        <Link href={top_link[index]} key={index} >
                                            <a className="text-gray-700 cursor-pointer hover:text-gray-500 hover:underline whitespace-nowrap">{item}</a>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className="z-10 flex flex-row items-center justify-end">
                            <div className="hidden relative sm:flex flex-row" style={{ marginTop: '6px' }}>
                                <div className="-mt-5 h-10 w-16" style={{ backgroundImage: "url(https://www.bytebase.com/_nuxt/img/starus.f847091.webp)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}></div>
                                <a className="cursor-pointer">Star</a>
                            </div>
                            <div className="transition-all flex flex-row">
                                <Link href={'/console'} >
                                    <a className="ml-2 flex items-center justify-center whitespace-nowrap px-3 h-7 border border-transparent text-sm font-medium rounded border-gray-200 text-gray-700 bg-gray-100 hover:bg-gray-300 cursor-pointer">体验 Demo</a>
                                </Link>
                                <a className="ml-2 flex items-center justify-center whitespace-nowrap px-3 h-7 text-sm font-medium rounded text-white bg-green-500 hover:bg-green-600 cursor-pointer">立即部署</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default GlobalHeader