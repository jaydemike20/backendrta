import React from 'react';
import CheckBoxes from './CheckBoxes';
function V1(props) {
    return (
        <div>
                <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Driving without a license in the Philippines"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="LTO penalty for not wearing seatbelt in the Philippines"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Driving under the impact of alcohol/dangerous drugs"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Careless driving"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Illegal parking fine"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Disobeying traffic llights like beating the red light penalty"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Driving in the prohibilited roads"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Failure to darken the headlamps"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Illegal turn or overtaking"></CheckBoxes> 
                  </div>
        </div>
    );
}

export default V1;