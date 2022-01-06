import React ,{Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

// const LoginPage = () => 
class LoginPage extends Component{


//    let  history = useHistory();

    constructor(props)
    {
        super(props)
        this.state={
            Email:'',
            Password:'',
            passwordShown:false

        }
    }
    onchange(e)
    {
       this.setState({
           [e.target.name]: e.target.value,
         });
    }
    admin_login=(e)=> {
     
    
        e.preventDefault();
    
        
        const email=this.state.Email;
        const password=this.state.Password;
        console.log(email)
        if(email!=='' && password!=='')
        {
        const dta={email,
            password
        }
        // axios.post("http://127.0.0.1:5000/logger",data)
        axios({method:'post',
        
     headers:{'Access-Control-Allow-Origin' : '*',
     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'},
     url:'http://127.0.0.1:5000/logger',
     data:dta,
        })
        
        .then((response)=>{
            if(response.data.message==="Successful")
            {
    alert("Click Ok To Login")
    localStorage.setItem('Login',response.data.res.id)
  console.log(response.data.res.id)

    this.props.history.push('/index')

    this.setState({Email:'',Password:''})
            }
            else{
                alert("Email or Password are incorrect..!")
                // console.log(response.data)
                this.setState({Email:'',Password:''})
            }
        })
        .catch((err)=>{
            // console.log(err)
            alert("Network error")
        })
    
        
    }
    else
    {
        alert("Invalid input")
    }
        
    }
   
    render() {
    return (

        // <
        // >
        
            <Container>
                <div className="login-page">
                    <div className='w-100'>
                        <h4>Sign in</h4>
                        <Form  
                        action=""
                        method="post"
                        onSubmit={this.admin_login.bind(this)}
                 >
                            <Form.Group controlId="formBasicEmail">
                                {/* <Form.Label className="text-white"><b>Email address</b></Form.Label> */}
                                <Form.Control type="email" placeholder="Enter email" 
                                type="text"
                                name="Email"
                                maxLength="30"
                                value={this.state.Email}
                                onChange={this.onchange.bind(this)}
                                required
                                
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                {/* <Form.Label className="text-white"><b>Password</b></Form.Label> */}
                                <Form.Control type="password"
                                 placeholder="Password"
                                 value={this.state.Password}
                                    maxLength="16"
                                    name="Password"
                                    onChange={this.onchange.bind(this)}
                                    required
                                 />
                            </Form.Group>
                            <div className="check-box-field">
                                <input id='remember' type='checkbox' />
                                <label for="remember">Remember Me</label>
                            </div>    

                            <Button type="button" class="btn btn-dark" type="submit" >
                                <b>Login</b>
                            </Button>
                            <a className='w-100 text-center d-block' href='../RegisterPage' >Don't have an Account? Register</a>
                        </Form>
                    </div>
                </div>
                
            </Container>
          
        // </>
 
    )
}
}
export default LoginPage;