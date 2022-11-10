import {Fragment, useEffect, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import clsx from 'clsx'

import {Container} from '@/components/index/Container'
import {Logo} from '@/components/index/Logo'
import {NavLink} from '@/components/index/NavLink'
import {useRouter} from "next/router";

import {LanguageSwitcher, useLanguageQuery, useTranslation} from "next-export-i18n";
import Link from '../Link'

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
                        <MobileNavLink href="/#pricing">{t('pricing')}</MobileNavLink>
                        <MobileNavLink href={`/docs/${query?.lang ? query.lang + '/' : 'zh/'}getting-started`}>{t('document')}</MobileNavLink>
                        <MobileNavLink href='/blog'>{t('blog')}</MobileNavLink>
                        <hr className="m-2 border-slate-300/40"/>
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
        <header className="py-10">
            <Container>
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <Link href="/" aria-label="Home">
                            <Logo className="h-10 w-auto dark:"/>
                        </Link>
                        <div className="hidden md:flex md:gap-x-6">
                            <NavLink href='/#features'>{t('features')}</NavLink>
                            <NavLink href="/#testimonials">{t('testimonials')}</NavLink>
                            <NavLink href="/#pricing">{t('pricing')}</NavLink>
                            <NavLink href={`/docs/${query?.lang ? query.lang + '/' : 'zh/'}getting-started`}>{t('document')}</NavLink>
                            <NavLink href='/blog'>{t('blog')}</NavLink>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <div className="hidden md:block">
                            <LanguageSwitcher lang={'zh'}>
                                <span className={clsx("rounded-lg py-1 px-2 text-sm hover:bg-slate-100 hover:text-slate-900 dark:text-white dark:hover:bg-slate-600")}>简体中文</span>
                            </LanguageSwitcher>
                        </div>
                        <div>
                            <LanguageSwitcher lang={'en'}>
                                <span className={clsx("rounded-lg py-1 px-2 text-sm hover:bg-slate-100 hover:text-slate-900 dark:text-white dark:hover:bg-slate-600")}>English</span>
                            </LanguageSwitcher>
                        </div>
                        <div className="-mr-1 md:hidden">
                          <MobileNavigation />
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}
