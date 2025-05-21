const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const Db = require('../db/db');



const DB = new Db();

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