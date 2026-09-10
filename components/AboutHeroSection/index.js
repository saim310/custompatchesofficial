import React, { useEffect, useRef } from 'react';

const AboutHeroSection = () => {
    const heroRef = useRef(null);

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

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section style={{ background: '#f8fafc', padding: '100px 0 80px', color: '#0f172a' }}>
            <style jsx>{`
                .about-hero-container {
                    opacity: 0;
                    transform: translateY(30px) scale(0.98);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .about-hero-container.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .highlight-text {
                    color: #dc2626;
                }

                .hero-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    padding: 32px;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .hero-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08);
                }

                .badge-pill {
                    display: inline-block;
                    background: #fef2f2;
                    color: #dc2626;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    padding: 6px 16px;
                    border-radius: 30px;
                    border: 1px solid #fecaca;
                    margin-bottom: 20px;
                }

                .primary-btn {
                    background: #dc2626;
                    color: #ffffff;
                    padding: 14px 28px;
                    border-radius: 10px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 15px;
                    display: inline-block;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 14px rgba(220, 38, 38, 0.25);
                }

                .primary-btn:hover {
                    background: #b91c1c;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(220, 38, 38, 0.35);
                }

                .secondary-btn {
                    background: #ffffff;
                    color: #0f172a;
                    padding: 14px 28px;
                    border-radius: 10px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 15px;
                    border: 1.5px solid #cbd5e1;
                    display: inline-block;
                    transition: all 0.3s ease;
                }

                .secondary-btn:hover {
                    background: #f1f5f9;
                    border-color: #94a3b8;
                }
            `}</style>

            <div className="container">
                <div className="about-hero-container" ref={heroRef}>
                    {/* Top Main Heading */}
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-10">
                            <span className="badge-pill">Crafting Excellence Since Day One</span>
                            <h1 style={{ fontSize: '48px', fontWeight: '900', lineHeight: '1.15', color: '#0f172a', marginBottom: '20px' }}>
                                Precision Digitizing & Premium Custom Patch Manufacturing
                            </h1>
                            <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 32px' }}>
                                We transform your brand artwork, logos, and creative concepts into exceptionally detailed physical patches — delivered with unmatched speed, factory-direct pricing, and zero setup fees.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="#quote" className="primary-btn">
                                    Get Free Quote & Proof →
                                </a>
                                <a href="#process" className="secondary-btn">
                                    Explore Our Craft
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Value Statement Pillars */}
                    <div className="row g-4 mt-2">
                        <div className="col-md-4">
                            <div className="hero-card">
                                <div style={{ fontSize: '28px', color: '#dc2626', marginBottom: '12px' }}>⚡</div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                                    Rapid Turnaround
                                </h3>
                                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                    Industry-leading production times with express 7–9 day delivery worldwide without sacrificing quality.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="hero-card">
                                <div style={{ fontSize: '28px', color: '#dc2626', marginBottom: '12px' }}>🎯</div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                                    Uncompromising Quality
                                </h3>
                                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                    High-density thread stitching, durable PVC rubber, and pristine edge finishing on every single batch.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="hero-card">
                                <div style={{ fontSize: '28px', color: '#dc2626', marginBottom: '12px' }}>🔍</div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                                    Master Precision
                                </h3>
                                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                    In-house digitizing specialists ensure every fine line, gradient, and text element transfers cleanly to your patch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;