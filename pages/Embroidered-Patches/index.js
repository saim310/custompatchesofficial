import React, {Fragment} from 'react';
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import EmbroideredPatchApplicationsTimeline from '../../components/EmbroideredPatchApplicationsTimeline';
import Navbar3 from '../../components/Navbar3';
import EmbroideredHeaderBanner from '../../components/EmbroideredHeaderBanner';
import EmbroideredPatchFinishingTabs from '../../components/EmbroideredPatchFinishingTabs';
import AboutValuesSection from '../../components/AboutValuesSection';
import ContactArea from '../../components/ContactArea';
import EmbroideredWhyChooseUsSection from '../../components/EmbroideredWhyChooseUsSection';
import Testimonial2 from '../../components/Testimonial2';
import EmbroideredGalleryShowcase from '../../components/EmbroideredGalleryShowcase';
import EmbroideredFAQAccordion from '../../components/EmbroideredFAQAccordion';

const EmbroideredPatches =() => {
    return(
        <Fragment>
            <Head>
                <title>Embroidered Patches</title>
            </Head>
            <Navbar3/>
            <EmbroideredHeaderBanner/>
            <EmbroideredPatchApplicationsTimeline/>
            <EmbroideredPatchFinishingTabs/>
            <EmbroideredWhyChooseUsSection/>
            <EmbroideredGalleryShowcase/>
            <MySkill/>
            <AboutValuesSection/>
              <ContactArea contactclass={'wpo-contact-area3'}/>
              <Testimonial2/>
              <EmbroideredFAQAccordion/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
          

        </Fragment>
    )
};
export default EmbroideredPatches;