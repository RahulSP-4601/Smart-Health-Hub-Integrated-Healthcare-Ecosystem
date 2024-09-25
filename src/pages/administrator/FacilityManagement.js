import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const FacilityManagement = () => {
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

                    <div className="facility-management-form">
                        <h2>Manage Facilities</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="facilityName">Facility Name:</label>
                                <input type="text" id="facilityName" name="facilityName" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location:</label>
                                <input type="text" id="location" name="location" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="capacity">Capacity:</label>
                                <input type="number" id="capacity" name="capacity" required />
                            </div>
                            <div className="form-group">
                                <button type="submit">Add Facility</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}

export default FacilityManagement;
