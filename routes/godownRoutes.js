const express = require('express');
const router = express.Router();
const Godown = require('../models/Godown');

router.get('/', async (req, res) => {
    try {
        const godowns = await Godown.find().populate('subLocations');
        res.json(godowns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
