import React from 'react';

const galleryImages = [
    { id: 1, src: '/images/gallery/Embroidered/original.jpeg', alt: 'Custom Patch Cap' },
    { id: 2, src: '/images/gallery/Embroidered/original.jpeg', alt: 'Denim Jacket Patch' },
    { id: 3, src: '/images/gallery/Embroidered/original.jpeg', alt: 'Hat Patches Set' },
    { id: 4, src: '/images/gallery/Embroidered/original.jpeg', alt: 'Leather Patch Cap' },
    { id: 5, src: '/images/gallery/Embroidered/original.jpeg', alt: 'Round Embroidered Emblem' },
    { id: 6, src: '/images/gallery/Embroidered/original.jpeg', alt: 'Camo Hoodie Patch' },
    { id: 7, src: '/images/gallery/Embroidered/original.jpeg', alt: 'Custom Cap Emblem' },
];

const MasterpiecesGallery = () => {
    // Duplicate the array to create a seamless infinite loop
    const duplicatedImages = [...galleryImages, ...galleryImages];

    return (
        <section className="masterpieces-section">
            <style jsx>{`
                .masterpieces-section {
                    padding: 80px 0;
                    background-color: #ffffff;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .badge-gallery {
                    display: inline-block;
                    border: 1px solid rgba(220, 38, 38, 0.3);
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

                .gallery-heading {
                    font-size: 36px;
                    font-weight: 700;
                    color: #0f172a;
                    margin-bottom: 12px;
                }

                .gallery-heading span {
                    color: #dc2626;
                }

                .gallery-subheading {
                    font-size: 15px;
                    color: #64748b;
                    max-width: 600px;
                    margin: 0 auto 40px auto;
                    line-height: 1.6;
                }

                .carousel-wrapper {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                }

                .carousel-wrapper::before,
                .carousel-wrapper::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 100px;
                    z-index: 2;
                    pointer-events: none;
                }

                .carousel-wrapper::before {
                    left: 0;
                    background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
                }

                .carousel-wrapper::after {
                    right: 0;
                    background: linear-gradient(to left, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
                }

                .carousel-track {
                    display: flex;
                    gap: 16px;
                    width: max-content;
                    animation: infiniteScroll 25s linear infinite;
                }

                .carousel-wrapper:hover .carousel-track {
                    animation-play-state: paused;
                }

                @keyframes infiniteScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .card-item {
                    flex: 0 0 auto;
                    width: 220px;
                    height: 220px;
                    border-radius: 16px;
                    overflow: hidden;
                    position: relative;
                    background: #f1f5f9;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .card-item:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
                }

                .card-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                @media (max-width: 768px) {
                    .card-item {
                        width: 170px;
                        height: 170px;
                    }
                }
            `}</style>

            <span className="badge-gallery">Gallery Showcase</span>
            <h2 className="gallery-heading">Explore Our Crafted <span>Masterpieces</span></h2>
            <p className="gallery-subheading">
                Take a closer look at the tight thread density, clean borders, and premium craftsmanship of our custom embroidered patches.
            </p>

            <div className="carousel-wrapper">
                <div className="carousel-track">
                    {duplicatedImages.map((img, index) => (
                        <div className="card-item" key={`${img.id}-${index}`}>
                            <img src={img.src} alt={img.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MasterpiecesGallery;