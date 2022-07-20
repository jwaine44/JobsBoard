import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

// Want to grab Id from params and get one job from the database when the component is loaded
// 1. To get to database: need axios
// 2. When the component is loaded: useEffect
// 3. For variable that will be changed: useState
// 4: For id from params: useParams

// Need to have a form and after submit: post to the database
// 1. for each input: need useState to track the changes
// 2. to send into the database: axios

const EditPage = () => {
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [salary, setSalary] = useState(100000)
    const [isRemote, setIsRemote] = useState(true)

    const {id} = useParams()
    const navigate = useNavigate()

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(res => {
                const job = res.data
                setTitle(job.title)
                setCompany(job.company)
                setSalary(job.salary)
                setIsRemote(job.isRemote)
            })
            .catch(err => console.log(err))
        }, [])
        
    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/jobs/${id}`, {title, company, salary, isRemote})
            .then(res => navigate(`/jobs/${id}`))
            .catch(err => console.log(err))
    }

  return (
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <label className='form-label'>Title</label>
                <input type = 'text' name = 'title' value = {title} onChange = {(e) => setTitle(e.target.value)} className = 'form-control' />
            </div>
            <div>
                <label className='form-label'>Company</label>
                <input type = 'text' name = 'company' value = {company} onChange = {(e) => setCompany(e.target.value)} className = 'form-control' />
            </div>
            <div>
                <label className='form-label'>Salary</label>
                <input type = 'number' name = 'salary' value = {salary} onChange = {(e) => setSalary(e.target.value)} className = 'form-control' />
            </div>
            <div className='form-check'>
                <input type = 'checkbox' name = 'isRemote' checked = {isRemote} onChange = {(e) => setIsRemote(e.target.checked)} className = 'form-check-input' />
                <label className='form-check-label'>Remote?</label>
            </div>
            <button type = 'submit' className = 'btn btn-success'>Edit Job</button>
            <button type = 'button' className = 'btn btn-default' onClick ={() => navigate('/')}>Cancel</button>
        </form>
  )
}

export default EditPage