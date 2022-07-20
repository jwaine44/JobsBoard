import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Want to grab all jobs from the database when the component is loaded
// 1. To get to database: need axios
// 2. When the component is loaded: useEffect
// 3. For variable that will be changed: useState



const Dashboard = () => {
    // Jobs state is set as [] so you can map over it and VSCode won't say error that you can't map over undefined
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/jobs')
            .then(res => setJobs(res.data))
            .catch(err => console.log(err))
    }, [])
    
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/jobs/${deleteId}`)
            .then(res => {
                const filteredList = jobs.filter(eachJob => eachJob._id !== deleteId)
                setJobs(filteredList)
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
    <Link to = '/jobs/new'>Create new job</Link>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Salary</th>
                    <th>Remote?</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    jobs.map((eachJob, i) => {
                        return(
                            <tr key = {i}>
                                <td><Link to = {`/jobs/${eachJob._id}`}>{eachJob.title}</Link></td>
                                <td>{eachJob.company}</td>
                                <td>{eachJob.salary}</td>
                                <td>{eachJob.isRemote?"Yes":"No"}</td>
                                <td><Link to = {`/jobs/edit/${eachJob._id}`} className = 'btn btn-primary'>Edit</Link></td>
                                <td><button className = 'btn btn-danger' onClick={e => handleDelete(eachJob._id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default Dashboard