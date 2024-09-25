import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <header className="header">
                <div className="container">
                    <h3 className="logo"><Link to="/">SmartHealth Hub</Link></h3>
                    <nav className="navbar">
                        <ul className="nav-menu">
                            <li className="nav-item"><a href="#about">About</a></li>
                            <li className="nav-item"><a href="#services">Services</a></li>
                            <li className="nav-item"><a href="#testimonials">Testimonials</a></li>
                            <li className="nav-item"><a href="#contact">Contact</a></li>
                            <li className="nav-item"><Link to="/login">Login</Link></li>
                            <li className="nav-item"><Link to="/register">Register</Link></li>
                            <li className="nav-item"><Link to="/patient_dashboard">Patient</Link></li>
                            <li className="nav-item"><Link to="/administrator_dashboard">Administrator</Link></li>
                            <li className="nav-item"><Link to="/health_provider_dashboard">Health Care</Link></li>
                            <li className="nav-item"><Link to="/phamacist_dashboard">Pharmacist</Link></li>
                            <li className="nav-item"><Link to="/health_administrator">Health Administrator</Link></li>
                            <li className="nav-item"><a href="https://anjanavollalaaed4b5119d7.wordpress.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>

                        </ul>
                    </nav>
                    <div className="toggle-btn" onClick={toggleSidebar}>&#9776;</div>
                </div>
            </header>
            <aside className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
                <div className="sidebar__close-btn" onClick={toggleSidebar}>&times;</div>
                <ul className="sidebar-menu">
                    <li className="sidebar-item"><a href="#about">About</a></li>
                    <li className="sidebar-item"><a href="#services">Services</a></li>
                    <li className="sidebar-item"><a href="#testimonials">Testimonials</a></li>
                    <li className="sidebar-item"><a href="#contact">Contact</a></li>
                    <li className="sidebar-item"><Link to="/login">Login</Link></li>
                    <li className="sidebar-item"><Link to="/register">Register</Link></li>
                    <li className="sidebar-item"><Link to="/patient_dashboard">Patient</Link></li>
                    <li className="sidebar-item"><Link to="/administrator_dashboard">Administrator</Link></li>
                    <li className="sidebar-item"><Link to="/health_provider_dashboard">Health Care</Link></li>
                    <li className="sidebar-item"><Link to="/phamacist_dashboard">Pharmacist</Link></li>
                    <li className="sidebar-item"><Link to="/health_administrator">Health Administrator</Link></li>
                    <li className="sidebar-item"><a href="https://anjanavollalaaed4b5119d7.wordpress.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>

                </ul>
            </aside>
        </div>
    );
};

export default AppHeader;
