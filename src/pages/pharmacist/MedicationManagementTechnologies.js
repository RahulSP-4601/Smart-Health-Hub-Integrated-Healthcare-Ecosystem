import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const MedicationManagementTechnologies = () => {
    const [technologies, setTechnologies] = useState([
        { id: 1, name: "Medication Reminder Apps", description: "Mobile applications that remind patients to take their medications at the prescribed times." },
        { id: 2, name: "Smart Pill Dispensers", description: "Devices that dispense medications at specified times and track patient adherence." },
        { id: 3, name: "Electronic Prescribing Systems", description: "Software platforms that allow healthcare providers to electronically send prescriptions to pharmacies." },
        { id: 4, name: "Medication Management Software", description: "Comprehensive software solutions that facilitate medication management, including prescription tracking and adherence monitoring." },
        // Add more technologies as needed
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

                    <div className="medication-technologies">
                        <h2>Medication Management Technologies</h2>
                        <ul>
                            {technologies.map((technology) => (
                                <li key={technology.id}>
                                    <h3>{technology.name}</h3>
                                    <p>{technology.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default MedicationManagementTechnologies;
