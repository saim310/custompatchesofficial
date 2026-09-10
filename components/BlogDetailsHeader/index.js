import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BlogDetailsHeader = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

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
                console.error('Failed to fetch blog post for header:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogPost();
    }, [slug]);

    if (loading) {
        return (
            <section className="humble-beginnings-section">
                <div className="container">
                    <p>Loading header...</p>
                </div>
            </section>
        );
    }

    if (!post) {
        return (
            <section className="humble-beginnings-section">
                <div className="container">
                    <span className="badge-about">Blog Details</span>
                    <h1 className="main-heading">Post Not Found</h1>
                </div>
            </section>
        );
    }

    const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });

    return (
        <section className="humble-beginnings-section">
            <style jsx>{`
                .humble-beginnings-section {
                    position: relative;
                    width: 100%;
                    min-height: 420px;
                    padding: 70px 0;
                    display: flex;
                    align-items: center;
                    background: 
                        linear-gradient(180deg, rgba(241, 245, 249, 0.92) 0%, rgba(226, 232, 240, 0.96) 100%),
                        url('/images/patch-bg-mosaic.jpg') center/cover no-repeat;
                    color: #0f172a;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    box-sizing: border-box;
                }

                .badge-about {
                    display: inline-block;
                    border: 1px solid rgba(220, 38, 38, 0.5);
                    color: #dc2626;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    padding: 5px 16px;
                    border-radius: 20px;
                    margin-bottom: 20px;
                    background: rgba(220, 38, 38, 0.06);
                }

                .main-heading {
                    font-size: 38px;
                    font-weight: 400;
                    line-height: 1.25;
                    max-width: 840px;
                    color: #0f172a;
                    margin: 0 0 16px 0;
                    letter-spacing: -0.3px;
                }

                .brand-red {
                    color: #dc2626;
                    font-weight: 600;
                }

                .sub-heading {
                    font-size: 15px;
                    color: #475569;
                    max-width: 650px;
                    line-height: 1.7;
                    margin: 0 0 32px 0;
                    font-weight: 300;
                }

                .stats-grid {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .stat-card {
                    background: #ffffff;
                    border: 1px solid #cbd5e1;
                    box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
                    border-radius: 12px;
                    padding: 14px 20px;
                    min-width: 135px;
                    transition: all 0.3s ease;
                }

                .stat-card:hover {
                    border-color: rgba(220, 38, 38, 0.5);
                    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
                    transform: translateY(-2px);
                }

                .stat-card-red {
                    border-color: rgba(220, 38, 38, 0.3);
                    background: #fef2f2;
                }

                .stat-number {
                    font-size: 18px;
                    font-weight: 600;
                    color: #0f172a;
                    display: block;
                    margin-bottom: 2px;
                }

                .stat-number.red-text {
                    color: #dc2626;
                }

                .stat-label {
                    font-size: 11px;
                    font-weight: 500;
                    color: #64748b;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                @media (max-width: 768px) {
                    .main-heading {
                        font-size: 28px;
                    }
                    .stats-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>

            <div className="container">
                <span className="badge-about">{post.category || 'Article'}</span>

                <h1 className="main-heading">
                    {post.title}
                </h1>

                <p className="sub-heading">
                    {post.metaDescription || 'Explore our comprehensive insights, professional custom patch manufacturing guidelines, and industry trends.'}
                </p>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-number">{post.author || 'Admin'}</span>
                        <span className="stat-label">Author</span>
                    </div>

                    <div className="stat-card">
                        <span className="stat-number">{formattedDate}</span>
                        <span className="stat-label">Published</span>
                    </div>

                    <div className="stat-card stat-card-red">
                        <span className="stat-number red-text">{post.category || 'General'}</span>
                        <span className="stat-label">Category</span>
                    </div>

                    <div className="stat-card">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Verified Post</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsHeader;