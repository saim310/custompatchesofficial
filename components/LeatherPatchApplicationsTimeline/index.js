import React, { useEffect, useRef } from 'react';

const LeatherPatchApplicationsTimeline = () => {
    const sectionRef = useRef(null);

    const applications = [
        {
            title: 'Rustic Headwear & Trucker Hats',
            category: 'Headwear & Caps',
            description: 'Elevate structured trucker caps, beanies, and dad hats with rich debossed or embossed leather patches that offer an instant rugged, high-end retail look.',
            image: '/images/applications/leather/trucker.png',
            align: 'right'
        },
        {
            title: 'Premium Denim & Outerwear Branding',
            category: 'Apparel & Jackets',
            description: 'Make a lasting statement on denim jeans, jacket sleeve panels, and canvas work jackets with custom leather branding that ages gracefully over time.',
            image: '/images/applications/leather/denim.png',
            align: 'left'
        },
        {
            title: 'Artisanal Duffel Bags & Travel Gear',
            category: 'Bags & Accessories',
            description: 'Transform canvas duffel bags, backpacks, and dopp kits into sophisticated, gift-ready products with minimalist debossed leather accent patches.',
            image: '/images/applications/leather/travel.png',
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

                .section-subtitle a {
                    color: #0f172a;
                    text-decoration: none;
                }

                .section-subtitle a:hover {
                    color: #dc2626;
                }

                /* Modern Zig-Zag Layout with Timeline Center Line */
                .timeline-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                    position: relative;
                }

                .timeline-wrapper::before {
                    content: '';
                    position: absolute;
                    top: 20px;
                    bottom: 20px;
                    left: 50%;
                    width: 2px;
                    background: #cbd5e1;
                    transform: translateX(-50%);
                    z-index: 1;
                }

                .timeline-item {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                    position: relative;
                    z-index: 2;
                }

                .timeline-item.reverse {
                    direction: rtl;
                }

                .timeline-item.reverse * {
                    direction: ltr;
                }

                @media (max-width: 768px) {
                    .timeline-wrapper::before {
                        display: none;
                    }
                    .timeline-item, .timeline-item.reverse {
                        grid-template-columns: 1fr;
                        direction: ltr;
                        gap: 30px;
                    }
                    .connector-line, .connector-dot {
                        display: none;
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

                .connector-line {
                    position: absolute;
                    right: -30px;
                    top: 50%;
                    width: 30px;
                    height: 2px;
                    background: repeating-linear-gradient(90deg, #dc2626, #dc2626 4px, transparent 4px, transparent 8px);
                    transform: translateY(-50%);
                    z-index: 3;
                }

                .timeline-item.reverse .connector-line {
                    right: auto;
                    left: -30px;
                }

                .connector-dot {
                    position: absolute;
                    right: -34px;
                    top: 50%;
                    width: 10px;
                    height: 10px;
                    background: #dc2626;
                    border-radius: 50%;
                    transform: translateY(-50%);
                    box-shadow: 0 0 8px rgba(220, 38, 38, 0.6);
                    z-index: 4;
                }

                .timeline-item.reverse .connector-dot {
                    right: auto;
                    left: -34px;
                }

                /* Transparent image container */
                .image-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: transparent;
                    border: none;
                    box-shadow: none;
                    padding: 20px;
                }

                .image-container img {
                    width: auto;
                    max-width: 100%;
                    max-height: 280px;
                    object-fit: contain;
                    transition: transform 0.5s ease;
                    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.08));
                }

                .content-card:hover + .image-container img,
                .image-container:hover img {
                    transform: scale(1.05);
                }
            `}</style>

            <div className="container">
                <div className="header-block">
                    <span className="badge-pill">Endless Applications</span>
                    <h2 className="section-title">
                        Crafted for <span className="brand-red">Premium Apparel, Brands & Accessories</span>
                    </h2>
                    <p className="section-subtitle">
                        Our <a href="/Leather-Patches"><b>custom leather patches</b></a> combine durability with a timeless appearance. Whether you need patches for a fashion brand, hat company, outdoor gear, or personal project, we create personalized leather designs that complement your products and brand identity.
                    </p>
                </div>

                <div className="timeline-wrapper">
                    {applications.map((app, index) => {
                        const isImageLeft = app.align === 'left';
                        return (
                            <div key={index} className={`timeline-item ${isImageLeft ? 'reverse' : ''}`}>
                                <div className="content-card">
                                    <span className="card-category">{app.category}</span>
                                    <h3 className="card-title">{app.title}</h3>
                                    <p className="card-desc">{app.description}</p>
                                    
                                    <div className="connector-line"></div>
                                    <div className="connector-dot"></div>
                                </div>
                                <div className="image-container">
                                    <img src={app.image} alt={app.title} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LeatherPatchApplicationsTimeline;