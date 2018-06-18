const router = require('express').Router()
const AYLIENTextAPI = require('aylien_textapi');
module.exports = router


let callBeingMade = {}


router.post('/extract', (req, res, next) => {
  try {

    var textapi = new AYLIENTextAPI({
      application_id: "f8485cb5",
      application_key: "f0198a611a95a115f7861dc9c2d6abc2"
    });

    // if (callBeingMade.url !== req.body.url) {
    //   callBeingMade.url = req.body.url
    //   console.log('first call', callBeingMade)
    // } else {
    //   console.log('repeat call')
    //   res.send();
    // }


    let info = []

     textapi.extract({'url': req.body.url}, function(error, response) {
      if (error === null) {
        info.push(response)
        // console.log(response)
      } else {
        console.log(error)
      }
    })

    setTimeout(function(){
      res.json(info) }, 1500);

  } catch(error) {next(error)}
})

router.post('/sentiment', (req, res, next) => {
  try {

    var textapi = new AYLIENTextAPI({
      application_id: "348dbc69",
      application_key: "3a8432b025b627a51d4a2f7fe250a820"
    });

    let info = []

     textapi.sentiment({'url': req.body.url}, function(error, response) {
      if (error === null) {
        info.push(response)
      }
    })

    setTimeout(function(){
      res.json(info) }, 1500);

  } catch(error) {next(error)}
})
