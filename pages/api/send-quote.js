import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb',
    },
  },
};


export default async function handler(req, res) {
    // Ensure it's a POST request
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    // Extract form data and the file sent from your RequirementModal component
    const { name, email, phone, patchType, quantity, details, file } = req.body;

    try {
        let attachments = [];
        
        // If a file was uploaded, convert the base64 content into a Buffer for Resend
        if (file && file.content && file.filename) {
            attachments.push({
                filename: file.filename,
                content: Buffer.from(file.content, 'base64'),
            });
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Custom Patches Official <service@custompatchesofficial.com>', 
            to: ['service@custompatchesofficial.com'],
            subject: `New Custom Patch Quote Request from ${name || 'Customer'}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px;">
                    <h2 style="color: #dc2626; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">New Quote Inquiry</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    <p><strong>Patch Type:</strong> ${patchType || 'Standard'}</p>
                    <p><strong>Quantity:</strong> ${quantity || 'Not specified'}</p>
                    <p><strong>Project Details / Requirements:</strong></p>
                    <div style="background: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #dc2626; line-height: 1.6; white-space: pre-line;">
                        ${details || 'No additional details provided.'}
                    </div>
                </div>
            `,
            attachments: attachments,
        });

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
