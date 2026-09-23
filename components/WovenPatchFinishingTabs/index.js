import React, { useState, useEffect, useRef } from 'react';

const EmbroideredPatchFinishingTabs = () => {
    const [activeTab, setActiveTab] = useState('backing');
    const sectionRef = useRef(null);

    const contentData = {
        backing: {
            subtitle: 'We offer multiple backing styles for different application needs:',
            items: [
                {
                    title: 'Sew-on',
                    description: 'Get a strong and permanent patch application with sew-on patches for jackets, uniforms and heavy fabrics.',
                    image: '/images/sew-on.png'
                },
                {
                    title: 'Iron-on',
                    description: 'For quick application, pick iron-on patches. Stick them on the fabric surface with a heat-activated backing.',
                    image: '/images/iron-on.png'
                },
                {
                    title: 'Peel and Stick',
                    description: 'Apply a patch for temporary usage with peel-and-stick backing, ideal for repositioning and short-term usage.',
                    image: '/images/peel-stick.png'
                },
                {
                    title: 'Velcro Backing',
                    description: 'It comes with a strong hook and loop system, flexible to wear and remove anytime.',
                    image: '/images/velcro-backing.png'
                }
            ]
        },
        materials: {
            subtitle: 'Choose from high-grade base fabrics built for durability and texture:',
            items: [
                {
                    title: 'Pollyster Twill',
                    description: 'The industry standard base fabric offering a clean, traditional surface texture for high-density embroidery.',
                    image: '/images/embroidered-polyster.webp'
                },
                {
                    title: 'Felt Fabric',
                    description: 'Soft, textured vintage backing ideal for classic varsity letters, chenille patches, and retro aesthetics.',
                    image: '/images/embroidered-felt.webp'
                },
                {
                    title: 'Cotton Twill',
                    description: 'High-visibility safety fabric engineered to shine brightly under direct light sources at night.',
                    image: '/images/embroidered-cotton.webp'
                },
                
            ]
        },
        borders: {
            subtitle: 'Select the ideal border finish to frame and seal your custom patches:',
            items: [
                {
                    title: 'Merrowed Border',
                    description: 'A thick, tightly stitched overlock border standard for standard shapes like circles, rectangles, and shields.',
                    image: '/images/embroidered-merrowed.webp'
                },
                {
                    title: 'Hot Cut Border',
                    description: 'Clean thermal-sealed edges tightly following custom or complex die-cut contours without bulky threads.',
                    image: '/images/embroidered-heat.webp'
                },
                {
                    title: 'Laser Cut Border',
                    description: 'Ultra-precise precision edges sealed cleanly via laser technology for intricate shapes and emblems.',
                    image: '/images/embroidered-laser.webp'
                }
            ]
        }
    };

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
        <section ref={sectionRef} className="finishing-section">
            <style jsx>{`
                .finishing-section {
                    background: #f8fafc;
                    padding: 100px 0;
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .finishing-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                    text-align: center;
                }

                .badge-top {
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
                }

                .section-title {
                    font-size: 38px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0 0 24px 0;
                    letter-spacing: -0.5px;
                }

                /* Tabs Navigation */
                .tabs-nav {
                    display: inline-flex;
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    padding: 6px;
                    border-radius: 40px;
                    gap: 6px;
                    margin-bottom: 16px;
                    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.02);
                }

                .tab-btn {
                    background: transparent;
                    border: none;
                    padding: 10px 24px;
                    font-size: 14px;
                    font-weight: 500;
                    color: #475569;
                    border-radius: 30px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }

                .tab-btn.active {
                    background: #801313;
                    color: #ffffff;
                    box-shadow: 0 4px 12px rgba(128, 19, 19, 0.25);
                }

                .tab-btn:hover:not(.active) {
                    color: #dc2626;
                }

                .section-subtitle {
                    font-size: 15px;
                    color: #64748b;
                    margin: 0 0 50px 0;
                    font-weight: 300;
                }

                /* Cards Grid */
                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                    text-align: left;
                }

                @media (max-width: 1024px) {
                    .cards-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 640px) {
                    .cards-grid {
                        grid-template-columns: 1fr;
                    }
                    .tabs-nav {
                        display: flex;
                        flex-direction: column;
                        border-radius: 20px;
                        width: 100%;
                    }
                }

                .finishing-card {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .finishing-card:hover {
                    border-color: rgba(220, 38, 38, 0.5);
                    transform: translateY(-4px);
                    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
                }

                .card-image-wrap {
                    width: 140px;
                    height: 140px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-bottom: 20px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);
                }

                .card-image-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .finishing-card:hover .card-image-wrap img {
                    transform: scale(1.08);
                }

                .card-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0 0 10px 0;
                }

                .card-desc {
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.6;
                    font-weight: 300;
                    margin: 0;
                }
            `}</style>

            <div className="container">
                <span className="badge-top">Embroidered Patch Finishing</span>
                <h2 className="section-title">Backing and Border Options</h2>

                <div className="tabs-nav">
                    <button 
                        className={`tab-btn ${activeTab === 'backing' ? 'active' : ''}`}
                        onClick={() => setActiveTab('backing')}
                    >
                        Backing Options
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'materials' ? 'active' : ''}`}
                        onClick={() => setActiveTab('materials')}
                    >
                        Premium Base Materials
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'borders' ? 'active' : ''}`}
                        onClick={() => setActiveTab('borders')}
                    >
                        Border Options
                    </button>
                </div>

                <p className="section-subtitle">{contentData[activeTab].subtitle}</p>

                <div className="cards-grid">
                    {contentData[activeTab].items.map((item, index) => (
                        <div key={index} className="finishing-card">
                            <div className="card-image-wrap">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmbroideredPatchFinishingTabs;