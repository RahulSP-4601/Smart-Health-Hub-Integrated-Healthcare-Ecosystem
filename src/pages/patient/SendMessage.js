import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const SendMessage = () => {
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
                            <h2 class="section__title">Send Message</h2>
                        </div>
                    </div>

                    <form id="sendMessageForm">
                        <div class="form-group">
                            <label for="recipient">Recipient:</label>
                            <select id="recipient" name="recipient" required>
                                <option value="">Select Doctor</option>
                                <option value="Dr. Smith">Dr. Smith</option>
                                <option value="Dr. Johnson">Dr. Johnson</option>
                                <option value="Dr. Williams">Dr. Williams</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </main>
            <AppFooter />
        </div>
    );
};

export default SendMessage;