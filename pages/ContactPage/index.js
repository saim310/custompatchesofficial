import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import ContactPageSec from '../../components/ContactPageSec'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import Navbar3 from '../../components/Navbar3';
import ContactHeaderBanner from '../../components/ContactHeaderBanner';

const ContactPage =() => {
    return(
        <Fragment>
            <Head>
                <title>Contact</title>
            </Head>
            <Navbar3/>
            <ContactHeaderBanner/>

            <ContactPageSec/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default ContactPage;