import React, { useEffect, useRef } from 'react';

const EmbroideredPatchApplicationsTimeline = () => {
    const sectionRef = useRef(null);

    const applications = [
        {
            title: 'Military & Tactical Units',
            category: 'UNIFORMS & GEAR',
            description: 'Represent units, ranks, insignia, missions, and accomplishments with custom military patches built for tactical gear, uniforms, and service apparel.',
            image: 'images/applications/Embroidered/military.png',
            align: 'right' // Text left, Image right
        },
        {
            title: 'Fashion & Biker Clubs',
            category: 'APPAREL & JACKETS',
            description: 'Add a bold statement to jackets, denim, streetwear, and club apparel with custom embroidered patches featuring detailed designs and durable stitching.',
            image: '/images/applications/Embroidered/BIKE.png',
            align: 'left' // Image left, Text right
        },
        {
            title: 'School, Sports & Athletics',
            category: 'VARSITY & TEAMWEAR',
            description: 'Show team spirit with custom patches for varsity jackets, jerseys, sports bags, school apparel, and championship merchandise. Create designs that represent your team and achievements.',
            image: '/images/applications/Embroidered/sports.png',
            align: 'right' // Text left, Image right
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
                    position: relative;
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

                /* Modern Zig-Zag Layout with Continuous Center Line */
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

                /* Seamless Connecting Line & Centered Dot spanning to the center axis */
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

                /* Transparent Image Styling */
                .image-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: transparent;
                    border: none;
                    box-shadow: none;
                    padding: 10px;
                    position: relative;
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
                        Engineered for Every <span className="brand-red">Industry & Style</span>
                    </h2>
                    <p className="section-subtitle">
                        Our <a href="/Embroidered-Patches"><b>custom embroidered patches</b></a> are designed for a wide range of industries and styles. From military uniforms and tactical gear to fashion, biker clubs, schools, sports teams, and branded apparel, we create patches with detailed embroidery and durable construction.
                    </p>
                </div>

                <div className="timeline-wrapper">
                    {applications.map((app, index) => (
                        <div key={index} className={`timeline-item ${app.align === 'left' ? 'reverse' : ''}`}>
                            <div className="content-card">
                                <span className="card-category">{app.category}</span>
                                <h3 className="card-title">{app.title}</h3>
                                <p className="card-desc">{app.description}</p>
                                
                                {/* Connector line & dot linking the card to the center timeline */}
                                <div className="connector-line"></div>
                                <div className="connector-dot"></div>
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