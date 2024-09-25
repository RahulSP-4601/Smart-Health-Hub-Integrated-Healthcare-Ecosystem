import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const PatientConsultation = () => {
    // Dummy data for patient consultations
    const consultations = [
        { id: 1, date: "2024-01-15", doctor: "Dr. Smith", reason: "Fever and cough", prescription: "Antibiotics prescribed" },
        { id: 2, date: "2024-02-01", doctor: "Dr. Johnson", reason: "Back pain", prescription: "Muscle relaxants prescribed" },
        // Add more consultations as needed
    ];

    return (
        <div>
            <AppHeader />
            <main className="content">
                <div className="container container-user">
                    {/* Header */}
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/phamacist_dashboard">
                                <button className="btn btn-primary">
                                    <i className="fas fa-arrow-left"></i> Back
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Patient Consultations */}
                    <div className="patient-consultations">
                        <h2>Patient Consultation History</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Doctor</th>
                                    <th>Reason</th>
                                    <th>Prescription</th>
                                </tr>
                            </thead>
                            <tbody>
                                {consultations.map(consultation => (
                                    <tr key={consultation.id}>
                                        <td>{consultation.id}</td>
                                        <td>{consultation.date}</td>
                                        <td>{consultation.doctor}</td>
                                        <td>{consultation.reason}</td>
                                        <td>{consultation.prescription}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default PatientConsultation;
