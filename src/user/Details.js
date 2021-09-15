import React,{Fragment,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import '../App.css'
import {  getdriverDetails} from '../actions/authactions'



const Details=({match})=>{
    const dispatch= useDispatch();
    const {user}=useSelector(state=>state.driverdetails)

    const userId = match.params.id;

  useEffect(()=>{ 
 
    dispatch(getdriverDetails(userId)) 

  
},[dispatch,userId])




return (
    <Fragment>
       
                <Fragment>
                    <div className="my-5">
                        <h2>Profile Photo</h2>
                        <img src={user.Profile_Photo?user.Profile_Photo.url:''} alt="" /> 
                        <h3>Aadhar Card</h3>
                        <h4> Aadhar No{user.Aadhar_No}</h4>
                        <img src={user.Aadhar_Photo?user.Aadhar_Photo.url:''} alt={user.Aadhar_No} />
                        <h3>Drivng License </h3>
                        <h4> Drriving License No{user.Driving_License_No}</h4>
                        <img src={user.Driving_License_Photo?user.Driving_License_Photo.url:''} alt={user.Driving_License_NO} />
                        <h3> PAN Card</h3>
                        <h4> Pan No{user.PAN_No}</h4>
                        <img src={user.PAN_Photo?user.PAN_Photo.url:''} alt={user.PAN_NO} />
                    </div>


                </Fragment>
        
    </Fragment>
)
}

export default Details