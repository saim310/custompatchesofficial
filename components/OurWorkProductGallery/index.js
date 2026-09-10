import React, { useState, useEffect, useRef } from 'react';

const OurWorkProductGallery = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const sectionRef = useRef(null);

    // 9 product categories (Embroidered is fully populated, others ready for content)
    const productCategories = [
        {
            id: 'embroidered',
            name: 'Embroidered Patches',
            items: [
                { title: 'Tactical Morale Patch', subtitle: 'Military & Uniforms', image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80', desc: 'High-density olive drab threading with heavy-duty Velcro hook backing.' },
                { title: 'Biker Club Emblem', subtitle: 'Apparel & Jackets', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80', desc: 'Oversized back patch featuring a tight merrowed border and vibrant poly threads.' },
                { title: 'Varsity School Mascot', subtitle: 'Athletics & Sports', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', desc: 'Classic felt base fabric paired with crisp yellow and navy stitching.' }
            ]
        },
        {
            id: 'pvc',
            name: 'PVC Patches',
            items: [
                { title: 'PVC Sample Design 1', subtitle: 'Coming Soon', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80', desc: 'New custom molded rubberized designs are currently being added to this collection.' }
            ]
        },
        {
            id: 'chenille',
            name: 'Chenille Patches',
            items: [
                { title: 'Chenille Sample Design 1', subtitle: 'Coming Soon', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', desc: 'Fluffy yarn varsity collection items will be updated here shortly.' }
            ]
        },
        {
            id: 'woven',
            name: 'Woven Patches',
            items: [
                { title: 'Woven Sample Design 1', subtitle: 'Coming Soon', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80', desc: 'Fine thread flat-weave items are in the queue to be showcased here.' }
            ]
        },
        {
            id: 'leather',
            name: 'Leather Patches',
            items: [
                { title: 'Leather Sample Design 1', subtitle: 'Coming Soon', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80', desc: 'Debossed genuine hide designs will be displayed here soon.' }
            ]
        },
        {
            id: 'printed',
            name: 'Printed Patches',
            items: [
                { title: 'Printed Sample Design 1', subtitle: 'Coming Soon', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80', desc: 'Full-color dye sublimated prints are being added to this section.' }
            ]
        },
        {
            id: 'sequin',
            name: 'Sequin Patches',
            items: [
                { title: 'Sequin Sample Design 1', subtitle: 'Coming Soon', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80', desc: 'Shimmering fashion statement pieces will appear here shortly.' }
            ]
        },
        {
            id: 'sublimated',
            name: 'Sublimated Patches',
            items: [
                { title: 'Sublimated Sample Design 1', subtitle: 'Coming Soon', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80', desc: 'Gradient heat-pressed fabric transfers coming soon.' }
            ]
        },
        {
            id: 'bullet',
            name: 'Bullet / Specialized Patches',
            items: [
                { title: 'Specialized Sample Design 1', subtitle: 'Coming Soon', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', desc: 'Custom die-cut and reflective specialty tags will be showcased here.' }
            ]
        }
    ];

    const currentCategoryData = productCategories[selectedCategory];

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
        <section ref={sectionRef} className="all-work-section">
            <style jsx>{`
                .all-work-section {
                    background: #f8fafc;
                    padding: 80px 0;
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .all-work-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .header-block {
                    text-align: center;
                    margin-bottom: 50px;
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
                    margin: 0 0 12px 0;
                    letter-spacing: -0.5px;
                }

                .brand-red {
                    color: #dc2626;
                    font-weight: 600;
                }

                .section-subtitle {
                    font-size: 15px;
                    color: #64748b;
                    max-width: 600px;
                    margin: 0 auto;
                    font-weight: 300;
                    line-height: 1.6;
                }

                .category-slider-wrapper {
                    position: relative;
                    margin-bottom: 60px;
                    display: flex;
                    align-items: center;
                }

                .category-track {
                    display: flex;
                    gap: 12px;
                    overflow-x: auto;
                    scroll-behavior: smooth;
                    padding: 8px 4px;
                    width: 100%;
                    scrollbar-width: none;
                }

                .category-track::-webkit-scrollbar {
                    display: none;
                }

                .category-pill-btn {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    color: #475569;
                    font-size: 14px;
                    font-weight: 500;
                    padding: 12px 24px;
                    border-radius: 30px;
                    white-space: nowrap;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.02);
                    font-family: inherit;
                }

                .category-pill-btn:hover {
                    border-color: rgba(220, 38, 38, 0.5);
                    color: #dc2626;
                }

                .category-pill-btn.active {
                    background: #801313;
                    color: #ffffff;
                    border-color: #801313;
                    box-shadow: 0 4px 15px rgba(128, 19, 19, 0.25);
                }

                .showcase-container {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    border-radius: 24px;
                    padding: 40px;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
                    animation: fadeIn 0.5s ease-in-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .showcase-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    border-bottom: 1px solid #f1f5f9;
                    padding-bottom: 20px;
                }

                .showcase-category-title {
                    font-size: 24px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0;
                }

                .showcase-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 24px;
                }

                .showcase-card {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 16px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .showcase-card:hover {
                    border-color: rgba(220, 38, 38, 0.4);
                    transform: translateY(-4px);
                    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
                }

                .card-image-box {
                    height: 240px;
                    width: 100%;
                    overflow: hidden;
                    background: #e2e8f0;
                }

                .card-image-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .showcase-card:hover .card-image-box img {
                    transform: scale(1.05);
                }

                .card-content {
                    padding: 20px;
                }

                .card-subtitle {
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: #dc2626;
                    margin-bottom: 6px;
                    display: block;
                }

                .card-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: #0f172a;
                    margin: 0 0 8px 0;
                }

                .card-desc {
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.6;
                    font-weight: 300;
                    margin: 0;
                }
            `}</style>

            <div className="container">
                <div className="header-block">
                    <span className="badge-pill">Portfolio Showcase</span>
                    <h2 className="section-title">
                        Explore Our Crafted <span className="brand-red">Work</span>
                    </h2>
                    <p className="section-subtitle">
                        Select from our custom product categories below to inspect real craftsmanship and sample designs.
                    </p>
                </div>

                <div className="category-slider-wrapper">
                    <div className="category-track">
                        {productCategories.map((cat, index) => (
                            <button
                                key={cat.id}
                                className={`category-pill-btn ${selectedCategory === index ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(index)}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="showcase-container">
                    <div className="showcase-header">
                        <h3 className="showcase-category-title">{currentCategoryData.name} Portfolio</h3>
                        <span className="badge-pill" style={{ margin: 0 }}>{currentCategoryData.items.length} Featured Items</span>
                    </div>

                    <div className="showcase-grid">
                        {currentCategoryData.items.map((item, index) => (
                            <div key={index} className="showcase-card">
                                <div className="card-image-box">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="card-content">
                                    <span className="card-subtitle">{item.subtitle}</span>
                                    <h4 className="card-title">{item.title}</h4>
                                    <p className="card-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWorkProductGallery;