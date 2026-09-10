import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import BlogSidebar from '../BlogSidebar';

const BlogSingle = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (!slug) return;

        async function fetchBlogPost() {
            try {
                const res = await fetch('/api/blogs');
                const json = await res.json();
                if (json.success) {
                    const foundPost = json.data.find((p) => p.slug === slug);
                    setPost(foundPost || null);
                }
            } catch (error) {
                console.error('Failed to fetch blog post:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogPost();
    }, [slug]);

    if (loading) {
        return (
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <p>Loading post...</p>
                </div>
            </section>
        );
    }

    if (!post) {
        return (
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <p>Blog post not found.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
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
                                <h2>{post.title}</h2>
                                <p>{post.content}</p>
                                <blockquote>{post.metaDescription || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</blockquote>
                            </div>
                            <div className="tag-share clearfix">
                                <div className="tag">
                                    <ul>
                                        {post.category && <li><Link legacyBehavior href="/BlogDetailsPage">{post.category}</Link></li>}
                                        {post.tags ? (
                                            post.tags.split(',').map((tag, idx) => (
                                                <li key={idx}><Link legacyBehavior href="/BlogDetailsPage">{tag.trim()}</Link></li>
                                            ))
                                        ) : (
                                            <>
                                                <li><Link legacyBehavior href="/BlogDetailsPage">Business</Link></li>
                                                <li><Link legacyBehavior href="/BlogDetailsPage">Marketing</Link></li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="share">
                                    <ul>
                                        <li><Link legacyBehavior href="/BlogDetailsPage"><a><i className="ti-facebook"></i></a></Link></li>
                                        <li><Link legacyBehavior href="/BlogDetailsPage"><a><i className="ti-twitter-alt"></i></a></Link></li>
                                        <li><Link legacyBehavior href="/BlogDetailsPage"><a><i className="ti-instagram"></i></a></Link></li>
                                    </ul>
                                </div>
                            </div> 
                            <div className="author-box">
                                <div className="author-avatar">
                                    <Link legacyBehavior href="/BlogDetailsPage" target="_blank"><img src='images/blog-details/author.jpg' alt="" /></Link>
                                </div>
                                <div className="author-content">
                                    <Link legacyBehavior href="/BlogDetailsPage" className="author-name"><a>{post.author || 'Henry Joyes'}</a></Link>
                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                    <div className="author-btn">
                                        <Link legacyBehavior href="/BlogDetailsPage"><a>All Post From Author</a></Link>
                                    </div>
                                </div>
                            </div> 
                            <div className="more-posts clearfix">
                                <div className="previous-post">
                                    <Link legacyBehavior href="/BlogDetailsPage">
                                        <span className="post-control-link"><a>Previous</a></span>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <Link legacyBehavior href="/BlogDetailsPage">
                                        <span className="post-control-link"><a>Next post</a></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="comments-area">
                            <div className="comments-section">
                                <h3 className="comments-title">Comments</h3>
                                <ol className="comments">
                                    <li className="comment even thread-even depth-1" id="comment-1">
                                        <div id="div-comment-1">
                                            <div className="comment-theme">
                                                <div className="comment-image"> <img src='images/blog-details/comments-author/img-1.jpg' alt="" /> </div>
                                            </div>
                                            <div className="comment-main-area">
                                                <div className="comment-wrapper">
                                                    <div className="comments-meta">
                                                        <h4>John Abraham <span className="comments-date">October 28, 2018 At 9.00am</span></h4>
                                                    </div>
                                                    <div className="comment-area">
                                                        <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
                                                        <div className="comments-reply">
                                                            <Link legacyBehavior className="comment-reply-link" href="/BlogDetailsPage"><a><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div> 
                        <div className="comment-respond">
                            <h3 className="comment-reply-title">Leave a Comment</h3>
                            <form method="post" id="commentform" className="comment-form" onSubmit={submitHandler}>
                                <div className="form-inputs">
                                    <input placeholder="Name" type="text" />
                                    <input placeholder="Email" type="email" />
                                    <input placeholder="Website" type="url" />
                                </div>
                                <div className="form-textarea">
                                    <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                </div>
                                <div className="form-submit">
                                    <input id="submit" value="Reply" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </section>
    );
};

export default BlogSingle;