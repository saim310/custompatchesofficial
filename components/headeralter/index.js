import React, { useState } from 'react';
import Link from 'next/link';
import MobileMenu from '../MobileMenu';
import RequirementModal from '../RequirementModal';

const HeaderAlter = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return( 
    <div className={`header-style-1 ${props.headerclass || ''}`}>
        <style jsx>{`
            /* Modern Flexbox Header Override */
            .header-style-1 .container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 20px;
            }
            .header-style-1 .header-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                min-height: 80px;
            }
            .header-style-1 .logo {
                float: none !important;
                display: flex !important;
                align-items: center;
                width: auto !important;
                height: auto !important;
                margin: 0 !important;
            }
            .header-style-1 nav.header-b {
                float: none !important;
                padding-left: 0 !important;
                margin: 0 auto;
            }
            .header-style-1 .contact {
                float: none !important;
                display: flex !important;
                align-items: center;
            }
            .header-style-1 .cart-search-contact {
                display: flex;
                align-items: center;
                gap: 25px;
            }
            .header-style-1 .get-number a {
                font-size: 16px;
                font-weight: 700;
                color: #0f172a;
                text-decoration: none;
                white-space: nowrap;
                transition: color 0.2s ease;
            }
            .header-style-1 .get-number a:hover {
                color: #fe3e57;
            }
            .header-style-1 .inquire-btn {
                display: inline-block;
                background-color: #fe3e57;
                color: #ffffff;
                font-size: 13px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                padding: 10px 22px;
                border-radius: 30px;
                text-decoration: none;
                white-space: nowrap;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(254, 62, 87, 0.3);
                border: none;
                cursor: pointer;
            }
            .header-style-1 .inquire-btn:hover {
                background-color: #e02e46;
                color: #ffffff;
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(254, 62, 87, 0.4);
            }

            /* Mobile Overrides: Center Logo & Clean Header */
            @media (max-width: 991px) {
                .header-style-1 .header-content {
                    justify-content: center; /* Center items on mobile */
                    position: relative;
                    min-height: 70px;
                }
                .header-style-1 .contact {
                    display: none !important;
                }
                .header-style-1 .logo {
                    margin: 0 auto !important;
                }
            }
        `}</style>
        
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <Link legacyBehavior href="/" title=""><a><img src='images/patcheslogo4.png' alt=""/></a></Link>
                </div>
                <nav className="d-lg-block d-none header-b">
                    <ul>
                        <li><Link legacyBehavior className="active" href="/" title="">Home</Link></li>
                        <li><Link legacyBehavior href="/AboutPage" title="">About</Link></li>
                        <li><Link legacyBehavior href="/CustomProducts">Custom Products</Link>
                            <ul>
                                <li><Link legacyBehavior href="/Embroidered-Patches">Embroidered Patches</Link></li>
                                <li><Link legacyBehavior href="/PVC-Patches">PVC Patches</Link></li>
                                <li><Link legacyBehavior href="/Woven-Patches">Woven Patches</Link></li>
                                <li><Link legacyBehavior href="/Leather-Patches">Leather Patches</Link></li>
                                <li><Link legacyBehavior href="/Chenille-Patches">Chenille Patches</Link></li>
                                <li><Link legacyBehavior href="/Sublimated-Patches">Sublimated Patches</Link></li>
                                <li><Link legacyBehavior href="/Lapel-Pins">Lapel Pins</Link></li>
                            </ul>
                        </li>
                        <li><Link legacyBehavior href="/FAQs" title="">FAQ's</Link></li>
                        <li><Link legacyBehavior href="/BlogPage" title="">Blog</Link></li>
                        <li><Link legacyBehavior href="/ContactPage" title="">Contact</Link></li>
                    </ul>
                </nav>
                <div className="contact">
                    <div className="cart-search-contact">
                        <div className="get-number">
                            <Link legacyBehavior href="tel:+18067154411">+1(806) 715-4411</Link>
                        </div>
                        {/* Trigger button for the slide-in modal */}
                        <button 
                            type="button" 
                            className="inquire-btn" 
                            onClick={() => setIsModalOpen(true)}
                        >
                            Get a Quote
                        </button>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <MobileMenu/>
        </div>

        {/* Slide-in Requirement Modal Component */}
        <RequirementModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
        />
    </div>
    )
}

export default HeaderAlter;