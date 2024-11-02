import { getDatabase } from '../config/database.js';
import { ObjectId } from 'mongodb';

class CardDAO {
    static async create(cardData) {
        const db = getDatabase();
        const cardCollection = db.collection('cards');
        const result = await cardCollection.insertOne(cardData);
        return result.ops;
    }

    static async findAll() {
        const db = getDatabase();
        const cardCollection = db.collection('cards');
        return await cardCollection.find({}).toArray();
    }

    static async findById(id) {
        const db = getDatabase();
        const cardCollection = db.collection('cards');
        return await cardCollection.findOne({ _id: new ObjectId(id) });
    }

    static async update(id, cardData) {
        const db = getDatabase();
        const cardCollection = db.collection('cards');
        const result = await cardCollection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: cardData },
            { returnDocument: 'after' }
        );
        return result;
    }

    static async delete(id) {
        const db = getDatabase();
        const cardCollection = db.collection('cards');
        const result = await cardCollection.findOneAndDelete({ _id: new ObjectId(id) }); 
        return result;
    }
}

export default CardDAO;
