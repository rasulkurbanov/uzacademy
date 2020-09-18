const express = require('express')
const router = express.Router()
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp, getBootcampInRadius } = require('../controllers/bootcamps.js')


router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp)

router  
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp)

router
  .route('/radius/:zipcode/:distance')
  .get(getBootcampInRadius)


module.exports = router