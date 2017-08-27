express = require('express')
router = express.Router()

router.get '/ping', (req, res, next) ->
  res
    .status 200
    .json
      status: 200

module.exports = router
