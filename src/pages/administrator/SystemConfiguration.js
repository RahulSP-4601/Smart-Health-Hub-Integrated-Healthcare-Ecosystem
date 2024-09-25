import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const SystemConfiguration = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container container-user">
                    <div class="row">
                        <div class="col-md-2" style={{ width: '100%', marginRight: '0.5rem' }}>
                            <Link to="/administrator_dashboard">
                                <button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button>
                            </Link>
                        </div>
                        <div class="col-md-10" style={{ width: '100%', marginRight: '0.5rem' }}>
                            
                        </div>
                    </div>

                    <div class="create-user-form">
                        <h2>System Configuration</h2>
                        <main>
                            <form id="systemConfigForm">
                                <div class="form-group">
                                    <label for="logo">Logo:</label>
                                    <input type="file" id="logo" name="logo" accept="image/*" />
                                </div>
                                <div class="form-group">
                                    <label for="theme">Theme:</label>
                                    <select id="theme" name="theme">
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="timezone">Timezone:</label>
                                    <select id="timezone" name="timezone">
                                        <option value="GMT-8">GMT-8 (Pacific Time)</option>
                                        <option value="GMT-5">GMT-5 (Eastern Time)</option>
                                        {/* <!-- Add more timezone options --> */}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="language">Language:</label>
                                    <select id="language" name="language">
                                        <option value="en">English</option>
                                        <option value="es">Spanish</option>
                                        {/* <!-- Add more language options --> */}
                                    </select>
                                </div>
                                <button type="submit">Save Changes</button>
                            </form>
                        </main>
                    </div>


                </div>
            </main>
            <AppFooter />
        </div>
    );
}

export default SystemConfiguration;



