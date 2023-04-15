import { Close, LocationOnOutlined } from '@material-ui/icons';
import { Button } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import InputBox from '../../login/component/InputBox';
import SelectProps from './SelectProps';
import Gender from './options/Gender.json'
import Status from './options/Status.json'
import SelectDate from './SelectDate';
import Nationality from './options/Nationality.json'
import ID from './options/ID.json'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import {TextField} from '@material-ui/core';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


function Form({props, onClick, RecordViolation}) {


    return (
        <div>
            <div style={{margin: 20}}>
                <Button onClick={onClick}><Close></Close></Button>
            </div>


            <div style={{position:"absolute", display:"flex"}}>
                <div style={{display:"flex", position:"absolute", marginLeft: "7rem", flexDirection:"row"}}>
                    <div style={{marginRight: 20}}>
                        <InputBox label="First Name"></InputBox>
                    </div>
                    <div style={{marginRight: 20}}>
                        <InputBox label="Last Name"></InputBox>
                    </div>
                    <div style={{marginRight: 20}}>
                        <InputBox label="Address"></InputBox>
                    </div>
                </div>
                <div style={{display:"flex", position:"absolute", marginLeft: "7rem", flexDirection:"row", marginTop: "7rem"}}>
                    <div style={{marginRight: 20}}>
                        <InputBox label="Email"></InputBox>
                    </div>
                    <div style={{marginRight: 20}}>
                        <InputBox label="Mobile Number" type="number"></InputBox>
                    </div>
                    <div style={{marginRight: 20}}>
                        <SelectProps options={Gender} placeholder="Gender"></SelectProps>
                    </div>
                </div>
                <div style={{display:"flex", position:"absolute", marginLeft: "7rem", flexDirection:"row", marginTop: "14rem"}}>
                    <div style={{marginRight: 20}}>
                        <SelectProps options={Status} placeholder="Status"></SelectProps>
                    </div>
                    <div style={{marginRight: 20}}>
                        <SelectDate></SelectDate>
                    </div>
                    <div style={{marginRight: 20}}>
                        <SelectProps options={Nationality} placeholder="Nationality"></SelectProps>
                    </div>
                </div>
                <div style={{display:"flex", position:"absolute", marginLeft: "7rem", flexDirection:"row", marginTop: "21rem"}}>
                    <div style={{marginRight: 20}}>
                        <SelectProps options={ID} placeholder="ID Type"></SelectProps>
                    </div>
                    <div style={{marginRight: 20}}>
                        <InputBox label="ID Number" type="number"></InputBox>
                    </div>
                    <div style={{marginRight: 20}}>
                    <TextField style={{}} variant='outlined' label="Location" className='InputLocation'
                    />
                        <div style={{zIndex:3, marginTop: -54,  marginLeft: "27rem"}}>
                            <Button startIcon={<AddLocationAltIcon style={{ marginLeft: 10, padding: 5, fontSize: 40, color:"white", backgroundColor:"#64DAFF", borderRadius: 20}} ></AddLocationAltIcon>}></Button>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", position:"absolute", marginLeft: "7rem", flexDirection:"row", marginTop: "28rem"}}>
                    <div style={{marginRight: 20}}>
                    <TextField style={{}} variant='outlined' label="Remarks" className='InputRemarks'
                    />
                    </div>
                    <div style={{marginRight: 20}}>
                    <Button startIcon={<AddAPhotoIcon style={{color:"#64DAFF"}}></AddAPhotoIcon>} style={{ width: '100px', height: '55px', borderColor: "#64DAFF" }} variant='outlined'>UPLOAD</Button>
                    </div>
                </div>
                <div style={{display:"flex", position:"absolute", marginLeft: "38rem", flexDirection:"row", marginTop: "45rem",}}>
                    <div style={{marginRight: 20}}>
                        <Button variant='contained' style={{ height: '55px', width: "15rem", backgroundColor: "red" }}>CLEAR</Button>                    
                    </div>
                    <div style={{marginRight: 20}}>
                        <Button variant='contained' onClick={RecordViolation} style={{ height: '55px', width: "15rem", backgroundColor: "#64DAFF" }}>RECORD VIOLATION</Button>                    
                    </div>
                </div>
            </div>
            <div style={{position:"absolute", display:"flex"}}>
                
            </div>
        </div>
    );
}

export default Form;