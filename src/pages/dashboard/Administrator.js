import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const Administrator = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container-dashboard">
                    <h2 class="section-title" id="section-title" >Welcome, [Administrator Name]</h2>

                    <div class="shortcut-buttons">
                        <Link to="/user_management" class="shortcut-button">
                            <i class="fas fa-user-cog"></i>
                            <span class="button-label">User Management</span>
                        </Link>
                        <Link to="/healthcare_provider_management" class="shortcut-button">
                            <i class="fas fa-user-md"></i>
                            <span class="button-label">Healthcare Provider Management</span>
                        </Link>
                        <Link to="/system_configuration" class="shortcut-button">
                            <i class="fas fa-cogs"></i>
                            <span class="button-label">System Configuration</span>
                        </Link>
                        <Link to="/data_oversite" class="shortcut-button">
                            <i class="fas fa-database"></i>
                            <span class="button-label">Data Oversight</span>
                        </Link>
                        <Link to="/report_generation" class="shortcut-button">
                            <i class="fas fa-chart-bar"></i>
                            <span class="button-label">Report Generation</span>
                        </Link>
                        <Link to="/facility_management" class="shortcut-button">
                            <i class="fas fa-hospital"></i>
                            <span class="button-label">Facility Management</span>
                        </Link>
                        <Link to="/compliance_oversight" class="shortcut-button">
                            <i class="fas fa-user-shield"></i>
                            <span class="button-label">Compliance Oversight</span>
                        </Link>
                        <Link to="/incident_response" class="shortcut-button">
                            <i class="fas fa-hand-holding-medical"></i>
                            <span class="button-label">Incident Response</span>
                        </Link>
                        <Link to="/task_management" class="shortcut-button">
                            <i class="fas fa-tasks"></i>
                            <span class="button-label">Task Management</span>
                        </Link>
                    </div>
                    <div class="card-container">
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-user-cog"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">User Management</h3>
                                <p class="card-info">Handle user accounts, including registration, activation, and deactivation, ensuring the integrity of the user base.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-user-md"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Healthcare Provider Management</h3>
                                <p class="card-info">Manage healthcare provider profiles, ensuring completeness and accuracy of information.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">System Configuration</h3>
                                <p class="card-info">Handle system-level configurations to ensure smooth operation and integrate new features or services.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-database"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Data Oversight</h3>
                                <p class="card-info">Monitor the overall integrity and security of the platform, addressing any issues related to data breaches, privacy, or system malfunctions.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Report Generation</h3>
                                <p class="card-info">Generate reports on user activity, system performance, and health trends for analysis and improvement, supporting informed decision-making.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-hospital"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Facility Management</h3>
                                <p class="card-info">Oversee the management of healthcare facilities within the platform, including maintaining details about each facility, such as location, services offered, and operational status.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-user-shield"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Compliance Oversight</h3>
                                <p class="card-info">Ensure compliance with healthcare regulations, standards, and legal requirements, addressing any compliance-related issues that may arise.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-hand-holding-medical"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Incident Response</h3>
                                <p class="card-info">Coordinate responses to health-related incidents or emergencies within the platform, ensuring timely and effective resolution.</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-tasks"></i>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Task Management</h3>
                                <p class="card-info">Manage tasks and assignments within the platform, ensuring efficient task allocation and completion.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default Administrator;
