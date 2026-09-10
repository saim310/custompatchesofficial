import React, { useEffect, useRef } from 'react';

const AboutValuesSection = () => {
    const sectionRef = useRef(null);

    const values = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ),
            title: 'Uncompromised Quality',
            description: 'We use high-grade thread, durable twill backings, and premium 3D PVC molds so your custom patches resist fading and wear over time.'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Absolute Accuracy',
            description: 'Every stitch map and digital proof is carefully reviewed against your exact brand colors, proportions, and detail requirements.'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: 'Rapid Turnaround',
            description: 'Fast digital proofing combined with high-speed automated production line ensuring your order ships right on deadline.'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: 'Customer First Support',
            description: 'No hidden setup fees, free artwork proofs, and direct communication with actual digitizing experts every step of the way.'
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
        <section ref={sectionRef} className="values-section">
            <style jsx>{`
                .values-section {
                    background: #f1f5f9;
                    padding: 100px 0;
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .values-section.animate-in {
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

                .values-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 28px;
                }

                @media (max-width: 768px) {
                    .values-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .value-card {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 16px;
                    padding: 32px;
                    display: flex;
                    gap: 20px;
                    align-items: flex-start;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.02);
                }

                .value-card:hover {
                    border-color: rgba(220, 38, 38, 0.4);
                    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
                    transform: translateY(-3px);
                }

                .icon-box {
                    width: 52px;
                    height: 52px;
                    border-radius: 12px;
                    background: rgba(220, 38, 38, 0.08);
                    color: #dc2626;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .value-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0 0 8px 0;
                }

                .value-desc {
                    font-size: 14px;
                    color: #64748b;
                    line-height: 1.65;
                    font-weight: 300;
                    margin: 0;
                }
            `}</style>

            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <span className="badge-pill">Why Trust Us</span>
                    <h2 className="section-title">Our Core Commitments</h2>
                    <p className="section-subtitle">
                        Every custom patch we produce is grounded in standard craftsmanship, quick response times, and total reliability.
                    </p>
                </div>

                <div className="values-grid">
                    {values.map((item, index) => (
                        <div key={index} className="value-card">
                            <div className="icon-box">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="value-title">{item.title}</h3>
                                <p className="value-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutValuesSection;