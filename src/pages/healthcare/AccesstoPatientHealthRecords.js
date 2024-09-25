import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const AccessToPatientHealthRecords = () => {
    const [patientName, setPatientName] = useState("");
    const [accessReason, setAccessReason] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to handle access request submission
        console.log("Access request details:", { patientName, accessReason });
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

                    <div className="access-to-health-records">
                        <h2>Access to Patient Health Records</h2>
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
                                <label htmlFor="accessReason">Reason for Access:</label>
                                <textarea
                                    id="accessReason"
                                    name="accessReason"
                                    value={accessReason}
                                    onChange={(e) => setAccessReason(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">Request Access</button>
                        </form>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default AccessToPatientHealthRecords;
