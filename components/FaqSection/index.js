import React, { useState, useEffect, useRef } from 'react';

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

const faqs = [
    {
        question: "What Is the Minimum Order Quantity (MOQ) for Custom Patches?",
        answer: "Our custom patch minimum order quantity typically starts from 10 to 50 pieces, depending on the patch type, material, and design. Larger quantities may also qualify for better bulk pricing."
    },
    {
        question: "How Long Does Production and Shipping Take?",
        answer: "Production time depends on the patch type, order quantity, and design complexity. Once your design is approved, we’ll provide an estimated production and shipping timeline before starting your order."
    },
    {
        question: "Are There Any Setup, Digitizing, or Hidden Artwork Fees?",
        answer: "We keep our pricing transparent. Any digitizing, setup, or artwork-related costs will be clearly communicated before production, so you know the total cost in advance."
    },
    {
        question: "What Backing Options Do You Provide?",
        answer: "We offer several custom patch backing options, including iron-on, sew-on, adhesive, and hook-and-loop (Velcro) backing. The best option depends on how and where you plan to use your patches."
    },
    {
        question: "What File Formats Can I Upload for My Design?",
        answer: "You can provide common design formats such as PNG, JPG, PDF, AI, EPS, and SVG. High-resolution or vector artwork is preferred for creating accurate and detailed custom patches."
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