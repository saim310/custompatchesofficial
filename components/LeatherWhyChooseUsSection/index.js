import React, { useEffect, useRef } from 'react';

const EmbroideredWhyChooseUsSection = () => {
    const sectionRef = useRef(null);

    const features = [
        {
            number: '01',
            title: 'Zero Setup & Digitization Fees',
            description: 'Get your custom artwork digitized and set up completely free of charge, saving you extra upfront costs.'
        },
        {
            number: '02',
            title: 'Exceptional Durability',
            description: 'Built with high-density thread weaving, tight merrowed or laser-cut borders, and robust backing options designed to withstand daily wear and tear.'
        },
        {
            number: '03',
            title: 'Versatile Application Styles',
            description: 'Choose from sew-on, iron-on, peel-and-stick, or Velcro hook-and-loop backings tailored to fit your specific garments, uniforms, or tactical gear.'
        },
        {
            number: '04',
            title: 'Premium Quality Materials',
            description: 'Crafted using top-tier threads and base fabrics that ensure crisp detail, vivid colors, and long-lasting professional finishes.'
        },
        {
            number: '05',
            title: 'Fast Turnaround & Reliability',
            description: 'Enjoy prompt production cycles and reliable delivery for orders ranging from small batches to large commercial runs.'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="embroidered-why-choose-section">
            <style jsx>{`
                .embroidered-why-choose-section {
                    background: #f1f5f9;
                    padding: 100px 0;
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .embroidered-why-choose-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .layout-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 60px;
                    align-items: center;
                }

                @media (max-width: 968px) {
                    .layout-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }

                .image-column {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    border: 1px solid #cbd5e1;
                    background: #ffffff;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
                    height: 100%;
                    min-height: 550px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .image-column img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: transform 0.6s ease;
                }

                .image-column:hover img {
                    transform: scale(1.03);
                }

                .content-column {
                    display: flex;
                    flex-direction: column;
                }

                .badge-pill {
                    display: inline-block;
                    border: 1px solid rgba(220, 38, 38, 0.4);
                    color: #dc2626;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    padding: 5px 16px;
                    border-radius: 20px;
                    margin-bottom: 16px;
                    background: rgba(220, 38, 38, 0.05);
                    width: fit-content;
                }

                .section-title {
                    font-size: 36px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0 0 16px 0;
                    letter-spacing: -0.5px;
                    line-height: 1.2;
                }

                .brand-red {
                    color: #dc2626;
                    font-weight: 600;
                }

                .section-subtitle {
                    font-size: 14px;
                    color: #64748b;
                    margin: 0 0 32px 0;
                    font-weight: 300;
                    line-height: 1.6;
                }

                .features-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .feature-card {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 16px;
                    padding: 20px 24px;
                    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.02);
                    transition: all 0.3s ease;
                    display: flex;
                    gap: 20px;
                    align-items: flex-start;
                }

                .feature-card:hover {
                    border-color: rgba(220, 38, 38, 0.4);
                    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.05);
                    transform: translateY(-2px);
                }

                .feature-number {
                    font-size: 12px;
                    font-weight: 600;
                    color: #dc2626;
                    letter-spacing: 1.5px;
                    background: rgba(220, 38, 38, 0.06);
                    padding: 6px 10px;
                    border-radius: 8px;
                    flex-shrink: 0;
                }

                .feature-content {
                    display: flex;
                    flex-direction: column;
                }

                .feature-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0 0 6px 0;
                    letter-spacing: -0.2px;
                }

                .feature-desc {
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.6;
                    font-weight: 300;
                    margin: 0;
                }
            `}</style>

            <div className="container">
                <div className="layout-grid">
                    <div className="image-column">
                        <img 
                            src="/images/whychoose.png" 
                            alt="Custom Embroidered Patches Craftsmanship" 
                        />
                    </div>

                    <div className="content-column">
                        <span className="badge-pill">Why Choose Us</span>
                        <h2 className="section-title">
                            Why Choose Our Custom <span className="brand-red">Embroidered Patches</span>
                        </h2>
                        <p className="section-subtitle">
                            We blend master craftsmanship, advanced stitching technologies, and unmatched customer service to bring your vision to life.
                        </p>

                        <div className="features-stack">
                            {features.map((item, index) => (
                                <div key={index} className="feature-card">
                                    <span className="feature-number">{item.number}</span>
                                    <div className="feature-content">
                                        <h3 className="feature-title">{item.title}</h3>
                                        <p className="feature-desc">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmbroideredWhyChooseUsSection;