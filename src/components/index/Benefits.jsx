import {Container} from "@/components/index/Container";
import CloudNative from '@/images/logos/cloud-native.svg'
import HighThroughput from '@/images/logos/high-throughput.svg'
import StreamProcessing from '@/images/logos/stream-processing.svg'
import FinanceOriented from '@/images/logos/finance-oriented.svg'
import LightweightModel from '@/images/logos/lightweight-modal.svg'
import EcoFriendly from '@/images/logos/eco-friendly.svg'
import Iot from '@/images/logos/iot.svg'
import Connect from '@/images/logos/connect.svg'
import Microservices from '@/images/logos/microservices.svg'
import Image from "next/future/image";
import {useTranslation} from "next-export-i18n";


const capabilities = [
    {
        title:"Cloud Native",
        describe:"Born with the cloud, grow with the cloud, infinitely elastic expansion and contraction, K8s friendly",
        logo:CloudNative
    },
    {
        title: "High Throughput",
        describe: "rillion-level throughput guarantee to meet both microservice and big data scenarios",
        logo: HighThroughput
    },
    {
        title: "Stream Processing",
        describe: "Lightweight, high availability, high performance stream computing engine",
        logo: StreamProcessing
    },
    {
        title: "Finance Oriented",
        describe: "Financial-grade stability,widely used in transaction core links",
        logo: FinanceOriented
    },
    {
        title: "Lightweight Model",
        describe: "Zero external dependencies, Shared-nothing architecture",
        logo: LightweightModel
    },
    {
        title: "Eco Friendly",
        describe: "Seamlessly connects to microservices, real-time computing, data lake and other surrounding ecologies",
        logo: EcoFriendly
    }
]

const ecosystem = [
    {
        title:"IoT",
        describe:"Supports massive Topic requirements, covering cloud-edge-device collaboration scenarios",
        logo:Iot
    },
    {
        title: "Connect",
        describe: "Configurable and low-code way to integrate data, connect with any system, and build streaming ETL, data pipeline, data lake, etc.",
        logo: Connect
    },
    {
        title: "Microservice",
        describe: "Rich message type support and management to meet Serverless scenarios with message granularity load balancing",
        logo: Microservices
    }
]

export default function Benefits() {
    const {t} = useTranslation();
    return (
        <Container className="relative overflow-hidden bg-white dark:bg-black py-32">
            <div className="mx-auto max-w-2xl md:text-center">
                <h2 className="text-center font-display text-3xl tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                    Core Capabilities
                </h2>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
                {
                    capabilities.map((item) => {
                        return (
                            <li
                                key={item.title}
                                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow dark:bg-black"
                            >
                                <div className="flex flex-1 flex-col p-8">
                                    <Image className={"mx-auto"} src={item.logo} alt={item.title} unoptimized/>
                                    <h3 className="mt-6 text-3xl font-medium text-gray-900 mb-2 dark:text-slate-200">{item.title}</h3>
                                    <p className="font-light dark:text-slate-200">{item.describe}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="mx-auto max-w-2xl md:text-center mt-16">
                <h2 className="text-center font-display text-3xl tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                    Ecosystem
                </h2>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
                {
                    ecosystem.map((item) => {
                        return (
                            <li
                                key={item.title}
                                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow dark:bg-black"
                            >
                                <div className="flex flex-1 flex-col p-8">
                                    <Image className={"mx-auto"} src={item.logo} alt={item.title} unoptimized/>
                                    <h3 className="mt-6 text-3xl font-medium text-gray-900 mb-2 dark:text-slate-200">{item.title}</h3>
                                    <p className="font-light dark:text-slate-200">{item.describe}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </Container>
    )
}
