import React, { Component } from 'react';
// import Styles from './css/aboutus.module.css'
import Styles from './css/aboutus.module.css';
import Header from './js/Header';
class aboutus extends Component
{
    render(){
       
            return (
              
              <div>
                <Header/>
                <div className={Styles['about-section']}  style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")` 
       ,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',
       backgroundSize: 'cover'}}>
                  
                  <h1>About Our Team</h1>
                  <p>House price prediction system</p>
                  <p>User can easily find the house and alse check the price according to predictions</p>
                
                  
                </div>
                <h2 style={{textAlign: 'center'}}>Our Team</h2>
                <div className={Styles['row']}>
                  <div className={Styles['column']}>
                    <div className={Styles['card']}>
                      <img src="/w3images/team1.jpg" alt="Jane" style={{width: '100%'}} />
                      <div className={Styles['container']}>
                        <h2>Jane Doe</h2>
                        <p className={Styles['title']}>CEO &amp; Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button className={Styles['button']}>Contact</button></p>
                      </div>
                    </div>
                  </div>
                  <div className={Styles['column']}>
                    <div className={Styles['card']}>
                      <img src="/w3images/team2.jpg" alt="Mike" style={{width: '100%'}} />
                      <div className={Styles['container']}>
                        <h2>Mike Ross</h2>
                        <p className={Styles['title']}>Art Director</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>mike@example.com</p>
                        <p><button className={Styles['button']}>Contact</button></p>
                      </div>
                    </div>
                  </div>
                  <div className={Styles['column']}>
                    <div className={Styles['card']}>
                      <img src="/w3images/team3.jpg" alt="John" style={{width: '100%'}} />
                      <div className={Styles['container']}>
                        <h2>John Doe</h2>
                        <p className={Styles['title']}>Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button className={Styles['button']}>Contact</button></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          
        }
      
    
  }

  export default aboutus
