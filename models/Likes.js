const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Likes extends Model {}

Likes.init(
    {

}
)

module.exports = Likes