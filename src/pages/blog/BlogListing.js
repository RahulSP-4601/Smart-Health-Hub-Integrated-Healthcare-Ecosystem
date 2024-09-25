import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { Link } from "react-router-dom";

const dummyBlogPosts = [
    {
      id: 1,
      title: "Introduction to React",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor."
    },
    {
      id: 2,
      title: "Getting Started with Redux",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor."
    },
    {
      id: 3,
      title: "Mastering CSS Grid",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor."
    }
  ];

  
const BlogListing = () => {
  return (
    <div>
      <AppHeader />
      <main className="content">
        <div className="container container-user">
          <div className="row">
            <div className="col-md-6" style={{ width: '100%', marginRight: '0.5rem' }}>
              <Link to="/blog/create">
                <button className="btn btn-primary"><i className="fas fa-plus"></i> Create Blog</button>
              </Link>
            </div>
          </div>

          <div className="blog-listing">
            <h2>Blog Posts</h2>
            <ul className="blog-posts">
              {dummyBlogPosts.map((post) => (
                <li key={post.id} className="blog-post">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <Link to={`/blog/${post.id}`} className="btn btn-primary">Read More</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export default BlogListing;
