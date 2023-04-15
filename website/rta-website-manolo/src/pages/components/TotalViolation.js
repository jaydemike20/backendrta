import React from 'react';
import ViolationTable from './ViolationTable';
function TotalViolation(props) {
    return (
        <div>
            <div style={{width: "90rem", height: "15rem", borderRadius: 10, boxShadow:"1px 1px 34px 1px #75D4FF", padding: 10}}>
                <div style={{position:"absolute", display:"flex", width: "29rem", height: "13.5rem", boxShadow:"1px 1px 12px 1px #75D4FF", marginTop: 3, marginLeft: 3, flexDirection:"column",  alignItems: "center"}}>
                    <div><h3>TOTAL VIOLATION</h3></div>
                    <div style={{marginTop:"-2rem"}}><h4 style={{fontWeight:"normal"}}>15-04-2023</h4></div>
                    <div style={{marginTop:"-7rem"}}><h1 style={{fontSize:"7rem"}}>25</h1></div>
                </div>
                <div style={{marginLeft: "30rem"}}>
                    <ViolationTable></ViolationTable>
                </div>
            </div>
        </div>
    );
}

export default TotalViolation;