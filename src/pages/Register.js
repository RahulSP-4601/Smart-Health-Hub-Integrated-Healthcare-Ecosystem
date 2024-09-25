import React from "react";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

const Register = () => {
    return (
        <div>
            <AppHeader />
            <main class="content">
                <section class="login-container">
                    <h2 class="login-title">Register</h2>
                    <form action="#" method="post" class="login-form">
                        <div class="form-group">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" id="username" name="username" class="form-input" required />
                        </div>
                        <div class="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" name="email" class="form-input" required />
                        </div>
                        <div class="form-group">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" id="password" name="password" class="form-input" required />
                        </div>
                        <div class="form-group">
                            <label for="confirm-password" class="form-label">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" class="form-input" required />
                        </div>
                        <div class="form-group">
                            <label for="user-type" class="form-label">User Type</label>
                            <select id="user-type" name="user-type" class="form-input" required>
                                <option value="">Select User Type</option>
                                <option value="admin">Admin</option>
                                <option value="doctor">Doctor</option>
                                <option value="nurse">Nurse</option>
                                <option value="patient">Patient</option>
                                <option value="staff">Staff</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-submit">Register</button>
                    </form>
                    <p class="form-info">Already have an account? <a href="login.html">Login here</a></p>
                </section>
            </main>
            <AppFooter />
        </div>
    );
};

export default Register;