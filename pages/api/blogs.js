import clientPromise from '../../utils/mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const client = await clientPromise;
            const db = client.db('custom_patches');

            const newPost = {
                title: req.body.title,
                slug: req.body.slug,
                category: req.body.category,
                tags: req.body.tags,
                image: req.body.image,
                metaDescription: req.body.metaDescription,
                content: req.body.content,
                author: req.body.author,
                createdAt: new Date(),
            };

            const result = await db.collection('blogs').insertOne(newPost);
            return res.status(201).json({ success: true, data: result });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: 'Database error' });
        }
    } else if (req.method === 'GET') {
        try {
            const client = await clientPromise;
            const db = client.db('custom_patches');
            const posts = await db.collection('blogs').find({}).sort({ createdAt: -1 }).toArray();
            return res.status(200).json({ success: true, data: posts });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: 'Failed to fetch blogs' });
        }
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}