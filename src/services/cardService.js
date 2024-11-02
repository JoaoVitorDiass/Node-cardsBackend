import CardDAO from '../dao/cardDao.js';

class CardService {
    static async createCard(cardData) {
        return await CardDAO.create(cardData);
    }

    static async findAllCards() {
        return await CardDAO.findAll();
    }

    static async findCardById(id) {
        return await CardDAO.findById(id);
    }

    static async updateCard(id, cardData) {
        return await CardDAO.update(id, cardData);
    }

    static async deleteCard(id) {
        return await CardDAO.delete(id);
    }
}

export default CardService;
