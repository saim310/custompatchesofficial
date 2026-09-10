import React from 'react';

const PromoBannerSection = () => {
    return (
        <section style={{ backgroundColor: '#0f172a', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="row align-items-center g-4">
                    {/* Left Text Content */}
                    <div className="col-lg-6">
                        <span style={{ fontSize: '13px', fontWeight: '700', color: '#ff6b6b', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                            Premium Quality
                        </span>
                        <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#ffffff', lineHeight: '1.2', marginBottom: '20px' }}>
                            Custom Patches <br />for Every Style
                        </h2>
                        <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '30px', maxWidth: '480px' }}>
                            High-quality embroidered and woven patches for your apparel, bags, hats, and more. Turn your ideas into patches that stand out.
                        </p>

                        {/* Feature Icons Row */}
                        <div className="row g-3">
                            <div className="col-6 col-sm-3">
                                <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '16px 12px', borderRadius: '12px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '18px', color: '#38bdf8', marginBottom: '6px' }}>🛡️</div>
                                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff', display: 'block' }}>PREMIUM QUALITY</span>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3">
                                <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '16px 12px', borderRadius: '12px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '18px', color: '#38bdf8', marginBottom: '6px' }}>🎨</div>
                                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff', display: 'block' }}>FULLY CUSTOMIZABLE</span>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3">
                                <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '16px 12px', borderRadius: '12px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '18px', color: '#38bdf8', marginBottom: '6px' }}>⚡</div>
                                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff', display: 'block' }}>FAST TURNAROUND</span>
                                </div>
                            </div>
                            <div className="col-6 col-sm-3">
                                <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '16px 12px', borderRadius: '12px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '18px', color: '#38bdf8', marginBottom: '6px' }}>✨</div>
                                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff', display: 'block' }}>BUILT TO LAST</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Mockup Display / Address Card */}
                    <div className="col-lg-6">
                        <div style={{ 
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)', 
                            border: '1px solid rgba(255, 255, 255, 0.1)', 
                            borderRadius: '24px', 
                            padding: '40px', 
                            position: 'relative',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
                        }}>
                            <span style={{ background: '#e11d48', color: '#ffffff', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Headquarters & Studio
                            </span>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', marginTop: '16px', marginBottom: '12px' }}>
                                Visit Our Production Studio
                            </h3>
                            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '24px' }}>
                                Drop by our main workshop to check out physical patch samples, fabric catalogs, and talk face-to-face with our design team.
                            </p>

                            <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <div style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ color: '#38bdf8' }}>📍</span> <strong>Address:</strong> 742 Evergreen Terrace, Springfield, OR 97477
                                </div>
                                <div style={{ fontSize: '13px', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ color: '#38bdf8' }}>⏰</span> <strong>Hours:</strong> Mon – Fri: 9:00 AM – 6:00 PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBannerSection;