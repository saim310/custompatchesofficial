import React, {Fragment} from 'react';
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import WovenPatchApplicationsTimeline from '../../components/WovenPatchApplicationsTimeline';
import Navbar3 from '../../components/Navbar3';
import WovenHeaderBanner from '../../components/WovenHeaderBanner';
import WovenPatchFinishingTabs from '../../components/WovenPatchFinishingTabs';
import AboutValuesSection from '../../components/AboutValuesSection';
import ContactArea from '../../components/ContactArea';
import WovenWhyChooseUsSection from '../../components/WovenWhyChooseUsSection';
import Testimonial2 from '../../components/Testimonial2';
import WovenGalleryShowcase from '../../components/WovenGalleryShowcase';
import WovenFAQAccordion from '../../components/WovenFAQAccordion';

const WovenPatches =() => {
    return(
        <Fragment>
            <Head>
                <title>Woven Patches</title>
            </Head>
            <Navbar3/>
            <WovenHeaderBanner/>
            <WovenPatchApplicationsTimeline/>
            <WovenPatchFinishingTabs/>
            <WovenWhyChooseUsSection/>
            <WovenGalleryShowcase/>
            <MySkill/>
            <AboutValuesSection/>
              <ContactArea contactclass={'wpo-contact-area3'}/>
              <Testimonial2/>
              <WovenFAQAccordion/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
          

        </Fragment>
    )
};
export default WovenPatches;