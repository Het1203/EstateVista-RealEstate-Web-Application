import Contact from "../models/contact.model.js";

export const createContact = async (req, res, next) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    try {
        const contact = await newContact.save();
        res.status(201).json(contact);
    } catch (error) {
        next(error);
    }
}