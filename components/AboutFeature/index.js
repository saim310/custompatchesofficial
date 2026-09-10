import React from 'react';
import Link from 'next/link'

const AboutFeatures = (props) => {

  return (
    <div className="about-feature-area">
        <div className="container">
            <div className="about-features-wrap">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-feature-left">
                            <h2>High-quality custom pins and patches made to order.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-feature-right">
                            <p>Elevate your brand, jacket, or event with fully customized lapel pins and patches. We offer a wide variety of styles, backings, and finishes with low minimum order quantities and fast turnarounds. </p>
                            <Link legacyBehavior href="/AboutPage"><a className="theme-btn-s2">More About</a></Link>
                        </div>
                    </div>
                </div>
                <div className="radius-ball"></div>
            </div>
        </div>
    </div>
  );
}

export default AboutFeatures;