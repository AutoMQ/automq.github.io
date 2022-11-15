import Link from '../Link'
export function NavLink({href, children}) {
    return (
        <Link
            href={href}
            className="inline-block rounded-lg py-1 px-2 text-sm hover:text-slate-900 text-white hover:bg-slate-600"
        >
            {children}
        </Link>
    )
}
