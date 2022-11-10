//getGoals
//route GET /api/goals
const getGoals =(req, res )=>{
    res.status(200).json({message: 'Get Goals'})
}

//setGoals
//route POST /api/goals
const setGoals =(req, res )=>{
    res.status(200).json({message:'create  Goals' })
}


//updateGoals
//route PUT /api/goals/:id
const updateGoal =(req, res )=>{
    res.status(200).json({message: `update  Goals ${req.params.id}` })
}

//deleteGoals
//route DELETE /api/goals/:id
const deleteGoal =(req, res )=>{
    res.status(200).json({message: `Delete  Goals ${req.params.id}` })
}

module.exports= {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}