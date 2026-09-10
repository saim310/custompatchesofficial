import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BlogSidebar from '../BlogSidebar';
import VideoModal from '../../components/ModalVideo';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch('/api/blogs');
                const json = await res.json();
                if (json.success) {
                    setPosts(json.data);
                }
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    return (
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content">
                            {loading ? (
                                <p>Loading posts...</p>
                            ) : posts.length === 0 ? (
                                <p>No blog posts found.</p>
                            ) : (
                                posts.map((post) => (
                                    <div className="post format-standard-image" key={post._id}>
                                        <div className="entry-media">
                                            <img src={post.image || 'images/blog/img-4.jpg'} alt="" />
                                        </div>
                                        <ul className="entry-meta">
                                            <li>
                                                <Link legacyBehavior href="/BlogDetailsPage">
                                                    <a><img src='images/blog/admin.jpg' alt="" /> By {post.author || 'Admin'}</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/BlogDetailsPage">
                                                    <a><i className="ti-calendar"></i> {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/BlogDetailsPage">
                                                    <a><i className="ti-heart"></i> {post.likes || 35}</a>
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link legacyBehavior href="/BlogDetailsPage">
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p>{post.metaDescription || post.content}</p>
                                        <Link legacyBehavior href="/BlogDetailsPage" className="read-more">
                                            Read More...
                                        </Link>
                                    </div>
                                ))
                            )}

                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link legacyBehavior href="/BlogDetailsPage" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link legacyBehavior href="/BlogDetailsPage">1</Link></li>
                                    <li><Link legacyBehavior href="/BlogDetailsPage">2</Link></li>
                                    <li><Link legacyBehavior href="/BlogDetailsPage">3</Link></li>
                                    <li><Link legacyBehavior href="/BlogDetailsPage">4</Link></li>
                                    <li>
                                        <Link legacyBehavior href="/BlogDetailsPage" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </section>
    );
};

export default BlogList;