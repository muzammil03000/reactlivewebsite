import React from 'react';
import styled from 'styled-components';
import './new.css';
import {useHistory} from 'react-router-dom';
import {GiFamilyHouse} from "react-icons/gi";
const Navbar = styled.header`
  background: #0c002b;
  color: white;
  overflow: auto;
  padding: 20px 15px;
`;

const Header = () => (
  <Navbar>
    <div className="logo" style={{fontSize:"30px"}}><GiFamilyHouse/>  Real Estate</div>
    <nav>
      
    <a href="/index">Home</a>
      <a href="/aboutus">About Us</a>
      <a href="/contactus">Contact Us</a>
      <a href="/profile">Profile</a>

      {/* <a href="../Login" >Logout</a> */}
      <a href="../Logout"  className="register-btn">
        Logout
      </a>
    </nav>
  </Navbar>

);

export default Header;
