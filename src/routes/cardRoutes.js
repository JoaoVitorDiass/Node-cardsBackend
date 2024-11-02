import express from 'express';
import { createCard, findAllCards, findCardById, updateCard, deleteCard } from '../controllers/cardController.js';

const router = express.Router();

/**
 * @swagger
 * /cards:
 *   post:
 *     summary: Cria um novo Card
 *     tags: [Cards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               backgroundColor:
 *                 type: string
 *               description:
 *                 type: string
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Card criado com sucesso
 */
router.post('/', createCard);

/**
 * @swagger
 * /cards:
 *   get:
 *     summary: Retorna todos os cartões
 *     tags: [Cards]
 *     responses:
 *       200:
 *         description: Lista de cartões
 */
router.get('/', findAllCards);

/**
 * @swagger
 * /cards/{id}:
 *   get:
 *     summary: Retorna um Card pelo ID
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do Card
 *       404:
 *         description: Card não encontrado
 */
router.get('/:id', findCardById);

/**
 * @swagger
 * /cards/{id}:
 *   put:
 *     summary: Atualiza um Card pelo ID
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               backgroundColor:
 *                 type: string
 *               description:
 *                 type: string
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Card atualizado com sucesso
 *       404:
 *         description: Card não encontrado
 */
router.put('/:id', updateCard);

/**
 * @swagger
 * /cards/{id}:
 *   delete:
 *     summary: Exclui um Card pelo ID
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Card excluído com sucesso
 *       404:
 *         description: Card não encontrado
 */
router.delete('/:id', deleteCard);

export default router;
