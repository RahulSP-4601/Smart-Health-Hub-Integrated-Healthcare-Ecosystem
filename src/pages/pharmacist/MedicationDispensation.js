import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const MedicationDispensation = () => {
    // Dummy data for medication dispensation records
    const dispensationRecords = [
        { id: 1, medication: "Medication A", date: "2024-02-20", quantity: 30 },
        { id: 2, medication: "Medication B", date: "2024-02-21", quantity: 25 },
        { id: 3, medication: "Medication C", date: "2024-02-22", quantity: 20 },
        // Add more dispensation records as needed
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

                    {/* Medication Dispensation Records */}
                    <div className="dispensation-records">
                        <h2>List Medication Dispensation Records</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Medication</th>
                                    <th>Date</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dispensationRecords.map(record => (
                                    <tr key={record.id}>
                                        <td>{record.id}</td>
                                        <td>{record.medication}</td>
                                        <td>{record.date}</td>
                                        <td>{record.quantity}</td>
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

export default MedicationDispensation;
