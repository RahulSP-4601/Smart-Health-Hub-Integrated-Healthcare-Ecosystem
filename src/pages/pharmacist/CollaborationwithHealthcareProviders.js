import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const CollaborationWithProviders = () => {
    const [providers, setProviders] = useState([
        { id: 1, name: "Healthcare Provider 1", specialty: "Family Medicine" },
        { id: 2, name: "Healthcare Provider 2", specialty: "Pediatrics" },
        { id: 3, name: "Healthcare Provider 3", specialty: "Cardiology" },
        // Add more providers as needed
    ]);

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

                    <div className="collaboration-providers">
                        <h2>Collaboration with Healthcare Providers</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Specialty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {providers.map((provider) => (
                                    <tr key={provider.id}>
                                        <td>{provider.id}</td>
                                        <td>{provider.name}</td>
                                        <td>{provider.specialty}</td>
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

export default CollaborationWithProviders;
