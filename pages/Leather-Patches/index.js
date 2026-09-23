import React, {Fragment} from 'react';
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import LeatherPatchApplicationsTimeline from '../../components/LeatherPatchApplicationsTimeline';
import Navbar3 from '../../components/Navbar3';
import LeatherHeaderBanner from '../../components/LeatherHeaderBanner';
import LeatherPatchFinishingTabs from '../../components/LeatherPatchFinishingTabs';
import AboutValuesSection from '../../components/AboutValuesSection';
import ContactArea from '../../components/ContactArea';
import LeatherWhyChooseUsSection from '../../components/LeatherWhyChooseUsSection';
import Testimonial2 from '../../components/Testimonial2';
import LeatherGalleryShowcase from '../../components/LeatherGalleryShowcase';
import LeatherFAQAccordion from '../../components/LeatherFAQAccordion';

const LeatherPatches =() => {
    return(
        <Fragment>
            <Head>
                <title>Leather Patches</title>
            </Head>
            <Navbar3/>
            <LeatherHeaderBanner/>
            <LeatherPatchApplicationsTimeline/>
            <LeatherPatchFinishingTabs/>
            <LeatherWhyChooseUsSection/>
            <LeatherGalleryShowcase/>
            <MySkill/>
            <AboutValuesSection/>
              <ContactArea contactclass={'wpo-contact-area3'}/>
              <Testimonial2/>
              <LeatherFAQAccordion/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
          

        </Fragment>
    )
};
export default LeatherPatches;