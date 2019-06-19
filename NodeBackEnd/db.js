const Sequelize = require('sequelize');
const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/userTable.db'
});
const user = db.define('user', {
    name: Sequelize.STRING
})

module.exports = {
    db, user
}