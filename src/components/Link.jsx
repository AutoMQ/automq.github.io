import Link from "next/link";
import {useLanguageQuery} from "next-export-i18n";
import {useEffect, useState} from "react";

export default function MyLink({href, children, ...rest}) {
    const [lang,setLang] = useState(useLanguageQuery())
    const [query] = useLanguageQuery()
    let [pathname, hash] = href.split("#");
    useEffect(() => {
        setLang(query)
    },[query])
    return (
        <Link
            {...rest}
            href={{pathname: pathname, hash:hash,query: lang}}
        >
            {children}
        </Link>
    )
}
