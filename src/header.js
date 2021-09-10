import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { logoutuser } from './actions/authactions'
import './App.css'

const Header = () => {
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logoutuser());
    }

    return (
        <Fragment>
           
             
                
<div className="navbar">
      {user  ? (<div>
        <h1 className="heading">Welcome to app</h1>

       {user&& user.role==="admin" &&(
         <Link to="/dashboard" >Dashboard</Link>
       )}

     <Link className="text-danger" to="/" onClick={logoutHandler}>
      Logout
     </Link>
     <Link to="/profile">profile</Link>

     </div>  ) :   (
                        <Fragment>
       <h1 className="heading">Welcome to  app</h1>
                          <Link to="/login"  id="login_btn">Login</Link>
                          <Link to="/register"  id="signup_btn">signup</Link>
   <Link to="/profile">profile</Link>

                        </Fragment>
                       )} 


</div>
                </Fragment> 

      
    )
}

export default Header