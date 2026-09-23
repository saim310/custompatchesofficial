import React, {Fragment} from 'react';
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import PVCPatchApplicationsTimeline from '../../components/PVCPatchApplicationsTimeline';
import Navbar3 from '../../components/Navbar3';
import PVCHeaderBanner from '../../components/PVCHeaderBanner';
import PVCPatchFinishingTabs from '../../components/PVCPatchFinishingTabs';
import AboutValuesSection from '../../components/AboutValuesSection';
import ContactArea from '../../components/ContactArea';
import PVCWhyChooseUsSection from '../../components/PVCWhyChooseUsSection';
import Testimonial2 from '../../components/Testimonial2';
import PVCGalleryShowcase from '../../components/PVCGalleryShowcase';
import PVCFAQAccordion from '../../components/PVCFAQAccordion';

const PVCPatches =() => {
    return(
        <Fragment>
            <Head>
                <title>PVC Patches</title>
            </Head>
            <Navbar3/>
            <PVCHeaderBanner/>
            <PVCPatchApplicationsTimeline/>
            <PVCPatchFinishingTabs/>
            <PVCWhyChooseUsSection/>
            <PVCGalleryShowcase/>
            <MySkill/>
            <AboutValuesSection/>
              <ContactArea contactclass={'wpo-contact-area3'}/>
              <Testimonial2/>
              <PVCFAQAccordion/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
          

        </Fragment>
    )
};
export default PVCPatches;