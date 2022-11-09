import {Hero} from "@/components/index/Hero";
import {PrimaryFeatures} from "@/components/index/PrimaryFeatures";
import {SecondaryFeatures} from "@/components/index/SecondaryFeatures";
import {CallToAction} from "@/components/index/CallToAction";
import {Testimonials} from "@/components/index/Testimonials";
import {Pricing} from "@/components/index/Pricing";
import {Faqs} from "@/components/index/Faqs";

const Index = (props) => {
    return (
        <>
            <Hero/>
            <PrimaryFeatures/>
            <SecondaryFeatures/>
            <CallToAction/>
            <Testimonials/>
            <Pricing/>
            <Faqs/>
        </>
    )
}

export default Index
