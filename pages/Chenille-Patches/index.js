import React, {Fragment} from 'react';
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import ChenillePatchApplicationsTimeline from '../../components/ChenillePatchApplicationsTimeline';
import Navbar3 from '../../components/Navbar3';
import ChenilleHeaderBanner from '../../components/ChenilleHeaderBanner';
import ChenillePatchFinishingTabs from '../../components/ChenillePatchFinishingTabs';
import AboutValuesSection from '../../components/AboutValuesSection';
import ContactArea from '../../components/ContactArea';
import ChenilleWhyChooseUsSection from '../../components/ChenilleWhyChooseUsSection';
import Testimonial2 from '../../components/Testimonial2';
import ChenilleGalleryShowcase from '../../components/ChenilleGalleryShowcase';
import ChenilleFAQAccordion from '../../components/ChenilleFAQAccordion';

const ChenillePatches =() => {
    return(
        <Fragment>
            <Head>
                <title>Chenille Patches</title>
            </Head>
            <Navbar3/>
            <ChenilleHeaderBanner/>
            <ChenillePatchApplicationsTimeline/>
            <ChenillePatchFinishingTabs/>
            <ChenilleWhyChooseUsSection/>
            <ChenilleGalleryShowcase/>
            <MySkill/>
            <AboutValuesSection/>
              <ContactArea contactclass={'wpo-contact-area3'}/>
              <Testimonial2/>
              <ChenilleFAQAccordion/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
          

        </Fragment>
    )
};
export default ChenillePatches;