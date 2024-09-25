import React from "react";
import AppFooter from "../../components/AppFooter";
import Appheader from "../../components/AppHeader";
import { Link } from "react-router-dom";
const DataOversite = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container create-user-container">
                    <div class="row">
                        <div class="col-md-6" style={{ width: '100%', marginRight: '0.5rem' }}>
                            <Link to="/administrator_dashboard">
                                <button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button>
                            </Link>
                        </div>
                        <div class="col-md-6" style={{ width: '100%', marginRight: '0.5rem' }}>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="data-card">
                                <h3>User Statistics</h3>
                                <p>Total Users: 1000</p>
                                <p>Active Users: 800</p>
                                <p>New Users Today: 20</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="data-card">
                                <h3>Appointment Statistics</h3>
                                <p>Total Appointments: 500</p>
                                <p>Upcoming Appointments: 300</p>
                                <p>Missed Appointments: 50</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="data-card">
                                <h3>Health Record Statistics</h3>
                                <p>Total Health Records: 1500</p>
                                <p>Updated Records Today: 100</p>
                                <p>Overdue Records: 20</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="data-card">
                                <h3>Medication Reminder Statistics</h3>
                                <p>Total Reminders: 200</p>
                                <p>Upcoming Reminders: 150</p>
                                <p>Missed Reminders: 20</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>

    );
}

export default DataOversite;
