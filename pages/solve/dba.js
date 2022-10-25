const dba = () => {
    return (
        <main className="max-w-7xl mx-auto px-4">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h1 className="mt-2 text-3xl sm:text-5xl lg:text-6xl leading-8 font-extrabold text-gray-900">
                        10 倍 DBA 运营效率
                    </h1>
                    <h2 className="mt-4 tracking-tight max-w-5xl text-left text-2xl sm:text-3xl text-gray-500 lg:mx-auto">
                        Bytebase 提供了一个协作的 Web 控制台和连贯的工作流程，使 DBA 能够比传统工具更有效地管理数据库任务和处理开发人员工单。
                    </h2>
                </div>
            </div>
            <div className="flex mt-6 justify-center">
                <div className="flex flex-row space-x-3 sm:space-x-6">
                    <img src="https://www.bytebase.com/_nuxt/img/db-mysql.17ec013.png" alt="mysql" className="h-10 sm:xl-12 xl:h-16" />
                    <img src="https://www.bytebase.com/_nuxt/img/db-postgres.b8f9f75.png" alt="postgresql" className="h-10 sm:xl-12 xl:h-16" />
                    <img src="https://www.bytebase.com/_nuxt/img/db-clickhouse.1f51e44.png" alt="clickhouse" className="h-10 sm:xl-12 xl:h-16" />
                    <img src="https://www.bytebase.com/_nuxt/img/db-tidb.689b8ed.png" alt="tidb" className="h-10 sm:xl-12 xl:h-16" />
                    <img src="https://www.bytebase.com/_nuxt/img/db-snowflake.f6f2a5c.png" alt="snowflake" className="h-10 sm:xl-12 xl:h-16" />
                    <img src="https://www.bytebase.com/_nuxt/img/gitlab-logo.0b61801.svg" alt="gitlab" className="h-10 sm:xl-12 xl:h-16" />
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOEMwIDExLjU0IDIuMjkgMTQuNTMgNS40NyAxNS41OUM1Ljg3IDE1LjY2IDYuMDIgMTUuNDIgNi4wMiAxNS4yMUM2LjAyIDE1LjAyIDYuMDEgMTQuMzkgNi4wMSAxMy43MkM0IDE0LjA5IDMuNDggMTMuMjMgMy4zMiAxMi43OEMzLjIzIDEyLjU1IDIuODQgMTEuODQgMi41IDExLjY1QzIuMjIgMTEuNSAxLjgyIDExLjEzIDIuNDkgMTEuMTJDMy4xMiAxMS4xMSAzLjU3IDExLjcgMy43MiAxMS45NEM0LjQ0IDEzLjE1IDUuNTkgMTIuODEgNi4wNSAxMi42QzYuMTIgMTIuMDggNi4zMyAxMS43MyA2LjU2IDExLjUzQzQuNzggMTEuMzMgMi45MiAxMC42NCAyLjkyIDcuNThDMi45MiA2LjcxIDMuMjMgNS45OSAzLjc0IDUuNDNDMy42NiA1LjIzIDMuMzggNC40MSAzLjgyIDMuMzFDMy44MiAzLjMxIDQuNDkgMy4xIDYuMDIgNC4xM0M2LjY2IDMuOTUgNy4zNCAzLjg2IDguMDIgMy44NkM4LjcgMy44NiA5LjM4IDMuOTUgMTAuMDIgNC4xM0MxMS41NSAzLjA5IDEyLjIyIDMuMzEgMTIuMjIgMy4zMUMxMi42NiA0LjQxIDEyLjM4IDUuMjMgMTIuMyA1LjQzQzEyLjgxIDUuOTkgMTMuMTIgNi43IDEzLjEyIDcuNThDMTMuMTIgMTAuNjUgMTEuMjUgMTEuMzMgOS40NyAxMS41M0M5Ljc2IDExLjc4IDEwLjAxIDEyLjI2IDEwLjAxIDEzLjAxQzEwLjAxIDE0LjA4IDEwIDE0Ljk0IDEwIDE1LjIxQzEwIDE1LjQyIDEwLjE1IDE1LjY3IDEwLjU1IDE1LjU5QzEzLjcxIDE0LjUzIDE2IDExLjUzIDE2IDhDMTYgMy41OCAxMi40MiAwIDggMFoiIHRyYW5zZm9ybT0ic2NhbGUoNjQpIiBmaWxsPSIjMUIxRjIzIi8+Cjwvc3ZnPgo=" alt="github" className="h-10 sm:xl-12 xl:h-16" />
                </div>
            </div>
            <div className="my-5 sm:flex md:my-8 mt-16 sm:justify-center">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center whitespace-nowrap">
                    <a href="/zh/docs/get-started/install/deploy-with-docker" className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-sm font-medium rounded-md border-indigo-700 text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-2xl md:px-8">
                        5 秒部署 Bytebase
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="ml-2 w-8 h-8">
                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                    </a>
                    <a href="/zh/demo" className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-sm font-medium rounded-md border-gray-200 text-gray-700 bg-gray-100 hover:bg-gray-300 md:py-4 md:text-2xl md:px-8">体验 Demo
                    </a>
                </div>
            </div>
            <div className="mt-8 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <img src="https://www.bytebase.com/_nuxt/img/screenshot.4d061ac.webp" alt="App screenshot" className="shadow-lg" />
                </div>
            </div>
        </main>
    )
}

export default dba