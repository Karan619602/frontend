import { LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS ,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
     REGISTER_USER_SUCCESS,
     LOAD_USER_REQUEST,
     LOAD_USER_SUCCESS,
     LOAD_USER_FAIL,
   LOGOUT_SUCCESS,
   LOGOUT_FAIL,
ALL_USERS_REQUEST,
ALL_USERS_SUCCESS,
ALL_USERS_FAIL,
UPDATE_USER_REQUEST,
UPDATE_USER_SUCCESS,
UPDATE_USER_FAIL,
USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL} from '../constants/authconstants.js'

import axios from 'axios'

export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST})
        const config={
                 headers:{
                     'Content-Type':'application/json'
                 }
                    }
        const {data}= await axios.post('/api/user/login',{email,password},config)
        console.log(data)
        dispatch({type:LOGIN_SUCCESS,
                   payload:data.user}) 
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data.message
        })
    }
}

//register user
export const register=(userdata)=>async(dispatch)=>{
    try {
        dispatch({type:REGISTER_USER_REQUEST})
       
        const {data}= await axios.post('/api/user/register',userdata)
        console.log(data)
        dispatch({
            type:REGISTER_USER_SUCCESS,
                   payload:data.user
                })
        
    } catch (error) {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.response.data.message
        })
    }
}

//load user
export const loaduser=()=>async(dispatch)=>{
    try {
        dispatch({type:LOAD_USER_REQUEST})
       
        const {data}= await axios.get('/api/user/profile')
        dispatch({type:LOAD_USER_SUCCESS,
                   payload:data.userprofile})
        
    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.response.data.message
        })
    }
}

//logout user
export const logoutuser=()=>async(dispatch)=>{
    try {
        
       
        await axios.get('/api/user/logout')
        dispatch({type:LOGOUT_SUCCESS
                   })
        
    } catch (error) {
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.response.data.message
        })
    }
}

// Get all users
export const allUsers = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_USERS_REQUEST })

        const { data } = await axios.get('/api/admin/alldrivers')

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data.alldrivers
        })

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response
        })
    }
}

// Update User - ADMIN
export const updateUser = (id, userData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_USER_REQUEST })
     
      

        const { data } = await axios.put(`/api/admin/approved/driver/${id}`, userData)

        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data
        })
        console.log(data);

    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error
        })
    }
}

export const getdriverDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: USER_DETAILS_REQUEST })

      


        const { data } = await axios.get(`/api/admin/alldrivers/${id}`)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data.driver
        })
        console.log(data);

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearerrors=()=>async (dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}