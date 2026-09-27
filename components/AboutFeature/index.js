import React from 'react';
import Link from 'next/link';

const AboutFeatures = (props) => {
  return (
    <div className="about-feature-area">
      {/* Background Video and Overlay */}
      <div className="video-background-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
        >
          <source src="/images/homevid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

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

      <style jsx>{`
        .about-feature-area {
          position: relative;
          overflow: hidden;
          padding: 120px 0;
        }

        .video-background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(11, 19, 43, 0.6); /* Adjust darkness over the video */
        }

        .container {
          position: relative;
          z-index: 2;
        }

        /* Completely transparent box wrapper with white text styling */
        .about-features-wrap {
          position: relative;
          background: transparent;
          padding: 20px 0;
        }

        .about-feature-left h2 {
          color: #ffffff;
          font-weight: 800;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }

        .about-feature-left a {
          color: #ff3366; /* Vibrant highlight color for inline links */
          text-decoration: none;
        }

        .about-feature-right p {
          color: #f1f5f9;
          font-size: 16px;
          line-height: 1.7;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
        }

        .about-feature-right a {
          color: #ffffff;
        }

        .about-feature-right b {
          color: #ffffff;
        }

        /* Custom button styling override for the video background */
        :global(.theme-btn-s2) {
          background-color: #e11d48 !important;
          color: #ffffff !important;
          border-radius: 4px;
          padding: 12px 30px;
          font-weight: 600;
          display: inline-block;
          margin-top: 15px;
          box-shadow: 0 4px 15px rgba(225, 29, 72, 0.4);
          transition: background 0.3s ease;
        }

        :global(.theme-btn-s2:hover) {
          background-color: #be123c !important;
        }
      `}</style>
    </div>
  );
}

export default AboutFeatures;