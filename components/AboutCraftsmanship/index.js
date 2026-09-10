import React, { useEffect, useRef } from 'react';

const AboutCraftsmanship = () => {
    const sectionRef = useRef(null);

    const steps = [
        {
            number: '01',
            title: 'Artwork & Digitizing',
            description: 'Send us your artwork or rough sketch. Our expert patch digitizers convert your logo into precise embroidery patterns with high-density thread mapping.'
        },
        {
            number: '02',
            title: 'Free Digital Proof',
            description: 'Before production starts, we provide a 100% free digital proof. You review every detail, color code, and size dimension to ensure complete accuracy.'
        },
        {
            number: '03',
            title: 'Precision Crafting',
            description: 'Using high-speed Tajima embroidery machines and premium PVC molds, we manufacture your custom patches with exact edge merrowing and backing.'
        },
        {
            number: '04',
            title: 'Quality Inspection',
            description: 'Every single patch undergoes a strict manual quality check for stitch density, border cleanliness, and adhesion before being shipped express to your door.'
        }
    ];

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
        <section ref={sectionRef} className="craftsmanship-section">
            <style jsx>{`
                .craftsmanship-section {
                    background: #f8fafc;
                    padding: 100px 0;
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .craftsmanship-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .badge-pill {
                    display: inline-block;
                    border: 1px solid rgba(220, 38, 38, 0.5);
                    color: #dc2626;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    padding: 5px 16px;
                    border-radius: 20px;
                    margin-bottom: 16px;
                    background: rgba(220, 38, 38, 0.06);
                }

                .section-title {
                    font-size: 38px;
                    font-weight: 400;
                    color: #0f172a;
                    margin-bottom: 16px;
                    letter-spacing: -0.5px;
                }

                .section-subtitle {
                    font-size: 15px;
                    color: #64748b;
                    max-width: 600px;
                    margin: 0 auto 60px auto;
                    font-weight: 300;
                    line-height: 1.6;
                }

                .steps-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                }

                @media (max-width: 992px) {
                    .steps-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 576px) {
                    .steps-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .step-card {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 16px;
                    padding: 32px 24px;
                    position: relative;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.02);
                }

                .step-card:hover {
                    border-color: rgba(220, 38, 38, 0.5);
                    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
                    transform: translateY(-4px);
                }

                .step-number {
                    font-size: 28px;
                    font-weight: 600;
                    color: #dc2626;
                    margin-bottom: 16px;
                    display: block;
                }

                .step-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #0f172a;
                    margin-bottom: 12px;
                }

                .step-desc {
                    font-size: 14px;
                    color: #64748b;
                    line-height: 1.65;
                    font-weight: 300;
                    margin: 0;
                }
            `}</style>

            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <span className="badge-pill">How We Work</span>
                    <h2 className="section-title">Our Production Process</h2>
                    <p className="section-subtitle">
                        From digital vectors to finished threads, see how we deliver custom patch craftsmanship with speed and precision.
                    </p>
                </div>

                <div className="steps-grid">
                    {steps.map((step, idx) => (
                        <div key={idx} className="step-card">
                            <span className="step-number">{step.number}</span>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutCraftsmanship;