import React, { useState } from 'react';
import { Box, TextField } from '@material-ui/core';



function SelectDate({label,InputProps, id, type}) {
  return (
    <div>
      <div>
            <TextField
                variant='outlined'
                label={label}
                InputProps={InputProps}
                className='InputLogin'
                type="date"
            />
        </div>
    </div>
  );
}

export default SelectDate;
