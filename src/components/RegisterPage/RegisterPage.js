import React ,{Component}from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';


   class  RegisterPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          Name: "",
          Email: "",
          Phone: "",
          Cnic: "",
          Password: "",
          message:{},
          error:"",
          passwordShown:false
        };
      }
 
      datachange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }


      postdata(e) {
        e.preventDefault();
        const Name = this.state.Name;
        const Email = this.state.Email;
        const Phone = this.state.Phone;
        const Cnic = this.state.Cnic;
     
        const Password = this.state.Password;
    
        //  load kam ni kea let see
    
        const data = {
          Name,
          Email,
          Phone,
          Cnic,
          Password,
        };
        
        if(Cnic.length===13 && Phone.length===11 && Name.length >=3)
        {
            // alert("ok1.1")
        //   if(this.state.Password.length===16)
        //   {
            // alert("ok2")
              axios
                .post("http://127.0.0.1:5000/register", data)
                .then((response) => {   
                  if(response)
                  {
                    // console.log(response);
                    this.setState({
                      message: response.data.message,
                    });
                  }
                  alert(this.state.message)
                  this.setState({Name:"",Email:"",Phone:"",Cnic:"",Password:"",error:""})
                  this.props.history.push('/LoginPage')
    
                })
                .catch((err) => {
                  console.log(err);
                  this.setState({message:err})
                  alert(this.state.message)
                  this.setState({Name:"",Email:"",Phone:"",Cnic:"",Password:"",error:""})
                });
    
       // }
        // else
        // {
        //   this.setState({error:"Enter 16 digit password"})
        // }
    
    
        }
        else{
          this.setState({error:"Enter Right Contact/Cnic number  or name"})
        }
    
      }
      
      render() {
    return (
     
            <Container>
                <h1 className=" text-white  text-center "style={{backgroundColor:"#0c002b",width:"55%",marginLeft:"21%"}}>REGISTRATION FORM</h1>
                <Row >
                    <Col lg={11.3} md={5} sm={12} className="p-1 m-auto shadow-sm rounded-lg text-white" style={{backgroundColor:"#0c002b"}}>
                        <Form  action="" 
                        method="post" 
                        onSubmit={this.postdata.bind(this)}>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-white"><b>NAME</b></Form.Label>
                                <Form.Control type="text" placeholder="NAME" 
                                
                                required
                                autofocus
                                value={this.state.Name}
                                name="Name"
                                onChange={this.datachange.bind(this)}
                                maxLength="30"                  
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-white"><b>CNIC</b></Form.Label>
                                <Form.Control type="text" placeholder="CNIC"
                                
                                required
                                autofocus
                                value={this.state.Cnic}
                                name="Cnic"
                                onChange={this.datachange.bind(this)}
                                maxLength="13" 
                                
                                
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-white"><b>PHONE</b></Form.Label>
                                <Form.Control type="text" placeholder="PHONE NUMBER" 
                                  required
                                  autofocus
                                  value={this.state.Phone}
                                  name="Phone"
                                  onChange={this.datachange.bind(this)}
                                  maxLength="11" 

                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-white"><b>Email</b></Form.Label>
                                <Form.Control type="email" placeholder="email" 
                                  required
                                  autofocus
                                  value={this.state.Email}
                                  name="Email"
                                  onChange={this.datachange.bind(this)}
                                  maxLength="50" 
                                
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="text-white"><b>Password</b></Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                
                                required
                                autofocus
                                value={this.state.Password}
                                name="Password"
                                onChange={this.datachange.bind(this)}
                                maxLength="16" 
                                />
                                
                            </Form.Group>
                            <button type="button" class="btn btn-dark " type="submit">
                                <b>Sign up</b>
                            </button>
                            {/* onClick={()=>{history.push('/login');}} */}
                            <a className="text-white" href='./LoginPage' >Already Have An Account? Login</a>
                        </Form>
                    </Col>
                </Row>
                
            </Container>

        
    )
 }
}

export default RegisterPage;