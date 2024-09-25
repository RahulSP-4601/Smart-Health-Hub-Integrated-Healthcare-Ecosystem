import React from "react";
import Appheader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

const Login = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <section class="login-container">
                    <h2>Login to SmartHealth Hub</h2>
                    <form id="login-form">
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div class="form-group">
                            <label for="usertype">User Type:</label>
                            <select id="usertype" name="usertype" required>
                                <option value="">Select User Type</option>
                                <option value="admin">Admin</option>
                                <option value="doctor">Doctor</option>
                                <option value="nurse">Nurse</option>
                                <option value="patient">Patient</option>
                                <option value="staff">Staff</option>
                            </select>
                        </div>
                        <button type="submit">Login</button>

                        <p class="form-info">Dont have an account? <a href="register.html"> Register here</a></p>
                    </form>
                </section>
            </main>
            <AppFooter />
        </div>
    );
};

export default Login;