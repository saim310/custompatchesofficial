import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import Link from 'next/link';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'About',
        link: '/AboutPage'
    },
    {
        id: 3,
        title: 'Custom Products',
        link: '/CustomProducts',
        submenu: [
            { id: 31, title: 'Embroidered Patches', link: '/Embroidered-Patches' },
            { id: 32, title: 'PVC Patches', link: '/PVC-Patches' },
            { id: 33, title: 'Woven Patches', link: '/Woven-Patches' },
            { id: 34, title: 'Leather Patches', link: '/Leather-Patches' },
            { id: 35, title: 'Chenille Patches', link: '/Chenille-Patches' },
            { id: 36, title: 'Sublimated Patches', link: '/Sublimated-Patches' },
            { id: 37, title: 'Lapel Pins', link: '/Lapel-Pins' }
        ]
    },
    {
        id: 4,
        title: "FAQ's",
        link: '/FAQs'
    },
    {
        id: 5,
        title: 'Blog',
        link: '/BlogPage'
    },
    {
        id: 6,
        title: 'Contact',
        link: '/ContactPage'
    }
];

export default class MobileMenu extends Component {
    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {
        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* Close button header */}
                    <div className="mobile-menu-header">
                        <span className="mobile-menu-title">Menu</span>
                        <div className="clox" onClick={this.menuHandler}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? (
                                        <div 
                                            className={`menu-item-toggle ${item.id === isOpen ? 'active-submenu' : ''}`}
                                            onClick={this.setIsOpen(item.id)}
                                        >
                                            <span>{item.title}</span>
                                            <i className={`fa fa-angle-right ${item.id === isOpen ? 'rotate-icon' : ''}`} aria-hidden="true"></i>
                                        </div>
                                    ) : (
                                        <Link legacyBehavior href={item.link}>
                                            <a onClick={this.menuHandler}>{item.title}</a>
                                        </Link>
                                    )}

                                    {item.submenu ? (
                                        <Collapse isOpen={item.id === isOpen}>
                                            <div className="submenu-container">
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}>
                                                            <Link legacyBehavior href={submenu.link}>
                                                                <a onClick={this.menuHandler}>{submenu.title}</a>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Collapse>
                                    ) : null}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>

                <style jsx>{`
                    .mobileMenu {
                        position: fixed;
                        top: 0;
                        left: -320px;
                        width: 280px;
                        height: 100vh;
                        background-color: #e11d48; /* Your website theme pink */
                        z-index: 999999;
                        transition: all 0.4s ease-in-out;
                        box-shadow: 5px 0 25px rgba(0,0,0,0.3);
                        overflow-y: auto;
                    }
                    .mobileMenu.show {
                        left: 0;
                    }
                    .mobile-menu-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 20px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    }
                    .mobile-menu-title {
                        color: #ffffff;
                        font-size: 18px;
                        font-weight: 700;
                    }
                    .clox {
                        color: #ffffff;
                        cursor: pointer;
                        font-size: 20px;
                        width: 35px;
                        height: 35px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background: rgba(255,255,255,0.15);
                        transition: background 0.2s;
                    }
                    .clox:hover {
                        background: rgba(255,255,255,0.3);
                    }
                    .responsivemenu {
                        list-style: none;
                        padding: 15px 20px;
                        margin: 0;
                    }
                    .responsivemenu li {
                        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                    }
                    .responsivemenu a, .menu-item-toggle {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        color: #ffffff;
                        text-decoration: none;
                        padding: 14px 0;
                        font-size: 15px;
                        font-weight: 500;
                        transition: opacity 0.2s;
                        cursor: pointer;
                    }
                    .responsivemenu a:hover, .menu-item-toggle:hover, .active-submenu {
                        opacity: 0.85;
                        color: #ffffff !important;
                    }
                    .menu-item-toggle i {
                        transition: transform 0.3s ease;
                    }
                    .rotate-icon {
                        transform: rotate(90deg);
                    }
                    .submenu-container {
                        padding-left: 15px;
                        background: rgba(0, 0, 0, 0.12);
                        border-radius: 6px;
                        margin-bottom: 10px;
                    }
                    .submenu-container ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    .submenu-container li {
                        border-bottom: none;
                    }
                    .submenu-container a {
                        padding: 10px 0;
                        font-size: 14px;
                        color: rgba(255, 255, 255, 0.85);
                    }
                    .submenu-container a:hover {
                        color: #ffffff !important;
                        padding-left: 5px;
                    }
                    .showmenu {
                        cursor: pointer;
                        font-size: 22px;
                        color: #1e293b;
                    }
                `}</style>
            </div>
        )
    }
}