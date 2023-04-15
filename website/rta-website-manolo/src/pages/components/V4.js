import React from 'react';
import CheckBoxes from './CheckBoxes';
import InputBox from './../../login/component/InputBox'


function V4(props) {
    return (
        <div>
                <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Driving a car without proper/authorized devices, equipment, accessories or car part"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Operating a car with an improper attachment.unathorized of motor vehicle license plate"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Smoke Belching"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <InputBox label="Other related LTO Violations"></InputBox>
                  </div>
        </div>
    );
}

export default V4;