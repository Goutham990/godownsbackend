const mongoose = require('mongoose');

const godownSchema = new mongoose.Schema({
    name: { type: String, required: true },
    parent_godown: { type: mongoose.Schema.Types.ObjectId, ref: 'Godown', default: null },
    subLocations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Godown' }]
});

module.exports = mongoose.model('Godown', godownSchema);
