const models = require('../database/models.js');

const controllers = {
  getOne: (req, res) => {
    models.getOne(req.params.id, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  getAll: (req, res) => {
    models.getAll((err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  }
};

module.exports = controllers;