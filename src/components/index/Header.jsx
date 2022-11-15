import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import clsx from 'clsx'

import {Container} from '@/components/index/Container'
import {Logo} from '@/components/index/Logo'
import {NavLink} from '@/components/index/NavLink'
import {useRouter} from "next/router";

import {LanguageSwitcher, useLanguageQuery, useTranslation} from "next-export-i18n";
import Link from '../Link'
import {ChevronDownIcon} from '@heroicons/react/20/solid'


function MobileNavLink({href, children}) {
    return (
        <Link href={href} className={"block w-full p-2 hover:text-blue-400"}>
            {children}
        </Link>
    )
}


function MobileNavIcon({open}) {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0'
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0'
                )}
            />
        </svg>
    )
}

function MobileNavigation() {
    const {t} = useTranslation()
    const [query] = useLanguageQuery()
    return (
        <Popover>
            <Popover.Button
                className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
                aria-label="Toggle Navigation"
            >
                {({open}) => <MobileNavIcon open={open}/>}
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 bg-slate-300/50"/>
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        as="div"
                        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
                    >
                        <MobileNavLink href="/#features">{t('features')}</MobileNavLink>
                        <MobileNavLink href="/#testimonials">{t('testimonials')}</MobileNavLink>
                        <MobileNavLink href="/pricing">{t('pricing')}</MobileNavLink>
                        <MobileNavLink
                            href={`/docs/${query?.lang ? query.lang + '/' : 'zh/'}getting-started`}>{t('document')}</MobileNavLink>
                        <MobileNavLink href='/blog'>{t('blog')}</MobileNavLink>
                        <LanguageSwitcher lang={'zh'}>
                            <span
                                className={clsx("rounded-lg py-1 px-2 text-black hover:text-blue-300 text-lg")}>简体中文</span>
                        </LanguageSwitcher>
                        <LanguageSwitcher lang={'en'}>
                            <span
                                className={clsx("rounded-lg py-1 px-2 text-black text-lg hover:text-blue-300")}>English</span>
                        </LanguageSwitcher>
                        <hr className="m-2 border-slate-300/40"/>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

function ProductsList() {
    const {t} = useTranslation()
    const middleware = [
        'AutoMQ for RocketMQ 4.x',
        'AutoMQ for RocketMQ 5.0',
        'AutoMQ for Kafka',
        'AutoMQ for RabbitMQ',
        'AutoMQ for MQTT'
    ]
    const database = [
        'Cloud Native Mysql',
        'Cloud Native PostgreSQL',
        'Cloud Native Redis'
    ]
    const xxx = [
        'Cloud run'
    ]
    return (
        <Popover>
            <Popover.Button
                className="inline-block rounded-lg py-1 px-2 text-sm text-white hover:text-red-300 cursor-pointer"
                aria-label="Toggle Navigation"
            >
                {({open}) => (
                    <div className={"flex flex-row items-center"}>
                        {t('product')}
                        <div className={`${open ? 'rotate-180' : 'rotate-0'} duration-200 ml-3 hover:text-red-300`}>
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.05264 2L5.05264 5.00649L2.05264 2" stroke="#FFF" strokeWidth="1.25"
                                      strokeLinecap="square"/>
                            </svg>
                        </div>
                    </div>
                )}
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 bg-slate-300/50"/>
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        as="div"
                        className="absolute inset-x-0 top-full mt-4 grid grid-cols-3 justify-center origin-top  rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
                    >
                        <div className="mx-auto">
                            <div className='text-gray-400 text-lg font-medium'>MIDDLEWARE</div>
                            {
                                middleware.map(item => (
                                    <div className="cursor-pointer text-sm hover:underline font-medium" key={item}>{item}</div>
                                ))
                            }
                        </div>
                        <div className="mx-auto">
                            <div className='text-gray-400 text-lg font-medium'>DATABASE</div>
                            {
                                database.map(item => (
                                    <div className="cursor-pointer text-sm hover:underline font-medium" key={item}>{item}</div>
                                ))
                            }
                        </div>
                        <div className="mx-auto">
                            <div className='text-gray-400 text-lg font-medium'>XXX</div>
                            {
                                xxx.map(item => (
                                    <div className="cursor-pointer text-sm hover:underline font-medium" key={item}>{item}</div>
                                ))
                            }
                        </div>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}

export function Header() {
    const router = useRouter()
    const {t} = useTranslation()
    const [query] = useLanguageQuery();
    return (
        <header className="py-6 bg-black">
            <Container>
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <Link href="/" aria-label="Home">
                            <Logo className="h-10 w-auto"/>
                        </Link>
                        <div className="hidden md:flex md:gap-x-6">
                            <NavLink href='/#features'>{t('features')}</NavLink>
                            <NavLink href="/#testimonials">{t('testimonials')}</NavLink>
                            <NavLink href="/pricing">{t('pricing')}</NavLink>
                            <ProductsList/>
                            <NavLink
                                href={`/docs/${query?.lang ? query.lang + '/' : 'zh/'}getting-started`}>{t('document')}</NavLink>
                            <NavLink href='/blog'>{t('blog')}</NavLink>
                        </div>
                    </div>

                    <div className="items-center gap-x-5 md:gap-x-8 flex">
                        <div className='hidden md:block'>
                            <LanguageSwitcher lang={'zh'}>
                                <span
                                    className={clsx("rounded-lg py-1 px-2 text-white text-sm hover:text-slate-300")}>简体中文</span>
                            </LanguageSwitcher>
                        </div>
                        <div className='hidden md:block'>
                            <LanguageSwitcher lang={'en'}>
                                <span
                                    className={clsx("rounded-lg py-1 px-2 text-white text-sm hover:text-slate-300")}>English</span>
                            </LanguageSwitcher>
                        </div>
                        <div className="-mr-1 md:hidden">
                            <MobileNavigation/>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}
