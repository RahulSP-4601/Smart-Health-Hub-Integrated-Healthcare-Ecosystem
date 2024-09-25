import React, { useState } from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const BlogCreation = () => {
    const [formData, setFormData] = useState({
        title: "",
        content: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to server, update database, etc.)
        console.log(formData);
    };

    return (
        <div>
            <AppHeader />
            <main className="content">
                <div className="container container-user">
                    <div className="row">
                        <div className="col-md-6" style={{ width: '100%', marginRight: '0.5rem' }}>
                            <Link to="/blogs">
                                <button className="btn btn-primary"><i className="fas fa-arrow-left"></i> Back</button>
                            </Link>
                        </div>
                    </div>

                    <div className="blog-creation-form">
                        <h2>Create Blog Post</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content:</label>
                                <textarea id="content" name="content" value={formData.content} onChange={handleInputChange} required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit">Create Blog Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <AppFooter />
        </div>
    );
}

export default BlogCreation;
