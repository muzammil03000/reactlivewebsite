import React from "react";
// import LoginPage from "./components/LoginPage/LoginPage";
import googleMap from "./components/googlemap/GoogleMAp";
import Register from "./components/RegisterPage/RegisterPage";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./components/LoginPage/LoginPage";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Logout from "./components/Logout";
import Checklogin from "./components/Checklogin"

import Protected from "./components/Protected"; 
import index from "./components/js/Index";
import aboutus from "./components/about"
import contactus from "./components/contactus"
import profile from "./components/profile";
import map from "./components/map";

function App() {

  return (
  
    
    <Router>
      <Switch>
   
      {/* <Route exact path ="/" component={map}/> */}
<Checklogin exact path ="/" component={LoginPage}/>
<Route exact path ="/LoginPage" component={LoginPage}/>
<Route exact path ="/RegisterPage" component={Register}/>
<Protected exact path ="/index" component={index}/>
 
      <Protected exact path ="/aboutus" component={aboutus}/>
      <Protected exact path ="/contactus" component={contactus}/>
      <Protected exact path ="/profile" component={profile}/>
    
      <Route path="/Logout"  component={Logout}/>
      <Route   component={ErrorPage}/> 
      </Switch>
    </Router>
  
  );
}

export default App;
