import Link from "@/components/Link";
import clsx from "clsx";
import {postTagStyle} from "@/common/util";
import {useTranslation} from "next-export-i18n";


function OneBlog({info}) {
    return (
        <div key={info.href} className="flex flex-col overflow-hidden rounded-lg hover:shadow-lg dark:bg-slate-700 dark:border">
            {
                info?.feature_image && (
                    <div className="flex-shrink-0 overflow-hidden">
                        <Link href={info.href}>
                            <img className="h-48 overflow-hidden w-full object-cover transition hover:scale-110" src={info.feature_image} alt=""/>
                        </Link>
                    </div>
                )
            }
            <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-slate-600">
                <div className="flex-1">
                    {
                        info?.tags && (
                            <p className="text-sm font-medium text-indigo-600">
                                {
                                    info.tags.map((item, index) => (
                                        <Link key={index} href={info.href}
                                              className={clsx("px-3 py-0.5 mr-2 rounded-full", postTagStyle(item))}>
                                            {item}{' '}
                                        </Link>
                                    ))
                                }
                            </p>
                        )
                    }
                    <Link href={info.href} className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900 dark:text-slate-200">{info.title}</p>
                        {
                            info?.description && (
                                <p className="mt-3 text-base text-gray-500 dark:text-slate-400">{info.description}</p>
                            )
                        }
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <Link href={info.href}>
                            <span className="sr-only">{info.author}</span>
                            {/*<img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />*/}
                        </Link>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            <Link href={'/'} className="hover:underline dark:text-slate-200">
                                {info.author}
                            </Link>
                        </p>
                        {
                            info?.published_at && (
                                <div className="flex space-x-1 text-sm text-gray-500 dark:text-slate-200">
                                    <time dateTime={info.published_at}>{info.published_at}</time>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{info.readtime}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}


export function BlogList(props) {
    const {t} = useTranslation()
    return (
        <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-200">{t('from-the-blog')}</h2>
                <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4 dark:text-slate-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque,
                    ducimus sed.
                </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                {props.list?.map((post) => {
                    return (
                        <OneBlog key={post.title} info={post}/>
                    )
                })}
            </div>
        </div>
    )
}