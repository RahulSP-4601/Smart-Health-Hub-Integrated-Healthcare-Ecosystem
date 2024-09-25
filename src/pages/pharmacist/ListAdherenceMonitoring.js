import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const ListAdherenceMonitoring = () => {
    // Dummy data for adherence records
    const adherenceRecords = [
        { id: 1, medication: "Medication A", date: "2024-02-20", adherence: 90 },
        { id: 2, medication: "Medication B", date: "2024-02-21", adherence: 85 },
        { id: 3, medication: "Medication C", date: "2024-02-22", adherence: 92 },
        // Add more adherence records as needed
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

                    {/* Adherence Records */}
                    <div className="adherence-records">
                        <h2>List Adherence Records</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Medication</th>
                                    <th>Date</th>
                                    <th>Adherence (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adherenceRecords.map(record => (
                                    <tr key={record.id}>
                                        <td>{record.id}</td>
                                        <td>{record.medication}</td>
                                        <td>{record.date}</td>
                                        <td>{record.adherence}</td>
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

export default ListAdherenceMonitoring;
