import React, { Component } from 'react'
import Styles from './css/profile.module.css'
import Header from './js/Header';
import {SiMinutemailer} from "react-icons/si"; 
import {IoCallOutline} from "react-icons/io5";
import {AiOutlineIdcard} from "react-icons/ai"; 
import {FaFacebookMessenger} from "react-icons/fa"; 

import {BsLinkedin} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import axios from 'axios';
class profile extends Component
{

    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          phone: "",
          cnic: "",
          message:{},
          error:"",
          
          postdata:[]
        };
      }

      componentDidMount()
  {
    const id =localStorage.getItem('Login');
    const data =
      { id,
         }
    axios.post('http://127.0.0.1:5000/userdetails',data)
    .then(response=>{
     //  console.log(response)
      this.setState({ postdata: response.data.res });
      // console.log (response.data)

    })

    .catch(err=>{
      console.log(err)
     })
  } 

    render(){

        var postdata = this.state.postdata
      return (
          <div>
            <Header/> 

            
      <div style={{marginTop:"20px"}} className={Styles['card']}>
        <img src="https://media.istockphoto.com/photos/businessman-in-suit-holding-out-hand-icon-of-user-internet-icons-picture-id1334791683?b=1&k=20&m=1334791683&s=170667a&w=0&h=v9fwURNi9WSqujW7wA7kkulYeaCTIbgDzPChU6EXYnE=" alt="img" style={{width: '100%'}} />
        <h1>{postdata.name}</h1>
        <p className={Styles['title']}><IoCallOutline/>{postdata.phone}</p>
        <p><SiMinutemailer/>  {postdata.email}</p>
        <p><AiOutlineIdcard/> {postdata.cnic}</p>
        <div style={{marginBottom:"5px"}}>
        <i  style={{marginRight:"8px"}}><FaFacebookMessenger/></i>
        <i  style={{marginRight:"8px"}}><BsLinkedin/></i>
        <i  style={{marginRight:"8px"}}><SiGmail/></i>
       
        </div>
        <p><button>PROFILE</button></p>
      </div>
          </div>
        )
    }
    
  }

  export default profile