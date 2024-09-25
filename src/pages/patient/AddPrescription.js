import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const AddPrescription = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container container-user">
                    {/* <!-- Header --> */}
                    <div class="row">
                        <div class="col-md-6">
                            <Link to="/patient_dashboard"><button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button></Link>
                        </div>
                        <div class="col-md-6">
                            <Link to="/prescription_management"><button class="btn btn-primary">List Prescriptions</button></Link>
                        </div>
                    </div>

                    <div id="prescriptionForm" class="container-user">
                        <h2>Add Prescription</h2>
                        <form id="prescriptionForm">
                            <div class="form-group">
                                <label for="medication">Medication:</label>
                                <input type="text" id="medication" name="medication" required />
                            </div>
                            <div class="form-group">
                                <label for="dosage">Dosage:</label>
                                <input type="text" id="dosage" name="dosage" required />
                            </div>
                            <div class="form-group">
                                <label for="instructions">Instructions:</label>
                                <textarea id="instructions" name="instructions" required></textarea>
                            </div>
                            <div class="form-group">
                                <label for="datePrescribed">Date Prescribed:</label>
                                <input type="date" id="datePrescribed" name="datePrescribed" required />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default AddPrescription;