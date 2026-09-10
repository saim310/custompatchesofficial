import React, { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
    const sectionRef = useRef(null);
    const [animated, setAnimated] = useState(false);

    const skills = [
        { title: "Embroidery Precision", percent: 90, color: "#f59e0b" }, // Gold/Yellow
        { title: "Digitizing Speed", percent: 80, color: "#3b82f6" },     // Blue
        { title: "Color Accuracy", percent: 65, color: "#ef4444" },       // Red/Pink
        { title: "Custom Backings", percent: 47, color: "#10b981" }       // Teal/Green
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimated(true);
                        entry.target.classList.add('animate-in');
                    } else {
                        entry.target.classList.remove('animate-in');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // SVG Circle Calculations
    const radius = 52;
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * radius;

    return (
        <section ref={sectionRef} className="skills-section">
            <style jsx>{`
                .skills-section {
                    background: #f8fafc;
                    padding: 80px 0 90px;
                    color: #0d1322;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .skills-section.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .section-title {
                    font-size: 42px;
                    font-weight: 800;
                    text-align: center;
                    color: #0d1322;
                    margin: 0 0 50px 0;
                    letter-spacing: -0.5px;
                }

                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                    max-width: 960px;
                    margin: 0 auto;
                }

                @media (max-width: 768px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 32px;
                    }
                }

                @media (max-width: 480px) {
                    .skills-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .skill-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .circle-wrapper {
                    position: relative;
                    width: 140px;
                    height: 140px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #ffffff;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
                    margin-bottom: 16px;
                }

                .circle-wrapper svg {
                    transform: rotate(-90deg);
                    width: 140px;
                    height: 140px;
                }

                .circle-bg {
                    fill: none;
                    stroke: #e2e8f0;
                    stroke-width: ${strokeWidth};
                }

                .circle-progress {
                    fill: none;
                    stroke-width: ${strokeWidth};
                    stroke-linecap: round;
                    stroke-dasharray: ${circumference};
                    stroke-dashoffset: ${circumference};
                    transition: stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .percent-number {
                    position: absolute;
                    font-size: 18px;
                    font-weight: 500;
                    color: #0d1322;
                }

                .skill-title {
                    font-size: 14px;
                    font-weight: 600;
                    color: #64748b;
                    margin: 0;
                    letter-spacing: 0.2px;
                }
            `}</style>

            <div className="container">
                <h2 className="section-title">Brand Strengths</h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => {
                        const offset = circumference - (skill.percent / 100) * circumference;
                        return (
                            <div key={index} className="skill-card">
                                <div className="circle-wrapper">
                                    <svg viewBox="0 0 120 120">
                                        <circle
                                            className="circle-bg"
                                            cx="60"
                                            cy="60"
                                            r={radius}
                                        />
                                        <circle
                                            className="circle-progress"
                                            cx="60"
                                            cy="60"
                                            r={radius}
                                            stroke={skill.color}
                                            style={{
                                                strokeDashoffset: animated ? offset : circumference
                                            }}
                                        />
                                    </svg>
                                    <span className="percent-number">{skill.percent}%</span>
                                </div>
                                <p className="skill-title">{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;