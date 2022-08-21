const dbConfig = require('../config/database')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: dbConfig.pool,
})

sequelize.authenticate().then(() => {
    console.log("DB Connected Successfully")
}).catch((err) => {
    console.log(`Error: ${err}`)
})

const db = {}

db.users = require('./User')(sequelize, DataTypes)
const ModelTrail = require('sequelize-model-trail').init(sequelize);
ModelTrail.enableAndLoadModelTrail();

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false, alter: true })
    .then(() => console.log("db synced"))
    .catch((err) => console.log(`Error ${err}`))

module.exports = db;