import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";

import { Link } from "react-router-dom";

const ScheduleAppointmentPatient = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container container-user"> 
                    <div class="row">
                        <div class="col-md-2">
                            <Link to="/patient_dashboard"><button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button></Link>
                        </div>
                        <div class="col-md-10">
                            <h2 class="section__title">Schedule Appointment</h2>
                        </div>
                    </div>

                    <form action="#" method="POST" class="appointment-form">
                        <div class="form-group">
                            <label for="date">Date:</label>
                            <input type="date" id="date" name="date" required />
                        </div>
                        <div class="form-group">
                            <label for="time">Time:</label>
                            <input type="time" id="time" name="time" required />
                        </div>
                        <div class="form-group">
                            <label for="doctor">Doctor:</label>
                            <select id="doctor" name="doctor" required>
                                <option value="">Select Doctor</option>
                                <option value="Dr. Smith">Dr. Smith</option>
                                <option value="Dr. Johnson">Dr. Johnson</option>
                                <option value="Dr. Williams">Dr. Williams</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="reason">Reason for Appointment:</label>
                            <textarea id="reason" name="reason" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Schedule</button>
                    </form>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default ScheduleAppointmentPatient;