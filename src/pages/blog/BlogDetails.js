import React from 'react';
import BlogCommentCreation from './BlogCommentCreation';

const BlogDetails = () => {
    // Dummy blog data (replace with actual data)
    const blog = {
        id: 1,
        title: 'Lorem Ipsum Dolor Sit Amet',
        author: 'John Doe',
        date: 'February 25, 2024',
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
            <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
            <p>Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        `,
        // Other properties like tags, comments, etc. can be added here
    };

    return (
        <div className="blog-details">
            <div className="container">
                <div className="blog-details-header">
                    <h2>{blog.title}</h2>
                    <p className="author-date">By {blog.author} | {blog.date}</p>
                </div>
                <div className="blog-details-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>

            <BlogCommentCreation />
        </div>


    );
};

export default BlogDetails;
