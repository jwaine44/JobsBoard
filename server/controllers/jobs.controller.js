const {Job} = require('./../models/jobs.model')

// GET ALL
module.exports.allJobs = (req, res) => {
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json(err))
}

// GET ONE
module.exports.oneJob = (req, res) => {
    Job.findOne({_id: req.params.id})
        .then(job => res.json(job))
        .catch(err => res.status(400).json(err))
}

// CREATE
module.exports.createJob = (req, res) => {
    Job.create(req.body)
        .then(newJob => res.json(newJob))
        .catch(err => res.status(400).json(err))
}

// UPDATE
module.exports.updateJob = (req, res) => {
    Job.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true}
    )
        .then(updatedJob => res.json(updatedJob))
        .catch(err => res.status(400).json(err))
}

// DELETE
// Don't mark res in line 37 the same as response in line 39; separate things
module.exports.deleteJob = (req, res) => {
    Job.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}