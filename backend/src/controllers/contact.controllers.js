import Contact from '../models/contact.model.js'

const contact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({
                message: "All fields (name, email, message) are required"
            });
        }

        const contactDetails = new Contact({
            name,
            email,
            message
        });
    
        await contactDetails.save();
    
        res.status(201).json({
            message: "Message saved"
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error", error: error.message 
        });
    }
}

export {contact};