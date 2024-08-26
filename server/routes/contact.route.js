import express from 'express';
import { createContact } from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/contactus', createContact);

export default router;