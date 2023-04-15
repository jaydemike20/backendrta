import { TextField, colors } from '@mui/material';
import React from 'react';
import './css/index.css';

function InputBox({label, InputProps, type, defaultValue, placeholder, helperText, disabled}) {
    
    return (
        <div>
            <TextField
                variant='outlined'
                label={label}
                InputProps={InputProps}
                className='InputLogin'
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                helperText={helperText}
                disabled={disabled}
            />
        </div>
    );
}

export default InputBox;
