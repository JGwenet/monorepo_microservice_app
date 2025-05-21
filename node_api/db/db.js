const mongoose = require('mongoose');
const { model } = require('./models');
const config = require('../config');


class DB {
    constructor() {
        this.initDb();
    }

    initDb() {
        mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.error('Database connection error:', err);
            });
    }
}


module.exports = DB;