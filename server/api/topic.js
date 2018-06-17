const router = require('express').Router()
const {User} = require('../db/models')
const {Topic} = require('../db/models')
module.exports = router

router.post('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    const topic = await Topic.create(req.body)
    await topic.addUser(user)
    await user.addTopic(topic)
    res.json(topic)


  } catch (error) { next(error) }
})


router.get('/:userId', async (req, res, next) => {
  try {

   const user = await User.findById(req.params.userId)
    const topics = await user.getTopics()
    res.json(topics)


  } catch (error) { next(error) }
})


router.put('/:userId/:topicId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    const topic = await Topic.findById(req.params.topicId)
    await user.removeTopic(topic)
    await topic.removeUser(user)
    const topics = await user.getTopics()
    console.log(topics)

    res.send(topics)

  } catch (error) { next(error) }
})
