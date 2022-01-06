import React, { Component } from 'react'
import Styles from './css/contactus.module.css'
import Header from './js/Header';
class contactus extends Component
{

  sent(e)
  {
    e.preventDefault();
    alert("Your detail is recieved")
  }
    render(){
      return (
        <div>
          <Header/>
          <div className={Styles['container']}>
        <div style={{textAlign: 'center'}}>
          <h2>Contact Us</h2>
          <p>If you want more information or any kind of information contact us:</p>
        </div>
        <div className={Styles['row']}>
          <div className={Styles['column']}>
            <img src="https://www.w3schools.com/w3images/map.jpg" style={{width: '100%'}} />
          </div>
          <div className={Styles['column']}>
            <form  action="" 
                        method="post"  onSubmit={this.sent.bind(this)}>
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="name" placeholder="Your name.." />
              <label htmlFor="lname">Email</label>
              <input type="text" id="lname" name="email" placeholder="Your email.." />
              <label htmlFor="country">Phone</label>
              <input type="text" id="fname" name="phone" placeholder="Your cell no.." />
              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '170px'}} defaultValue={""} />
              <input type="submit" defaultValue="Submit" />
            </form>
          </div>
        </div>
      </div>
        </div>
      )
    }
    
  }

  export default contactus
