const JobController = require('./../controllers/jobs.controller')

module.exports = (app) => {
    app.get('/api/jobs', JobController.allJobs)
    app.get('/api/jobs/:id', JobController.oneJob)
    app.post('/api/jobs', JobController.createJob)
    app.put('/api/jobs/:id', JobController.updateJob)
    app.delete('/api/jobs/:id', JobController.deleteJob)
}