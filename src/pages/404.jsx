import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Bars4Icon, BookmarkSquareIcon, BookOpenIcon, RssIcon } from '@heroicons/react/24/outline'
import { social } from "@/common/social";
import Link from '../components/Link'
const links = [
    {
        title: 'Documentation',
        description: 'Learn how to integrate our tools with your app',
        link: '/zh/docs/installation',
        icon: BookOpenIcon
    },
    { title: 'API Reference', description: 'A complete API reference for our libraries', link: '/', icon: Bars4Icon },
    {
        title: 'Guides',
        description: 'Installation guides that cover popular setups',
        link: '#',
        icon: BookmarkSquareIcon
    },
    { title: 'Blog', description: 'Read our latest news and articles', link: '/blog', icon: RssIcon },
]

export default function ErrorPage(props) {
    return (
        <div className="bg-white">
            <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex-shrink-0 pt-16">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                </div>
                <div className="mx-auto max-w-xl py-16 sm:py-24">
                    <div className="text-center">
                        <p className="text-base font-semibold text-indigo-600">404</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            This page does not exist.
                        </h1>
                        <p className="mt-2 text-lg text-gray-500">The page you are looking for could not be found.</p>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-base font-semibold text-gray-500">Popular pages</h2>
                        <ul role="list" className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
                            {links.map((link, linkIdx) => (
                                <li key={linkIdx} className="relative flex items-start space-x-4 py-6">
                                    <div className="flex-shrink-0">
                                        <span
                                            className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                                            <link.icon className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base font-medium text-gray-900">
                                            <span
                                                className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                                <Link href={link.link} className="focus:outline-none">
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                    {link.title}
                                                </Link>
                                            </span>
                                        </h3>
                                        <p className="text-base text-gray-500">{link.description}</p>
                                    </div>
                                    <div className="flex-shrink-0 self-center">
                                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                                Or go back home
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-200 py-12 text-center md:flex md:justify-between">
                    <p className="text-base text-gray-400">&copy; Your Company, Inc. All rights reserved.</p>
                    <div className="mt-6 flex justify-center space-x-8 md:mt-0">
                        {social.map((item, itemIdx) => (
                            <a key={itemIdx} href={item.href} className="inline-flex text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}
