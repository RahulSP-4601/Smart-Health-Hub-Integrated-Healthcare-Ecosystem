import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const PrescriptionManagement = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container container-user">
                    <div class="row">
                        <div class="col-md-6">
                            <Link to="/patient_dashboard"><button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button></Link>
                        </div>
                        <div class="col-md-6">
                            <Link to="/create_prescription"><button class="btn btn-primary"> Add Prescription</button></Link>
                        </div>
                    </div>
                    <div id="prescriptionList" >
                        <h2>Prescription List</h2>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Prescription ID</th>
                                    <th>Medication</th>
                                    <th>Dosage</th>
                                    <th>Instructions</th>
                                    <th>Date Prescribed</th>
                                </tr>
                            </thead>
                            <tbody id="prescriptionTableBody">
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default PrescriptionManagement;