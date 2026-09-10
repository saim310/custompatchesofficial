import React, { useState } from 'react';
import Head from 'next/head';

const BlogEditorPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        category: '',
        tags: '',
        image: '',
        metaDescription: '',
        content: '',
        author: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage('Publishing blog post...');

        try {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatusMessage('Blog successfully published!');
                setFormData({ title: '', slug: '', category: '', tags: '', image: '', metaDescription: '', content: '', author: '' });
            } else {
                setStatusMessage('Failed to publish blog. Please try again.');
            }
        } catch (error) {
            setStatusMessage('An error occurred while publishing.');
        }
    };

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Inter, sans-serif' }}>
            <Head>
                <title>SEO Blog Publishing Dashboard</title>
            </Head>

            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#ffffff', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)' }}>
                <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, color: '#dc2626', background: 'rgba(220, 38, 38, 0.06)', padding: '4px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>SEO Publisher Portal</span>
                <h1 style={{ fontSize: '28px', color: '#0f172a', margin: '0 0 8px 0' }}>Create New Blog Post</h1>
                <p style={{ fontSize: '14px', color: '#475569', marginBottom: '32px' }}>Fill out the details below to publish an SEO-optimized article directly to your site.</p>

                {statusMessage && (
                    <div style={{ padding: '12px 16px', background: '#f1f5f9', borderLeft: '4px solid #dc2626', color: '#0f172a', marginBottom: '24px', fontSize: '14px', borderRadius: '4px' }}>
                        {statusMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>Blog Title (H1)</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={formData.title} 
                            onChange={handleChange} 
                            required 
                            placeholder="e.g. Complete Guide to Custom Embroidered Patches"
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>URL Slug</label>
                            <input 
                                type="text" 
                                name="slug" 
                                value={formData.slug} 
                                onChange={handleChange} 
                                required 
                                placeholder="e.g. guide-to-embroidered-patches"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>Category</label>
                            <input 
                                type="text" 
                                name="category" 
                                value={formData.category} 
                                onChange={handleChange} 
                                required 
                                placeholder="e.g. Design Guide"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>Tags (comma-separated)</label>
                            <input 
                                type="text" 
                                name="tags" 
                                value={formData.tags} 
                                onChange={handleChange} 
                                placeholder="e.g. patches, design, embroidery"
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>Featured Image Upload</label>
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleImageUpload} 
                                style={{ width: '100%', padding: '9px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', background: '#fff' }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>SEO Meta Description (150-160 characters)</label>
                        <textarea 
                            name="metaDescription" 
                            value={formData.metaDescription} 
                            onChange={handleChange} 
                            rows="2"
                            placeholder="Brief description for search engine result pages..."
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#1e293b', marginBottom: '6px' }}>Author Name</label>
                        <input 
                            type="text" 
                            name="author" 
                            value={formData.author} 
                            onChange={handleChange} 
                            placeholder="e.g. SEO Team"
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>Article Content (HTML or Markdown)</label>
                        <textarea 
                            name="content" 
                            value={formData.content} 
                            onChange={handleChange} 
                            required 
                            rows="10"
                            placeholder="Write your blog post content here..."
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'inherit' }}
                        />
                    </div>

                    <button 
                        type="submit" 
                        style={{ background: '#dc2626', color: '#ffffff', border: 'none', padding: '14px 24px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}
                    >
                        Publish Blog Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogEditorPage;