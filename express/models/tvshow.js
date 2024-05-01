const mongoose = require("mongoose");

const tvShowSchema = mongoose.Schema(
    {
        title: String,
        year: Number,
        episodes: Number,
        image: String,
        id: Number,
    },{ versionKey: false }
);


module.exports = mongoose.model("tvshows", tvShowSchema);