import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const HealthAdministrator = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container-dashboard">
                    <h2 class="section-title" id="section-title" >Welcome, [Health Administrator Name]</h2>

                    <div class="shortcut-buttons">
                        <Link to="/user_management" class="shortcut-button">
                            <i class="fas fa-users"></i>
                            <span class="button-label">User Management</span>
                        </Link>
                        <Link to="/facility_management" class="shortcut-button">
                            <i class="fas fa-hospital"></i>
                            <span class="button-label">Healthcare Facility Management</span>
                        </Link>
                        <Link to="/system_configuration" class="shortcut-button">
                            <i class="fas fa-cog"></i>
                            <span class="button-label">System Configuration</span>
                        </Link>
                        <Link to="/data_oversite" class="shortcut-button">
                            <i class="fas fa-chart-bar"></i>
                            <span class="button-label">Data Oversight</span>
                        </Link>
                        <Link to="/report_generation" class="shortcut-button">
                            <i class="fas fa-file-alt"></i>
                            <span class="button-label">Report Generation</span>
                        </Link>
                        <Link to="/support_and_assistance" class="shortcut-button">
                            <i class="fas fa-headset"></i>
                            <span class="button-label">Support and Assistance</span>
                        </Link>
                    </div>
                    <div class="card-container">
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">User Management</h3>
                                <p class="card-info">Handle user accounts, oversee registration, activation, and deactivation of accounts.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-hospital"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Healthcare Facility Management</h3>
                                <p class="card-info">Oversee management of healthcare facilities within the SmartHealth Hub platform.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-cog"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">System Configuration</h3>
                                <p class="card-info">Handle system-level configurations, integrate new features or services.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Data Oversight</h3>
                                <p class="card-info">Monitor integrity and security of the platform, address data-related issues.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Report Generation</h3>
                                <p class="card-info">Generate reports on user activity, system performance, and health trends for analysis.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-headset"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Support and Assistance</h3>
                                <p class="card-info">Provide support and assistance to users and stakeholders within the SmartHealth Hub platform.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </main>
            <AppFooter />
        </div>
    );
};

export default HealthAdministrator;
