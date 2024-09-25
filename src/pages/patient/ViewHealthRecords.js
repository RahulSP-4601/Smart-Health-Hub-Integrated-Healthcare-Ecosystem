import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";

import { Link } from "react-router-dom";

const ViewHealthRecords= () => {
    return (
        <div>
            <Appheader />
            <main class="content">
    <div class="container container-user"> 
        <div class="row">
            <div class="col-md-2">
                <Link to="/patient_dashboard"><button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button></Link>
            </div>
            <div class="col-md-10">
                <h2 class="section__title">Your Health Records</h2>
            </div>
        </div>
         
        <div class="health-records-list table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Specialty</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>1</td>
                        <td>2024-02-18</td>
                        <td>Dr. Smith</td>
                        <td>Cardiology</td>
                        <td>
                            <button class="btn btn-details"><i class="fas fa-info-circle"></i> View Details</button>
                        </td>

                    </tr> 
                    <tr>
                        <td>2</td>
                        <td>2024-02-15</td>
                        <td>Dr. Johnson</td>
                        <td>Orthopedics</td>
                        <td>
                            <button class="btn btn-details"><i class="fas fa-info-circle"></i> View Details</button>
                        </td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>2024-02-10</td>
                        <td>Dr. Davis</td>
                        <td>Neurology</td>
                        <td>
                            <button class="btn btn-details"><i class="fas fa-info-circle"></i> View Details</button>
                        </td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td>2024-02-05</td>
                        <td>Dr. Wilson</td>
                        <td>Ophthalmology</td>
                        <td>
                            <button class="btn btn-details"><i class="fas fa-info-circle"></i> View Details</button>
                        </td>

                    </tr>
                    <tr>
                        <td>5</td>
                        <td>2024-01-30</td>
                        <td>Dr. Lee</td>
                        <td>Pediatrics</td>
                        <td>
                            <button class="btn btn-details"><i class="fas fa-info-circle"></i> View Details</button>
                        </td>

                    </tr>
                </tbody>
            </table>
            <div class="pagination"> 
            </div>
        </div>
    </div>
</main>
            <AppFooter />
        </div>
    );
};

export default ViewHealthRecords;