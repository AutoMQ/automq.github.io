import Link from "next/link";
import {useLanguageQuery} from "next-export-i18n";
import {useEffect, useState} from "react";

export default function MyLink({href, children, ...rest}) {
    const [lang, setLang] = useState(useLanguageQuery())
    const [query] = useLanguageQuery()
    useEffect(() => {
        setLang(query)
    }, [query])
    if (href) {
        const [pathname, hash] = href.split("#");
        return (
            <Link
                {...rest}
                href={{pathname: pathname, hash: hash, query: lang}}
            >
                {children}
            </Link>
        )
    } else {
        return (
            <span
                {...rest}
            >
                {children}
            </span>
        )
    }
}
