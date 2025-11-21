const userCreate = require('express').Router();
const QRCode = require('qrcode');
require('dotenv').config();

const redirectURL = process.env.REDIRECT_URL;
const shortID = require('short-id');
const User = require('../models/modelSchema');
const cloudinary = require('../cloudinary'); 

userCreate.post('/url', async (req, res) => {
    try {

        const url = req.body.url;

        if (!url) {
            return res.status(400).json('URL is required');
        }

        const shortCode = shortID.generate();

        const qrDataURL = await QRCode.toDataURL(url);

        const cloudinaryResult = await cloudinary.uploader.upload(qrDataURL, {
            folder: "qrcodes",
            public_id: shortCode,
            resource_type: "image"
        });
        
        const NewUrl = await User.create({
            shortUrl: shortCode,
            originalUrl: url,
            redirectUrl: `${redirectURL}read/url/${shortCode}`,
            qrCodePath: cloudinaryResult.secure_url   
        });

        const { redirectUrl, qrCodePath } = NewUrl;

        return res.status(201).json({
            redirectUrl,
            qrCodePath
        });

    } catch (err) {
        console.error(err);
        res.status(500).json("Server Error");
    }
});

module.exports = userCreate;
