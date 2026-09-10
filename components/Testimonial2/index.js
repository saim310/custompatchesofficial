import React, { Component, createRef } from 'react'
import Slider from "react-slick"

class TestSlider2 extends Component {
    constructor(props) {
        super(props);
        this.sliderRef = createRef();
        this.containerRef = createRef();
    }

    componentDidMount() {
        this.observer = new IntersectionObserver(
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

        if (this.containerRef.current) {
            this.observer.observe(this.containerRef.current);
        }
    }

    componentWillUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    next = () => {
        if (this.sliderRef.current) {
            this.sliderRef.current.slickNext();
        }
    };

    previous = () => {
        if (this.sliderRef.current) {
            this.sliderRef.current.slickPrev();
        }
    };

    render() {
        const testimonials = [
            {
                id: 1,
                quote: "Our company ordered a bunch of custom embroidered patches, and so far loved the results. The quality of detailing and stitching is remarkable and on point. Highly recommended!",
                name: "James L.",
                location: "Austin, TX"
            },
            {
                id: 2,
                quote: "The process of ordering personalized patches for my fashion store was so smooth and stress-free. I only shared the basic design idea through my rough drawing on paper, but they nailed it completely.",
                name: "Ashley T.",
                location: "Denver, CO"
            },
            {
                id: 3,
                quote: "We ordered 50 custom PVC patches for our restaurant staff, and they loved the material and design finish. The colours looked so good, and we give you guys 5-star ratings.",
                name: "Marcus D.",
                location: "Los Angeles, CA"
            },
            {
                id: 4,
                quote: "Extremely fast turnaround time for our motorcycle club vest patches. The merrowed borders were tight and flawless, enduring high speeds and rain without fraying.",
                name: "Robert M.",
                location: "Dallas, TX"
            }
        ];

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <section className={`wpo-testimonial-area ${this.props.testclass || ''}`} style={{ background: '#eef1f5', padding: '90px 0' }}>
                <style jsx>{`
                    .testimonial-section-container {
                        opacity: 0;
                        transform: translateY(40px) scale(0.96);
                        transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                                    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    }

                    .testimonial-section-container.animate-in {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }

                    .testimonial-card {
                        background: #f8fafc;
                        border-radius: 20px;
                        padding: 40px 32px 36px;
                        margin: 0 12px;
                        min-height: 380px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        border: 1px solid #e2e8f0;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }

                    .testimonial-card:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.06);
                    }

                    .quote-mark {
                        color: #dc2626;
                        font-size: 52px;
                        line-height: 1;
                        font-family: Georgia, serif;
                        font-weight: 900;
                        margin-bottom: 16px;
                        display: block;
                        user-select: none;
                    }

                    .quote-text {
                        font-size: 15px;
                        color: #334155;
                        line-height: 1.65;
                        font-weight: 400;
                        margin-bottom: 24px;
                    }

                    .client-name {
                        font-size: 17px;
                        font-weight: 800;
                        color: #0f172a;
                        margin-bottom: 2px;
                    }

                    .client-location {
                        font-size: 13px;
                        color: #64748b;
                        font-weight: 500;
                    }

                    .nav-btn {
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        border: 1.5px solid #0f172a;
                        background: transparent;
                        color: #0f172a;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        font-size: 18px;
                        transition: all 0.3s ease;
                    }

                    .nav-btn:hover {
                        background: #0f172a;
                        color: #ffffff;
                    }
                `}</style>

                <div className="container">
                    <div className="testimonial-section-container" ref={this.containerRef}>
                        {/* Section Header */}
                        <div className="row text-center" style={{ marginBottom: '50px' }}>
                            <div className="col-12">
                                <h2 style={{ 
                                    fontSize: '36px', 
                                    fontWeight: '800', 
                                    color: '#0f172a', 
                                    letterSpacing: '-0.5px' 
                                }}>
                                    Trusted By Thousands
                                </h2>
                                <div style={{ 
                                    width: '180px', 
                                    height: '3px', 
                                    background: '#dc2626', 
                                    margin: '12px auto 0', 
                                    borderRadius: '2px' 
                                }} />
                            </div>
                        </div>

                        {/* Slider Wrap */}
                        <div style={{ padding: '0 8px' }}>
                            <Slider ref={this.sliderRef} {...settings}>
                                {testimonials.map((item) => (
                                    <div key={item.id}>
                                        <div className="testimonial-card">
                                            <div>
                                                <span className="quote-mark">“</span>
                                                <p className="quote-text">“{item.quote}”</p>
                                            </div>

                                            <div>
                                                <h4 className="client-name">{item.name}</h4>
                                                <span className="client-location">{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* Navigation Arrows */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '40px' }}>
                            <button className="nav-btn" onClick={this.previous} aria-label="Previous Slide">
                                ←
                            </button>
                            <button className="nav-btn" onClick={this.next} aria-label="Next Slide">
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestSlider2;