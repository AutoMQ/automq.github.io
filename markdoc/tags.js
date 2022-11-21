import {Callout} from '@/components/docs/Callout'
import {QuickLink, QuickLinks} from '@/components/docs/QuickLinks'
import {Contributor, Contributors} from "@/components/docs/Contributors";

const tags = {
    callout: {
        attributes: {
            title: {type: String},
            type: {
                type: String,
                default: 'note',
                matches: ['note', 'warning'],
                errorLevel: 'critical',
            },
        },
        render: Callout,
    },
    figure: {
        selfClosing: true,
        attributes: {
            src: {type: String},
            alt: {type: String},
            caption: {type: String},
        },
        render: ({src, alt = '', caption}) => (
            <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt}/>
                <figcaption>{caption}</figcaption>
            </figure>
        ),
    },
    'quick-links': {
        render: QuickLinks,
    },
    'quick-link': {
        selfClosing: true,
        render: QuickLink,
        attributes: {
            title: {type: String},
            description: {type: String},
            icon: {type: String},
            href: {type: String},
        },
    },
    'contributors': {
        render:Contributors
    },
    'contributor': {
        render:Contributor,
        selfClosing: true,
        attributes: {
            email: {type: String},
            name: {type: String}
        }
    }
}

export default tags
