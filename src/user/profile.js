import React,{Fragment,useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'


const Profile=()=>{
    const {user,loading} =useSelector(state=>state.auth)

    return <Fragment>
        {loading?<h2>user not login</h2>:(
            <div>
            <h1>{user.username}</h1>
            <h2>{user.email}</h2>
            </div>
        )}
    </Fragment>

}

export default Profile