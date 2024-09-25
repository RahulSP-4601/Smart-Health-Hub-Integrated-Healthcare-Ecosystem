import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const AdverseEventReporting = () => {
    const [events, setEvents] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to submit adverse event report
        // You can implement this function to send the report to the server
        console.log("Adverse event report submitted!");
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

                    <div className="adverse-event-reporting">
                        <h2>Adverse Event Reporting</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="eventDescription">Event Description:</label>
                                <textarea id="eventDescription" name="eventDescription" required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit">Submit Report</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default AdverseEventReporting;
