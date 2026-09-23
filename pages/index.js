import React, {Fragment} from 'react';
import Navbar from '../components/Navbar'
import Exprience from '../components/exprience'

import PorfolioSectionHome from '../components/PorfolioSectionHome'
import TestSlider from '../components/Testimonial'
import ContactArea from '../components/ContactArea'
import LatestBlog from '../components/LatestNews'
import Footer from '../components/Footer'
import Head from 'next/head'
import HomePage3 from './HomePage3';
import FloatingContactWidget from '../components/FloatingContactWidget';



const HomePage =() => {
    return(
        <Fragment>
            <Head>
                <title>Home Page</title>
            </Head>
            <Navbar />
           <Hero1/>
            <Exprience/>
            <AboutHome/>
            <PorfolioSectionHome/>
            <TestSlider/>
          
            <ContactArea/>
            <LatestBlog/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage3;


