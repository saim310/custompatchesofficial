import React, { useState, useEffect, useRef } from 'react';

const ContactArea = (props) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        patchType: '',
        phone: '',
        file: null,
        message: ''
    });

    const [fileName, setFileName] = useState('Attach design / mockups');
    const containerRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
            setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Quote Request Submitted:', formData);
        alert('Your quote request has been received!');
    };

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
        <section className={`wpo-contact-area ${props.contactclass || ''}`} style={{ background: '#f4f6f9', padding: '100px 0' }}>
            <style jsx>{`
                .contact-section-container {
                    opacity: 0;
                    transform: translateY(40px) scale(0.97);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .contact-section-container.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .quote-card {
                    background: #ffffff;
                    border-radius: 28px;
                    padding: 44px;
                    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
                    border: 1px solid #e2e8f0;
                }

                .form-control-custom {
                    width: 100%;
                    padding: 15px 20px;
                    border-radius: 12px;
                    border: 1.5px solid #e2e8f0;
                    background: #f8fafc;
                    color: #0f172a;
                    font-size: 14px;
                    font-weight: 500;
                    outline: none;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .form-control-custom:focus {
                    border-color: #dc2626;
                    background: #ffffff;
                    box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.1);
                }

                .file-upload-box {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #f8fafc;
                    border: 1.5px dashed #cbd5e1;
                    border-radius: 12px;
                    padding: 8px 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .file-upload-box:hover {
                    border-color: #dc2626;
                    background: #fef2f2;
                }

                .upload-badge {
                    background: #0f172a;
                    color: #ffffff;
                    padding: 8px 16px;
                    border-radius: 8px;
                    font-size: 12px;
                    font-weight: 700;
                }

                .info-card-item {
                    background: #ffffff;
                    padding: 20px;
                    border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .info-card-item:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
                }

                .icon-box-red {
                    width: 52px;
                    height: 52px;
                    border-radius: 14px;
                    background: #dc2626;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .submit-btn-glow {
                    width: 100%;
                    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
                    color: #ffffff;
                    border: none;
                    padding: 18px;
                    border-radius: 12px;
                    font-size: 16px;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 20px rgba(220, 38, 38, 0.3);
                }

                .submit-btn-glow:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 28px rgba(220, 38, 38, 0.4);
                }
            `}</style>

            <div className="container">
                <div className="contact-section-container" ref={containerRef}>
                    <div className="row g-5 align-items-center">
                        {/* Left Side Info */}
                        <div className="col-lg-5">
                            <span style={{ fontSize: '12px', fontWeight: '800', color: '#dc2626', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                                Instant Quote Request
                            </span>
                            
                            <h2 style={{ fontSize: '40px', fontWeight: '900', color: '#0f172a', lineHeight: '1.2', marginBottom: '20px' }}>
                                Premium Custom Patches Built for Your Brand
                            </h2>

                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', marginBottom: '32px' }}>
                                Send us your artwork or design ideas. Our expert patch digitizers will review your request and send an accurate quote within 24 hours.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                                <div className="info-card-item">
                                    <div className="icon-box-red">
                                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', display: 'block' }}>URGENT ORDERS</span>
                                        <a href="tel:+18608351486" style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', textDecoration: 'none' }}>
                                            +1 (860) 835–1486
                                        </a>
                                    </div>
                                </div>

                                <div className="info-card-item">
                                    <div className="icon-box-red" style={{ background: '#0f172a' }}>
                                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', display: 'block' }}>DIRECT EMAIL</span>
                                        <a href="mailto:info@americancustompatch.com" style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', textDecoration: 'none' }}>
                                            info@americancustompatch.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Form Card */}
                        <div className="col-lg-7">
                            <div className="quote-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                                    <div>
                                        <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Get a Free Quote</h3>
                                        <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>No setup fees & free digital artwork proof</p>
                                    </div>
                                    <span style={{ background: '#fef2f2', color: '#dc2626', fontSize: '12px', fontWeight: '700', padding: '6px 14px', borderRadius: '20px' }}>
                                        Fast Turnaround
                                    </span>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="fullName"
                                                placeholder="Full Name *"
                                                className="form-control-custom"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address *"
                                                className="form-control-custom"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="companyName"
                                                placeholder="Company / Brand Name"
                                                className="form-control-custom"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <select
                                                name="patchType"
                                                className="form-control-custom"
                                                value={formData.patchType}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled selected>Select Patch Style</option>
                                                <option value="embroidered">Embroidered Patches</option>
                                                <option value="pvc">3D PVC / Rubber Patches</option>
                                                <option value="woven">Woven Patches</option>
                                                <option value="chenille">Chenille / Varsity Patches</option>
                                                <option value="leather">Leather Patches</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                className="form-control-custom"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* Custom File Upload Box */}
                                        <div className="col-md-6">
                                            <label htmlFor="patch-artwork-input" className="file-upload-box" style={{ width: '100%', margin: 0 }}>
                                                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: '8px' }}>
                                                    {fileName}
                                                </span>
                                                <span className="upload-badge">Upload</span>
                                            </label>
                                            <input
                                                type="file"
                                                id="patch-artwork-input"
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                                accept="image/*,.pdf,.ai,.psd"
                                            />
                                        </div>

                                        <div className="col-12">
                                            <textarea
                                                name="message"
                                                rows="4"
                                                placeholder="Project details (e.g. Patch size, quantity, backing type, backing preference)..."
                                                className="form-control-custom"
                                                style={{ resize: 'none' }}
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>

                                        <div className="col-12 mt-4">
                                            <button type="submit" className="submit-btn-glow">
                                                Request Free Quote & Proof →
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactArea;