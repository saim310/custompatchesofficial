import React from 'react';
import Link from 'next/link';

const categories = [
    {
        title: "Embroidered Patches",
        image: "/images/patches/embroidered.png",
        links: [
            { name: "Standard Thread Chart", href: "/Embroidered-Patches" },
            { name: "Metallic and Neon Thread Chart", href: "/Embroidered-Patches" },
            { name: "Sequin/Spangle Color Chart", href: "/Embroidered-Patches" },
            { name: "Certificate / Test", href: "/Embroidered-Patches" },
            { name: "Glow-in-the-dark thread color", href: "/Embroidered-Patches" },
            { name: "Iron-on Instructions", href: "/Embroidered-Patches" }
        ]
    },
    {
        title: "PVC Patches",
        image: "/images/patches/PVC-Rubber.png",
        links: [
            { name: "Pantone Color Chart", href: "/PVC-Patches" },
            { name: "For an Instructions", href: "/PVC-Patches" }
        ]
    },
    {
        title: "Woven Patches",
        image: "/images/patches/woven.png",
        links: [
            { name: "Thread Chart", href: "/Woven-Patches" },
            { name: "For an Instructions", href: "/Woven-Patches" }
        ]
    },
    {
        title: "Leather Patches",
        image: "/images/patches/leather.png",
        links: [
            { name: "Leather Colors", href: "/Leather-Patches" },
            { name: "Heat Leather Colors", href: "/Leather-Patches" },
            { name: "For an Instructions", href: "/Leather-Patches" }
        ]
    },
    {
        title: "Chenille Patches",
        image: "/images/patches/chinelle.png",
        links: [
            { name: "Premium Thread Chart", href: "/Chenille-Patches" },
            { name: "For Fabrics", href: "/Chenille-Patches" },
            { name: "Iron-on Instructions", href: "/Chenille-Patches" }
        ]
    },
    {
        title: "Sublimated Patches",
        image: "/images/patches/sublimation.png",
        links: [
            { name: "Material Instructions", href: "/Sublimated-Patches" }
        ]
    },
    {
        title: "Lapel Pins",
        image: "/images/patches/iron-on.png",
        links: [
            { name: "Plating Options", href: "/Lapel-Pins" }
        ]
    }
];

const EmblemResourceGrid = () => {
    return (
        <div className="resource-page-wrapper">
            <style jsx>{`
                .resource-page-wrapper {
                    background-color: #faf9f6;
                    min-height: 100vh;
                    padding: 60px 20px;
                }
                .resource-container {
                    max-width: 1350px;
                    margin: 0 auto;
                }
                .resource-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 25px;
                }
                .resource-card {
                    background-color: #ffffff;
                    border-radius: 16px;
                    padding: 20px;
                    display: flex;
                    gap: 20px;
                    align-items: flex-start;
                    border: 1px solid #f0f0f0;
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
                    position: relative;
                }
                .card-thumb {
                    width: 140px;
                    height: 140px;
                    flex-shrink: 0;
                    background: transparent;
                    border-radius: 12px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                }
                .card-thumb img {
                    width: 95%;
                    height: 95%;
                    object-fit: contain;
                }
                .card-content {
                    flex-grow: 1;
                    padding-bottom: 30px;
                }
                .card-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 12px;
                }
                .card-header h3 {
                    font-size: 16px;
                    font-weight: 700;
                    color: #111827;
                    margin: 0;
                    line-height: 1.2;
                    letter-spacing: -0.2px;
                }
                .card-divider {
                    height: 1px;
                    background-color: #f0f2f5;
                    margin-bottom: 12px;
                    width: 100%;
                }
                .card-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .card-links li {
                    margin-bottom: 7px;
                }
                .card-links a {
                    font-size: 12.5px;
                    font-weight: 400;
                    color: #4b5563;
                    text-decoration: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: color 0.2s ease;
                }
                .card-links a::after {
                    content: '→';
                    color: #9ca3af;
                    font-size: 12px;
                    transition: all 0.2s ease;
                }
                .card-links a:hover {
                    color: #fe3e57;
                }
                .card-links a:hover::after {
                    color: #fe3e57;
                    transform: translateX(3px);
                }
                .card-action-btn {
                    position: absolute;
                    bottom: 16px;
                    right: 16px;
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background-color: #ffffff;
                    border: 1px solid #f0f2f5;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fe3e57;
                    font-size: 13px;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                .card-action-btn:hover {
                    background-color: #fe3e57;
                    color: #ffffff;
                    border-color: #fe3e57;
                    transform: scale(1.05);
                }

                /* Responsive Breakpoints */
                @media (max-width: 1100px) {
                    .resource-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .resource-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <div className="resource-container">
                <div className="resource-grid">
                    {categories.map((cat, index) => (
                        <div className="resource-card" key={index}>
                            <div className="card-thumb">
                                <img src={cat.image} alt={cat.title} />
                            </div>
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{cat.title}</h3>
                                </div>
                                <div className="card-divider"></div>
                                <ul className="card-links">
                                    {cat.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link legacyBehavior href={link.href}>
                                                <a>{link.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link legacyBehavior href={cat.links[0]?.href || "#"}>
                                <a className="card-action-btn">→</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblemResourceGrid;