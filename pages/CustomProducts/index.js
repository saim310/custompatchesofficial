import React, {Fragment} from 'react';

import BlogList from '../../components/BlogList'
import BlogHeaderBanner from '../../components/BlogHeaderBanner'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import Navbar3 from '../../components/Navbar3';
import CustomProductsList from '../../components/CustomProductsList';
import CustomListHeaderBanner from '../../components/CustomListHeaderBanner';

const CustomProducts =() => {
    return(
        <Fragment>
            <Head>
                <title>Custom Products</title>
            </Head>
            <Navbar3/>
              <CustomListHeaderBanner/>
            <CustomProductsList/>
        
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default CustomProducts;