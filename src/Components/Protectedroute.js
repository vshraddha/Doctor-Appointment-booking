import React, { useEffect } from 'react'
import { Await, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector} from 'react-redux'
import { showloading } from '../redux/features/alertSlice'
import { setuser } from '../redux/features/Userslice'

export default function Protectedroute({children}){
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.user)

    //get user
    const getuser = async()=> {
        try{
            dispatch(showloading())
            const res = await axios.post('/api/v1/user/getUserData',
            { token: localStorage.getItem('token')},
            {
                headers:{
                        Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            }

            )
        
                
            
            dispatch(hideloading())
            if(res.data.success){
                dispatch(setuser(res.data.data))
            } else{
                <Navigate to='login'/>;
            }
            

        } catch(error){
            dispatch(hideloading())
            console.log(error);
        }
    };

    useEffect(()=> {
        if(!user){
            getuser();
        }
    }, [user])
    

    if(localStorage.getItem("token")){
        return children
    } else{
        return <Navigate to="/login"/>
    }
}

