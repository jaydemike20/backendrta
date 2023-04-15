import React from 'react';
import CheckBoxes from './CheckBoxes';
function V2(props) {
    return (
        <div>
                <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Driving without vehicle registration"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Driving an illegally modefied car"></CheckBoxes>
                  </div>
                  <div style={{marginBottom: 30}}>
                    <CheckBoxes title="Running a right-hand car"></CheckBoxes>
                  </div>
        </div>
    );
}

export default V2;