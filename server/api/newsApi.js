const router = require('express').Router()
const AYLIENTextAPI = require('aylien_textapi');
module.exports = router


router.post('/', (req, res, next) => {
  try {

    console.log('testing')
    var textapi = new AYLIENTextAPI({
      application_id: "348dbc69",
      application_key: "3a8432b025b627a51d4a2f7fe250a820"
    });

    let info = []

     textapi.extract({'url': req.body.url}, function(error, response) {
      if (error === null) {
        info.push(response)
      }
    })

    setTimeout(function(){
      res.json(info) }, 1500);

  } catch(error) {next(error)}
})
