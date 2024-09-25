import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const AppointmentManagement = () => {
    const [patientName, setPatientName] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to handle appointment submission
        console.log("Appointment details:", { patientName, doctorName, appointmentDate, appointmentTime });
    };

    return (
        <div>
            <AppHeader />
            <main className="content">
                <div className="container container-user">
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/health_provider_dashboard">
                                <button className="btn btn-primary">
                                    <i className="fas fa-arrow-left"></i> Back
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="appointment-management">
                        <h2>Appointment Management</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="patientName">Patient Name:</label>
                                <input
                                    type="text"
                                    id="patientName"
                                    name="patientName"
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="doctorName">Doctor Name:</label>
                                <input
                                    type="text"
                                    id="doctorName"
                                    name="doctorName"
                                    value={doctorName}
                                    onChange={(e) => setDoctorName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="appointmentDate">Appointment Date:</label>
                                <input
                                    type="date"
                                    id="appointmentDate"
                                    name="appointmentDate"
                                    value={appointmentDate}
                                    onChange={(e) => setAppointmentDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="appointmentTime">Appointment Time:</label>
                                <input
                                    type="time"
                                    id="appointmentTime"
                                    name="appointmentTime"
                                    value={appointmentTime}
                                    onChange={(e) => setAppointmentTime(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default AppointmentManagement;
