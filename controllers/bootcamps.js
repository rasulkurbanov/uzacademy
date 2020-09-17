const Bootcamp = require('../models/Bootcamp.js')
const ErrorResponse = require('../utils/errorResponse.js')
const asyncHandler = require('../middleware/asyncHandler')

// @desc  GET all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find().sort('name')

    res
      .status(200)
      .json({success: true, msg: "Showing all bootcamps", data: bootcamps})
})

// @desc  GET a single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = asyncHandler (async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if(!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp can not found with an id of ${req.params.id}`, 404)
      )
    }

    res
    .status(200)
    .json({success: true, msg: `Get the bootcamp with an id:${req.params.id}`, data: bootcamp})

})

// @desc  Create a new bootcamp
// @route POST /api/v1/bootcamps
// @access Public
exports.createBootcamp = asyncHandler (async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body)  

    res.status(201).json({
      success: true,
      data: bootcamp
    })
})

// @desc  Update a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Public
exports.updateBootcamp = asyncHandler (async (req, res, next) => {
    const updatedBootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

    if(!updatedBootcamp) {
      res.status(400).json({success: false})
    }
    res.status(200).json({success: true, msg: "Update a bootcamp", data: updatedBootcamp})
})


// @desc  Delete a bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamp = asyncHandler (async (req, res, next) => {
    const deletedBootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    if(!bootcamp) {
      res.status(400).json({success: false})
    }

    res.status(200).json({success: true, msg: `Deleted  ${req.params.id} bootcamp`})
})

