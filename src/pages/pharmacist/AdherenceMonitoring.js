import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const AdherenceMonitoring = () => {
    return (
        <div>
            <AppHeader />
            <main className="content">
                <div className="container container-user">
                    {/* Header */}
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/phamacist_dashboard">
                                <button className="btn btn-primary">
                                    <i className="fas fa-arrow-left"></i> Back
                                </button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to="/adherence_monitoring">
                                <button className="btn btn-primary">List Adherence Records</button>
                            </Link>
                        </div>
                    </div>

                    {/* Form */}
                    <div id="adherenceMonitoringForm">
                        <h2>Adherence Monitoring</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="medication">Medication:</label>
                                <input type="text" id="medication" name="medication" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date:</label>
                                <input type="date" id="date" name="date" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="adherence">Adherence (Percentage):</label>
                                <input type="text" id="adherence" name="adherence" required />
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

export default AdherenceMonitoring;
