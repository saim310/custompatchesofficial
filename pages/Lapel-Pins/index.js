import React, {Fragment} from 'react';
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import CustomLapelPatchApplicationsTimeline from '../../components/CustomLapelPatchApplicationsTimeline';
import Navbar3 from '../../components/Navbar3';
import CustomLapelHeaderBanner from '../../components/CustomLapelHeaderBanner';
import CustomLapelPatchFinishingTabs from '../../components/CustomLapelPatchFinishingTabs';
import AboutValuesSection from '../../components/AboutValuesSection';
import ContactArea from '../../components/ContactArea';
import CustomLapelWhyChooseUsSection from '../../components/CustomLapelWhyChooseUsSection';
import Testimonial2 from '../../components/Testimonial2';
import CustomLapelGalleryShowcase from '../../components/CustomLapelGalleryShowcase';
import CustomLapelFAQAccordion from '../../components/CustomLapelFAQAccordion';

const CustomLapelPins =() => {
    return(
        <Fragment>
            <Head>
                <title>Custom Lapel Pins</title>
            </Head>
            <Navbar3/>
            <CustomLapelHeaderBanner/>
            <CustomLapelPatchApplicationsTimeline/>
            <CustomLapelPatchFinishingTabs/>
            <CustomLapelWhyChooseUsSection/>
            <CustomLapelGalleryShowcase/>
            <MySkill/>
            <AboutValuesSection/>
              <ContactArea contactclass={'wpo-contact-area3'}/>
              <Testimonial2/>
              <CustomLapelFAQAccordion/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
          

        </Fragment>
    )
};
export default CustomLapelPins;