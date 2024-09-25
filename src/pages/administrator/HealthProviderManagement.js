import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const HealthProviderManagement = () => {
    return (
        <div>
            <Appheader /> 
            <main class="content">
                <div class="container container-user">
                    {/* <!-- Header --> */}
                    <div class="row">
                        <div class="col-md-6">
                            <Link to="/administrator_dashboard"><button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button></Link>
                        </div>
                        <div class="col-md-6">
                            <Link to="/create_healthcare_provider"><button class="btn btn-primary">Add HRP</button></Link>
                        </div>
                    </div>

                    {/* <!-- Health Record Provider List --> */}
                    <div class="provider-list table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Specialty</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- Provider data will be populated here dynamically --> */}
                                <tr>
                                    <td>1</td>
                                    <td>Dr. Smith</td>
                                    <td>smith@example.com</td>
                                    <td>Cardiology</td>
                                    <td class="button-container">
                                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                                        <button class="btn btn-update"><i class="fas fa-edit"></i>Update</button>
                                    </td>
                                </tr>
                                {/* <!-- Repeat for other providers --> */}
                                <tr>
                                    <td>2</td>
                                    <td>Dr. Johnson</td>
                                    <td>johnson@example.com</td>
                                    <td>Orthopedics</td>
                                    <td class="button-container">
                                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                                        <button class="btn btn-update"><i class="fas fa-edit"></i>Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Dr. Davis</td>
                                    <td>davis@example.com</td>
                                    <td>Neurology</td>
                                    <td class="button-container">
                                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                                        <button class="btn btn-update"><i class="fas fa-edit"></i>Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Dr. Wilson</td>
                                    <td>wilson@example.com</td>
                                    <td>Ophthalmology</td>
                                    <td class="button-container">
                                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                                        <button class="btn btn-update"><i class="fas fa-edit"></i>Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Dr. Lee</td>
                                    <td>lee@example.com</td>
                                    <td>Pediatrics</td>
                                    <td class="button-container">
                                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                                        <button class="btn btn-update"><i class="fas fa-edit"></i>Update</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="pagination">
                            {/* <!-- Pagination links will be generated here --> */}
                        </div>
                    </div>
                </div>
            </main>

            <AppFooter />
        </div>
    );
}

export default HealthProviderManagement;
