import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const SymptomChecker = () => {
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
                            <h2 class="section__title">Symptom Checker</h2>
                        </div>
                    </div>
                    <div class="symptom-form">
                        <form id="symptomForm">
                            <div class="form-group">
                                <label for="symptoms">Enter your symptoms:</label>
                                <textarea id="symptoms" name="symptoms" rows="4" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Check Symptoms</button>
                        </form>
                    </div>
                    <div id="symptomResponse" class="response hidden">
                        <h2>Response:</h2>
                        <ul id="symptomList"></ul>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default SymptomChecker;