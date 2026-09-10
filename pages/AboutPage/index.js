import React, {Fragment} from 'react';
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import AboutHeroSection from '../../components/AboutHeroSection';
import Navbar3 from '../../components/Navbar3';
import AboutHeaderBanner from '../../components/AboutHeaderBanner';
import AboutCraftsmanship from '../../components/AboutCraftsmanship';
import AboutValuesSection from '../../components/AboutValuesSection';
import ContactArea from '../../components/ContactArea';

const AboutPage =() => {
    return(
        <Fragment>
            <Head>
                <title>About Page</title>
            </Head>
            <Navbar3/>
            <AboutHeaderBanner/>
            <AboutHeroSection/>
            <AboutCraftsmanship/>
            <MySkill/>
            <AboutValuesSection/>
              <ContactArea contactclass={'wpo-contact-area3'}/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
          

        </Fragment>
    )
};
export default AboutPage;