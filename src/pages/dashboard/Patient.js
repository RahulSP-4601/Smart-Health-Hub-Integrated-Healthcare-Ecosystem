import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const Patient = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container-dashboard">
                    <h2 class="section-title" id="section-title" >Welcome, Rahul Panchal</h2>

                    <div class="shortcut-buttons">
                        <Link to="/schedule_appointment_patient" class="shortcut-button">
                            <i class="fas fa-calendar"></i>
                            <span class="button-label">Schedule Appointment</span>
                        </Link>
                        <Link to="/view_health_records" class="shortcut-button">
                            <i class="fas fa-file-medical"></i>
                            <span class="button-label">View Health Records</span>
                        </Link>
                        <Link to="/send_message" class="shortcut-button">
                            <i class="fas fa-envelope"></i>
                            <span class="button-label">Send Message</span>
                        </Link>
                        <Link to="/medication_reminders" class="shortcut-button">
                            <i class="fas fa-pills"></i>
                            <span class="button-label">Medication Reminders</span>
                        </Link>
                        <Link to="/symtom_checker" class="shortcut-button">
                            <i class="fas fa-user-md"></i>
                            <span class="button-label">Symptom Checker</span>
                        </Link>
                        <Link to="/prescription_management" class="shortcut-button">
                            <i class="fas fa-prescription"></i>
                            <span class="button-label">Prescription Management</span>
                        </Link>

                    </div>


                    <div class="card-container">
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Upcoming Appointments</h3>
                                <p class="card-info">You have 3 appointments scheduled.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-vial"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Latest Lab Results</h3>
                                <p class="card-info">Your recent lab results are now available.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-heartbeat"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Health Tips</h3>
                                <p class="card-info">Check out our latest health tips to stay healthy.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-pills"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Medication Reminders</h3>
                                <p class="card-info">Stay on track with your medication schedule.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-user-md"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Symptom Checker</h3>
                                <p class="card-info">Assess your symptoms and get guidance.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-file-medical"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Health Records</h3>
                                <p class="card-info">View and manage your health records.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Messages</h3>
                                <p class="card-info">Communicate with your healthcare providers.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default Patient;