import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const EmbroideredHeaderBanner = () => {
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
        <section ref={sectionRef} className="humble-beginnings-section">
            <style jsx>{`
                .humble-beginnings-section {
                    position: relative;
                    width: 100%;
                    min-height: 520px;
                    padding: 60px 0;
                    display: flex;
                    align-items: center;
                    background: #f8fafc;
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    box-sizing: border-box;
                    border-bottom: 1px solid #e2e8f0;
                    overflow: hidden;
                }

                .humble-beginnings-section.animate-in {
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
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    align-items: center;
                }

                .badge-about {
                    display: inline-block;
                    border: 1px solid rgba(220, 38, 38, 0.3);
                    color: #dc2626;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    padding: 5px 16px;
                    border-radius: 20px;
                    margin-bottom: 24px;
                    background: rgba(220, 38, 38, 0.05);
                }

                .main-heading {
                    font-size: 38px;
                    font-weight: 500;
                    line-height: 1.25;
                    color: #0f172a;
                    margin: 0 0 16px 0;
                    letter-spacing: -0.3px;
                }

                .brand-red {
                    color: #dc2626;
                    font-weight: 600;
                }

                .sub-heading {
                    font-size: 15px;
                    color: #475569;
                    line-height: 1.6;
                    margin: 0 0 32px 0;
                    font-weight: 300;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 12px;
                }

                .stat-card {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
                    border-radius: 12px;
                    padding: 14px 16px;
                    transition: all 0.3s ease;
                }

                .stat-card-red {
                    border-color: rgba(220, 38, 38, 0.3);
                    background: #fef2f2;
                }

                .stat-number {
                    font-size: 20px;
                    font-weight: 700;
                    color: #0f172a;
                    display: block;
                    margin-bottom: 2px;
                }

                .stat-number.red-text {
                    color: #dc2626;
                }

                .stat-label {
                    font-size: 10px;
                    font-weight: 600;
                    color: #64748b;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
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
                    max-width: 580px !important;
                    object-fit: contain !important;
                }

                @media (max-width: 991px) {
                    .banner-grid {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }
                    .main-heading {
                        font-size: 30px;
                    }
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
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
                        <span className="badge-about">Embroidered Patches</span>

                        <h1 className="main-heading">
                            Mastering texture and density for your custom <span className="brand-red">Embroidered Patches</span>
                        </h1>

                        <p className="sub-heading">
                            Built with high-density thread weaving, tight merrowed borders, and zero setup fees. Turn your artwork into an heirloom-quality physical emblem.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <span className="stat-number">10K+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>

                            <div className="stat-card">
                                <span className="stat-number">9</span>
                                <span className="stat-label">Total Categories</span>
                            </div>

                            <div className="stat-card stat-card-red">
                                <span className="stat-number red-text">100%</span>
                                <span className="stat-label">Quality Verified</span>
                            </div>

                            <div className="stat-card">
                                <span className="stat-number">0$</span>
                                <span className="stat-label">Setup Fees</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Patch Collage Graphics */}
                    <div className="banner-image-wrap">
                        <img 
                            src="/images/embroidered-banner.png" 
                            alt="Embroidered Patches Samples" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmbroideredHeaderBanner;