import {Fragment} from 'react'
import {CheckIcon, ChevronDownIcon, MinusIcon} from '@heroicons/react/20/solid'

const tiers = [
    {name: 'Basic', href: '#', priceMonthly: 9, description: 'Quis suspendisse ut fermentum neque vivamus non tellus.'},
    {
        name: 'Essential',
        href: '#',
        priceMonthly: 29,
        description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    },
]
const sections = [
    {
        name: 'Features',
        features: [
            {name: 'Molestie lobortis massa.', tiers: {Basic: true, Essential: true, Premium: true}},
            {name: 'Urna purus felis.', tiers: {Basic: true, Essential: true, Premium: true}},
            {name: 'Tellus pulvinar sit dictum.', tiers: {Essential: true, Premium: true}},
            {name: 'Convallis.', tiers: {Essential: 'Up to 20 users', Premium: 'Up to 50 users'}},
        ],
    },
    {
        name: 'Reporting',
        features: [
            {name: 'Adipiscing.', tiers: {Basic: true, Essential: true, Premium: true}},
            {name: 'Eget risus integer.', tiers: {Essential: true, Premium: true}},
            {name: 'Gravida leo urna velit.', tiers: {Premium: true}},
            {name: 'Elementum ut dapibus mi feugiat cras nisl.', tiers: {Premium: true}},
        ],
    },
    {
        name: 'Support',
        features: [
            {name: 'Sit dignissim.', tiers: {Basic: true, Essential: true, Premium: true}},
            {name: 'Congue at nibh et.', tiers: {Essential: true, Premium: true}},
            {name: 'Volutpat feugiat mattis.', tiers: {Essential: true, Premium: true}},
            {name: 'Tristique pellentesque ornare diam sapien.', tiers: {Premium: true}},
        ],
    },
]

