const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router
<<<<<<< HEAD
  .route('/:id')
=======
  .route('/one/:id')
>>>>>>> backend-review2
  .get(controllers.getOne)

router
  .route('/all')
  .get(controllers.getAll)

module.exports = router;