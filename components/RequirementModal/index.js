import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const RequirementModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [mounted, setMounted] = useState(false);
    
    // Ensure portal only renders on client-side (Next.js compatibility)
    useEffect(() => {
        setMounted(true);
    }, []);

    const [formData, setFormData] = useState({
        width: '3',
        height: '3',
        productType: 'Embroidered Patches',
        backing: 'Iron on / Heat Seal',
        quantity: '',
        name: '',
        email: '',
        phone: '',
        instructions: '',
        budget: '',
        file: null
    });

    if (!isOpen || !mounted) return null;

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Quote request submitted successfully!');
        onClose();
    };

    // Render modal directly into document.body to bypass header layout stacking contexts
    return ReactDOM.createPortal(
        <div style={styles.overlay}>
            <div style={styles.modalCard}>
                {/* Header */}
                <div style={styles.header}>
                    <h3 style={styles.title}>Get a Custom Quote</h3>
                    <button onClick={onClose} style={styles.closeBtn}>×</button>
                </div>

                {/* Progress bar indicator */}
                <div style={styles.progressBarContainer}>
                    <div style={{ ...styles.progressBar, width: `${(step / 3) * 100}%` }}></div>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    {/* STEP 1: Dimensions & Product Type */}
                    {step === 1 && (
                        <div style={styles.stepContainer}>
                            <h4 style={styles.stepTitle}>Step 1: Specifications & Style</h4>
                            
                            <div style={styles.row}>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Width (inches) *</label>
                                    <input 
                                        type="number" 
                                        name="width" 
                                        value={formData.width} 
                                        onChange={handleChange} 
                                        style={styles.input} 
                                        min="1" 
                                        max="20" 
                                        step="0.5" 
                                        required 
                                    />
                                </div>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Height (inches) *</label>
                                    <input 
                                        type="number" 
                                        name="height" 
                                        value={formData.height} 
                                        onChange={handleChange} 
                                        style={styles.input} 
                                        min="1" 
                                        max="20" 
                                        step="0.5" 
                                        required 
                                    />
                                </div>
                            </div>

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Product Type *</label>
                                <select name="productType" value={formData.productType} onChange={handleChange} style={styles.input}>
                                    <option value="Embroidered Patches">Embroidered Patches</option>
                                    <option value="Woven Patches">Woven Patches</option>
                                    <option value="PVC Patches">PVC Patches</option>
                                    <option value="Chenille Patches">Chenille Patches</option>
                                    <option value="Leather Patches">Leather Patches</option>
                                    <option value="Sublimated Patches">Printed / Sublimated Patches</option>
                                </select>
                            </div>

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Backing Option *</label>
                                <select name="backing" value={formData.backing} onChange={handleChange} style={styles.input}>
                                    <option value="Iron on / Heat Seal">Iron on / Heat Seal</option>
                                    <option value="Velcro (Hook & Loop)">Velcro (Hook & Loop)</option>
                                    <option value="Sew On (No Backing)">Sew On (No Backing)</option>
                                    <option value="Peel & Stick (Adhesive)">Peel & Stick (Adhesive)</option>
                                    <option value="Safety Pin">Safety Pin</option>
                                </select>
                            </div>

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Quantity *</label>
                                <input 
                                    type="number" 
                                    name="quantity" 
                                    placeholder="e.g. 50, 100, 500" 
                                    value={formData.quantity} 
                                    onChange={handleChange} 
                                    style={styles.input} 
                                    required 
                                />
                            </div>

                            <button type="button" onClick={nextStep} style={styles.nextBtn}>
                                Next Step →
                            </button>
                        </div>
                    )}

                    {/* STEP 2: Artwork & Instructions */}
                    {step === 2 && (
                        <div style={styles.stepContainer}>
                            <h4 style={styles.stepTitle}>Step 2: Artwork & Details</h4>

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Upload Design / Artwork *</label>
                                <input 
                                    type="file" 
                                    name="file" 
                                    onChange={handleChange} 
                                    style={styles.fileInput} 
                                    required 
                                />
                                <span style={styles.hint}>Supports PNG, JPG, AI, PDF, PSD vector/image files.</span>
                            </div>

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Special Instructions / Notes</label>
                                <textarea 
                                    name="instructions" 
                                    rows="3" 
                                    placeholder="Describe border types, thread color preferences..." 
                                    value={formData.instructions} 
                                    onChange={handleChange} 
                                    style={styles.textarea}
                                ></textarea>
                            </div>

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Targeted Budget ($)</label>
                                <input 
                                    type="text" 
                                    name="budget" 
                                    placeholder="Optional budget goal" 
                                    value={formData.budget} 
                                    onChange={handleChange} 
                                    style={styles.input} 
                                />
                            </div>

                            <div style={styles.btnRow}>
                                <button type="button" onClick={prevStep} style={styles.backBtn}>
                                    ← Back
                                </button>
                                <button type="button" onClick={nextStep} style={styles.nextBtn}>
                                    Next Step →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Contact Info */}
                    {step === 3 && (
                        <div style={styles.stepContainer}>
                            <h4 style={styles.stepTitle}>Step 3: Contact Information</h4>

                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Your Name *</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="John Doe" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    style={styles.input} 
                                    required 
                                />
                            </div>

                            <div style={styles.row}>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Email Address *</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="john@example.com" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        style={styles.input} 
                                        required 
                                    />
                                </div>
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        placeholder="+1 (555) 000-0000" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        style={styles.input} 
                                    />
                                </div>
                            </div>

                            <div style={styles.btnRow}>
                                <button type="button" onClick={prevStep} style={styles.backBtn}>
                                    ← Back
                                </button>
                                <button type="submit" style={styles.submitBtn}>
                                    Submit Free Quote Request 🚀
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>,
        document.body
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'flex-start',
        zIndex: 999999,
        animation: 'fadeIn 0.3s ease'
    },
    modalCard: {
        width: '100%',
        maxWidth: '480px',
        height: '100%',
        backgroundColor: '#0f172a',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '10px 0 30px rgba(0,0,0,0.5)',
        overflowY: 'auto'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    },
    title: {
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: '700',
        margin: 0
    },
    closeBtn: {
        background: 'none',
        border: 'none',
        color: '#94a3b8',
        fontSize: '28px',
        cursor: 'pointer'
    },
    progressBarContainer: {
        width: '100%',
        height: '4px',
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#e11d48',
        transition: 'width 0.3s ease'
    },
    form: {
        padding: '24px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    stepContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    stepTitle: {
        color: '#f8fafc',
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '8px'
    },
    row: {
        display: 'flex',
        gap: '12px'
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        flex: 1
    },
    label: {
        color: '#cbd5e1',
        fontSize: '12px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    },
    input: {
        backgroundColor: '#1e293b',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        padding: '12px',
        color: '#ffffff',
        fontSize: '14px',
        outline: 'none',
        width: '100%'
    },
    textarea: {
        backgroundColor: '#1e293b',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        padding: '12px',
        color: '#ffffff',
        fontSize: '14px',
        outline: 'none',
        resize: 'vertical'
    },
    fileInput: {
        color: '#94a3b8',
        fontSize: '13px',
        padding: '8px 0'
    },
    hint: {
        color: '#64748b',
        fontSize: '11px'
    },
    btnRow: {
        display: 'flex',
        gap: '12px',
        marginTop: '16px'
    },
    nextBtn: {
        backgroundColor: '#e11d48',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        padding: '14px',
        fontWeight: '700',
        fontSize: '14px',
        cursor: 'pointer',
        width: '100%',
        marginTop: '12px',
        boxShadow: '0 4px 14px rgba(225, 29, 72, 0.4)'
    },
    backBtn: {
        backgroundColor: '#1e293b',
        color: '#cbd5e1',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        padding: '14px',
        fontWeight: '600',
        fontSize: '14px',
        cursor: 'pointer',
        flex: 1,
        marginTop: '12px'
    },
    submitBtn: {
        backgroundColor: '#10b981',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        padding: '14px',
        fontWeight: '700',
        fontSize: '14px',
        cursor: 'pointer',
        flex: 2,
        marginTop: '12px',
        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
    }
};

export default RequirementModal;