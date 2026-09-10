import React, { useState, useRef, useEffect } from 'react';

const CompareSection = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);

    // Track container width dynamically for perfect overlay clipping
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        let percentage = (x / rect.width) * 100;
        
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        
        setSliderPos(percentage);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    return (
        <section className="compare-section">
            <style jsx>{`
                .compare-section {
                    width: 100%;
                    padding: 80px 24px;
                    background-color: #f8fafc;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                }

                .compare-container {
                    max-width: 1140px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 48px;
                    align-items: center;
                }

                /* Text Column */
                .text-content {
                    padding-right: 20px;
                }

                .main-heading {
                    font-size: 32px;
                    font-weight: 700;
                    color: #0d0d0d;
                    line-height: 1.25;
                    margin: 0 0 20px 0;
                    letter-spacing: -0.5px;
                }

                .description {
                    font-size: 15px;
                    color: #4b5563;
                    line-height: 1.6;
                    margin: 0;
                    font-weight: 400;
                }

                /* Comparison Card Column */
                .comparison-card {
                    background: #ffffff;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                    padding: 24px;
                    position: relative;
                    user-select: none;
                }

                .image-comparison-box {
                    position: relative;
                    width: 100%;
                    height: 380px;
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: ew-resize;
                }

                /* Badge Labels */
                .badge {
                    position: absolute;
                    top: 12px;
                    background-color: #48bb78;
                    color: #ffffff;
                    font-size: 12px;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 4px;
                    z-index: 10;
                    pointer-events: none;
                }

                .badge-left {
                    left: 12px;
                }

                .badge-right {
                    right: 12px;
                }

                /* Image Base & Overlay Clipping */
                .img-layer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                }

                .img-before {
                    width: 100%;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .img-after {
                    z-index: 2;
                    overflow: hidden;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                }

                .img-wrapper {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .img-layer img {
                    max-width: 80%;
                    max-height: 80%;
                    object-fit: contain;
                    pointer-events: none;
                }

                /* Split Handle & Divider Line */
                .slider-line {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background-color: #ffffff;
                    z-index: 5;
                    transform: translateX(-50%);
                    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
                }

                .slider-button {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: rgba(0, 0, 0, 0.6);
                    border: 2px solid #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                }

                @media (max-width: 900px) {
                    .compare-container {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }
                    .text-content {
                        padding-right: 0;
                    }
                    .image-comparison-box {
                        height: 300px;
                    }
                }
            `}</style>

            <div className="compare-container">
                {/* Left Text */}
                <div className="text-content">
                    <h2 className="main-heading">
                        You Upload Your Design<br />
                        We Turn it into an Embroidered Patch
                    </h2>
                    <p className="description">
                        Once you upload your design, our expert team digitizes it using state-of-the-art embroidery software to ensure every stitch is clean, precise, and production-ready. You'll have the option to review a proof before we move forward, so you know exactly how your patch will look before it's made.
                    </p>
                </div>

                {/* Right Interactive Image Slider Card */}
                <div className="comparison-card">
                    <div className="badge badge-left">Your Design</div>
                    <div className="badge badge-right">Your Patch</div>

                    <div 
                        className="image-comparison-box"
                        ref={containerRef}
                        onMouseDown={() => setIsDragging(true)}
                        onMouseUp={() => setIsDragging(false)}
                        onMouseLeave={() => setIsDragging(false)}
                        onMouseMove={handleMouseMove}
                        onTouchStart={() => setIsDragging(true)}
                        onTouchEnd={() => setIsDragging(false)}
                        onTouchMove={handleTouchMove}
                    >
                        {/* Base Right Image */}
                        <div className="img-layer img-before">
                            <img 
                                src="/images/patches/chinelle.png" 
                                alt="Your Patch Embroidered" 
                            />
                        </div>

                        {/* Clipped Top Image */}
                        <div 
                            className="img-layer img-after" 
                            style={{ width: `${sliderPos}%` }}
                        >
                            <div 
                                className="img-wrapper"
                                style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
                            >
                                <img 
                                    src="/images/patches/before-chinelle.png" 
                                    alt="Your Vector Design"
                                />
                            </div>
                        </div>

                        {/* Drag Handle */}
                        <div className="slider-line" style={{ left: `${sliderPos}%` }}>
                            <div className="slider-button">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                    <polyline points="9 18 15 12 9 6" transform="rotate(180 12 12)"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompareSection;