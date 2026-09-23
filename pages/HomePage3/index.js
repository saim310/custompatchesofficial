import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import Hero3 from '../../components/Hero3'
import AboutFeatures from '../../components/AboutFeature'
import ServiceSection from '../../components/ServiceSection'
import PatchTypesSection from '../../components/PatchTypesSection'
import GearVisualizerSection from '../../components/GearVisualizerSection';
import PatchEstimatorLight from '../../components/PatchEstimatorLight';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import PromoBannerSection from '../../components/PromoBannerSection';
import ContactArea from '../../components/ContactArea'
import TestSlider2 from '../../components/Testimonial2'
import FaqSection from '../../components/FaqSection';
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import CompareSection from '../../components/compare-section';
import FloatingContactWidget from '../../components/FloatingContactWidget';


const HomePage3 = () => {
    return(
        <Fragment>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar3/>
            <Hero3 />
           
            <AboutFeatures/>
            <ServiceSection serviceclass={'wpo-service-area-3 section-padding'}/>
            <PatchTypesSection/>
            <CompareSection/>
            <GearVisualizerSection/>
            <PatchEstimatorLight/>
            <WhyChooseUsSection/>
         
            <div id="contact-section">
    <ContactArea contactclass={'wpo-contact-area3'} />
</div>
            <TestSlider2 testclass={'wpo-testimonial-area-3'}/>
            <FaqSection/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
        </Fragment>
    )
};

export default HomePage3;