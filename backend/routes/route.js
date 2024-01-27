import express from 'express';
import {uploadFile,downloadImage} from '../controller/imagecontroller.js';
const router = express.Router();
import upload from '../utils/upload.js';


router.post('/upload',upload.single('file'), uploadFile);
router.get('/file/:id',downloadImage);

export default router;