import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const MedicationReminders = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container container-user">
                    <div class="row">
                        <div class="col-md-6" style={{width: '100%', marginRight: '0.5rem'}}>
                        <Link to="/patient_dashboard">
                                <button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button>
                            </Link>
                        </div>
                        <div class="col-md-6" style={{  width: '100%', marginRight: '0.5rem'}}>
                            <Link to="/createmedicationreminder">
                                <button class="btn btn-secondary">Create Reminder</button>
                            </Link>
                        </div>
                    </div>

                    <section class="medication-reminders">
                        <h2>Medication Reminders</h2>
                        <div class="reminder-list">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Medication Name</th>
                                        <th>Dosage</th>
                                        <th>Frequency</th>
                                        <th>Time</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Aspirin</td>
                                        <td>1 pill</td>
                                        <td>Once daily</td>
                                        <td>08:00 AM</td>
                                        <td><button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default MedicationReminders;