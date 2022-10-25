
const PriceLayout = () => {
    return (
        <div  >
            <div className="relative">
                <div className="relative max-w-2xl mx-auto px-4 py-8 text-center sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-indigo-700">
                            可靠的</span>
                        <br />
                        <span className="block xl:inline">
                            为 DevOps 和 DBA 团队打造的数据库变更工具
                        </span>
                    </h2>
                </div>
                <div className="flex justify-center">
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <a href="/zh/about" className="text-gray-500 hover:underline">
                                <p className="text-center text-2xl tracking-wider">

                                    我们是研发里最懂数据库的，数据库里最了解研发的
                                </p>
                            </a>
                            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img src="https://www.bytebase.com/_nuxt/img/google-logo.64742f6.svg" alt="google" className="h-10" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img src="https://www.bytebase.com/_nuxt/img/microsoft-logo.8f308b3.png" alt="microsoft" className="h-10" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img src="https://www.bytebase.com/_nuxt/img/pingcap-logo.cd2c7cb.png" alt="pingcap" className="h-10" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img src="https://www.bytebase.com/_nuxt/img/ant-group-logo.de12e33.png" alt="ant" className="h-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="sr-only">
                    Plans</h2>
                <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
                    <div aria-hidden="true" className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-white ring-2 ring-indigo-700 rounded-lg lg:block">
                    </div>
                    <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
                        <div className="bg-white lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
                            <div >
                                <div className="flex items-center h-7">
                                    <h2 className="text-indigo-600 text-sm font-semibold uppercase tracking-wide">

                                        免费版
                                    </h2>

                                </div>
                                <img src="https://www.bytebase.com/_nuxt/img/plan-free.c8af17b.webp" className="hidden lg:block w-2/3 m-auto" />
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-center h-28 gap-y-1">
                                        <div className="mt-3 flex items-baseline">
                                            <p className="text-5xl font-extrabold tracking-tight">
                                                $0
                                            </p>

                                        </div>
                                        <p className="text-gray-400">

                                            每个实例
                                            / 月
                                        </p>
                                        <p className="text-gray-400">

                                            最多 5 个实例
                                        </p>
                                    </div>
                                    <a href="/zh/docs/get-started/install/deploy-with-docker" className="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm lg:text-base xl:text-xl font-medium">
                                        立即部署</a>

                                </div>
                            </div>
                            <h4 className="sr-only">
                                Features</h4>
                            <ul role="list" className="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0">
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        社区支持
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        Schema 和数据改动审核流
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        SQL 编辑器
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        数据库备份和恢复
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        IM 集成 (Slack, Discord 等)
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white ring-2 ring-indigo-700 shadow-md pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
                            <div >
                                <div className="flex items-center h-7">
                                    <h2 className="text-indigo-600 text-sm font-semibold uppercase tracking-wide">

                                        团队版
                                    </h2>
                                    <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-sm bg-indigo-100 text-indigo-800">
                                        Beta</span>
                                </div>
                                <img src="https://www.bytebase.com/_nuxt/img/plan-team.d555816.webp" className="hidden lg:block w-2/3 m-auto" />
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-center h-28 gap-y-1">
                                        <div className="mt-3 flex items-baseline">
                                            <p className="text-5xl font-extrabold tracking-tight">

                                                $79
                                            </p>

                                        </div>
                                        <p className="text-gray-400">

                                            每个实例
                                            / 月
                                        </p>
                                        <p className="text-gray-400">

                                            5 个起步，按年付费
                                        </p>
                                    </div>
                                    <button className="bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm lg:text-base xl:text-xl font-medium">

                                        免费试用
                                    </button>
                                    <div className="font-bold text-sm my-2 text-center">

                                        无需信用卡即可免费试用
                                    </div>
                                </div>
                            </div>
                            <h4 className="sr-only">
                                Features</h4>
                            <ul role="list" className="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0">
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        邮件支持
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        所有免费版的功能
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        RBAC 权限管理
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        通过 GitLab 登录
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        高阶 SQL 检查和异常检测
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        审核和备份策略
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
                            <div >
                                <div className="flex items-center h-7">
                                    <h2 className="text-indigo-600 text-sm font-semibold uppercase tracking-wide">

                                        企业版
                                    </h2>
                                    <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-sm bg-indigo-100 text-indigo-800">
                                        预览版</span>
                                </div>
                                <img src="https://www.bytebase.com/_nuxt/img/plan-enterprise.4155275.webp" className="hidden lg:block w-2/3 m-auto" />
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-center h-28 gap-y-1">
                                        <div className="mt-3 flex items-baseline">
                                            <p className="text-gray-400 mr-2">


                                            </p>
                                            <p className="text-5xl font-extrabold tracking-tight">

                                                $199
                                            </p>
                                            <p className="text-gray-400 ml-2">

                                                起
                                            </p>
                                        </div>
                                        <p className="text-gray-400">

                                            每个实例
                                            / 月
                                        </p>
                                        <p className="text-gray-400">

                                            自定义实例数，按年付费
                                        </p>
                                    </div>
                                    <button className="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm lg:text-base xl:text-xl font-medium">

                                        联系我们
                                    </button>

                                </div>
                            </div>
                            <h4 className="sr-only">
                                Features</h4>
                            <ul role="list" className="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0">
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        SLA 支持
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        所有团队版的功能
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        多地域/多租户部署
                                    </span>
                                </li>
                                <li className="py-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-indigo-500 w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="text-gray-600 ml-3 text-sm font-medium">

                                        更多功能敬请期待...
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-400">
                    <span htmlFor="cancel">
                        您可以随时升级、降级或<a href="/zh/refund" className="underline">
                            取消订阅</a>
                        。没有任何隐藏费用。</span>
                </div>
            </div>
            <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
                <h2 id="mobile-comparison-heading" className="sr-only">
                    Feature comparison</h2>
                <div className="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
                    <div className="border-t border-gray-200">
                        <div className="border-transparent -mt-px pt-6 border-t-2 sm:w-1/2 m-auto">
                            <h3 className="text-gray-900 text-sm font-bold">

                                免费版
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">

                                个人或小团队，无专职 DBA
                            </p>
                            <a href="/zh/docs/get-started/install/deploy-with-docker" className="ring-2 ring-indigo-600 mt-6 w-full inline-block py-2 px-2 rounded-md shadow-sm text-center text-sm font-medium">
                                立即部署</a>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                数据库管理
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                实例数
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-gray-900 text-sm font-medium">
                                                    不多于 5 个</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                Schema 和数据变更
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-gray-900 text-sm font-medium">
                                                    基础</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                变更历史
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                SQL 编辑器
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                数据灾备
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-gray-900 text-sm font-medium">
                                                    基础</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                归档
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                SQL 检查 / Schema 审核
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-gray-900 text-sm font-medium">
                                                    基础</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                异常检测
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-gray-900 text-sm font-medium">
                                                    基础</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                设定任务执行时间
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                审核和备份策略
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                多地域/多租户部署
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                团队协作
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">
                                                基于 UI 的 SQL 审查
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">
                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">
                                                VCS 工作流 #GitOps
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">
                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                分享查询链接
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">
                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">
                                                IM 集成
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">
                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">
                                                站内信通知
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">
                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                管理与安全
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                活动日志
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                RBAC 权限管理
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                通过 GitLab 登录
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                从 GitLab 同步成员信息
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                自定义品牌信息
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                自定义 Logo
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="border-indigo-600 -mt-px pt-6 border-t-2 sm:w-1/2 m-auto">
                            <h3 className="text-indigo-600 text-sm font-bold">

                                团队版
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">

                                中型团队，有专职 DBA 或 TL 以提高工程速度
                            </p>
                            <button className="bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent mt-6 w-full inline-block py-2 px-2 rounded-md shadow-sm text-center text-sm font-medium">

                                免费试用
                            </button>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                数据库管理
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-2 ring-indigo-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                实例数
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-indigo-600 text-sm font-medium">
                                                    5 ~ 无限制</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                Schema 和数据变更
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-indigo-600 text-sm font-medium">
                                                    高级</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                变更历史
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                SQL 编辑器
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                数据灾备
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-indigo-600 text-sm font-medium">
                                                    高级</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                归档
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                SQL 检查 / Schema 审核
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-indigo-600 text-sm font-medium">
                                                    高级</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                异常检测
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-indigo-600 text-sm font-medium">
                                                    高级</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                设定任务执行时间
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                审核和备份策略
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                多地域/多租户部署
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-gray-400">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-2 ring-indigo-600 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                团队协作
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-2 ring-indigo-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                基于 UI 的 SQL 审查
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                VCS 工作流 #GitOps
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                分享查询链接
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                IM 集成
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                站内信通知
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-2 ring-indigo-600 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                管理与安全
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-2 ring-indigo-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                活动日志
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                RBAC 权限管理
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                通过 GitLab 登录
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                从 GitLab 同步成员信息
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-2 ring-indigo-600 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                自定义品牌信息
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-2 ring-indigo-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                自定义 Logo
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-2 ring-indigo-600 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="border-transparent -mt-px pt-6 border-t-2 sm:w-1/2 m-auto">
                            <h3 className="text-gray-900 text-sm font-bold">

                                企业版
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">

                                大型组织，有专属 DBA 团队来管理数据库
                            </p>
                            <button className="ring-2 ring-indigo-600 mt-6 w-full inline-block py-2 px-2 rounded-md shadow-sm text-center text-sm font-medium">

                                联系我们
                            </button>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                数据库管理
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                实例数
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-gray-900 text-sm font-medium">
                                                    自定义</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                Schema 和数据变更
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-gray-900 text-sm font-medium">
                                                    高级</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                变更历史
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                SQL 编辑器
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                数据灾备
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-gray-900 text-sm font-medium">
                                                    高级</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                归档
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                SQL 检查 / Schema 审核
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-gray-900 text-sm font-medium">
                                                    高级</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                异常检测
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <span className="text-gray-900 text-sm font-medium">
                                                    高级</span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                设定任务执行时间
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                审核和备份策略
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                多地域/多租户部署
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                团队协作
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                基于 UI 的 SQL 审查
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                VCS 工作流 #GitOps
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                分享查询链接
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                IM 集成
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                站内信通知
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                管理与安全
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                活动日志
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                RBAC 权限管理
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                通过 GitLab 登录
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                从 GitLab 同步成员信息
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h4 className="mt-10 text-sm font-bold text-gray-900">

                                自定义品牌信息
                            </h4>
                            <div className="mt-6 relative">
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                                            <dt className="pr-4 text-sm font-medium text-gray-600">

                                                自定义 Logo
                                            </dt>
                                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5 text-indigo-600">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section aria-labelledby="comparison-heading" className="hidden lg:block">
                <h2 id="comparison-heading" className="sr-only">
                    Feature comparison</h2>
                <div className="max-w-7xl mx-auto px-8">
                    <div className="w-full border-t border-gray-200 flex items-stretch">
                        <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
                        </div>
                        <div aria-hidden="true" className="pr-4 -mt-px pl-4 w-1/4">
                            <div className="border-transparent py-6 border-t-2">
                                <div className="flex items-center h-7">
                                    <p className="text-gray-900 text-sm font-bold">

                                        免费版
                                    </p>

                                </div>
                                <p className="mt-2 text-sm text-gray-500 h-10">

                                    个人或小团队，无专职 DBA
                                </p>
                                <a href="/zh/docs/get-started/install/deploy-with-docker" className="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium">
                                    立即部署</a>

                            </div>
                        </div>
                        <div aria-hidden="true" className="pr-4 -mt-px pl-4 w-1/4">
                            <div className="border-indigo-600 py-6 border-t-2">
                                <div className="flex items-center h-7">
                                    <p className="text-indigo-600 text-sm font-bold">

                                        团队版
                                    </p>
                                    <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-sm bg-indigo-100 text-indigo-800">
                                        Beta</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-500 h-10">

                                    中型团队，有专职 DBA 或 TL 以提高工程速度
                                </p>
                                <button className="bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium">

                                    免费试用
                                </button>
                                <div className="font-bold text-sm my-2 text-center">

                                    无需信用卡即可免费试用
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="-mt-px pl-4 w-1/4">
                            <div className="border-transparent py-6 border-t-2">
                                <div className="flex items-center h-7">
                                    <p className="text-gray-900 text-sm font-bold">

                                        企业版
                                    </p>
                                    <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-sm bg-indigo-100 text-indigo-800">
                                        预览版</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-500 h-10">

                                    大型组织，有专属 DBA 团队来管理数据库
                                </p>
                                <button className="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium">

                                    联系我们
                                </button>

                            </div>
                        </div>
                    </div>
                    <div >
                        <h3 className="text-xl font-bold text-gray-900 text-left my-5">

                            数据库管理
                        </h3>
                        <div className="relative">
                            <div aria-hidden="true" className="absolute inset-0 flex items-stretch pointer-events-none">
                                <div className="w-1/4 pr-4">
                                </div>
                                <div className="w-1/4 px-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="w-1/4 px-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="w-1/4 pl-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                            </div>
                            <table className="relative w-full">
                                <caption className="sr-only">

                                    Business feature comparison
                                </caption>
                                <thead >
                                    <tr className="text-left">
                                        <th scope="col">
                                            <span className="sr-only">
                                                database-management</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                免费版</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                团队版</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                企业版</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            实例数
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    不多于 5 个</span>
                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    5 ~ 无限制</span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    自定义
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                                            Schema 和数据变更
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    基础</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        普通变更</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    高级</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        普通变更 + 在线变更 (gh-ost)</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    高级</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        普通变更 + 在线变更 (gh-ost)</span>
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            变更历史
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            SQL 编辑器
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            数据灾备
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    基础</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        数据库备份和恢复</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    高级</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        数据库备份和恢复 + 恢复到指定时间点 (PITR)</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    高级</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        数据库备份和恢复 + 恢复到指定时间点 (PITR)</span>
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            归档
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            SQL 检查 / Schema 审核
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    基础</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        语法检查、数据库连接检查</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    高级</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        基础版功能 + 自定义 SQL 审核规则</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    高级</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        基础版功能 + 自定义 SQL 审核规则</span>
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            异常检测
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    基础</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        数据库连接异常、备份缺失</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    高级</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        基础版功能 + Schema 偏差检测</span>
                                                </span>
                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <span className="text-sm font-medium">
                                                    高级</span>
                                                <span className="tooltip-wrapper ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                        </path>
                                                    </svg>
                                                    <span className="tooltip whitespace-nowrap">
                                                        基础版功能 + Schema 偏差检测</span>
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            设定任务执行时间
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            审核和备份策略
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            多地域/多租户部署
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div >
                        <h3 className="text-xl font-bold text-gray-900 text-left my-5">

                            团队协作
                        </h3>
                        <div className="relative">
                            <div aria-hidden="true" className="absolute inset-0 flex items-stretch pointer-events-none">
                                <div className="w-1/4 pr-4">
                                </div>
                                <div className="w-1/4 px-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="w-1/4 px-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="w-1/4 pl-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                            </div>
                            <table className="relative w-full">
                                <caption className="sr-only">

                                    Business feature comparison
                                </caption>
                                <thead >
                                    <tr className="text-left">
                                        <th scope="col">
                                            <span className="sr-only">
                                                collaboration</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                免费版</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                团队版</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                企业版</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            基于 UI 的 SQL 审查
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            VCS 工作流 #GitOps
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            分享查询链接
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            IM 集成
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            站内信通知
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div >
                        <h3 className="text-xl font-bold text-gray-900 text-left my-5">

                            管理与安全
                        </h3>
                        <div className="relative">
                            <div aria-hidden="true" className="absolute inset-0 flex items-stretch pointer-events-none">
                                <div className="w-1/4 pr-4">
                                </div>
                                <div className="w-1/4 px-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="w-1/4 px-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="w-1/4 pl-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                            </div>
                            <table className="relative w-full">
                                <caption className="sr-only">

                                    Business feature comparison
                                </caption>
                                <thead >
                                    <tr className="text-left">
                                        <th scope="col">
                                            <span className="sr-only">
                                                admin-and-security</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                免费版</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                团队版</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                企业版</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            活动日志
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            RBAC 权限管理
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            通过 GitLab 登录
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            从 GitLab 同步成员信息
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div >
                        <h3 className="text-xl font-bold text-gray-900 text-left my-5">

                            自定义品牌信息
                        </h3>
                        <div className="relative">
                            <div aria-hidden="true" className="absolute inset-0 flex items-stretch pointer-events-none">
                                <div className="w-1/4 pr-4">
                                </div>
                                <div className="w-1/4 px-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="w-1/4 px-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                                <div className="w-1/4 pl-4">
                                    <div className="w-full h-full bg-white rounded-lg">
                                    </div>
                                </div>
                            </div>
                            <table className="relative w-full">
                                <caption className="sr-only">

                                    Business feature comparison
                                </caption>
                                <thead >
                                    <tr className="text-left">
                                        <th scope="col">
                                            <span className="sr-only">
                                                branding</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                免费版</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                团队版</span>
                                        </th>
                                        <th scope="col">
                                            <span className="sr-only">
                                                企业版</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr >
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">

                                            自定义 Logo
                                        </th>
                                        <td className="px-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    No
                                                </span>

                                            </span>
                                        </td>
                                        <td className="px-4 text-indigo-600 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                        <td className="pl-4 text-gray-900 relative w-1/4 py-0 text-center">
                                            <span className="w-full h-full py-3 flex justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mx-auto h-5 w-5">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                                <span className="sr-only">

                                                    Yes
                                                </span>

                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4 pr-4">
                        </div>
                        <div className="px-4 relative w-1/4 py-0 text-center">
                            <a href="/zh/docs/get-started/install/deploy-with-docker" className="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium">
                                立即部署</a>
                        </div>
                        <div className="px-4 relative w-1/4 py-0 text-center">
                            <button className="bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium">

                                免费试用
                            </button>
                        </div>
                        <div className="pl-4 relative w-1/4 py-0 text-center">
                            <button className="ring-2 ring-indigo-600 mt-6 w-full inline-block py-4 px-2 rounded-md shadow-sm text-center text-sm font-medium">

                                联系我们
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-4 py-4 pb-24 text-right text-gray-400">
                <span htmlFor="cancel">
                    您可以随时升级、降级或<a href="/zh/refund" className="underline">
                        取消订阅</a>
                    。没有任何隐藏费用。</span>
            </div>
        </div>

    )
}

export default PriceLayout