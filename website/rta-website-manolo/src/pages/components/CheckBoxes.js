import React, { useState } from 'react';
import { Checkbox } from '@mui/material';

function CheckBoxes({title}) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  }

  return (
    <div>
        <div>
            <Checkbox
            checked={checked}
            onClick={handleCheck}
            sx={{
                color:"#88e3ff",
            '&.Mui-checked': {
                color: '#88e3ff'
            },
            transform: 'scale(2)'
            }}
        />
        </div>
        <div style={{width: "50rem", height: "auto", paddingLeft: 10, fontSize: 10, marginTop: -40, marginLeft: 35}}>
            <h1 style={{marginTop: -1, width: "50rem", fontWeight:"normal"}}>{title}</h1>
        </div>
    </div>
  );
}

export default CheckBoxes;
