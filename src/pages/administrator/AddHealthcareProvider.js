import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const AddHealthProvider = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container container-user">
                    <div class="row">
                        <div class="col-md-6" style={{width: '100%', marginRight: '0.5rem'}}>
                            <Link to="/healthcare_provider_management">
                                <button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button>
                            </Link>
                        </div>
                        <div class="col-md-6" style={{width: '100%', marginRight: '0.5rem'}}>
                            <Link to="/healthcare_provider_management">
                                <button class="btn btn-secondary">List HRP</button>
                            </Link>
                        </div>
                    </div>

                    <div class="create-user-form">
                        <h2>Create Health Care Provider</h2>
                        <form action="submit_healthcare_provider.php" method="POST">
                            <div class="form-group">
                                <label for="user">Select User:</label>
                                <select id="user" name="user" required>
                                    <option value="">Select User</option>
                                    {/* <!-- Populate options dynamically with data from database --> */}
                                    <option value="user1">User 1</option>
                                    <option value="user2">User 2</option>
                                    <option value="user3">User 3</option>
                                    {/* <!-- Add more options as needed --> */}
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="specialty">Select Specialty:</label>
                                <select id="specialty" name="specialty" required>
                                    <option value="">Select Specialty</option>
                                    <option value="family_medicine">Family Medicine</option>
                                    <option value="pediatrics">Pediatrics</option>
                                    <option value="cardiology">Cardiology</option>
                                    {/* <!-- Add more specialties as needed --> */}
                                </select>
                            </div>
                            <div class="form-group">
                                <button type="submit">Create Health Care Provider</button>
                            </div>
                        </form>
                    </div>


                </div>
            </main>
            <AppFooter />
        </div>
    );
}

export default AddHealthProvider;
