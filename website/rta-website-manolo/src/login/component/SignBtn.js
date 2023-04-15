import React from 'react';
import './css/index.css'
import { Button } from '@mui/material';
function SignBtn({title, onClick, active}) {
    const className = `btn ${active ? 'active' : ''}`;

    return (
        <>
            <Button 
            className={className}
            variant='contained'
            onClick={onClick}
            >{title}</Button> 
        </>
    );
}

export default SignBtn;