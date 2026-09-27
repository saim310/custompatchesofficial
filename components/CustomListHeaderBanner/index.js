import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const CustomProductsHeaderBanner = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    } else {
                        entry.target.classList.remove('animate-in');
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="custom-products-banner-section">
            <style jsx>{`
                .custom-products-banner-section {
                    position: relative;
                    width: 100%;
                    margin-top: 40px;
                    padding: 45px 0;
                    display: flex;
                    align-items: center;
                    background: #f8fafc;
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    box-sizing: border-box;
                    border-top: 1px solid #e2e8f0;
                    border-bottom: 1px solid #e2e8f0;
                    overflow: hidden;
                }

                .custom-products-banner-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 24px;
                    width: 100%;
                }

                .banner-grid {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 40px;
                    align-items: center;
                }

                .main-heading {
                    font-size: 38px;
                    font-weight: 700;
                    line-height: 1.2;
                    color: #0f172a;
                    margin: 0 0 16px 0;
                    letter-spacing: -0.5px;
                }

                .brand-red {
                    color: #dc2626;
                }

                .sub-heading {
                    font-size: 15px;
                    color: #475569;
                    line-height: 1.6;
                    margin: 0 0 30px 0;
                    font-weight: 400;
                    max-width: 600px;
                }

                .banner-cta-wrap {
                    display: flex;
                    align-items: center;
                }

                .btn-get-quote {
                    background-color: #dc2626;
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 12px 30px;
                    border-radius: 50px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25);
                    display: inline-block;
                }

                .btn-get-quote:hover {
                    background-color: #b91c1c;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(220, 38, 38, 0.35);
                }

                .banner-image-wrap {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    width: 100%;
                }

                .banner-image-wrap img {
                    width: 100% !important;
                    height: auto !important;
                    max-width: 500px !important;
                    object-fit: contain !important;
                }

                @media (max-width: 991px) {
                    .custom-products-banner-section {
                        margin-top: 24px;
                    }
                    .banner-grid {
                        grid-template-columns: 1fr;
                        gap: 28px;
                    }
                    .main-heading {
                        font-size: 28px;
                    }
                    .banner-image-wrap {
                        justify-content: center;
                    }
                }
            `}</style>

            <div className="container">
                <div className="banner-grid">
                    {/* Left Column: Content */}
                    <div className="content-col">
                        <h1 className="main-heading">
                            Explore Materials, Colors & <span className="brand-red">Crafting Specs</span>
                        </h1>

                        <p className="sub-heading">
                            Discover our comprehensive library of threads, fabrics, pantone color charts, and application instructions. Everything you need to inspect, verify, and design your custom patches and accessories with precision.
                        </p>

                        {/* Action Button */}
                        <div className="banner-cta-wrap">
                            <a href="/contact" className="btn-get-quote">
                                Get a Quote
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Graphics / Illustration */}
                    <div className="banner-image-wrap">
                        <img 
                            src="/images/CustomerList.png" 
                            alt="Custom Products Resources & Threads" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomProductsHeaderBanner;