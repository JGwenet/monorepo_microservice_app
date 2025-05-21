const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    category_name: {
        type: String,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});


const orderSchema = new Schema(
    {
        products: [{
            type: Object
        }],
        user: {
            city: {
                type: String,
                required: true
            },
            street: {
                type: String,
                required: true
            },
            credit: {
                type: String,
                required: true
            },
            order: {
                type: Date,
                required: true
            },
            ship: {
                type: Date,
                required: true
            },
            userId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
        },
            total: {
                type: Number,
                default: 0
            },
    },
    {
        timestamps: true
    }
);


const productSchema = new Schema(
    
    {
        product_name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        imageUrl: {
            type: String,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
    },
    {
        timestamps: true
    });

    
const userSchema = new Schema(
    {
        role: {type: Number, required: true, default: 0},
        cardID: {type: String, required: true, max:9},
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        city: {type: String, required: true},
        street: {type: String, required: true},
        cart: {
            created: {type: Date, default: Date.now},
            status: {type: String, default: 'active'},
            items: [
                {
                    productId: {
                        type: Schema.Types.ObjectId,
                        ref: 'Product'
                    },
                    product_name: {type: String},
                    quantity: {type: Number},
                    total_product_price: {type: Number, default: 0},
                }
            ]
        }
    }
);

module.exports = {
    Category: mongoose.model('Category', categorySchema),
    Order: mongoose.model('Order', orderSchema),
    Product: mongoose.model('Product', productSchema),
    User: mongoose.model('User', userSchema)
}










