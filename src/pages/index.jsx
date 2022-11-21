import {Hero} from "@/components/index/Hero";
import {PrimaryFeatures} from "@/components/index/PrimaryFeatures";
import {Testimonials} from "@/components/index/Testimonials";
import {Faqs} from "@/components/index/Faqs";
import Benefits from "@/components/index/Benefits";
import {Describe} from "@/components/index/Describe";
import Supports from "@/components/index/Supports";
import {IntroList} from "@/components/index/IntroList";
import {Introduction} from "@/components/index/Introduction";

const Index = (props) => {
    return (
        <>
            <Hero/>
            <Supports />
            <Describe />
            {/*<Benefits />*/}
            <IntroList />
            <Introduction />
            <PrimaryFeatures/>
            <Testimonials/>
            <Faqs/>
        </>
    )
}

export default Index
