import React from 'react'
import Link  from 'next/link'
import MobileMenu from '../MobileMenu'


const Header2 = (props) => {
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
                            <ul>
                                <li><Link legacyBehavior className="active" href="/">Home</Link></li>
                                <li><Link legacyBehavior href="/HomePage2">Home-style-2</Link></li>
                                <li><Link legacyBehavior href="/HomePage3">Home-style-3</Link></li>
                                <li><Link legacyBehavior href="/HomePage4">Home-style-4</Link></li>
                                <li><Link legacyBehavior href="/HomePage5">Home-style-5</Link></li>
                                <li><Link legacyBehavior href="/HomePage6">Home-style-6</Link></li>
                                <li><Link legacyBehavior href="/HomePage7">Home-style-7</Link></li>
                                <li><Link legacyBehavior href="/HomePage8">Home-style-8</Link></li>
                                <li><Link legacyBehavior href="/HomePage9">Home-style-9</Link></li>
                                <li><Link legacyBehavior href="/HomePage10">Home-style-10</Link></li>
                            </ul>
                        </li>
                        <li><Link legacyBehavior href="/AboutPage" title="">About</Link></li>
                        <li><Link legacyBehavior  href="/portfolio">Portfolio</Link>
                            <ul>
                                <li><Link legacyBehavior href="/PorfolioGrid">Portfolio Grid</Link></li>
                                <li><Link legacyBehavior href="/PorfolioGrid2">Portfolio Grid-2</Link></li>
                                <li><Link legacyBehavior href="/PorfolioGrid3">Portfolio Mashonary</Link></li>
                                <li><Link legacyBehavior href="/PorfolioGrid4">Portfolio List</Link></li>
                                <li><Link legacyBehavior href="/PorfolioGridCro">Portfolio Cro</Link></li>
                            </ul>
                        </li>
                        <li><Link legacyBehavior href="/">Pages</Link>
                            <ul>
                                <li><Link legacyBehavior href="/AboutPage">About</Link></li>
                                <li><Link legacyBehavior href="/ServiceDetails">Service Details</Link></li>
                                <li><Link legacyBehavior href="/ProjectDetails">Project Details</Link></li>
                                <li><Link legacyBehavior href="/404">404 Page</Link></li>
                            </ul>
                        </li>
                        <li><Link legacyBehavior href="/" title="">Blog</Link>
                            <ul>
                                <li><Link legacyBehavior href="/BlogPage" title="">Blog</Link></li>
                                <li><Link legacyBehavior href="/BlogFull" title="">Blog Fullwidth</Link></li>
                                <li><Link legacyBehavior href="/" title="">Blog Details</Link>
                                    <ul>
                                        <li><Link legacyBehavior href="/BlogDetailsPage" title="">Blog Details</Link></li>
                                        <li><Link legacyBehavior href="/BlogDetailsFullwidth" title="">Blog Details Fullwidth</Link></li>
                                    </ul>
                                </li>
                            </ul>
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

export default Header2;