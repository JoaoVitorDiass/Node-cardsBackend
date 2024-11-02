import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    backgroundColor: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: false },
});

const Card = mongoose.model('Card', cardSchema);

export default Card;
