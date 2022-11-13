const asyncHandler = require('express-async-handler')

//getGoals
//route GET /api/goals
const getGoals = asyncHandler (async (req, res )=>{
    res.status(200).json({message: 'Get Goals'})
})

//setGoals
//route POST /api/goals
const setGoals = asyncHandler (async (req, res )=>{
    res.status(400)
    throw new Error('please add a textfield')
    // res.status(200).json({message:'create  Goals' })
})


//updateGoals
//route PUT /api/goals/:id
const updateGoal = asyncHandler (async (req, res )=>{
    res.status(200).json({message: `update  Goals ${req.params.id}` })
})

//deleteGoals
//route DELETE /api/goals/:id
const deleteGoal = asyncHandler (async(req, res )=>{
    res.status(200).json({message: `Delete  Goals ${req.params.id}` })
})

module.exports= {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}