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
                            <h2>High-quality <a href="/Lapel-Pins">custom pins</a> and <a href="/Custom-Products">patches</a> made to order.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-feature-right">
                            <p>Bring your ideas to life with premium <a href="/custom-products"><b>custom patches</b></a> made specifically for your brand, team, clothing, or event. Choose from <a href="/Embroidered-Patches"><b>embroidered</b></a>, <a href="/Woven-Patches"><b>woven</b></a>, <a href="/Chenille-Patches"><b>chenille</b></a>, <a href="/PVC-Patches"><b>PVC</b></a>, <a href="/Bullet-Sublimated-Patches"><b>sublimated</b></a>, and <a href="/Leather-Patches"><b>leather patches</b></a> with your preferred design, size, shape, and backing. </p>
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