import {Hero} from "@/components/index/Hero";
import {PrimaryFeatures} from "@/components/index/PrimaryFeatures";
import {Testimonials} from "@/components/index/Testimonials";
import {Pricing} from "@/components/index/Pricing";
import {Faqs} from "@/components/index/Faqs";
import Benefits from "@/components/index/Benefits";
import {Describe} from "@/components/index/Describe";
import Supports from "@/components/index/Supports";

const Index = (props) => {
    return (
        <>
            <Hero/>
            <Supports />
            <Describe />
            <Benefits />
            <PrimaryFeatures/>
            <Testimonials/>
            <Pricing/>
            <Faqs/>
        </>
    )
}

export default Index
