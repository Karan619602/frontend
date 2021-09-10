import React from 'react'
import { Fragment } from 'react'
import {Route,Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { logoutuser } from '../actions/authactions'
const Log=()=>{

const dispatch=useDispatch();
const Logoutuser=()=>{
  dispatch(logoutuser())
}
    return(
        <Link to='/' onClick={Logoutuser}>Logout</Link>
    )
}

export default Log;