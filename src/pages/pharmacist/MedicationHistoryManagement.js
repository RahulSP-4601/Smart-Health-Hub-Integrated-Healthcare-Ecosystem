import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const MedicationHistoryManagement = () => {
    // Dummy data for medication history
    const medicationHistory = [
        { id: 1, medication: "Medication X", dosage: "10mg", frequency: "Once daily", startDate: "2024-01-15", endDate: "2024-01-30" },
        { id: 2, medication: "Medication Y", dosage: "20mg", frequency: "Twice daily", startDate: "2024-02-01", endDate: "2024-02-15" },
        // Add more medication history as needed
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

                    {/* Medication History */}
                    <div className="medication-history">
                        <h2>Medication History Management</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Medication</th>
                                    <th>Dosage</th>
                                    <th>Frequency</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {medicationHistory.map(history => (
                                    <tr key={history.id}>
                                        <td>{history.id}</td>
                                        <td>{history.medication}</td>
                                        <td>{history.dosage}</td>
                                        <td>{history.frequency}</td>
                                        <td>{history.startDate}</td>
                                        <td>{history.endDate}</td>
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

export default MedicationHistoryManagement;
