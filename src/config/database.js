// src/config/database.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI; // URL do MongoDB
const dbName = 'cards'; // Nome do banco de dados
const client = new MongoClient(uri);

let db;

const connectDatabase = async () => {
    try {
        await client.connect();
        console.log('Conectado ao MongoDB');

        db = client.db(dbName); // Seleciona o banco de dados

        // Verifica se a coleção 'cards' existe e cria se não existir
        const collections = await db.listCollections({ name: 'cards' }).toArray();
        if (collections.length === 0) {
            await db.createCollection('cards');
            console.log('Coleção "cards" criada');
        }
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
        process.exit(1);
    }
};

const getDatabase = () => {
    if (!db) {
        throw new Error('Banco de dados não está conectado');
    }
    return db;
};

export { connectDatabase, getDatabase };
