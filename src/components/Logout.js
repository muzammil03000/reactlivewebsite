import React from 'react'
import {Redirect} from  'react-router-dom'

const Logout=()=>{
localStorage.clear()
    return <Redirect to='/LoginPage'/>
}
export default Logout;