import Link from "next/link"

const DocsHead = () => {
    return (
        <header className="w-full h-14 bg-white flex flex-row justify-between items-center py-2 px-4 sm:px-6 border-b" >
            <nav aria-label="Global" className="flex flex-row relative justify-start items-center h-full sm:justify-center" >
                <span className="sr-only" >
                    Bytebase</span>
                <Link href="/" >
                    <img src="https://www.bytebase.com/_nuxt/img/logo-icon.3e0dcc1.svg" alt="" className="header-link underline h-6 sm:h-8 w-auto" />
                </Link>
                <Link href="/docs/cli/overview">
                    <a className="header-link">CLI</a>
                </Link>
                <Link href="/docs/api/overview" >
                    <a className="header-link">API</a>
                </Link>
                <Link href="/docs/how-to/workflow/gitops-feature-branch"  >
                    <a className="header-link">How-To</a>
                </Link>
                <Link href="/blog"  >
                    <a className="header-link hidden sm:block">Blog</a>
                </Link>
                <Link href="/changelog"  >
                    <a className="header-link hidden sm:block">Changelog</a>
                </Link>
                <Link href="/pricing" >
                    <a className="header-link hidden sm:block">Pricing</a>
                </Link>
            </nav>
            <div className="flex flex-row justify-start items-center" >
                <div className="transition-all flex flex-row" >
                    <Link href="https://demo.bytebase.com?ref=bytebase.com" target="_blank" >
                        <a className="ml-2 hidden sm:flex items-center justify-center whitespace-nowrap px-3 h-8 border border-transparent text-sm font-medium rounded border-gray-200 text-gray-700 bg-gray-100 hover:bg-gray-300" >Live demo</a>
                    </Link>
                    <Link href="/docs/get-started/install/deploy-with-docker" >
                        <a className="ml-2 hidden sm:flex items-center justify-center whitespace-nowrap px-3 h-8 text-sm font-medium rounded text-white bg-green-500 hover:bg-green-600">Deploy now</a>
                    </Link>
                </div>
                <div id="algolia-search-container" className="ml-2" >
                    <button type="button" className="DocSearch DocSearch-Button" aria-label="Search">
                        <span className="DocSearch-Button-Container">
                            <svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20">
                                <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="DocSearch-Button-Placeholder">
                                Search</span>
                        </span>
                        <span className="DocSearch-Button-Keys">
                            <kbd className="DocSearch-Button-Key">
                                ⌘</kbd>
                            <kbd className="DocSearch-Button-Key">
                                K</kbd>
                        </span>
                    </button>
                </div>
            </div>
        </header>

    )
}

export default DocsHead