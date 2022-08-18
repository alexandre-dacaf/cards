var mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://mongo:27017/cards");

    const cardSchema = new mongoose.Schema({
        title: String
    });

    const Card = mongoose.model("Card", cardSchema);

    const silence = new Card({ title: "Silence" });

    await silence.save();
}

module.exports = main;
