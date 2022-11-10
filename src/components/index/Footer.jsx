import {social} from "@/constant/social";
import Link from "@/components/Link";
import * as foot_object from '@/constant/topic'

export function Footer() {
    return (
        <footer className="bg-white dark:bg-black" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
                    <div className="grid grid-cols-4 gap-8 xl:col-span-4">
                        {
                            Object.keys(foot_object).map(item => {
                                return (
                                    <div key={item}>
                                        <h3 className="text-base font-medium text-white">{item}</h3>
                                        <ul role="list" className="mt-4 space-y-4">
                                            {
                                                foot_object[item].map(one => {
                                                    return (
                                                        <li key={one.title}>
                                                            <Link href={one.href}
                                                               className="text-base dark:text-gray-300 hover:text-slate-400 dark:hover:text-white">
                                                                {one.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
                    <div>
                        <h3 className="text-base font-medium text-white">Subscribe to our newsletter</h3>
                        <p className="mt-2 text-base dark:text-gray-300">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                    </div>
                    <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            required
                            className="w-full min-w-0 appearance-none rounded-md border dark:border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
                            placeholder="Enter your email"
                        />
                        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:dark:text-gray-300">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true"/>
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
                        &copy; 2020 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
