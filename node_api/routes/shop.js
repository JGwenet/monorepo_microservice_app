const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const Db = require('../db/db');



const DB = new Db();


/**
 * @swagger
 * /api/shop/info:
 *   get:
 *     summary: Get shop info
 *     responses:
 *       200:
 *         description: Shop info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_products:
 *                   type: integer
 *                 total_orders:
 *                   type: integer
 */
router.get("/info", async (req, res) => {
    try {
        const total = await DB.getShopInfo();    
        res.json({
            total_products: total.total_products,
            total_orders: total.total_orders
        });
    }catch {
        res.status(500).json({ error: 'Error fetching shop info' });
    }
});


module.exports = router;