import React from "react";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const UserManagement = () => {
    return (
        <div>
            <Appheader />
            <main class="content">
                <div class="container container-user">
                    <div class="row">
                        <div class="col-md-6" style={{width: '100%', marginRight: '0.5rem'}}>
                            <Link to="/administrator_dashboard"><button class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back</button></Link>
                        </div>
                        <div class="col-md-6" style={{width: '100%', marginRight: '0.5rem'}}>
                            <Link to="/create_user">
                                <button class="btn btn-primary" >Add User</button>
                            </Link>
                        </div>
                    </div>

                    <div class="user-list table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- User data will be populated here dynamically --> */}
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>john@example.com</td>
                                    <td>Admin</td>
                                    <td class="button-container">
                                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                                        <button class="btn btn-update"><i class="fas fa-edit"></i>Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jane Smith</td>
                                    <td>jane@example.com</td>
                                    <td>User</td>
                                    <td class="button-container">
                                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                                        <button class="btn btn-update"><i class="fas fa-edit"></i>Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Michael Johnson</td>
                                    <td>michael@example.com</td>
                                    <td>User</td>
                                    <td class="button-container">
                                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                                        <button class="btn btn-update"><i class="fas fa-edit"></i>Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Emily Davis</td>
                                    <td>emily@example.com</td>
                                    <td>User</td>
                                    <td class="button-container">
                                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                                        <button class="btn btn-update"><i class="fas fa-edit"></i>Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>William Brown</td>
                                    <td>william@example.com</td>
                                    <td>User</td>
                                    <td class="button-container">
                                        <button class="btn btn-delete"><i class="fas fa-trash"></i>Delete</button>
                                        <button class="btn btn-update"><i class="fas fa-edit"></i>Update</button>
                                    </td>
                                </tr>

                                {/* <!-- Repeat for other users --> */}
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

export default UserManagement;
