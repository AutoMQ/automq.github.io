import Link from '../Link'
export function NavLink({href, children}) {
    return (
        <Link
            href={href}
            className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-white dark:hover:bg-slate-600"
        >
            {children}
        </Link>
    )
}
