import React,{Fragment,useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { allUsers } from '../actions/authactions'
import { MDBDataTable } from 'mdbreact'

import {Link} from 'react-router-dom'
import {updateUser} from '../actions/authactions'
const Dashboard=()=>{
    const dispatch= useDispatch();
   const {users,loading}=useSelector(state=>state.alluser)
// const [status,setstatus]=useState('')
  
  useEffect(()=>{
   
    dispatch(allUsers()) 
},[dispatch])

// const onSubmit=(id)=>{
//    dispatch(updateUser(id,status))

// }
const setdrivers = () => {
    const data = {
        columns: [
            {
                label: 'User ID',
                field: 'id',
                sort: 'asc'
            },
            {
                label: 'Name',
                field: 'drivername',
                sort: 'asc'
            },
            {
                label: 'phone',
                field: 'Phone_No',
                sort: 'asc'
            },
            {
                label: 'Address',
                field: 'address',
                sort: 'asc'
            },
            {
                label: 'vehicleName',
                field: 'VehicleName',
                sort: 'asc'
            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc'
            },
            {
                label: 'Actions',
                field: 'options',
            },
        ],
        rows: []
    }
    users.forEach(user => {
        data.rows.push({
            id: user._id,
            drivername: user.drivername,
            Phone_No: user.Phone_No,
            address: user.address,
            VehicleName:user.VehicleName,
            status:user.status,

            options: <Fragment>
                    <Link to={`/admin/drivers/${user._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
            </Fragment>
        })
    })

    return data;
}

return (
    <Fragment>
       
      

            <div className="col-12 col-md-10">
                <Fragment>
                    <h1 className="my-5">All Drivers</h1>

                    {loading ?<h2> data not available</h2> : (
                        <MDBDataTable
                            data={setdrivers()}
                            className="px-3"
                            bordered
                            striped
                            hover
                        />
                    )}

                </Fragment>
            </div>
      

    </Fragment>
)
}

export default Dashboard