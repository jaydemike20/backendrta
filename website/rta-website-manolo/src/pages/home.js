import Navbar from '../Navbar';
import React, { useState } from 'react';
import './css/home.css'
import ProfilePic from './../Images/profile.png'
import { Button } from '@mui/material';
import ViolationCompile from './components/ViolationCompile';
import Form from './components/Form';








const Home = () => {

  const [show, setShow] = useState(false)

  return (
    <>
       <Navbar />
      <div className='ContainerCss' >

        {show ? (
        <div>
          <div style={{backgroundColor:"white", width: "90%", height:"90%", position:"fixed", display:"flex", zIndex: 2, borderRadius: 30, marginTop: 70, marginLeft:"5rem"}}>
          <Form RecordViolation={() => setShow(!show)} onClick={() => setShow(!show)}></Form>
          </div>
          <div style={{backgroundColor:"black", width: "100%", height:"200%", position:"fixed", display:"flex", zIndex: 1, opacity: "60%"}}></div>
        </div>  
        ) : null}
        





        <div className='InnerContainer'>
          <div>
            <div style={{position:"absolute", display:"flex", marginLeft: "5rem", marginTop: "1rem"}}>
              <img src={ProfilePic}></img>
            </div>
            <div style={{marginLeft: "15rem"}}>
              <h1>Jayde Mike Engracia</h1>
              <h4 style={{fontWeight:"normal", fontSize: 20, marginTop:-10}}>JaydeMikeEngracia@gmail.com</h4>
            </div>
            <div style={{height: 5, width:"90%", backgroundColor:"black", display:"flex", position:"absolute", marginLeft: "5rem", marginTop: "1rem", flexDirection: "column"}}></div>
          </div>

          <div style={{marginLeft:"-30rem"}}>
            <ViolationCompile></ViolationCompile>
          </div>
        
          <div>
            <Button variant='contained' onClick={() => setShow(!show)} style={{height: 60, backgroundColor:'#64DAFF', display:"flex", position:"absolute", marginTop: 50, marginLeft:"77rem"}}>PROCEED TO TRANSACTION</Button> 
          </div>
              
        </div>
      </div>
    </>
  );
};

export default Home;