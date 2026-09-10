import React, { useEffect, useRef } from 'react';

const EmbroideredPatchApplicationsTimeline = () => {
    const sectionRef = useRef(null);

    const applications = [
        {
            title: 'Military & Tactical Units',
            category: 'Uniforms & Gear',
            description: 'Represent units, rank insignia, and mission accomplishments with ultra-durable embroidered patches built for tactical field gear and service uniforms.',
            image: '/images/embroidered-military.png',
            align: 'right'
        },
        {
            title: 'Fashion & Biker Clubs',
            category: 'Apparel & Jackets',
            description: 'Make a bold statement on leather vests, denim jackets, and streetwear lines with high-stitch density and thick merrowed borders.',
            image: '/images/embroidered-apparel.png',
            align: 'left'
        },
        {
            title: 'School, Sports & Athletics',
            category: 'Varsity & Teamwear',
            description: 'Outfit varsity jackets, sports jerseys, and spirit gear with custom personalized emblems showcasing school mascots and championship wins.',
            image: '/images/embroidered-athletics.png',
            align: 'right'
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
        <section ref={sectionRef} className="applications-section">
            <style jsx>{`
                .applications-section {
                    background: #f1f5f9;
                    padding: 100px 0;
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .applications-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .container {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .header-block {
                    text-align: center;
                    margin-bottom: 80px;
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
                    margin: 0 0 16px 0;
                    letter-spacing: -0.5px;
                }

                .brand-red {
                    color: #dc2626;
                    font-weight: 600;
                }

                .section-subtitle {
                    font-size: 15px;
                    color: #64748b;
                    max-width: 600px;
                    margin: 0 auto;
                    font-weight: 300;
                    line-height: 1.6;
                }

                /* Modern Zig-Zag Layout */
                .timeline-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                    position: relative;
                }

                .timeline-item {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    align-items: center;
                }

                .timeline-item.reverse {
                    direction: rtl;
                }

                .timeline-item.reverse * {
                    direction: ltr;
                }

                @media (max-width: 768px) {
                    .timeline-item, .timeline-item.reverse {
                        grid-template-columns: 1fr;
                        direction: ltr;
                    }
                }

                .content-card {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 20px;
                    padding: 36px;
                    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
                    transition: all 0.3s ease;
                    position: relative;
                }

                .content-card:hover {
                    border-color: rgba(220, 38, 38, 0.4);
                    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
                    transform: translateY(-3px);
                }

                .card-category {
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: #dc2626;
                    margin-bottom: 8px;
                    display: block;
                }

                .card-title {
                    font-size: 22px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0 0 12px 0;
                }

                .card-desc {
                    font-size: 14px;
                    color: #64748b;
                    line-height: 1.7;
                    font-weight: 300;
                    margin: 0;
                }

                .image-container {
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid #cbd5e1;
                    background: #ffffff;
                    height: 280px;
                    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
                }

                .image-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .content-card:hover + .image-container img,
                .image-container:hover img {
                    transform: scale(1.03);
                }
            `}</style>

            <div className="container">
                <div className="header-block">
                    <span className="badge-pill">Endless Applications</span>
                    <h2 className="section-title">
                        Engineered for Every <span className="brand-red">Industry & Style</span>
                    </h2>
                    <p className="section-subtitle">
                        Discover how our high-density embroidered emblems elevate uniforms, fashion apparel, and custom gear across multiple sectors.
                    </p>
                </div>

                <div className="timeline-wrapper">
                    {applications.map((app, index) => (
                        <div key={index} className={`timeline-item ${app.align === 'left' ? 'reverse' : ''}`}>
                            <div className="content-card">
                                <span className="card-category">{app.category}</span>
                                <h3 className="card-title">{app.title}</h3>
                                <p className="card-desc">{app.description}</p>
                            </div>
                            <div className="image-container">
                                <img src={app.image} alt={app.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmbroideredPatchApplicationsTimeline;