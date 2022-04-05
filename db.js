const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("database", "admin", "admin", {
    host: 'db.sqlite3',
    dialect: 'sqlite'
})

module.exports = sequelize