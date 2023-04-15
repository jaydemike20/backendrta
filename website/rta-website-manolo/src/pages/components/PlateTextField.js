import React from 'react';
import { TextField } from '@mui/material';

function PlateTextField(props) {
    return (
        <div>
            <div style={{position:"absolute", display:"flex"}}>
                <TextField type='number' className='PlateNumber' style={{width:"14rem"}}/>
                    <div style={{fontSize:"3rem", marginTop: "-7rem"}}><h1>-</h1></div>
                <TextField type='number' className='PlateNumber' style={{width:"13.5rem"}}></TextField>
            </div>
        </div>
    );
}

export default PlateTextField;