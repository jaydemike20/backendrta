import React from 'react';
import V1 from './V1';
import V2 from './V2';
import V3 from './V3';
import V4 from './V4';
import C1 from './../../Images/V1.png'
import C2 from './../../Images/V2.png'
import C3 from './../../Images/V3.png'
import C4 from './../../Images/V4.png'


function ViolationCompile(props) {
    return (
        <div>
            <div style={{display:"flex", position:"absolute", flexDirection:"column", marginLeft: 75, marginTop:"10rem"}}>
                <div>
                  <img src={C1}></img>
                </div>
                <div style={{marginLeft: 5}}>
                  <V1></V1>
                </div>
              </div>
              <div style={{display:"flex", position:"absolute", flexDirection:"column", marginLeft: 75, marginTop:"55rem"}}>
                <div>
                  <img src={C2}></img>
                </div>
                <div style={{marginLeft: 5}}>
                  <V2></V2>
                </div>
              </div>

              <div style={{display:"flex", position:"absolute", flexDirection:"column", marginLeft: 75, marginTop:"80rem"}}>
                <div>
                  <img src={C3}></img>
                </div>
                <div style={{marginLeft: 5}}>
                  <V3></V3>
                </div>
              </div>

              <div style={{display:"flex", position:"absolute", flexDirection:"column", marginLeft: 75, marginTop:"105rem"}}>
                <div>
                  <img src={C4}></img>
                </div>
                <div style={{marginLeft: 5}}>
                  <V4></V4>
                </div>
              </div>
        </div>
    );
}

export default ViolationCompile;