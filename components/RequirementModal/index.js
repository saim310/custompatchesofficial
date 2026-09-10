import React, { useState } from 'react';

const RequirementModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        width: '',
        height: '',
        quantity: '',
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="modal-backdrop-custom">
            <style jsx>{`
                .modal-backdrop-custom {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(15, 23, 42, 0.6);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 20px;
                    overflow-y: auto;
                }

                .modal-box {
                    background: #ffffff;
                    width: 100%;
                    max-width: 680px;
                    border-radius: 24px;
                    border: 1px solid #e2e8f0;
                    padding: 40px;
                    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25);
                    position: relative;
                    animation: modalScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                @keyframes modalScaleIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.96);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .close-btn {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 50%;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: #0f172a;
                    font-size: 16px;
                    transition: all 0.2s ease;
                }

                .close-btn:hover {
                    background: #f1f5f9;
                    border-color: #cbd5e1;
                }

                .form-control-custom {
                    width: 100%;
                    padding: 12px 16px;
                    border: 1px solid #cbd5e1;
                    border-radius: 10px;
                    font-size: 14px;
                    color: #0f172a;
                    background: #ffffff;
                    outline: none;
                    transition: all 0.2s ease;
                }

                .form-control-custom:focus {
                    border-color: #e11d48;
                    box-shadow: 0 0 0 3px rgba(225, 29, 72, 0.08);
                }

                .form-label-custom {
                    font-size: 13px;
                    font-weight: 700;
                    color: #334155;
                    margin-bottom: 6px;
                    display: block;
                }

                .submit-btn {
                    background: #e11d48;
                    color: #ffffff;
                    width: 100%;
                    padding: 16px;
                    border-radius: 12px;
                    border: none;
                    font-weight: 700;
                    font-size: 15px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    box-shadow: 0 10px 20px rgba(225, 29, 72, 0.2);
                }

                .submit-btn:hover {
                    background: #be123c;
                }

                .file-input-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .file-upload-btn {
                    padding: 10px 16px;
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #0f172a;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .file-upload-btn:hover {
                    background: #f1f5f9;
                }
            `}</style>

            <div className="modal-box">
                <button className="close-btn" onClick={onClose}>✕</button>

                <div className="text-center mb-4">
                    <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                        Submit Your Requirement!
                    </h2>
                    <p style={{ fontSize: '14px', color: '#64748b' }}>
                        Bring your idea into reality
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label-custom">Width</label>
                            <input 
                                type="text" 
                                name="width" 
                                className="form-control-custom" 
                                value={formData.width} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label-custom">Height</label>
                            <input 
                                type="text" 
                                name="height" 
                                className="form-control-custom" 
                                value={formData.height} 
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label-custom">Quantity</label>
                            <input 
                                type="text" 
                                name="quantity" 
                                className="form-control-custom" 
                                value={formData.quantity} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label-custom">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control-custom" 
                                value={formData.name} 
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label-custom">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control-custom" 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label-custom">Phone</label>
                            <input 
                                type="text" 
                                name="phone" 
                                className="form-control-custom" 
                                value={formData.phone} 
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label-custom">Budget in your mind</label>
                            <input 
                                type="text" 
                                name="budget" 
                                className="form-control-custom" 
                                value={formData.budget} 
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label-custom">Message</label>
                            <textarea 
                                name="message" 
                                className="form-control-custom" 
                                rows="4" 
                                value={formData.message} 
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12">
                            <div className="file-input-wrapper">
                                <label className="file-upload-btn">
                                    Choose File
                                    <input 
                                        type="file" 
                                        name="file" 
                                        style={{ display: 'none' }} 
                                        onChange={handleChange} 
                                    />
                                </label>
                                <span style={{ fontSize: '13px', color: '#64748b' }}>
                                    {formData.file ? formData.file.name : 'No file chosen'}
                                </span>
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <button type="submit" className="submit-btn">
                                Get Quote Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RequirementModal;