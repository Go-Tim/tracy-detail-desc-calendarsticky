const db = require('./index.js');

const models = {
  getOne: (id, callback) => {
    db.query(`SELECT * FROM CampSites WHERE id = ${id}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getAll: (callback) => {
    db.query(`SELECT * From CampSites`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }

}

module.exports = models;