import React, { useEffect, useRef } from 'react';

const AboutHumbleBeginnings = () => {
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
                    padding: 90px 0;
                    display: flex;
                    align-items: center;
                    /* Light Cool Slate Background Overlay */
                    background: 
                        linear-gradient(180deg, rgba(241, 245, 249, 0.92) 0%, rgba(226, 232, 240, 0.96) 100%),
                        url('images/patch-bg-mosaic.jpg') center/cover no-repeat;
                    color: #0f172a;
                    /* Original Clean Inter Font Stack */
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    box-sizing: border-box;
                }

                .humble-beginnings-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Lighter Red Outline Badge */
                .badge-about {
                    display: inline-block;
                    border: 1px solid rgba(220, 38, 38, 0.5);
                    color: #dc2626;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    padding: 5px 16px;
                    border-radius: 20px;
                    margin-bottom: 24px;
                    background: rgba(220, 38, 38, 0.06);
                }

                /* Main Title with Light Dark Slate Color & Light Weight */
                .main-heading {
                    font-size: 42px;
                    font-weight: 400;
                    line-height: 1.25;
                    max-width: 840px;
                    color: #0f172a;
                    margin: 0 0 20px 0;
                    letter-spacing: -0.3px;
                }

                .brand-red {
                    color: #dc2626;
                    font-weight: 600;
                }

                /* Subtitle in Soft Slate Tone */
                .sub-heading {
                    font-size: 15px;
                    color: #475569;
                    max-width: 650px;
                    line-height: 1.7;
                    margin: 0 0 44px 0;
                    font-weight: 300;
                }

                /* Stat Cards Container */
                .stats-grid {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                /* Light High-Contrast Glass Stat Cards */
                .stat-card {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
                    border-radius: 12px;
                    padding: 16px 24px;
                    min-width: 135px;
                    transition: all 0.3s ease;
                }

                .stat-card:hover {
                    border-color: rgba(220, 38, 38, 0.5);
                    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
                    transform: translateY(-2px);
                }

                .stat-card-red {
                    border-color: rgba(220, 38, 38, 0.3);
                    background: #fef2f2;
                }

                .stat-number {
                    font-size: 22px;
                    font-weight: 600;
                    color: #0f172a;
                    display: block;
                    margin-bottom: 2px;
                }

                .stat-number.red-text {
                    color: #dc2626;
                }

                .stat-label {
                    font-size: 11px;
                    font-weight: 500;
                    color: #64748b;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                @media (max-width: 768px) {
                    .main-heading {
                        font-size: 30px;
                    }
                    .stats-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>

            <div className="container">
                {/* Pill Badge */}
                <span className="badge-about">About Us</span>

                {/* Headline */}
                <h1 className="main-heading">
                    Driven by precision digitizing and passion for quality at <span className="brand-red">Custompatchesofficial.com</span>
                </h1>

                {/* Subtitle */}
                <p className="sub-heading">
                    From custom embroidery to durable 3D PVC rubber patches, we turn your artwork into high-detail physical emblems with fast turnarounds and zero setup fees.
                </p>

                {/* Stat Counters */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-number">10K+</span>
                        <span className="stat-label">Happy Clients</span>
                    </div>

                    <div className="stat-card">
                        <span className="stat-number">6+</span>
                        <span className="stat-label">Patch Styles</span>
                    </div>

                    <div className="stat-card stat-card-red">
                        <span className="stat-number red-text">100%</span>
                        <span className="stat-label">Quality Verified</span>
                    </div>

                    <div className="stat-card">
                        <span className="stat-number">USA</span>
                        <span className="stat-label">Based Studio</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHumbleBeginnings;