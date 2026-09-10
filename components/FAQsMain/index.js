import React, { useState, useRef, useEffect } from 'react';

const FAQsMain = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const sectionRef = useRef(null);

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

    const faqData = [
        {
            category: 'Ordering & Artwork',
            question: 'What file formats do you accept for custom patch designs?',
            answer: 'We accept vector and high-resolution raster formats including AI, EPS, PDF, PSD, PNG, and JPG. If you only have a rough sketch or photo, our expert digitizers can recreate or refine your artwork for production.'
        },
        {
            category: 'Ordering & Artwork',
            question: 'Is there a minimum order quantity (MOQ) for custom patches?',
            answer: 'We strive to accommodate projects of all sizes. While our standard pricing offers great volume breaks, we also provide low-minimum options for select styles like embroidered and PVC patches.'
        },
        {
            category: 'Pricing & Shipping',
            question: 'Are there any hidden setup fees or digitizing charges?',
            answer: 'No hidden fees! We offer free digital proofs and complimentary standard setup/digitizing for qualifying orders so you only pay for the final crafted patches.'
        },
        {
            category: 'Pricing & Shipping',
            question: 'What is the typical turnaround time for delivery?',
            answer: 'Standard production typically takes about 7 to 10 business days following your digital proof approval. Expedited rush shipping options are also available if you are on a tight deadline.'
        },
        {
            category: 'Patch Types & Care',
            question: 'What is the difference between iron-on, velcro, and sew-on backings?',
            answer: 'Iron-on backings allow you to apply patches easily with a household iron or heat press. Velcro (hook and loop) backings are ideal for tactical gear, hats, and uniforms that require frequent swapping. Sew-on backings provide the most permanent, heavy-duty attachment.'
        },
        {
            category: 'Patch Types & Care',
            question: 'How should I wash garments with custom patches attached?',
            answer: 'For embroidered and woven patches, we recommend turning the garment inside out and washing on a cold, gentle cycle. For PVC or leather patches, spot cleaning or gentle hand washing helps preserve the material longevity.'
        }
    ];

    const categories = ['All', 'Ordering & Artwork', 'Pricing & Shipping', 'Patch Types & Care'];

    const filteredFaqs = faqData.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section ref={sectionRef} className="faq-page-section">
            <style jsx>{`
                .faq-page-section {
                    position: relative;
                    width: 100%;
                    padding: 90px 0;
                    background: linear-gradient(180deg, rgba(241, 245, 249, 0.92) 0%, rgba(226, 232, 240, 0.96) 100%);
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    box-sizing: border-box;
                }

                .faq-page-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .container {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .badge-faq {
                    display: inline-block;
                    border: 1px solid rgba(220, 38, 38, 0.5);
                    color: #dc2626;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    padding: 5px 16px;
                    border-radius: 20px;
                    margin-bottom: 20px;
                    background: rgba(220, 38, 38, 0.06);
                }

                .main-heading {
                    font-size: 40px;
                    font-weight: 400;
                    line-height: 1.25;
                    color: #0f172a;
                    margin: 0 0 16px 0;
                    letter-spacing: -0.3px;
                }

                .brand-red {
                    color: #dc2626;
                    font-weight: 600;
                }

                .sub-heading {
                    font-size: 15px;
                    color: #475569;
                    line-height: 1.7;
                    margin: 0 0 36px 0;
                    font-weight: 300;
                }

                .search-bar-wrap {
                    position: relative;
                    margin-bottom: 30px;
                }

                .search-input {
                    width: 100%;
                    padding: 14px 20px 14px 45px;
                    font-size: 14px;
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 12px;
                    outline: none;
                    color: #0f172a;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.02);
                }

                .search-input:focus {
                    border-color: rgba(220, 38, 38, 0.6);
                    box-shadow: 0 4px 20px rgba(220, 38, 38, 0.08);
                }

                .search-icon {
                    position: absolute;
                    left: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94a3b8;
                    font-size: 16px;
                }

                .category-filters {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    margin-bottom: 40px;
                }

                .filter-btn {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    color: #475569;
                    padding: 8px 18px;
                    font-size: 13px;
                    font-weight: 500;
                    border-radius: 20px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .filter-btn:hover {
                    border-color: #94a3b8;
                    color: #0f172a;
                }

                .filter-btn.active {
                    background: #dc2626;
                    border-color: #dc2626;
                    color: #ffffff;
                }

                .accordion-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .accordion-item {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.02);
                }

                .accordion-item:hover {
                    border-color: rgba(220, 38, 38, 0.4);
                }

                .accordion-header {
                    width: 100%;
                    padding: 20px 24px;
                    background: none;
                    border: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    text-align: left;
                    font-size: 16px;
                    font-weight: 500;
                    color: #0f172a;
                }

                .accordion-icon {
                    width: 24px;
                    height: 24px;
                    background: rgba(220, 38, 38, 0.08);
                    color: #dc2626;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    font-weight: 600;
                    flex-shrink: 0;
                    margin-left: 16px;
                    transition: transform 0.3s ease, background 0.3s ease;
                }

                .accordion-item.open .accordion-icon {
                    transform: rotate(45deg);
                    background: #dc2626;
                    color: #ffffff;
                }

                .accordion-body {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.35s ease;
                    padding: 0 24px;
                    color: #475569;
                    font-size: 14px;
                    line-height: 1.7;
                    font-weight: 300;
                }

                .accordion-item.open .accordion-body {
                    max-height: 200px;
                    padding: 0 24px 24px 24px;
                }

                .no-results {
                    text-align: center;
                    padding: 40px;
                    color: #64748b;
                    font-size: 14px;
                }

                @media (max-width: 768px) {
                    .main-heading {
                        font-size: 30px;
                    }
                    .accordion-header {
                        font-size: 15px;
                        padding: 16px 18px;
                    }
                    .accordion-item.open .accordion-body {
                        padding: 0 18px 18px 18px;
                    }
                }
            `}</style>

            <div className="container">
                <span className="badge-faq">Support Center</span>

                <h1 className="main-heading">
                    Frequently Asked Questions about our <span className="brand-red">Custom Patches</span>
                </h1>

                <p className="sub-heading">
                    Find comprehensive answers regarding artwork requirements, ordering processes, shipping windows, and patch backing options.
                </p>

                <div className="search-bar-wrap">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search questions or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="category-filters">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="accordion-list">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((item, index) => (
                            <div
                                key={index}
                                className={`accordion-item ${activeIndex === index ? 'open' : ''}`}
                            >
                                <button
                                    className="accordion-header"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span>{item.question}</span>
                                    <span className="accordion-icon">+</span>
                                </button>
                                <div className="accordion-body">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            No matching questions found. Try searching for something else or contact support directly.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FAQsMain;