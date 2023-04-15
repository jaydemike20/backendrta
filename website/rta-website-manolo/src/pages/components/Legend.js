import React from 'react';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';



function Legend({title, styleCategory}) {
    return (
        <div style={{display:"flex", alignItems: "center", marginLeft: 30, margin: 10, marginBottom:"-2.5rem"}}>
            <div><Brightness1RoundedIcon style={styleCategory}></Brightness1RoundedIcon></div>
            <div><p style={{marginLeft: 10}}>{title}</p></div>
        </div>
    );
}

export default Legend;