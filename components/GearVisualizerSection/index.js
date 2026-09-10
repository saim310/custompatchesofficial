import React, { useState, useEffect, useRef } from 'react';

const GearVisualizerSection = () => {
    const [activeTab, setActiveTab] = useState('jackets');
    const containerRef = useRef(null);

    const gearData = {
        jackets: {
            title: "Denim & Biker Jackets",
            recommendedPatch: "Embroidered & Chenille Patches",
            description: "Heavyweight fabrics like denim and leather pair best with high-density embroidered patches or vintage chenille for iconic back panel placement.",
            bestBacking: "Iron-On or Sew-On",
            image: "/images/gear/denim2.jpg",
            popularSizes: "3.5\" to 12\" Back Patches"
        },
        caps: {
            title: "Snapbacks & Trucker Hats",
            recommendedPatch: "Leather & High-Detail Woven Patches",
            description: "Structured front panels require lightweight, flexible patches. Genuine leather and woven designs keep clean lines without bulging.",
            bestBacking: "Heat-Seal / Iron-On",
            image: "/images/gear/cap.png",
            popularSizes: "2.0\" to 2.5\" Front Crests"
        },
        tactical: {
            title: "Tactical Vests & Backpacks",
            recommendedPatch: "Durable 3D PVC Patches",
            description: "Waterproof, weather-resistant PVC patches are built for extreme outdoor conditions, mud, and heavy wear on tactical gear and backpacks.",
            bestBacking: "Velcro (Hook & Loop)",
            image: "/images/gear/bag.png",
            popularSizes: "3.0\" x 2.0\" Standard Morale"
        },
        uniforms: {
            title: "Corporate & Team Workwear",
            recommendedPatch: "Precision Woven & Merrowed Border Patches",
            description: "Maintain sharp corporate identity with fine lettering and crisp merrowed borders that withstand industrial washing.",
            bestBacking: "Sew-On or Iron-On",
            image: "/images/gear/uniform.png",
            popularSizes: "3.0\" Sleeve & Chest Logos"
        }
    };

    // Identical Scroll Observer logic
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

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section style={{ background: '#ffffff', padding: '90px 0' }}>
            <style jsx>{`
                .gear-container {
                    opacity: 0;
                    transform: translateY(40px) scale(0.96);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .gear-container.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .gear-tab-btn {
                    padding: 14px 24px;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    background: #f8fafc;
                    color: #475569;
                    font-size: 15px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .gear-tab-btn:hover {
                    background: #f1f5f9;
                    border-color: #cbd5e1;
                }

                .gear-tab-btn.active {
                    background: #0f172a;
                    color: #ffffff;
                    border-color: #0f172a;
                    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.15);
                }

                .preview-card {
                    background: #f8fafc;
                    border-radius: 24px;
                    border: 1px solid #e2e8f0;
                    padding: 32px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
            `}</style>

            <div className="container">
                <div className="gear-container" ref={containerRef}>
                    {/* Header */}
                    <div className="row text-center mb-5">
                        <div className="col-12" style={{ maxWidth: '750px', margin: '0 auto' }}>
                            <span style={{ fontSize: '13px', fontWeight: '700', color: '#ff6b6b', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                                Application Showcase
                            </span>
                            <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0f172a', lineHeight: '1.2' }}>
                                Find the Perfect Patch for Your Gear
                            </h2>
                            <p style={{ fontSize: '15px', color: '#64748b', marginTop: '12px' }}>
                                Select your placement item below to see our recommended patch types, backing styles, and standard dimensions.
                            </p>
                        </div>
                    </div>

                    {/* Interactive Grid */}
                    <div className="row g-4 align-items-stretch">
                        {/* Gear Type Selectors */}
                        <div className="col-lg-5">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', justifyContent: 'center' }}>
                                <button 
                                    className={`gear-tab-btn ${activeTab === 'jackets' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('jackets')}
                                >
                                    <span>🧥 Jackets & Denim</span>
                                    <span style={{ fontSize: '12px', opacity: 0.8 }}>→</span>
                                </button>

                                <button 
                                    className={`gear-tab-btn ${activeTab === 'caps' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('caps')}
                                >
                                    <span>🧢 Caps & Snapbacks</span>
                                    <span style={{ fontSize: '12px', opacity: 0.8 }}>→</span>
                                </button>

                                <button 
                                    className={`gear-tab-btn ${activeTab === 'tactical' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('tactical')}
                                >
                                    <span>🎒 Tactical Gear & Bags</span>
                                    <span style={{ fontSize: '12px', opacity: 0.8 }}>→</span>
                                </button>

                                <button 
                                    className={`gear-tab-btn ${activeTab === 'uniforms' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('uniforms')}
                                >
                                    <span>👔 Workwear & Uniforms</span>
                                    <span style={{ fontSize: '12px', opacity: 0.8 }}>→</span>
                                </button>
                            </div>
                        </div>

                        {/* Visual Display Box */}
                        <div className="col-lg-7">
                            <div className="preview-card">
                                <div>
                                    <div style={{ width: '100%', height: '240px', borderRadius: '16px', overflow: 'hidden', background: '#e2e8f0', marginBottom: '24px' }}>
                                        <img 
                                            src={gearData[activeTab].image} 
                                            alt={gearData[activeTab].title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease' }}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                                            {gearData[activeTab].title}
                                        </h3>
                                        <span style={{ background: '#ffe4e6', color: '#e11d48', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>
                                            Recommended
                                        </span>
                                    </div>

                                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', marginBottom: '20px' }}>
                                        {gearData[activeTab].description}
                                    </p>
                                </div>

                                {/* Spec Details Bar */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: '#ffffff', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <div>
                                        <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>Best Patch Style</span>
                                        <strong style={{ fontSize: '13px', color: '#0f172a' }}>{gearData[activeTab].recommendedPatch}</strong>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>Suggested Backing</span>
                                        <strong style={{ fontSize: '13px', color: '#0f172a' }}>{gearData[activeTab].bestBacking}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GearVisualizerSection;