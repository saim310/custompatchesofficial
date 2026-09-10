import React, {Fragment} from 'react';

import BlogList from '../../components/BlogList'
import BlogHeaderBanner from '../../components/BlogHeaderBanner'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import Navbar3 from '../../components/Navbar3';

const BlogPage =() => {
    return(
        <Fragment>
            <Head>
                <title>Blog</title>
            </Head>
            <Navbar3/>
            <BlogHeaderBanner/>
            <BlogList/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default BlogPage;