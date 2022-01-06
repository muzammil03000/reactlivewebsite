// @flow

import React, { Component } from 'react';
import axios from 'axios';
import './listing.css';
import { BiBed } from "react-icons/bi"; 
import { BiBath } from "react-icons/bi"; 
import {AiOutlineHome} from "react-icons/ai"; 
import {BiDollar} from "react-icons/bi";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';

class Listing extends Component {

   well={
    boxShadow: "2px 4px 3px #7B7D7D"
}

  constructor(props) {
    super(props);
    this.state = {
      Location:"",
      Bed:"",
      Bath:"",
      Type:"",
      Purpos:"",
      Area:"",
      Price:"",
      ImageLink:"",
      postdata:[],
      isloading:false,
      error:"",
      searcherrormessage:"",
      search: "",
        setShow:false

    };
    this.handleShow=this.handleShow.bind(this)
  }
  // const [show, setShow] = useState(false);

   handleClose(){
     this.setState({setShow:false})
   }
   
   handleShow(cardinfo){
     this.setState({Area:cardinfo.Area,
      Location:cardinfo.Location,
      Purpos:cardinfo.Purpos,
      Bed:cardinfo.Bed,
      Bath:cardinfo.Bath,
      Type:cardinfo.Type,
      Price:cardinfo.Price,
      ImageLink:cardinfo.ImageLink

    })
    //  console.log(cardinfo.Area)
    this.setState({setShow:true})

   }

  componentDidMount()
  {
    axios.get('http://127.0.0.1:5000/house')
    .then(response=>{
     //  console.log(response)
      this.setState({ isloading:true,postdata: response.data.res });
      // console.log (response.data)

    })

    .catch(err=>{
      console.log(err)
     })
  }

  searchchange(e)
  {
    var format = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
   
    if(format.test(e.target.value))
    {
  this.setState({searcherrormessage:"*Invalid Character Enterd"})
    }
    else
    {
      this.setState({
        search: e.target.value,searcherrormessage:""
      });
  
    }
   }

  
  render() {
    // const postdata=this.state.postdata
   
// const info = this.info

    const {isloading,search}=this.state;
      const  postdata  = this.state.postdata.filter(item =>{return item.Location.toLowerCase().indexOf(search.toLowerCase()) !== -1} )
      if(!isloading)
      {
        
        return(
        <div className="listings">

        <section className="listing-heading">
          <h2>House Detail</h2>
          <input type="text" name="search" placeholder="search..." value={this.state.search} onChange={this.searchchange.bind(this)}/>
          <hr />
        </section>

        <section className="listing-sort">
          <span className="results">{this.props.global.filterData.length} results found</span>

        </section>

        
        <section id="listing-pagination">
          <ul className="pagination-pages">
            <li className="prev">Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>...</li>
            <li className="next">Next</li>
          </ul>
        </section>

        </div>
        
);
      }
   else{
      return (
      // <Model.Body></Model>
      
  
      <div className="listings">

        <section className="listing-heading">
          <h2>House Detail</h2>
          <input type="text" name="search" placeholder="search..." value={this.state.search} onChange={this.searchchange.bind(this)}/>
          <hr />
        </section>

        <section className="listing-sort">
          <span className="results">{postdata.length} results found</span>

        </section>


{postdata.length ? postdata.map(pos=>
 
<div className="col-md-3" >
          <div  style={{backgroundColor:"#E5E8E8", fontFamily:"serif"}} style={this.well}>
            <div >
            
              
              <img  src={pos.ImageLink} style={{height:"142.5px",width:"190px"}}/> 


              <div className="details" >
                <div className="col-md-3">
                  <div className="user-img" />
                </div>
                <div className="user-details" >
                  <span  style={{marginLeft:"15px"}}><BiBed />  {pos.Bedrooms}</span>
                  <span></span>
                  <span style={{marginLeft:"15px"}} ><BiBath/> {pos.Bath}</span>
                  <span style={{marginLeft:"15px"}}><AiOutlineHome/> {pos.Area}</span>
                  <span style={{fontSize:"12px"}}>sq ft.</span>
                  <div className="listing-details">
                    <div className="floor-space">
                      {/* <i className="fa fa-square-o" aria-hidden="true" /> */}
                      <span style={{marginLeft:"15px"}}><BiDollar/> {pos.Price}</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true" />
                     {pos.Location}
                    </div>
                  </div>
                </div>
              </div>
              <button type="button"  
              type="submit"
               style={{ width:"100%" , backgroundColor:"#0c002b",color:"#ffff"}}
               onClick={()=>this.handleShow(pos)}
              >
                 Details</button>
            </div>
         
          </div>
        
        </div>

):<h1 style={{marginBottom:'76px'}}>No Match Found!</h1>}

   <div>
      <Modal show={this.state.setShow} onHide={this.handleClose.bind(this)}>
      <Modal.Header>
        <Modal.Title>House Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <img  src={this.state.ImageLink} /> 
      <span  style={{marginLeft:"15px"}}><BiBed />  {this.state.Bedrooms}</span>
                  <span></span>
                  <span style={{marginLeft:"15px"}} ><BiBath/> {this.state.Bath}</span>
                  <span style={{marginLeft:"15px"}}><AiOutlineHome/> {this.state.Area}</span>
                  <span style={{marginLeft:"15px"}}><BiDollar/> {this.state.Price}</span>
                  <div className="floor-space">
                     {this.state.Location}
                    </div>
                    <button style={{backgroundColor:'green',marginBottom:'5px'}}>
          See Location
        </button>
        
                    <button onClick={this.handleClose.bind(this)}>
          Close
        </button>

        
      </Modal.Body>
     
      </Modal>
      </div>



        <section id="listing-pagination">
          <ul className="pagination-pages">
            <li className="prev">Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>...</li>
            <li className="next">Next</li>
          </ul>
        </section>
        
        
{/* popup */}



      </div>

      
      
      );


}
    }
  }

export default Listing;
