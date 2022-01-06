import React from 'react'
import {Redirect,Route} from 'react-router-dom'


const Checklogin=({component:Cmp,...rest})=>(

    <Route  
    {...rest}
    render={(props)=>

localStorage.getItem('Login') ? (

<Redirect to='/index'/>
    ):

    <Redirect to='/LoginPage'/>
    }
    
    
    />
)
export default Checklogin;