const User = require('./user')
const Topic = require('./topic')
const Data = require('./data')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *
 *
 */

User.belongsToMany(Topic, {through: 'following'})
Topic.belongsToMany(User, {through: 'following'})
Data.belongsToMany(User, {through: 'following'})
User.belongsToMany(Data, {through: 'following'})
Topic.hasMany(Data)
Data.belongsTo(Topic)


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Topic,
  Data
}
