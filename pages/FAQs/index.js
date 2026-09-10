import React, {Fragment} from 'react';
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import Navbar3 from '../../components/Navbar3';
import FAQHeaderBanner from '../../components/FAQHeaderBanner';
import ContactArea from '../../components/ContactArea';
import FAQsMain from '../../components/FAQsMain';

const FAQs =() => {
    return(
        <Fragment>
            <Head>
                <title>FAQ's</title>
            </Head>
            <Navbar3/>
            <FAQHeaderBanner/>
      <FAQsMain/>
            <MySkill/>
        
              <ContactArea contactclass={'wpo-contact-area3'}/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
          

        </Fragment>
    )
};
export default FAQs;