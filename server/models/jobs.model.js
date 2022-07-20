const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    company: {
        type: String,
        required: [true, "Company is required"],
        minlength: [3, "Company must be at least 3 characters"]
    },
    salary: {
        type: Number,
        min: [100000, "Salary must be at least 100k"]
    },
    isRemote: {
        type: Boolean
    },
}, {timestamps: true})

module.exports.Job = mongoose.model('Job', JobSchema)