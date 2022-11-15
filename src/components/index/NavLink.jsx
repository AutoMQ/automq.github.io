import Link from '../Link'
export function NavLink({href, children}) {
    return (
        <Link
            href={href}
            className="inline-block rounded-lg py-1 px-2 text-sm text-white hover:text-red-300"
        >
            {children}
        </Link>
    )
}
