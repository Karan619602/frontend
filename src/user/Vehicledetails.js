import React,{Fragment,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {  getdriverDetails} from '../actions/authactions'

import '../App.css'
const Vehicle=({match})=>{
    const dispatch= useDispatch();
    const {user1}=useSelector(state=>state.driverdetails)

    const userId = match.params.id;

  useEffect(()=>{ 
 
    dispatch(getdriverDetails(userId)) 
},[dispatch,userId])


return (
    <Fragment>
    
     
               <Fragment>
                   <div className="my-5">
                       <h3>RC  </h3>
                       <h4> RC No{user1.Vehicle_RC_Number}</h4>
                       <img src={user1.RC_Photo?user1.RC_Photo.url:''} alt={user1.Vehicle_RC_Number} />

                       <h3>Insurance </h3>
                       <h4> INSURANCE No{user1.Vehicle_Insurance_Number}</h4>
                       <img src={user1.Insurance_Photo?user1.Insurance_Photo.url:''} alt={user1.Vehicle_Insurance_Number} />
                       <h4>Expiry date{user1.Insurance_Expiry_Date}</h4>

                       <h3>Vehicle Photo </h3>
                       <img src={user1.Vehicle_Front_Photo?user1.Vehicle_Front_Photo.url:''} alt="not available"/>

                       <h3> Account Details </h3>
                       <h4> Account No{user1.Account_Number}</h4>
                       <h4> Bank Name{user1.Bank_Name}</h4>
                       <h4> IFSC Code{user1.IFSC_CODE}</h4>

                       <img src={user1.Passbook_Photo?user1.Passbook_Photo.url:''}  alt="not available" />
                   </div>


                   </Fragment>
         
      
   </Fragment>
)
 
}





export default Vehicle