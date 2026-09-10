import React, { useState, useEffect, useRef } from 'react';

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    const faqs = [
        {
            question: "What is the minimum order quantity (MOQ) for custom patches?",
            answer: "Our minimum order quantity starts as low as 10 to 50 pieces depending on the patch style (embroidered, PVC, woven, or leather). We also offer significant volume discounts for larger orders."
        },
        {
            question: "How long does production and shipping take?",
            answer: "Standard production takes approximately 7 to 9 business days after digital proof approval. Express production options (5 to 7 days) and worldwide tracked shipping are available upon request."
        },
        {
            question: "Are there any setup, digitizing, or hidden artwork fees?",
            answer: "No. We offer 100% free digital proofs, free artwork setup, and zero digitizing charges. You only pay for the patches and shipping."
        },
        {
            question: "What backing options do you provide?",
            answer: "We offer Iron-On (Heat Seal), Hook & Loop (Velcro), Sew-On (No Backing), Peel & Stick (Adhesive), and Magnetic Backings."
        },
        {
            question: "What file formats can I upload for my design?",
            answer: "We accept high-resolution PNG, JPG, PDF, AI, PSD, SVG, and EPS files. If you only have a rough sketch, our graphic design team can help digitize it for free."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Scroll-triggered entry animation
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
        <section style={{ background: '#f8fafc', padding: '90px 0', color: '#0f172a' }}>
            <style jsx>{`
                .faq-container {
                    opacity: 0;
                    transform: translateY(40px) scale(0.97);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .faq-container.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .faq-item {
                    background: #ffffff;
                    border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    margin-bottom: 16px;
                    overflow: hidden;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                }

                .faq-item.active {
                    border-color: #dc2626;
                    box-shadow: 0 10px 25px rgba(220, 38, 38, 0.05);
                }

                .faq-header {
                    width: 100%;
                    padding: 22px 28px;
                    background: none;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    text-align: left;
                    font-size: 17px;
                    font-weight: 700;
                    color: #0f172a;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }

                .faq-header:hover {
                    color: #dc2626;
                }

                .icon-toggle {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: #f1f5f9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #0f172a;
                    font-size: 16px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }

                .faq-item.active .icon-toggle {
                    background: #dc2626;
                    color: #ffffff;
                    transform: rotate(180deg);
                }

                .faq-body {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease;
                    padding: 0 28px;
                }

                .faq-item.active .faq-body {
                    max-height: 200px;
                    padding: 0 28px 24px 28px;
                }

                .faq-answer {
                    font-size: 15px;
                    color: #64748b;
                    line-height: 1.7;
                    margin: 0;
                }
            `}</style>

            <div className="container">
                <div className="faq-container" ref={containerRef}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5">
                                <span style={{ fontSize: '13px', fontWeight: '800', color: '#dc2626', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                                    Got Questions?
                                </span>
                                <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                                    Frequently Asked Questions
                                </h2>
                            </div>

                            <div className="faq-accordion">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className={`faq-item ${activeIndex === idx ? 'active' : ''}`}>
                                        <button className="faq-header" onClick={() => toggleAccordion(idx)}>
                                            <span>{faq.question}</span>
                                            <span className="icon-toggle">
                                                {activeIndex === idx ? '−' : '+'}
                                            </span>
                                        </button>
                                        <div className="faq-body">
                                            <p className="faq-answer">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;