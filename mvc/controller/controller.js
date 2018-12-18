const model = require("../model/model.js")

const getOneLocation = (req, res, next) => {
  res.status(200).json(model.getOneLoc)
}

module.exports = {}
