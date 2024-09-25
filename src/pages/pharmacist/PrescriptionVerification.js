import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const PrescriptionVerification = () => {
    const [prescriptionId, setPrescriptionId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement prescription verification logic here
        console.log("Verifying prescription with ID:", prescriptionId);
    };

    return (
        <div>
            <AppHeader />
            <main className="content">
                <div className="container container-user">
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/phamacist_dashboard">
                                <button className="btn btn-primary">
                                    <i className="fas fa-arrow-left"></i> Back
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="prescription-verification">
                        <h2>Prescription Verification</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="prescriptionId">Enter Prescription ID:</label>
                                <input
                                    type="text"
                                    id="prescriptionId"
                                    name="prescriptionId"
                                    value={prescriptionId}
                                    onChange={(e) => setPrescriptionId(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Verify Prescription</button>
                        </form>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default PrescriptionVerification;
