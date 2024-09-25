import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const EPrescriptions = () => {
    const [prescription, setPrescription] = useState("");
    const [dosage, setDosage] = useState("");
    const [instructions, setInstructions] = useState("");
    const [datePrescribed, setDatePrescribed] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to handle e-prescription submission
        console.log("E-prescription submitted:", { prescription, dosage, instructions, datePrescribed });
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

                    <div className="e-prescriptions">
                        <h2>E-Prescriptions</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="prescription">Prescription:</label>
                                <input
                                    type="text"
                                    id="prescription"
                                    name="prescription"
                                    value={prescription}
                                    onChange={(e) => setPrescription(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dosage">Dosage:</label>
                                <input
                                    type="text"
                                    id="dosage"
                                    name="dosage"
                                    value={dosage}
                                    onChange={(e) => setDosage(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="instructions">Instructions:</label>
                                <textarea
                                    id="instructions"
                                    name="instructions"
                                    value={instructions}
                                    onChange={(e) => setInstructions(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="datePrescribed">Date Prescribed:</label>
                                <input
                                    type="date"
                                    id="datePrescribed"
                                    name="datePrescribed"
                                    value={datePrescribed}
                                    onChange={(e) => setDatePrescribed(e.target.value)}
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

export default EPrescriptions;
