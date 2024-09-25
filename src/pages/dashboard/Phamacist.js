import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const Pharmacist = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container-dashboard">
                    <h2 class="section-title" id="section-title" >Welcome, [Pharmacist Name]</h2>
 
                    <div class="shortcut-buttons">
                        <Link to="/medication_dispensation" class="shortcut-button">
                            <i class="fas fa-pills"></i>
                            <span class="button-label">Medication Dispensation</span>
                        </Link>
                        <Link to="/medication_history_management" class="shortcut-button">
                            <i class="fas fa-file-medical"></i>
                            <span class="button-label">Medication History Management</span>
                        </Link>
                        <Link to="/patient_consultation" class="shortcut-button">
                            <i class="fas fa-user-md"></i>
                            <span class="button-label">Patient Consultation</span>
                        </Link>
                        <Link to="/prescription_verification" class="shortcut-button">
                            <i class="fas fa-prescription"></i>
                            <span class="button-label">Prescription Verification</span>
                        </Link>
                        <Link to="/create_adherence_monitoring" class="shortcut-button">
                            <i class="fas fa-clock"></i>
                            <span class="button-label">Adherence Monitoring</span>
                        </Link>
                        <Link to="/patient_education" class="shortcut-button">
                            <i class="fas fa-graduation-cap"></i>
                            <span class="button-label">Patient Education</span>
                        </Link>
                        <Link to="/collaboration_with_health_providers" class="shortcut-button">
                            <i class="fas fa-user-friends"></i>
                            <span class="button-label">Collaboration with Healthcare Providers</span>
                        </Link>
                        <Link to="/medication_management_technologies" class="shortcut-button">
                            <i class="fas fa-laptop-medical"></i>
                            <span class="button-label">Medication Management Technologies</span>
                        </Link>
                        <Link to="/adverse_event_reporting" class="shortcut-button">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span class="button-label">Adverse Event Reporting</span>
                        </Link>
                    </div>
                    <div class="card-container"> 
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-pills"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Medication Dispensation</h3>
                                <p class="card-info">Dispense medications prescribed by healthcare providers to patients.</p>
                            </div>
                        </div>
 
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-file-medical"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Medication History Management</h3>
                                <p class="card-info">Manage and maintain records of patient medication history for reference and monitoring.</p>
                            </div>
                        </div>
 
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-user-md"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Patient Consultation</h3>
                                <p class="card-info">Provide consultation to patients regarding their medication regimen, usage, and potential side effects.</p>
                            </div>
                        </div>
 
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-prescription"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Prescription Verification</h3>
                                <p class="card-info">Verify and authenticate prescriptions received from healthcare providers to ensure accuracy and safety.</p>
                            </div>
                        </div>
 
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Adherence Monitoring</h3>
                                <p class="card-info">Monitor and track patient medication adherence to ensure compliance with prescribed treatment plans.</p>
                            </div>
                        </div>
 
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Patient Education</h3>
                                <p class="card-info">Educate patients on proper medication usage, dosage instructions, and potential side effects to promote medication safety and efficacy.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <AppFooter />
        </div>
    );
};

export default Pharmacist;