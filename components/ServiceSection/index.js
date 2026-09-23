import React, { useEffect, useRef } from 'react'

const ServiceSection = (props) => {
    const steps = [
        {
            id: "01",
            title: "Share Your Concept",
            description: "Tell us about your patch idea and share your logo, artwork, or concept. Our team will review your requirements and help you choose the right patch style, size, colors, and backing.",
            iconClass: "fi flaticon-idea", 
            accentColor: "rgba(255, 107, 107, 0.3)" // Coral
        },
        {
            id: "02",
            title: "Refine & Approve",
            description: "We create a digital preview of your custom patch based on your requirements. Review the design, request adjustments, and approve it once everything looks exactly the way you want.",
            iconClass: "fi flaticon-files-and-folders",
            accentColor: "rgba(78, 205, 196, 0.3)" // Turquoise
        },
        {
            id: "03",
            title: "Precision Crafting",
            description: "Once your design is approved, our skilled team begins crafting your custom patches using quality materials and precise techniques for a clean, professional, and durable finish.",
            iconClass: "fi flaticon-artist",
            accentColor: "rgba(255, 202, 58, 0.3)" // Yellow
        },
        {
            id: "04",
            title: "Fast Delivery",
            description: "After production and quality checking, your finished custom patches are carefully packaged and prepared for delivery. Get your order ready to use, wear, or share with your customers.",
            iconClass: "fi flaticon-man",
            accentColor: "rgba(106, 76, 147, 0.3)" // Purple
        },
    ];

    const cardRefs = useRef([]);

    // Identical Scroll Observer logic used across components
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
    }, []);

    return (
        <div className={`wpo-service-area ${props.serviceclass || ''}`} style={{ background: '#fefefe', padding: '90px 0' }}>
            <style jsx>{`
                /* Standard initial state for global scroll animation */
                .process-card {
                    position: relative;
                    padding: 30px;
                    background: #fff;
                    border: 1px solid #eee;
                    border-radius: 12px;
                    text-align: left;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    opacity: 0;
                    transform: translateY(40px) scale(0.96);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.4s ease;
                }

                /* Active class toggled on scroll */
                .process-card.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                /* Staggered entry delay matching 4-column layout */
                .col-lg-3:nth-child(1) .process-card { transition-delay: 0.05s; }
                .col-lg-3:nth-child(2) .process-card { transition-delay: 0.15s; }
                .col-lg-3:nth-child(3) .process-card { transition-delay: 0.25s; }
                .col-lg-3:nth-child(4) .process-card { transition-delay: 0.35s; }

                /* Consistent hover effect */
                .process-card.animate-in:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
                    transition-delay: 0s !important;
                }
            `}</style>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center" style={{ marginBottom: '60px' }}>
                            <span style={{ textTransform: 'uppercase', color: '#ff6b6b', fontWeight: 600, fontSize: '14px', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
                                HOW WE WORK
                            </span>
                            <h2 style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.2', color: '#111', textTransform: 'none', fontStyle: 'italic', letterSpacing: '-1px' }}>
                                From <span style={{ textDecoration: 'underline solid #ff6b6b' }}>Design</span> to <span style={{ textDecoration: 'underline solid #ff6b6b' }}>To Custom Patch</span>.
                            </h2>
                        </div>
                    </div>
                </div>
                
                {/* Process Step Grid */}
                <div className="row g-4 justify-content-center">
                    {steps.map((step, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={step.id}>
                            <div 
                                className="process-card"
                                ref={(el) => (cardRefs.current[index] = el)}
                            >
                                {/* Floating Background Number */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-25px',
                                    right: '-10px',
                                    fontSize: '120px',
                                    fontWeight: '800',
                                    color: step.accentColor,
                                    lineHeight: '1',
                                    zIndex: 0,
                                    opacity: '0.8',
                                    fontStyle: 'italic',
                                    userSelect: 'none'
                                }}>
                                    {step.id}
                                </div>

                                {/* Content Layer */}
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    {/* Icon with Color Background */}
                                    <div style={{
                                        fontSize: '32px',
                                        color: '#333',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '60px',
                                        height: '60px',
                                        marginBottom: '20px',
                                        backgroundColor: step.accentColor,
                                        borderRadius: '8px'
                                    }}>
                                        <i className={step.iconClass}></i>
                                    </div>

                                    {/* Title */}
                                    <h3 style={{ 
                                        fontSize: '22px', 
                                        fontWeight: '700', 
                                        marginBottom: '15px', 
                                        color: '#111', 
                                        textTransform: 'none', 
                                        fontStyle: 'normal'
                                    }}>
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p style={{ 
                                        fontSize: '14px', 
                                        lineHeight: '1.7', 
                                        color: '#666', 
                                        marginBottom: '0', 
                                        fontWeight: 'normal'
                                    }}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Below Grid */}
                <div className="row text-center" style={{ marginTop: '50px' }}>
                    <div className="col-12">
                        <p style={{ color: '#666' }}>Ready to launch your project?</p>
                        <a href="/ContactPage" style={{ 
                            display: 'inline-block',
                            backgroundColor: '#ff6b6b', 
                            color: '#fff', 
                            padding: '12px 30px', 
                            fontWeight: '600', 
                            borderRadius: '4px', 
                            textTransform: 'uppercase', 
                            fontSize: '14px', 
                            letterSpacing: '1px',
                            transition: 'all 0.3s ease'
                        }}>Start Crafting Now</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceSection;