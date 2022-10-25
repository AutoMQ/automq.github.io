import Link from "next/link"
import { useState } from "react"

const GlobalFooter = () => {
    const [language_vis, setLanguagtVis] = useState(false)
    const [wechat_vis, setWechatVis] = useState(false)
    const footer_obj = [
        {
            title: '数据库',
            item: [
                'MySQL',
                'PostgreSQL',
                'ClickHouse',
                'TiDB',
                'Snowflake'
            ]
        },
        {
            title: '应用集成',
            item: [
                'GitLab',
                'GitHub',
                'Slack',
                'Discord',
                'Teams',
                'DingTalk',
                'Lark',
                'WeCom'
            ]
        },
        {
            title: '资源',
            item: [
                'GitHub',
                '文档',
                '博客',
                '更新日志',
                'SQL 审核规则',
                '数据库词汇表',
                '错误代码',
                'DB Cost',
                'Star History'
            ]
        },
        {
            title: '公司',
            item: [
                '关于',
                '品牌',
                '价格',
                '在招职位',
                '技术栈',
                '联系我们'
            ]
        }
    ]
    const getItem = (arr) => {
        return arr.map((item, index) => {
            return (
                <li key={index}>
                    <a className="text-base text-gray-500 hover:text-gray-900">{item}</a>
                </li>
            )
        })
    }
    return (
        <footer aria-labelledby="footer-heading" className="w-full relative bg-white px-4 pb-8">
            <div className="max-w-7xl w-full mx-auto mt-16">
                <div className="bg-indigo-700 rounded-3xl sm:justify-center">
                    <div className="max-w-7xl mx-auto py-8 sm:py-12 px-8 sm:px-12">
                        <h2 className="space-y-1 text-3xl font-semibold tracking-tight text-white sm:text-6xl">
                            <span className="block">
                                审核，变更，留档，回滚
                            </span>
                            <div className="block">
                                源自 Google 的数据库 DevOps 最佳实践。
                            </div>
                        </h2>
                        <div className="mt-8 flex">
                            <a className="cursor-pointer flex items-center justify-center px-8 py-2 border border-transparent text-xl font-medium rounded-md textgray-900 bg-white hover:opacity-80 md:py-4 md:text-2xl md:px-8">
                                5 秒部署 Bytebase
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="ml-2 w-8 h-8">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="sr-only" />
            <div className="max-w-7xl w-full mx-auto pt-12 pb-8 lg:pt-16 lg:px-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4">
                    {
                        footer_obj.map((item, index) => {
                            return (
                                <div key={index} className={`${index !== 0 && "mt-12 lg:mt-0"}`}>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{item.title}</h3>
                                    <ul className="mt-4 space-y-4">
                                        {
                                            getItem(item.item)
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="border-t border-gray-200 max-w-7xl mx-auto pt-4 md:flex md:items-center md:justify-between">
                <div className="flex justify-center space-x-3 sm:space-x-6 md:order-2">
                    <div className="relative flex flex-row justify-start items-center">
                        <div onMouseEnter={() => setLanguagtVis(true)} onMouseLeave={() => setLanguagtVis(false)} className="flex flex-row justify-start items-center hover:opacity-80 cursor-pointer">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTYgdy02IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTMuMDU1IDExSDVhMiAyIDAgMDEyIDJ2MWEyIDIgMCAwMDIgMiAyIDIgMCAwMTIgMnYyLjk0NU04IDMuOTM1VjUuNUEyLjUgMi41IDAgMDAxMC41IDhoLjVhMiAyIDAgMDEyIDIgMiAyIDAgMTA0IDAgMiAyIDAgMDEyLTJoMS4wNjRNMTUgMjAuNDg4VjE4YTIgMiAwIDAxMi0yaDMuMDY0TTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiIgLz4KPC9zdmc+" alt="" className="w-5 h-auto mr-2" />
                            <span >简体中文</span>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTYgdy02IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkgNWw3IDctNyA3IiAvPgo8L3N2Zz4=" alt="" className="w-4 h-auto ml-1" />
                        </div>
                        {language_vis && (
                            <div className="absolute -top-full -mt-16 bg-white shadow flex flex-col p-2 px-4 w-28">
                                <Link href="/" className="w-full leading-8 hover:opacity-60"><a>English</a></Link>
                                <Link href="/zh" aria-current="page" className="w-full leading-8 hover:opacity-60 router-exact-active-link router-active-link underline"><a>简体中文</a></Link>
                            </div>
                        )}
                    </div>
                    <div onMouseEnter={() => setWechatVis(true)} onMouseLeave={() => setWechatVis(false)} className="wechat-qrcode-wrapper relative">
                        <span className="sr-only">Wechat</span>
                        <img src="https://www.bytebase.com/_nuxt/img/wechat.44fdc66.webp" alt="" className="w-6 h-auto opacity-90 hover:opacity-70" />
                        {
                            wechat_vis && (
                                <div className="wechat-qrcode-container absolute bottom-4 -left-2 pb-4">
                                    <div className="w-44 h-auto border shadow rounded bg-white flex flex-col justify-start items-center">
                                        <img src="https://www.bytebase.com/_nuxt/img/wechat-bb-qrcode.fb64adc.webp" alt="" className="w-full h-auto" />
                                        <span className="text-xs mb-2">关注 Bytebase 微信公众号</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <a href="https://twitter.com/Bytebase" target="__blank" className="text-gray-800 hover:text-gray-600">
                        <span className="sr-only">Twitter</span> <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                            </path>
                        </svg>
                    </a>
                    <a href="https://discord.gg/huyw7gRsyA" target="__blank" className="text-gray-800 hover:text-gray-600">
                        <span className="sr-only">Discord</span>
                        <svg viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                            <g clipPath="url(#clip0)">
                                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor">
                                </path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="71" height="55" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="https://github.com/bytebase/bytebase" target="__blank" className="text-gray-800 hover:text-gray-600">
                        <span className="sr-only">GitHub</span>
                        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd">
                            </path>
                        </svg>
                    </a>
                    <p className="flex items-center text-gray-500 hover:text-gray-900">
                        <a href="/zh/terms" className="">条款</a>
                    </p>
                    <p className="flex items-center text-gray-500 hover:text-gray-900">
                        <a href="/zh/privacy" className="">政策</a>
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 md:order-1 flex flex-row items-center space-x-4">
                    <img src="https://www.bytebase.com/_nuxt/img/logo-full.79b60e4.svg" alt="Bytebase" className="h-8" />
                    <p className="text-center text-base text-gray-400 mt-1">
                        © 2022 Bytebase. 版权所有。
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default GlobalFooter