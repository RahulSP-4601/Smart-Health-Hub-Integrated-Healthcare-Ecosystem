

import React, { useState, useEffect } from 'react';

import Appheader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

import home1 from '../img/home1.jpg';
import home2 from '../img/home2.jpg';
import home3 from '../img/home3.jpg';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: home1,
            title: 'Integrated Health',
            description: 'Transforming Healthcare Together'
        },
        {
            image: home2,
            title: 'Our Mission',
            description: 'Providing Comprehensive and Compassionate Care'
        },
        {
            image: home3,
            title: 'Join Us',
            description: "Together, Let's Build a Healthier Future"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div>
            <Appheader />
            <main className="content">
                <div className="banner-slider">
                    {slides.map((slide, index) => (
                        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                            <div className="slide-content">
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                            </div>
                            <img src={slide.image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                
                <section id="about" class="section">
                    <div class="container">
                        <h2 class="section__title">About Us</h2>
                        <div class="about__content">
                            <p>SmartHealth Hub is a pioneering initiative aimed at revolutionizing the healthcare industry. Our mission is to provide comprehensive and compassionate care to individuals and communities worldwide.
                                At SmartHealth Hub, we believe in leveraging cutting-edge technology to enhance healthcare accessibility and affordability. We are committed to utilizing data-driven insights to deliver personalized and effective healthcare solutions.
                                With a team of dedicated professionals, we strive to build a healthier future for everyone. Our integrated approach combines advanced medical expertise with innovative digital tools to empower individuals to take control of their health and well-being.
                                Join us on our journey to transform healthcare and make a positive impact on people's lives. Together, let's create a world where everyone has access to high-quality and affordable healthcare services.</p>
                        </div>
                    </div>
                </section>


                <section id="services" class="section">
                    <div class="container">
                        <h2 class="section__title">Our Services</h2>
                        <div class="services">
                            <div class="service">
                                <h3 class="service__title">Medical Consultation</h3>
                                <p class="service__description">Receive expert medical advice and guidance from our experienced healthcare professionals to address your health concerns and make informed decisions.</p>
                            </div>
                            <div class="service">
                                <h3 class="service__title">Health Checkups</h3>
                                <p class="service__description">Ensure your overall well-being with comprehensive health checkups, including physical examinations, screenings, and assessments of your vital health indicators.</p>
                            </div>
                            <div class="service">
                                <h3 class="service__title">Medication Management</h3>
                                <p class="service__description">Optimize your medication regimen with personalized management plans tailored to your specific needs, ensuring safe and effective use of prescribed medications.</p>
                            </div>
                            <div class="service">
                                <h3 class="service__title">Telemedicine Services</h3>
                                <p class="service__description">Access healthcare services remotely through secure and convenient telemedicine platforms, allowing for virtual consultations, diagnoses, and treatment recommendations.</p>
                            </div>
                            <div class="service">
                                <h3 class="service__title">Health Education</h3>
                                <p class="service__description">Empower yourself with valuable knowledge about various health topics, preventive measures, and lifestyle modifications through our informative health education programs.</p>
                            </div>
                            <div class="service">
                                <h3 class="service__title">Chronic Disease Management</h3>
                                <p class="service__description">Manage chronic conditions effectively with personalized care plans, regular monitoring, and support services to improve your quality of life and reduce the risk of complications.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="testimonials" class="section">
                    <div class="container">
                        <h2 class="section__title">Testimonials</h2>
                        <div class="testimonials">
                            <div class="testimonial">
                                <p class="testimonial__text">"SmartHealth Hub has truly transformed my healthcare experience. The expert guidance and support I received were exceptional, and I'm grateful for the positive impact it has had on my well-being."</p>
                                <p class="testimonial__author">- John Doe</p>
                            </div>
                            <div class="testimonial">
                                <p class="testimonial__text">"I highly recommend SmartHealth Hub to anyone seeking comprehensive and compassionate care. Their dedication to patient satisfaction and quality service is evident in every interaction."</p>
                                <p class="testimonial__author">- Jane Doe</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="contact" class="section">
                    <div class="container">
                        <h2 class="section__title">Contact Us</h2>
                        <form class="contact-form">
                            <div class="form-group">
                                <input type="text" name="name" placeholder="Your Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" placeholder="Your Email" />
                            </div>
                            <div class="form-group">
                                <textarea name="message" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </section>
            </main>
            <AppFooter />
        </div>
    );
};

export default Home;
