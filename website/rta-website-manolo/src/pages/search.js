import React, { useState } from 'react';
import Navbar from '../Navbar';
import './css/home.css'
import { Button, TextField } from '@mui/material';
import { SearchOutlined } from '@material-ui/icons';
import PlateTextField from './components/PlateTextField';
import SearchViolation from './components/SearchViolation';

const Search = () => {

  const [show, setShow] = useState(false)



  return (
    <>
    <Navbar></Navbar>
    <div className='ContainerCss'>
      <div className='SearchContainer'>

        <div style={{display:"flex", position:"absolute"}}>
          <h1>ENTER LICENSE PLATE</h1>
        </div>
        <div style={{position:"absolute", display:"flex", marginTop: "5rem", marginLeft:"-30rem"}}>
          <PlateTextField></PlateTextField>
        </div>

        <div style={{position:"absolute", display:"flex", marginTop:"15rem", flexDirection:"column", alignItems: "center"}}>
          
          {show ? (
            <>
            <div>
              <h1>JACK SPARROW</h1>
            </div>
            <div>
              <h3 style={{color:"red"}}>EXISTING VIOLATION</h3>
            </div>
            <div>
              <SearchViolation></SearchViolation>
            </div>
            </>
          ):null}
          
        </div>
        

        <div style={{display:"flex", position:"absolute", marginLeft:"10px", marginTop: "10rem"}}>
          <Button onClick={() => setShow(!show)} variant='contained'style={{marginRight:35, width: "14rem", height: "3rem", backgroundColor:"#83F0FB"}}>SEARCH</Button>
          <Button onClick={() => setShow(!show)} variant='contained'style={{marginRight:10, width: "14rem", height: "3rem", backgroundColor:"red"}}>CLEAR</Button>
        </div>

      </div>
    </div>
    </>
  );
};
  
export default Search;