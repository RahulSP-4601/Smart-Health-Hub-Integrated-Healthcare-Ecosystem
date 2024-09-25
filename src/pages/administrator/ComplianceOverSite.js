import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const ComplianceOversight = () => {
    return (
        <div>
            <AppHeader />
            <main className="content">
                <div className="container container-user">
                    <div className="row">
                        <div className="col-md-6" style={{ width: '100%', marginRight: '0.5rem' }}>
                            <Link to="/administrator_dashboard">
                                <button className="btn btn-primary"><i className="fas fa-arrow-left"></i> Back</button>
                            </Link>
                        </div>
                        <div className="col-md-6" style={{ width: '100%', marginRight: '0.5rem' }}>
                            
                        </div>
                    </div>

                    <div className="compliance-oversight-form">
                        <h2>Compliance Oversight</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="reportTitle">Report Title:</label>
                                <input type="text" id="reportTitle" name="reportTitle" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reportDescription">Report Description:</label>
                                <textarea id="reportDescription" name="reportDescription" required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="assignedTo">Assigned To:</label>
                                <input type="text" id="assignedTo" name="assignedTo" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dueDate">Due Date:</label>
                                <input type="date" id="dueDate" name="dueDate" required />
                            </div>
                            <div className="form-group">
                                <button type="submit">Create Report</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}

export default ComplianceOversight;
