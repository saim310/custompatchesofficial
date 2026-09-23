import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const PatchTypesSection = (props) => {
    const patchTypes = [
        { id: 1, title: "Embroidered Patches", description: "Create a classic textured look with our custom embroidered patches. Detailed stitching and quality threads make them ideal for jackets, uniforms, hats, bags, and branded clothing.", image: "/images/patches/embroidered.png", link: "/Embroidered-Patches" },
        { id: 2, title: "Iron-on Patches", description: "Add your design quickly and easily with custom iron-on patches. Featuring a heat-activated backing, these patches are convenient for applying to shirts, jackets, uniforms, bags, and other fabrics.", image: "/images/patches/iron-on.png", link: "/Embroidered-Patches" },
        { id: 3, title: "Military Patches", description: "Represent your unit, rank, achievement, or organization with custom military patches. We create durable designs suitable for uniforms, tactical clothing, bags, and other gear.", image: "/images/patches/military.png", link: "/Embroidered-Patches" },
        { id: 4, title: "Woven Patches", description: "For detailed designs and smaller lettering, custom woven patches provide a smooth and lightweight finish. They are a great choice for logos, labels, branding, and fashion applications.", image: "/images/patches/woven.png", link: "/Woven-Patches" },
        { id: 5, title: "Chenille Patches", description: "Give your apparel a bold, textured appearance with custom chenille patches. Their soft, raised design makes them especially popular for varsity jackets, sports teams, clubs, and school apparel.", image: "/images/patches/chinelle.png", link: "/Chenille-Patches" },
        { id: 6, title: "Leather Patches", description: "Add a premium and rugged touch with custom leather patches. Designed for durability and style, they are perfect for hats, jackets, bags, brands, outdoor gear, and fashion products.", image: "/images/patches/leather.png", link: "/Leather-Patches" },
        { id: 7, title: "PVC Patches", description: "Make your designs stand out with durable custom PVC patches. Made from flexible and waterproof PVC material, these patches are ideal for outdoor gear, uniforms, bags, jackets, tactical clothing, and branded products. Their bold colors and raised or recessed details create a modern, professional look that is built to last.", image: "/images/patches/PVC-Rubber.png", link: "/PVC-Patches" },
        { id: 8, title: "Velcro Patches", description: "Attach or swap patches anytime with a reliable hook-and-loop backing system.", image: "/images/patches/velcro.png", link: "/Velcro-Patches" },
        { id: 9, title: "Sublimated Patches", description: "Ideal for intricate artwork, photo-realistic designs, and unlimited color gradients.", image: "/images/patches/sublimation.png", link: "/Sublimated-Patches" }
    ];

    const itemsPerSlide = 6;
    const slides = [];
    for (let i = 0; i < patchTypes.length; i += itemsPerSlide) {
        slides.push(patchTypes.slice(i, i + itemsPerSlide));
    }

    const [currentSlide, setCurrentSlide] = useState(0);
    const cardRefs = useRef([]);

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

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [currentSlide]);

    return (
        <section className={`wpo-service-area ${props.serviceclass || ''}`} style={{ background: '#f6f8fb', padding: '90px 0' }}>
            <style jsx>{`
                .patch-card {
                    background: #ffffff;
                    border: 1px solid #eef2f6;
                    border-radius: 28px;
                    padding: 40px 32px 48px;
                    height: 100%;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
                    opacity: 0;
                    transform: translateY(40px) scale(0.96);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.4s ease;
                }

                .patch-card.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .col-lg-4:nth-child(1) .patch-card { transition-delay: 0.05s; }
                .col-lg-4:nth-child(2) .patch-card { transition-delay: 0.15s; }
                .col-lg-4:nth-child(3) .patch-card { transition-delay: 0.25s; }
                .col-lg-4:nth-child(4) .patch-card { transition-delay: 0.35s; }
                .col-lg-4:nth-child(5) .patch-card { transition-delay: 0.45s; }
                .col-lg-4:nth-child(6) .patch-card { transition-delay: 0.55s; }

                .patch-card.animate-in:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
                    transition-delay: 0s !important;
                }

                .patch-img-box {
                    width: 100%;
                    height: 280px;
                    border: 1px solid #fecdd3;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px; /* Reduced padding to make space for a larger image */
                    margin-bottom: 32px;
                    background: #ffffff;
                }

                .patch-card:hover .patch-img-box img {
                    transform: scale(1.06);
                }

                .patch-img-box img {
                    width: 82%; /* Increased width so the image appears noticeably larger */
                    height: 82%; /* Increased height */
                    object-fit: contain;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    filter: drop-shadow(0 8px 16px rgba(0,0,0,0.06));
                }

                .patch-title {
                    font-size: 24px;
                    font-weight: 800;
                    color: #0b192c;
                    margin-bottom: 12px;
                    letter-spacing: -0.3px;
                }

                .patch-desc {
                    font-size: 15px;
                    color: #64748b;
                    line-height: 1.6;
                    margin: 0;
                    max-width: 90%;
                }
            `}</style>

            <div className="container">
                <div className="row text-center" style={{ marginBottom: '56px' }}>
                    <div className="col-12" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span style={{ 
                            fontSize: '12px', 
                            fontWeight: '700', 
                            color: '#1e3a8a', 
                            letterSpacing: '2px', 
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            borderBottom: '2px solid #3b82f6',
                            paddingBottom: '4px',
                            marginBottom: '16px'
                        }}>
                            TYPE OF PATCHES WE MAKE
                        </span>
                        
                        <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#0b192c', lineHeight: '1.25', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                            Design Custom Patches: Fast Delivery, Built Tough, and Look Better
                        </h2>

                        <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
From businesses and sports teams to military units and fashion brands, our <Link legacyBehavior href="/Custom-Products"><a>custom patches</a></Link> are made to match your exact requirements. Choose from different patch styles, materials, shapes, and backing options. We focus on quality craftsmanship, durable materials, and detailed designs to create patches that look great and last longer.                        </p>
                    </div>
                </div>

                <div style={{ position: 'relative', overflow: 'hidden', padding: '10px 4px 20px' }}>
                    <div style={{
                        display: 'flex',
                        transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                        transform: `translateX(-${currentSlide * 100}%)`
                    }}>
                        {slides.map((slideItems, slideIdx) => (
                            <div key={slideIdx} style={{ minWidth: '100%', boxSizing: 'border-box' }}>
                                <div className="row g-4">
                                    {slideItems.map((item, index) => (
                                        <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                                            <div 
                                                className="patch-card"
                                                ref={(el) => (cardRefs.current[slideIdx * itemsPerSlide + index] = el)}
                                            >
                                                <div className="patch-img-box">
                                                    <img src={item.image} alt={item.title} />
                                                </div>

                                                <h3 className="patch-title">
                                                    <Link legacyBehavior href={item.link}>
                                                        <a style={{ color: 'inherit', textDecoration: 'none' }}>{item.title}</a>
                                                    </Link>
                                                </h3>

                                                <p className="patch-desc">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '40px' }}>
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            style={{
                                width: currentSlide === idx ? '32px' : '10px',
                                height: '10px',
                                borderRadius: '5px',
                                background: currentSlide === idx ? '#2563eb' : '#cbd5e1',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PatchTypesSection;