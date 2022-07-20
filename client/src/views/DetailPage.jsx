import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

// Want to grab Id from params and get one job from the database when the component is loaded
// 1. To get to database: need axios
// 2. When the component is loaded: useEffect
// 3. For variable that will be changed: useState
// 4: For id from params: useParams

const DetailPage = () => {
    const [job, setJob] = useState()
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(res => setJob(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = () => {
        // need to delete from db
        // redirect
        axios.delete(`http://localhost:8000/api/jobs/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

  return (
    <div>
        {
            job?
        <div>
            <h5>Title: {job.title}</h5>
            <h5>Company: {job.company}</h5>
            <h5>Salary: {job.salary}</h5>
            <h5>Remarks: {job.isRemote?"Remote job":"In person"}</h5>
            <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
            <button type = 'button' className = 'btn btn-default' onClick ={() => navigate('/')}>Go back</button>
        </div>:
        <h1>Wrong ID</h1>
        }

    </div>
  )
}

export default DetailPage