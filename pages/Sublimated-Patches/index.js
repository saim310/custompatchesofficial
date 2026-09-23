import React, {Fragment} from 'react';
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import SublimatedPatchApplicationsTimeline from '../../components/SublimatedPatchApplicationsTimeline';
import Navbar3 from '../../components/Navbar3';
import SublimatedHeaderBanner from '../../components/SublimatedHeaderBanner';
import SublimatedPatchFinishingTabs from '../../components/SublimatedPatchFinishingTabs';
import AboutValuesSection from '../../components/AboutValuesSection';
import ContactArea from '../../components/ContactArea';
import SublimatedWhyChooseUsSection from '../../components/SublimatedWhyChooseUsSection';
import Testimonial2 from '../../components/Testimonial2';
import SublimatedGalleryShowcase from '../../components/SublimatedGalleryShowcase';
import SublimatedFAQAccordion from '../../components/SublimatedFAQAccordion';

const SublimatedPatches =() => {
    return(
        <Fragment>
            <Head>
                <title>Sublimated Patches</title>
            </Head>
            <Navbar3/>
            <SublimatedHeaderBanner/>
            <SublimatedPatchApplicationsTimeline/>
            <SublimatedPatchFinishingTabs/>
            <SublimatedWhyChooseUsSection/>
            <SublimatedGalleryShowcase/>
            <MySkill/>
            <AboutValuesSection/>
              <ContactArea contactclass={'wpo-contact-area3'}/>
              <Testimonial2/>
              <SublimatedFAQAccordion/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
          

        </Fragment>
    )
};
export default SublimatedPatches;