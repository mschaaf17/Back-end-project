const { Model, DataTypes } = require('sequelize')
//hashing password
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')

class User extends Model {
    //set up password bcrypt
}

User.init(
    {

}
)

module.exports = User