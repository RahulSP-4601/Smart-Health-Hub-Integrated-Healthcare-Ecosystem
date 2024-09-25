import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const ReportGeneration = () => {
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

                    <div className="report-generation-form">
                        <h2>Generate Report</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="reportType">Report Type:</label>
                                <select id="reportType" name="reportType" required>
                                    <option value="">Select Report Type</option>
                                    <option value="sales">Sales Report</option>
                                    <option value="inventory">Inventory Report</option>
                                    <option value="userActivity">User Activity Report</option>
                                    {/* Add more report types as needed */}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateRange">Date Range:</label>
                                <input type="date" id="startDate" name="startDate" required />
                                <span> to </span>
                                <input type="date" id="endDate" name="endDate" required />
                            </div>
                            <div className="form-group">
                                <button type="submit">Generate Report</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}

export default ReportGeneration;
