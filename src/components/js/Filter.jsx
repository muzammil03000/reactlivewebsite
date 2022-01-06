// @flow
import './new.css';
import './filtering.css';
import React, { PureComponent } from 'react';
import axios from 'axios';
import {BiDollar} from "react-icons/bi";
import Modal from 'react-bootstrap/Modal'
class Filter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
 Location:"",
 Bed:"",
 Bath:"",
 Type:"",
 Purpos:"",
 Area:"",
 error:"",
 setShow:false,
 predict_value:"",
 five_year_pred:"",



    };
  }
handleShow(){
    
    this.setState({setShow:true})

   }
  handleClose(){
    this.setState({setShow:false})
  }
  

  datachange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  

  postdata(e) {
    e.preventDefault()
   const  Location = this.state.Location;
   const Bed = this.state.Bed;
   const Bath = this.state.Bath;
   const Type = this.state.Type;
   const Purpos = this.state.Purpos;
   const Area = this.state.Area;


const data ={
  Location,
  Bed,
  Bath,
  Type,
  Purpos,
  Area
};

if(Location !=null || Bed !=null  || Bath !=null || Type !=null || Purpos !=null )
{
  
  this.setState({
    error: "",
  });

axios
.post("http://127.0.0.1:5000/predict", data)
.then((response) => {   
  if(response)
  {
   
    this.setState({
      message: response.data.message,
      five_year_pred:response.data.five_year_pred,
      predict_value:response.data.predict_value,
      setShow:true
    });

    // alert(response.data.predict_value+" & "+ response.data.five_year_pred)
    
  }

  this.setState({Location:"",Bed:"",Bath:"",Type:"",Purpos:"",Area:""})


})
.catch((err) => {
  console.log(err);
  this.setState({message:err})
  alert(this.state.message)
this.setState({Location:"",Bed:"",Bath:"",Type:"",Purpos:"",Area:""})
});

}
else
{
  this.setState({
    error: "Please Fill All Information",
  });
}


    }



  render() {
    return (
      <div className="filters">
        <div className="inside">
          <h4 className="filter-title">Price Prediction</h4>
          <form   action="" 
                      method="post" 
                      onSubmit={this.postdata.bind(this)}
                         >

          <label htmlFor="city">Location</label>
          <input type="text" 

          placeholder="Type here.."
          required
          autofocus
          value={this.state.Location}
          name="Location"
          onChange={this.datachange.bind(this)}
          
          />

<label htmlFor="city">Bed Rooms</label>
          <input type="text" 
         
          placeholder="Type here.."
          required
          autofocus
          value={this.state.Bed}
          name="Bed"
          onChange={this.datachange.bind(this)}
          />

          
<label htmlFor="city">Bath Rooms</label>
          <input type="text" 
          placeholder="Type here.."
         
          required
          autofocus
          value={this.state.Bath}
          name="Bath"
          onChange={this.datachange.bind(this)}
          />
        
<label htmlFor="city">Area sq.ft</label>
          <input type="text" 
          placeholder="Type here.."
          required
          autofocus
          value={this.state.Area}
          name="Area"
          onChange={this.datachange.bind(this)}
          />

        
<label htmlFor="city">Type</label>
          <input type="text" 
          placeholder="Type here.."
          required
          autofocus
          value={this.state.Type}
          name="Type"
          onChange={this.datachange.bind(this)}
          />


<label htmlFor="city">Purpose</label>
          <input type="text" 
          placeholder="Type here.."
          required
          autofocus
          value={this.state.Purpos}
          name="Purpos"
          onChange={this.datachange.bind(this)}
          />
          <label htmlFor="city" color="RED" >{this.state.error}</label>
          
          <button type="button" class="btn btn-dark " type="submit" >
                                <b>Predict</b>
                            </button>

          </form>
         
        </div>
        <div>
      <Modal show={this.state.setShow} onHide={this.handleClose.bind(this)}>
      <Modal.Header>
        <Modal.Title>Prediction Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
                  <span style={{marginLeft:"15px"}}>Current Prediction<BiDollar/> {this.state.predict_value}</span>
                  
                  <div className="floor-space">
                  <span style={{marginLeft:"15px"}}>After Five Years<BiDollar/> {this.state.five_year_pred}</span>
                    </div>
                    <button onClick={this.handleClose.bind(this)}>
          Close
        </button>
      </Modal.Body>
     
      </Modal>
      </div>
      </div>
    )
  }
}




export default Filter;
