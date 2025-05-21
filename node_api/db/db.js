const mongoose = require('mongoose');
const { Category, Order, Product, User } = require('./models');
const config = require('./config');


class DB {
    constructor() {
        this.initDb();
    }

    initDb() {
        mongoose.connect(config.db.url,
         { useNewUrlParser: config.db.options.useNewUrlParser, 
            useUnifiedTopology: config.db.options.useUnifiedTopology, 
            useCreateIndex: config.db.options.useCreateIndex 
         })
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.error('Database connection error:', err);
            });
    }

    async getShopInfo() {
        try 
        {
             const total_products = await Product.find().count();
             const total_orders = await Order.find().count();
             return {
                total_products,
                total_orders
            };
        } 
        catch (error) 
        {
            console.error('Error fetching shop info:', error);
            throw error;
        }
       
    }

}


module.exports = DB;