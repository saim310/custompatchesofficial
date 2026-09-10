import React from 'react'
import Link  from 'next/link'
import MobileMenu from '../MobileMenu'


const HeaderAlter = (props) => {
    return(	
	<div className={`header-style-1 ${props.headerclass}`}>
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <Link legacyBehavior href="/" title=""><a><img src='images/logo2.png' alt=""/></a></Link>
                </div>
                <nav className="d-lg-block d-none header-b">
                <ul>
                        <li><Link legacyBehavior className="active" href="/" title="">Home</Link>
                       
                        </li>
                        <li><Link legacyBehavior href="/AboutPage" title="">About</Link></li>
                        <li><Link legacyBehavior  href="/portfolio">Custom Products</Link>
                            <ul>
                                <li><Link legacyBehavior href="/Embroidered-Patches">Embroidered Patches</Link></li>
                                <li><Link legacyBehavior href="/PVC-Patches">PVC Patches</Link></li>
                                <li><Link legacyBehavior href="/Woven-Patches">Woven Patches</Link></li>
                                <li><Link legacyBehavior href="/Leather-Patches">Leather Patches</Link></li>
                                <li><Link legacyBehavior href="/Chenille-Patches">Chenille Patches</Link></li>
                                <li><Link legacyBehavior href="/Printed-Patches">Printed Patches</Link></li>
                                <li><Link legacyBehavior href="/Sequins-Patches">Sequins Patches</Link></li>
                                <li><Link legacyBehavior href="/Bullet-Sublimated-Patches">Sublimated Patches</Link></li>
                                <li><Link legacyBehavior href="/Custom-Lapel-Pins">Custom Lapel Pins</Link></li>
                            </ul>
                        </li>
                          <li><Link legacyBehavior href="/OurWork" title="">Our Work</Link>
                        </li>
                        <li><Link legacyBehavior href="/FAQs" title="">FAQ's</Link>
                        </li>
                        <li><Link legacyBehavior href="/BlogPage" title="">Blog</Link>
                           
                        </li>
                        <li><Link legacyBehavior href="/ContactPage" title="">Contact</Link></li>
                    </ul>
                </nav>
                <div className="contact">
                    <div className="cart-search-contact">
                        <div className="get-number">
                            <Link legacyBehavior href="/ContactPage" >+(888) 01234567</Link>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                
            </div>
            <MobileMenu/>
        </div>
    </div>
    )
}

export default HeaderAlter;