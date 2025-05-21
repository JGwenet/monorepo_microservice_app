module.exports = {
    db: {
        url: 'mongodb://localhost:27017/online-shop',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    },
    secret: 'secret',
    tokenLife: 60 * 60 * 24 * 7, // 7 days
    tokenSecret: 'secret'
}