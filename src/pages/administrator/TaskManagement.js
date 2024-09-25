import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const TaskManagement = () => {
    return (
        <div>
            <AppHeader />
            <main className="content">
                <div className="container container-user">
                    <div className="row">
                        <div className="col-md-6" style={{ width: '100%', marginRight: '0.5rem' }}>
                            <Link to="/administrator_dashboard">
                                <button className="btn btn-primary"><i className="fas fa-arrow-left"></i> Back</button>
                            </Link>
                        </div>
                        <div className="col-md-6" style={{ width: '100%', marginRight: '0.5rem' }}>
                            <Link to="/task_list">
                                <button className="btn btn-secondary">View Tasks</button>
                            </Link>
                        </div>
                    </div>

                    <div className="task-management-form">
                        <h2>Task Management</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="taskTitle">Task Title:</label>
                                <input type="text" id="taskTitle" name="taskTitle" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDescription">Task Description:</label>
                                <textarea id="taskDescription" name="taskDescription" required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="assignedTo">Assigned To:</label>
                                <input type="text" id="assignedTo" name="assignedTo" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dueDate">Due Date:</label>
                                <input type="date" id="dueDate" name="dueDate" required />
                            </div>
                            <div className="form-group">
                                <button type="submit">Create Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}

export default TaskManagement;

