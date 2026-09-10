import React, {Fragment} from 'react';
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import Navbar3 from '../../components/Navbar3';
import OurWorkHeaderBanner from '../../components/OurWorkHeaderBanner';
import ContactArea from '../../components/ContactArea';
import OurWorkProductGallery from '../../components/OurWorkProductGallery';

const OurWork =() => {
    return(
        <Fragment>
            <Head>
                <title>About Page</title>
            </Head>
            <Navbar3/>
            <OurWorkHeaderBanner/>
      <OurWorkProductGallery/>
            <MySkill/>
        
              <ContactArea contactclass={'wpo-contact-area3'}/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
          

        </Fragment>
    )
};
export default OurWork;