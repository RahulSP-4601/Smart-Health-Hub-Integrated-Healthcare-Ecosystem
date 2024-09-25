import React, { useState } from "react";
import { Link } from "react-router-dom";
import Appheader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";

const BlogCommentCreation = () => {
    const [comment, setComment] = useState("");

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle comment submission logic here
        console.log("Submitted comment:", comment);
        // Reset comment input
        setComment("");
    };

    return (
        <div>
            <Appheader />
            <div style={{marginTop: 30 }} className="blog-comment-creation">
                <h2>Add Comment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="comment">Your Comment:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={comment}
                            onChange={handleCommentChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit Comment
                        </button>
                    </div>
                </form>
            </div>
            <AppFooter />
        </div>
    );
};

export default BlogCommentCreation;
