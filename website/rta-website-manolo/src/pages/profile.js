import Navbar from '../Navbar';
import React, { useState } from 'react';
import './css/home.css'
import Profile from './../Images/profile.png'
import InputBox from './../login/component/InputBox'
import { Button } from '@mui/material';
import { Edit } from '@mui/icons-material';
import People from './../Images/people.png'

const Profiles = () => {

  const [save, setSave] = useState(false)
  const [edit, setEdit] = useState(true)


  return (
    <>
    <Navbar></Navbar>
    <div className='ContainerCss'>
      <div className='InnerContainer'>
      <div style={{position:"absolute", display:"flex", marginLeft: "43.5rem", flexDirection:"column"}}>
        <div>
          <img src={Profile}></img>
        </div>
        <div style={{marginLeft: "-5rem"}}>
          <h1>Jayde Mike Engracia</h1>
        </div>
      </div>
        {edit ? (
        <>
        <div style={{position:"absolute", display:"flex", marginLeft: "17rem", marginTop:"15rem"}}>
          <div>
            <div style={{marginRight: 10, marginBottom: 20}}><InputBox disabled label="Jayde Mike"></InputBox></div>
            <div><InputBox  disabled type="email" label="Email"></InputBox></div>
          </div>
          <div>
            <div style={{marginRight: 10, marginBottom: 20}}><InputBox disabled  label="Engracia"></InputBox></div>
            <div><InputBox disabled type="password"  label="Password"></InputBox></div>
          </div>
        </div>
        </>
        ):null}
        
        {save ?(
        <>
        <div style={{position:"absolute", display:"flex", marginLeft: "17rem", marginTop:"15rem"}}>
          <div>
            <div style={{marginRight: 10, marginBottom: 20}}><InputBox  label="Jayde Mike"></InputBox></div>
            <div><InputBox  type="email" label="Email"></InputBox></div>
          </div>
          <div>
            <div style={{marginRight: 10, marginBottom: 20}}><InputBox   label="Engracia"></InputBox></div>
            <div><InputBox type="password"  label="Password"></InputBox></div>
          </div>
        </div>
        </>):null}
        <div>
          {edit ? (
            <>
              <div style={{marginTop:"12rem", marginLeft: "17rem"}}><Button onClick={() => setEdit(!edit) & setSave(!save)} variant='contained'>EDIT</Button></div>
            </>
          ):null}

          {save ? (
            <>
              <div style={{marginTop:"12rem", marginLeft: "17rem"}}><Button  style={{backgroundColor:"#00B050"}} onClick={() => setEdit(!edit) & setSave(!save)} variant='contained'>SAVE</Button></div>
            </>
          ):null}
          
          
        </div>
        
        
        <div style={{marginTop: "30rem", marginLeft: "27rem", position:"absolute", display:"flex"}}>
          <img src={People}></img>
        </div>
        
      </div>
    </div>
    </>
  );
};
  
export default Profiles;