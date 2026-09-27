import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RequirementModal from '../RequirementModal';

const Hero3 = ( props ) => {
    const heroRef = useRef(null);
    const imageRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

        if (heroRef.current) observer.observe(heroRef.current);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => observer.disconnect();
    }, []);

    return(
        <section className="wpo-hero-style-3">
            <style jsx global>{`
                .wpo-hero-style-3,
                .wpo-hero-style-3 .wpo-slide-wrap,
                .wpo-hero-style-3 .wpo-slide-wrap .container,
                .wpo-hero-style-3 .row {
                    height: auto !important;
                    min-height: 0 !important;
                    max-height: none !important;
                    overflow: visible !important;
                }

                .wpo-hero-style-3 {
                    padding: 60px 0 80px 0 !important;
                    background-color: #ffffff !important;
                }

                .hero-content-card {
                    opacity: 0;
                    transform: translateY(40px) scale(0.96);
                    transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .hero-content-card.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    transition-delay: 0.02s;
                }

                /* Ensure button container aligns items nicely */
                .slide-caption div:last-child {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    flex-wrap: wrap;
                }

                /* Fix alignment for button vs anchor tag classes */
                .wpo-hero-style-3 button.theme-btn-s2 {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0;
                    vertical-align: middle;
                    box-sizing: border-box;
                }

                /* Faster Image Entrance & Floating Animation */
                .hero-image-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    opacity: 0;
                    transform: translateY(40px) scale(0.92);
                    transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                }

                /* Rapid trigger entrance and faster loop */
                .hero-image-wrap.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    animation: floatAnimationFast 1.8s ease-in-out infinite alternate;
                    animation-delay: 0.35s;
                }

                .hero-image-wrap img {
                    width: 100% !important;
                    max-width: 650px !important;
                    height: auto !important;
                    object-fit: contain !important;
                    filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.08));
                    transition: transform 0.2s ease;
                }

                .hero-image-wrap img:hover {
                    transform: scale(1.03);
                }

                @keyframes floatAnimationFast {
                    0% {
                        transform: translateY(0px);
                    }
                    100% {
                        transform: translateY(-18px);
                    }
                }

                /* Desktop View: Force Text Left (order 1) and Image Right (order 2) */
                @media (min-width: 992px) {
                    .wpo-hero-style-3 .row {
                        display: flex;
                        flex-direction: row !important;
                    }
                    .slide-caption {
                        order: 1 !important;
                    }
                    .hero-image-wrap {
                        order: 2 !important;
                    }
                }

                /* Mobile View: Image First, Text Second */
                @media (max-width: 991px) {
                    .wpo-hero-style-3 {
                        padding: 30px 0 50px 0 !important;
                    }
                    .wpo-hero-style-3 .row {
                        display: flex;
                        flex-direction: column !important;
                    }
                    .hero-image-wrap {
                        order: 1 !important;
                        margin-bottom: 20px;
                    }
                    .slide-caption {
                        order: 2 !important;
                    }
                    .hero-image-wrap img {
                        max-width: 100% !important;
                    }
                }
            `}</style>

            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Text Caption Column (Left on Desktop, Second on Mobile) */}
                        <div 
                            className="col col-lg-6 col-md-12 slide-caption hero-content-card"
                            ref={heroRef}
                        >
                            <h2>Custom Patches Design Your Own Personalized Patches</h2>
                            <span>
                                <a href="/custom-products"><b>Custom patches</b></a> are a great way to showcase your brand, team, club, or personal style. We create high-quality <a href="/custom-products"><b>custom patches online</b></a> in different styles, including <a href="/Embroidered-Patches"><b>custom embroidered patches</b></a>, <a href="/Woven-Patches"><b>custom woven patches</b></a>, <a href="/Chenille-Patches"><b>custom chenille patches</b></a>, <a href="/PVC-Patches"><b>custom PVC patches</b></a>, <a href="/Bullet-Sublimated-Patches"><b>custom sublimated patches</b></a>, and <a href="/Leather-Patches"><b>custom leather patches</b></a>. You can choose your preferred shape, size, colors, design, and backing option. Whether you need patches for clothing, uniforms, jackets, bags, businesses, or events, our <a href="/Custom-Products"><b>personalized patches</b></a> are designed to provide a professional and distinctive look.     </span>
                            <div>
                                <Link legacyBehavior href="/AboutPage"><a className="theme-btn">More About</a></Link>
                                <button 
                                    type="button" 
                                    className="theme-btn-s2" 
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Get A Quote
                                </button>
                            </div>
                        </div>

                        {/* Animated Image Column (Right on Desktop, First on Mobile) */}
                        <div className="col col-lg-6 col-md-12 hero-image-wrap" ref={imageRef}>
                            <Image 
                                src="/images/patches-hero-v3-2.png" 
                                alt="Custom Patches Home Banner" 
                                width={1805} 
                                height={871} 
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide-in Requirement Modal Component */}
            <RequirementModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    )
}

export default Hero3;