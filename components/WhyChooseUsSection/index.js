import React, { useState, useEffect, useRef } from 'react';

const PatchTypeVisualizer = () => {
    const [activePatch, setActivePatch] = useState('embroidered');
    const containerRef = useRef(null);

    const patchTypes = {
        embroidered: {
            name: "Embroidered Patches",
            tagline: "Classic Textured Look & Feel",
            description: "The traditional standard for custom patches. Features raised thread stitching over a twill base for a classic, textured 3D effect.",
            turnaround: "7–10 Business Days",
            minOrder: "10 Pieces",
            bestFor: "Uniforms, Denim Jackets, Snapbacks, Workwear",
            features: [
                "Up to 8 thread colors included",
                "Choice of 50%, 75%, or 100% coverage",
                "Merrowed or heat-cut edge finishes"
            ]
        },
        pvc: {
            name: "3D PVC Patches",
            tagline: "Ultra-Durable & Weatherproof",
            description: "Made from soft, flexible rubber that withstands heat, rain, and rugged outdoor wear without fading, fraying, or cracking.",
            turnaround: "10–12 Business Days",
            minOrder: "25 Pieces",
            bestFor: "Tactical Vests, Outdoor Gear, Backpacks, Rain Jackets",
            features: [
                "Waterproof & easy to clean",
                "Layered 3D sculpted depth",
                "Ideal for outdoor and tactical gear"
            ]
        },
        woven: {
            name: "Woven Patches",
            tagline: "High-Definition Detail & Fine Text",
            description: "Uses thinner threads woven directly together to capture tight gradients, small lettering, and intricate details impossible with standard embroidery.",
            turnaround: "8–10 Business Days",
            minOrder: "25 Pieces",
            bestFor: "Small Logos, Intricate Designs, Sleeves, Caps",
            features: [
                "Smooth, flat-surface finish",
                "Sharp detail for small fonts",
                "Thin profile with clean lines"
            ]
        },
        chenille: {
            name: "Chenille Patches",
            tagline: "Vintage Plush Varsity Style",
            description: "Soft, fuzzy yarn loops crafted onto a felt backing. The iconic choice for letterman jackets, award patches, and retro streetwear.",
            turnaround: "10–14 Business Days",
            minOrder: "10 Pieces",
            bestFor: "Varsity Jackets, Hoodies, Retro Apparel",
            features: [
                "Plush, high-pile wool texture",
                "Heavy-duty felt backing base",
                "Bold, high-impact designs"
            ]
        },
        leather: {
            name: "Leather & Genuine Suede",
            tagline: "Premium Rustic Craftsmanship",
            description: "Debossed or laser-engraved real leather patches that add an upscale, rustic finish to hats, beanies, and outerwear.",
            turnaround: "8–12 Business Days",
            minOrder: "25 Pieces",
            bestFor: "Hats, Beanies, Premium Brand Apparel",
            features: [
                "Genuine or eco-friendly faux leather",
                "Precision laser-engraved details",
                "Rich natural color tones"
            ]
        }
    };

    // Global scroll observer animation
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

    const currentData = patchTypes[activePatch];

    return (
        <section style={{ background: '#f8fafc', padding: '90px 0' }}>
            <style jsx>{`
                .visualizer-container {
                    opacity: 0;
                    transform: translateY(40px) scale(0.96);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .visualizer-container.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .patch-tab-btn {
                    width: 100%;
                    padding: 16px 20px;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    background: #ffffff;
                    color: #334155;
                    font-size: 15px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .patch-tab-btn:hover {
                    background: #f1f5f9;
                    border-color: #cbd5e1;
                }

                .patch-tab-btn.active {
                    background: #0f172a;
                    color: #ffffff;
                    border-color: #0f172a;
                    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12);
                }

                .feature-list-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    color: #475569;
                    margin-bottom: 8px;
                }
            `}</style>

            <div className="container">
                <div className="visualizer-container" ref={containerRef}>
                    {/* Section Header */}
                    <div className="row text-center mb-5">
                        <div className="col-12" style={{ maxWidth: '720px', margin: '0 auto' }}>
                            <span style={{ fontSize: '13px', fontWeight: '700', color: '#ff6b6b', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                                Premium Materials
                            </span>
                            <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0f172a', lineHeight: '1.2' }}>
                                Explore Custom Patch Options
                            </h2>
                            <p style={{ fontSize: '15px', color: '#64748b', marginTop: '12px' }}>
                                Compare styles, turnarounds, and features to choose the exact material for your project.
                            </p>
                        </div>
                    </div>

                    {/* Interactive Grid */}
                    <div className="row g-4 align-items-stretch">
                        {/* Tab List */}
                        <div className="col-lg-4">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {Object.keys(patchTypes).map((key) => (
                                    <button
                                        key={key}
                                        className={`patch-tab-btn ${activePatch === key ? 'active' : ''}`}
                                        onClick={() => setActivePatch(key)}
                                    >
                                        <span>{patchTypes[key].name}</span>
                                        <span style={{ fontSize: '12px', opacity: 0.7 }}>→</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Display Card */}
                        <div className="col-lg-8">
                            <div style={{ 
                                background: '#ffffff', 
                                borderRadius: '24px', 
                                border: '1px solid #e2e8f0', 
                                padding: '40px', 
                                height: '100%', 
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div className="mb-4">
                                    <span style={{ background: '#ffe4e6', color: '#e11d48', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>
                                        {currentData.tagline}
                                    </span>
                                    <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginTop: '14px', marginBottom: '12px' }}>
                                        {currentData.name}
                                    </h3>
                                    <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', marginBottom: '20px' }}>
                                        {currentData.description}
                                    </p>
                                    <div>
                                        {currentData.features.map((feat, index) => (
                                            <div className="feature-list-item" key={index}>
                                                <span style={{ color: '#22c55e', fontWeight: 'bold' }}>✓</span>
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Spec Bar */}
                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: 'repeat(3, 1fr)', 
                                    gap: '12px', 
                                    background: '#f8fafc', 
                                    padding: '20px', 
                                    borderRadius: '16px', 
                                    border: '1px solid #e2e8f0' 
                                }}>
                                    <div>
                                        <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>Turnaround</span>
                                        <strong style={{ fontSize: '13px', color: '#0f172a' }}>{currentData.turnaround}</strong>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>Min Order</span>
                                        <strong style={{ fontSize: '13px', color: '#0f172a' }}>{currentData.minOrder}</strong>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>Ideal For</span>
                                        <strong style={{ fontSize: '13px', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>
                                            {currentData.bestFor}
                                        </strong>
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

export default PatchTypeVisualizer;