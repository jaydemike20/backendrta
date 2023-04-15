import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: '55px',
    width: '30rem',
    border: state.isFocused ? '1px solid blue' : '0.5px solid #C8C8C8',
    borderRadius: '4px',
    '&:hover': {
      border: '1px solid black', // change border color to black on hover
    },
  }),
};

function SelectProps({ props, placeholder, options }) {
  return (
    <div>
      <Select placeholder={placeholder} options={options} styles={customStyles}></Select>
    </div>
  );
}

export default SelectProps;
