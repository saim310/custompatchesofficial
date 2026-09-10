import React, { useState, useEffect, useRef } from 'react';

const PatchEstimatorLight = () => {
    const [patchType, setPatchType] = useState('embroidered');
    const [quantity, setQuantity] = useState(100);
    const [size, setSize] = useState('3.0');
    const [backing, setBacking] = useState('ironOn');
    const containerRef = useRef(null);

    // Pricing calculation logic
    const basePrices = {
        embroidered: 1.80,
        pvc: 2.20,
        woven: 1.60,
        leather: 2.50,
        chenille: 3.00
    };

    const backingAddons = {
        sewOn: 0.00,
        ironOn: 0.20,
        velcro: 0.45,
        adhesive: 0.30
    };

    const calculateEstimatedTotal = () => {
        const base = basePrices[patchType] || 1.80;
        const addon = backingAddons[backing] || 0;
        const sizeMultiplier = parseFloat(size) / 3.0;
        
        let qtyDiscount = 1.0;
        if (quantity >= 500) qtyDiscount = 0.65;
        else if (quantity >= 200) qtyDiscount = 0.78;
        else if (quantity >= 100) qtyDiscount = 0.88;

        const unitPrice = (base * sizeMultiplier + addon) * qtyDiscount;
        return {
            unitPrice: unitPrice.toFixed(2),
            totalPrice: (unitPrice * quantity).toFixed(2),
            estDays: patchType === 'pvc' || patchType === 'chenille' ? '10–12 Days' : '7–9 Days'
        };
    };

    const est = calculateEstimatedTotal();

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

    return (
        <section style={{ background: '#f8fafc', color: '#0f172a', padding: '90px 0' }}>
            <style jsx>{`
                .estimator-container {
                    opacity: 0;
                    transform: translateY(40px) scale(0.96);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .estimator-container.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .select-field {
                    width: 100%;
                    padding: 12px 16px;
                    border-radius: 10px;
                    border: 1px solid #cbd5e1;
                    background: #ffffff;
                    color: #0f172a;
                    font-size: 14px;
                    font-weight: 500;
                    outline: none;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                }

                .select-field:focus {
                    border-color: #dc2626;
                    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
                }

                .opt-btn {
                    padding: 10px 14px;
                    border-radius: 8px;
                    border: 1px solid #cbd5e1;
                    background: #ffffff;
                    color: #475569;
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .opt-btn:hover {
                    background: #f1f5f9;
                    border-color: #94a3b8;
                }

                .opt-btn.active {
                    background: #0f172a;
                    color: #ffffff;
                    border-color: #0f172a;
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
                }

                .cta-btn {
                    background: #dc2626;
                    color: #ffffff;
                    padding: 12px 24px;
                    border-radius: 10px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25);
                }

                .cta-btn:hover {
                    background: #b91c1c;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(220, 38, 38, 0.35);
                }
            `}</style>

            <div className="container">
                <div className="estimator-container" ref={containerRef}>
                    <div className="row g-5 align-items-center">
                        {/* Left Side Info */}
                        <div className="col-lg-5">
                            <span style={{ fontSize: '13px', fontWeight: '700', color: '#dc2626', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                                Instant Quote Estimator
                            </span>
                            <h2 style={{ fontSize: '38px', fontWeight: '800', lineHeight: '1.2', color: '#0f172a', marginBottom: '20px' }}>
                                Calculate Your Custom Order in Seconds
                            </h2>
                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', marginBottom: '28px' }}>
                                Select your material, size, and quantity to view dynamic pricing, factory turnaround times, and bulk volume discounts instantly.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ color: '#dc2626', fontWeight: 'bold' }}>✓</span>
                                    <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500' }}>100% Free Digital Proofs & Revisions</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ color: '#dc2626', fontWeight: 'bold' }}>✓</span>
                                    <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500' }}>No Setup or Digitizing Charges</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ color: '#dc2626', fontWeight: 'bold' }}>✓</span>
                                    <span style={{ fontSize: '14px', color: '#334155', fontWeight: '500' }}>Tracked Express Shipping Worldwide</span>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Calculator Box */}
                        <div className="col-lg-7">
                            <div style={{ 
                                background: '#ffffff', 
                                padding: '36px', 
                                borderRadius: '24px', 
                                border: '1px solid #e2e8f0', 
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04)' 
                            }}>
                                <div className="row g-4 mb-4">
                                    {/* Select Patch Type */}
                                    <div className="col-md-6">
                                        <label style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                                            1. Patch Material Style
                                        </label>
                                        <select className="select-field" value={patchType} onChange={(e) => setPatchType(e.target.value)}>
                                            <option value="embroidered">Embroidered (Classic)</option>
                                            <option value="pvc">3D PVC / Rubber</option>
                                            <option value="woven">Woven (High Detail)</option>
                                            <option value="leather">Leather / Engraved</option>
                                            <option value="chenille">Chenille (Varsity)</option>
                                        </select>
                                    </div>

                                    {/* Select Patch Size */}
                                    <div className="col-md-6">
                                        <label style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                                            2. Estimated Size (Inches)
                                        </label>
                                        <select className="select-field" value={size} onChange={(e) => setSize(e.target.value)}>
                                            <option value="2.0">2.0" (Small Crest / Cap)</option>
                                            <option value="3.0">3.0" (Standard Chest / Sleeve)</option>
                                            <option value="4.0">4.0" (Large Uniform / Jacket)</option>
                                            <option value="5.0">5.0"+ (Extra Large Back Patch)</option>
                                        </select>
                                    </div>

                                    {/* Select Quantity */}
                                    <div className="col-12">
                                        <label style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                                            3. Select Quantity
                                        </label>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                                            {[50, 100, 200, 500].map((qty) => (
                                                <button
                                                    key={qty}
                                                    type="button"
                                                    className={`opt-btn ${quantity === qty ? 'active' : ''}`}
                                                    onClick={() => setQuantity(qty)}
                                                >
                                                    {qty} Pcs
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Select Backing */}
                                    <div className="col-12">
                                        <label style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                                            4. Backing Option
                                        </label>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                                            {[
                                                { key: 'ironOn', label: 'Iron-On' },
                                                { key: 'velcro', label: 'Velcro' },
                                                { key: 'sewOn', label: 'Sew-On' },
                                                { key: 'adhesive', label: 'Peel&Stick' }
                                            ].map((item) => (
                                                <button
                                                    key={item.key}
                                                    type="button"
                                                    className={`opt-btn ${backing === item.key ? 'active' : ''}`}
                                                    onClick={() => setBacking(item.key)}
                                                >
                                                    {item.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Results Box */}
                                <div style={{ 
                                    background: '#f1f5f9', 
                                    borderRadius: '16px', 
                                    padding: '20px 24px', 
                                    border: '1px solid #e2e8f0', 
                                    display: 'flex', 
                                    justify: 'space-between', 
                                    alignItems: 'center', 
                                    flexWrap: 'wrap', 
                                    gap: '16px' 
                                }}>
                                    <div>
                                        <span style={{ fontSize: '12px', color: '#64748b', display: 'block', fontWeight: '600' }}>Estimated Unit Cost</span>
                                        <strong style={{ fontSize: '28px', color: '#0f172a', fontWeight: '800' }}>${est.unitPrice} <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 'normal' }}>/ea</span></strong>
                                    </div>

                                    <div>
                                        <span style={{ fontSize: '12px', color: '#64748b', display: 'block', fontWeight: '600' }}>Turnaround Time</span>
                                        <strong style={{ fontSize: '18px', color: '#16a34a', fontWeight: '700' }}>{est.estDays}</strong>
                                    </div>

                                    <a href="#contact" className="cta-btn">
                                        Lock In This Rate →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PatchEstimatorLight;