export default function Pricing() {
    return (
        <div className="bg-white">
            <div className="bg-indigo-900">
                {/* Header section with select menu */}
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="px-0 sm:px-4 lg:flex lg:items-center lg:justify-between lg:px-0">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Pricing
                                Plans</h2>
                            <p className="mt-5 text-xl text-indigo-300">
                                Start building for free, then add a site plan to go live. Account plans unlock
                                additional features.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison table */}
            <div className="mx-auto max-w-2xl bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                {/* xs to lg */}
                <div className="space-y-24 lg:hidden">
                    {tiers.map((tier) => (
                        <section key={tier.name}>
                            <div className="mb-8 px-4">
                                <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                                <p className="mt-4">
                                    <span
                                        className="text-4xl font-bold tracking-tight text-gray-900">${tier.priceMonthly}</span>
                                    <span className="text-base font-medium text-gray-500">/mo</span>
                                </p>
                                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                                <a
                                    href={tier.href}
                                    className="mt-6 block w-full rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-pink-500 py-2 text-center text-sm font-semibold text-white shadow hover:to-pink-600"
                                >
                                    Buy {tier.name}
                                </a>
                            </div>

                            {sections.map((section) => (
                                <table key={section.name} className="w-full">
                                    <caption
                                        className="border-t border-gray-200 bg-gray-50 py-3 px-4 text-left text-sm font-medium text-gray-900">
                                        {section.name}
                                    </caption>
                                    <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">
                                            Feature
                                        </th>
                                        <th className="sr-only" scope="col">
                                            Included
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                    {section.features.map((feature) => (
                                        <tr key={feature.name} className="border-t border-gray-200">
                                            <th className="py-5 px-4 text-left text-sm font-normal text-gray-500"
                                                scope="row">
                                                {feature.name}
                                            </th>
                                            <td className="py-5 pr-4">
                                                {typeof feature.tiers[tier.name] === 'string' ? (
                                                    <span
                                                        className="block text-right text-sm text-gray-700">{feature.tiers[tier.name]}</span>
                                                ) : (
                                                    <>
                                                        {feature.tiers[tier.name] === true ? (
                                                            <CheckIcon className="ml-auto h-5 w-5 text-green-500"
                                                                       aria-hidden="true"/>
                                                        ) : (
                                                            <MinusIcon className="ml-auto h-5 w-5 text-gray-400"
                                                                       aria-hidden="true"/>
                                                        )}

                                                        <span
                                                            className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            ))}

                            <div className="border-t border-gray-200 px-4 pt-5">
                                <a
                                    href="#"
                                    className="block w-full rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-pink-500 py-2 text-center text-sm font-semibold text-white shadow hover:to-pink-600"
                                >
                                    Buy {tier.name}
                                </a>
                            </div>
                        </section>
                    ))}
                </div>

                {/* lg+ */}
                <div className="hidden lg:block">
                    <table className="h-px w-full table-fixed">
                        <caption className="sr-only">Pricing plan comparison</caption>
                        <thead>
                        <tr>
                            <th className="pb-4 pl-6 pr-6 text-left text-sm font-medium text-gray-900" scope="col">
                                <span className="sr-only">Feature by</span>
                                <span>Plans</span>
                            </th>
                            {tiers.map((tier) => (
                                <th
                                    key={tier.name}
                                    className="w-1/4 px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900"
                                    scope="col"
                                >
                                    {tier.name}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 border-t border-gray-200">
                        <tr>
                            <th className="py-8 pl-6 pr-6 text-left align-top text-sm font-medium text-gray-900"
                                scope="row">
                                Pricing
                            </th>
                            {tiers.map((tier) => (
                                <td key={tier.name} className="h-full py-8 px-6 align-top">
                                    <div className="flex h-full flex-col justify-between">
                                        <div>
                                            <p>
                                                <span
                                                    className="text-4xl font-bold tracking-tight text-gray-900">${tier.priceMonthly}</span>
                                                <span className="text-base font-medium text-gray-500">/mo</span>
                                            </p>
                                            <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                                        </div>
                                        <a
                                            href={tier.href}
                                            className="mt-6 block w-full rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-pink-500 py-2 text-center text-sm font-semibold text-white shadow hover:to-pink-600"
                                        >
                                            Buy {tier.name}
                                        </a>
                                    </div>
                                </td>
                            ))}
                        </tr>
                        {sections.map((section) => (
                            <Fragment key={section.name}>
                                <tr>
                                    <th
                                        className="bg-gray-50 py-3 pl-6 text-left text-sm font-medium text-gray-900"
                                        colSpan={4}
                                        scope="colgroup"
                                    >
                                        {section.name}
                                    </th>
                                </tr>
                                {section.features.map((feature) => (
                                    <tr key={feature.name}>
                                        <th className="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-500"
                                            scope="row">
                                            {feature.name}
                                        </th>
                                        {tiers.map((tier) => (
                                            <td key={tier.name} className="py-5 px-6">
                                                {typeof feature.tiers[tier.name] === 'string' ? (
                                                    <span
                                                        className="block text-sm text-gray-700">{feature.tiers[tier.name]}</span>
                                                ) : (
                                                    <>
                                                        {feature.tiers[tier.name] === true ? (
                                                            <CheckIcon className="h-5 w-5 text-green-500"
                                                                       aria-hidden="true"/>
                                                        ) : (
                                                            <MinusIcon className="h-5 w-5 text-gray-400"
                                                                       aria-hidden="true"/>
                                                        )}

                                                        <span className="sr-only">
                                {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                              </span>
                                                    </>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </Fragment>
                        ))}
                        </tbody>
                        <tfoot>
                        <tr className="border-t border-gray-200">
                            <th className="sr-only" scope="row">
                                Choose your plan
                            </th>
                            {tiers.map((tier) => (
                                <td key={tier.name} className="px-6 pt-5">
                                    <a
                                        href="#"
                                        className="block w-full rounded-md border border-transparent bg-gradient-to-r from-orange-500 to-pink-500 py-2 text-center text-sm font-semibold text-white shadow hover:to-pink-600"
                                    >
                                        Buy {tier.name}
                                    </a>
                                </td>
                            ))}
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </div>
    )
}
