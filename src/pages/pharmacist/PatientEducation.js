import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const PatientEducation = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log("Searching for:", searchQuery);
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

                    <div className="patient-education">
                        <h2>Patient Education</h2>
                        <form onSubmit={handleSearch}>
                            <div className="form-group">
                                <label htmlFor="searchQuery">Search Resources:</label>
                                <input
                                    type="text"
                                    id="searchQuery"
                                    name="searchQuery"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Search</button>
                        </form>
                        {/* Render search results or educational resources here */}
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default PatientEducation;
