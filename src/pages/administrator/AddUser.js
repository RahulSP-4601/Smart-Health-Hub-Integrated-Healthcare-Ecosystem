import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const AddUser = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container container-user">
                    <div class="row">
                        <div class="col-md-6" style={{width: '100%', marginRight: '0.5rem'}}>
                            <Link to="/user_management">
                                <button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button>
                            </Link>
                        </div>
                        <div class="col-md-6" style={{width: '100%', marginRight: '0.5rem'}}>
                            <Link to="/user_management">
                                <button class="btn btn-secondary">List Users</button>
                            </Link>
                        </div>
                    </div>

                    <div class="create-user-form">
                        <h2>Create User</h2>
                        <form action="#" method="post">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div class="form-group">
                                <label for="role">Role:</label>
                                <select id="role" name="role" required>
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                    {/* <!-- Add more options as needed --> */}
                                </select>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>


                </div>
            </main>
            <AppFooter />
        </div>
    );
}

export default AddUser;
