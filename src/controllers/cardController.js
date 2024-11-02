import CardService from '../services/cardService.js';

export const createCard = async (req, res) => {
    try {
        const cardData = {
            title: req.body.title,
            backgroundColor: req.body.backgroundColor,
            description: req.body.description,
            url: req.body.url,
        };
        const newCard = await CardService.createCard(cardData);
        res.status(201).json(newCard);
    } catch (error) {
        console.error('Erro ao criar Card:', error);
        res.status(500).json({ message: 'Erro ao criar Card' });
    }
};

export const findAllCards = async (req, res) => {
    try {
        const cards = await CardService.findAllCards();
        res.status(200).json(cards);
    } catch (error) {
        console.error('Erro ao buscar cartões:', error);
        res.status(500).json({ message: 'Erro ao buscar cartões' });
    }
};

export const findCardById = async (req, res) => {
    try {
        const card = await CardService.findCardById(req.params.id);
        if (!card) {
            return res.status(404).json({ message: 'Card não encontrado' });
        }
        res.status(200).json(card);
    } catch (error) {
        console.error('Erro ao buscar Card:', error);
        res.status(500).json({ message: 'Erro ao buscar Card' });
    }
};

export const updateCard = async (req, res) => {
    try {
        const cardData = {
            title: req.body.title,
            backgroundColor: req.body.backgroundColor,
            description: req.body.description,
            url: req.body.url,
        };
        const updatedCard = await CardService.updateCard(req.params.id, cardData);
        if (!updatedCard) {
            return res.status(404).json({ message: 'Card não encontrado' });
        }
        res.status(200).json(updatedCard);
    } catch (error) {
        console.error('Erro ao atualizar Card:', error);
        res.status(500).json({ message: 'Erro ao atualizar Card' });
    }
};

export const deleteCard = async (req, res) => {
    try {
        const deletedCard = await CardService.deleteCard(req.params.id);
        if (!deletedCard) {
            return res.status(404).json({ message: 'Card não encontrado' });
        }
        res.status(200).json({ message: 'Card deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar Card:', error);
        res.status(500).json({ message: 'Erro ao deletar Card' });
    }
};
