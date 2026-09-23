import React, { useState, useEffect, useRef } from 'react';

const EmbroideredFAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const sectionRef = useRef(null);

   const faqs = [
    {
        question: 'What Are Custom Woven Patches?',
        answer: 'Woven patches are made by weaving threads closely together to create a smooth surface that works well for detailed designs and small text.'
    },
    {
        question: 'When Should I Choose Woven Patches?',
        answer: 'Custom woven patches are a good choice when your design includes fine details, small lettering, or intricate logos.'
    },
    {
        question: 'Can You Make Custom Woven Logo Patches?',
        answer: 'Yes, we can create custom woven logo patches using your business logo, artwork, text, or branding elements.'
    },
    {
        question: 'Are Woven Patches Suitable for Clothing?',
        answer: 'Yes. Woven patches can be used on jackets, shirts, uniforms, hats, bags, and other suitable apparel and accessories.'
    },
    {
        question: 'Can I Choose the Shape and Size?',
        answer: 'Yes. You can customize the shape, size, colors, artwork, and backing according to your requirements.'
    },
    {
        question: 'Are Woven Patches Lightweight?',
        answer: 'Yes. Woven patches generally have a smooth and lightweight construction, making them suitable for clothing, hats, bags, and accessories.'
    },
    {
        question: 'What is the minimum order quantity (MOQ) for woven patches?',
        answer: 'We accommodate orders of all scales, ranging from small-batch runs for independent brands to large-scale commercial production with flexible pricing tiers.'
    },
    {
        question: 'Are there any setup or digitization fees?',
        answer: 'No! We provide completely free artwork setup and professional vector optimization so you never pay extra upfront fees to bring your custom design to life.'
    },
    {
        question: 'What backing options should I choose for my apparel?',
        answer: 'Sew-on backings provide the most permanent hold for heavy garments, iron-on options offer quick thermal application, and Velcro hook-and-loop systems are ideal for caps, tactical gear, and interchangeable apparel.'
    },
    {
        question: 'What file formats do you accept for custom artwork?',
        answer: 'We accept high-resolution vector files such as AI, EPS, PDF, as well as standard image formats like PNG and JPEG. Our team will optimize your file for precision thread weaving.'
    },
    {
        question: 'How long does production and delivery take?',
        answer: 'Standard production cycles typically complete within a few business days, followed by prompt delivery straight to your doorstep. Expedited options are also available for rush orders.'
    }
];
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
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
        <section ref={sectionRef} className="embroidered-faq-section">
            <style jsx>{`
                .embroidered-faq-section {
                    background: #f1f5f9;
                    padding: 100px 0;
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .embroidered-faq-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .header-block {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .badge-pill {
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
                    margin: 0 0 16px 0;
                    letter-spacing: -0.5px;
                }

                .brand-red {
                    color: #dc2626;
                    font-weight: 600;
                }

                .section-subtitle {
                    font-size: 15px;
                    color: #64748b;
                    max-width: 550px;
                    margin: 0 auto;
                    font-weight: 300;
                    line-height: 1.6;
                }

                .accordion-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .accordion-item {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.02);
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                }

                .accordion-item.active {
                    border-color: rgba(220, 38, 38, 0.4);
                    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.05);
                }

                .accordion-header {
                    width: 100%;
                    background: transparent;
                    border: none;
                    padding: 24px;
                    text-align: left;
                    font-size: 17px;
                    font-weight: 600;
                    color: #0f172a;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    font-family: inherit;
                }

                .accordion-header:hover {
                    color: #dc2626;
                }

                .accordion-icon {
                    font-size: 20px;
                    font-weight: 400;
                    color: #dc2626;
                    transition: transform 0.3s ease;
                }

                .accordion-item.active .accordion-icon {
                    transform: rotate(45deg);
                }

                .accordion-body {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease;
                    padding: 0 24px;
                }

                .accordion-item.active .accordion-body {
                    max-height: 200px;
                    padding: 0 24px 24px 24px;
                }

                .accordion-content {
                    font-size: 14px;
                    color: #64748b;
                    line-height: 1.7;
                    font-weight: 300;
                    margin: 0;
                    border-top: 1px solid #f1f5f9;
                    padding-top: 16px;
                }
            `}</style>

            <div className="container">
                <div className="header-block">
                    <span className="badge-pill">Got Questions?</span>
                    <h2 className="section-title">
                        Frequently Asked <span className="brand-red">Questions</span>
                    </h2>
                    <p className="section-subtitle">
                        Find clear answers regarding custom embroidery file uploads, backing selections, turnarounds, and pricing.
                    </p>
                </div>

                <div className="accordion-stack">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button 
                                className="accordion-header"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="accordion-icon">+</span>
                            </button>
                            <div className="accordion-body">
                                <p className="accordion-content">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmbroideredFAQAccordion;