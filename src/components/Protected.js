import React from 'react'
import {Redirect,Route} from 'react-router-dom'


const Protected=({component:Cmp,...rest})=>(

    <Route  
    {...rest}
    render={(props)=>

localStorage.getItem('Login') ? (

<Cmp {...props}/>
    ):

    <Redirect to='/LoginPage'/>
    }
    
    
    />
)
export default Protected;