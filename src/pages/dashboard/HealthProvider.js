import React from "react";
import AppFooter from "../../components/AppFooter";
import Appheader from "../../components/AppHeader";
import { Link } from "react-router-dom";

const HealthProvider = () => {
    return (
        <div>
            <div>
                <Appheader />
                <main class="content">
                    <div class="container-dashboard">
                        <h2 class="section-title" id="section-title" >Welcome, [Healthcare Provider Name]</h2>

                        <div class="shortcut-buttons">
                            <Link to="/EPrescriptions" class="shortcut-button">
                                <i class="fas fa-prescription"></i>
                                <span class="button-label">E-Prescriptions</span>
                            </Link>
                            <Link to="/AppointmentManagement" class="shortcut-button">
                                <i class="fas fa-calendar"></i>
                                <span class="button-label">Appointment Management</span>
                            </Link>
                            <Link to="/AccessToPatientHealthRecords" class="shortcut-button">
                                <i class="fas fa-file-medical"></i>
                                <span class="button-label">Access to Patient Health Records</span>
                            </Link>
                            <Link to="/secure_messaging" class="shortcut-button">
                                <i class="fas fa-envelope"></i>
                                <span class="button-label">Secure Messaging</span>
                            </Link>
                            <Link to="/professional_collaboration" class="shortcut-button">
                                <i class="fas fa-user-friends"></i>
                                <span class="button-label">Professional Collaboration</span>
                            </Link>
                            <Link to="/AnalyticsDashboard" class="shortcut-button">
                                <i class="fas fa-chart-line"></i>
                                <span class="button-label">Analytics Dashboard</span>
                            </Link>
                        </div>
                        <div class="card-container">
                            <div class="card">
                                <div class="icon">
                                    <i class="fas fa-prescription"></i>
                                </div>
                                <div class="card-content">
                                    <h3 class="card-title">E-Prescriptions</h3>
                                    <p class="card-info">Electronically prescribe medications for patients, improving accuracy and efficiency in the prescription process.</p>
                                </div>
                            </div>

                            <div class="card">
                                <div class="icon">
                                    <i class="fas fa-calendar"></i>
                                </div>
                                <div class="card-content">
                                    <h3 class="card-title">Appointment Management</h3>
                                    <p class="card-info">Manage appointments scheduled by patients, ensuring a streamlined booking process and efficient scheduling.</p>
                                </div>
                            </div>

                            <div class="card">
                                <div class="icon">
                                    <i class="fas fa-file-medical"></i>
                                </div>
                                <div class="card-content">
                                    <h3 class="card-title">Access to Patient Health Records</h3>
                                    <p class="card-info">View and update patient health records, facilitating informed healthcare delivery and personalized treatment plans.</p>
                                </div>
                            </div>

                            <div class="card">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="card-content">
                                    <h3 class="card-title">Secure Messaging</h3>
                                    <p class="card-info">Communicate securely with patients using encrypted messaging, ensuring privacy and confidentiality in healthcare interactions.</p>
                                </div>
                            </div>

                            <div class="card">
                                <div class="icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="card-content">
                                    <h3 class="card-title">Professional Collaboration</h3>
                                    <p class="card-info">Participate in health forums to collaborate with peers, share insights, and contribute to community knowledge and best practices.</p>
                                </div>
                            </div>

                            <div class="card">
                                <div class="icon">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="card-content">
                                    <h3 class="card-title">Analytics Dashboard</h3>
                                    <p class="card-info">Access data-driven insights and analytics dashboards to monitor patient health trends, enabling proactive and personalized care interventions.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

                <AppFooter />
            </div>
        </div>
    );
};

export default HealthProvider;