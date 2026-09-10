import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    const [recentPosts, setRecentPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        async function fetchSidebarData() {
            try {
                const res = await fetch('/api/blogs');
                const json = await res.json();
                if (json.success && json.data) {
                    setRecentPosts(json.data.slice(0, 3));

                    const catCounts = {};
                    json.data.forEach((post) => {
                        if (post.category) {
                            catCounts[post.category] = (catCounts[post.category] || 0) + 1;
                        }
                    });

                    const formattedCategories = Object.keys(catCounts).map((cat) => ({
                        name: cat,
                        count: catCounts[cat],
                    }));

                    setCategories(formattedCategories);
                }
            } catch (error) {
                console.error('Failed to load dynamic sidebar data:', error);
            }
        }
        fetchSidebarData();
    }, []);

    return (
        <div className="col col-lg-4 col-12">
            <div className="wpo-blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        {categories.length === 0 ? (
                            <li><a>No Categories Found</a></li>
                        ) : (
                            categories.map((cat, idx) => (
                                <li key={idx}>
                                    <Link legacyBehavior href="/BlogDetailsPage">
                                        <a>{cat.name} <span>{cat.count}</span></a>
                                    </Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                        {recentPosts.length === 0 ? (
                            <p style={{ padding: '10px 0' }}>No recent posts found.</p>
                        ) : (
                            recentPosts.map((post) => (
                                <div className="post" key={post._id}>
                                    <div className="img-holder">
                                        <img src='images/recent-posts/img-1.jpg' alt="" />
                                    </div>
                                    <div className="details">
                                        <h4>
                                            <Link legacyBehavior href="/BlogDetailsPage">
                                                {post.title}
                                            </Link>
                                        </h4>
                                        <span className="date">
                                            {new Date(post.createdAt).toLocaleDateString('en-GB', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        {categories.length === 0 ? (
                            <li><a>General</a></li>
                        ) : (
                            categories.map((cat, idx) => (
                                <li key={idx}>
                                    <Link legacyBehavior href="/BlogDetailsPage">
                                        <a>{cat.name}</a>
                                    </Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;