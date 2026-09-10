import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogSingle from '../../components/BlogDetails'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'
import Navbar3 from '../../components/Navbar3';
import BlogDetailsHeader from '../../components/BlogDetailsHeader';

const BlogDetailsPage =() => {
    return(
        <Fragment>
            <Head>
                <title>Blog Details</title>
            </Head>
            <Navbar3/>
            <BlogDetailsHeader/>
            <BlogSingle/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default BlogDetailsPage;