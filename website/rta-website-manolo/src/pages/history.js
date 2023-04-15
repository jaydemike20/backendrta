import React, { useState } from 'react';
import Navbar from '../Navbar';
import './css/home.css'
import Chart from './components/Chart';
import Legend from './components/Legend';
import ViolationTable from './components/ViolationTable';
import TotalViolation from './components/TotalViolation';

function History(props) {
    return (
        <div>
            <Navbar></Navbar>
            <div  className='ContainerCss' >

                <div className='InnerContainer'>
                    <div style={{marginLeft: "4rem"}}>
                        <div style={{fontSize:"10px", flexDirection:"row", display:"flex", position:"absolute", borderRadius: 30, marginTop: -55, marginLeft: 55}}>                            <div>
                                <Legend styleCategory={{color:"#008FFB"}} title="LTO Violation fee relative to Licensing"></Legend>
                            </div>
                            <div>
                                <Legend styleCategory={{color:"#00E396"}} title="LTO Fines and Penalties connected with car registration/renewal"></Legend>
                            </div>
                            <div>
                                <Legend styleCategory={{color:"#FEB019"}} title="LTO Fines and Penalties in connection with vehicles accessories, equipment, parts"></Legend>
                            </div>
                            <div>
                                <Legend styleCategory={{color:"#FF4560"}} title="Traggic Violation Notice for Unattended Vehicle"></Legend>
                            </div>
                        </div>

                        <div style={{height:"20rem", width:"55rem", backgroundColor:"white", borderRadius: 20, marginLeft: "30rem"}}>
                            <div  style={{marginTop: 20}}>
                                <Chart></Chart>
                            </div>
                        </div>
                        <div>
                            <div style={{flexDirection:"column", backgroundColor:"white", display:"flex", position:"absolute", width: "29rem", height:"22.2rem", borderRadius: 30, marginTop: "-20rem", padding: 10}}>
                                <div style={{alignSelf: "center"}}>
                                    <h1>TOTAL VIOLATIONS</h1>
                                </div>
                                <div style={{alignSelf: "center", marginTop:"-70px"}}>
                                    <h1 style={{fontSize: "8rem"}}>230</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundColor:"#D9F3FF", boxShadow:"1px 1px 34px 1px #75D4FF", display:"flex", position:"absolute", width: "94rem", height: 60, justifyContent: "center", marginTop: "27rem"}}>
                        <h3>TRACK RECORD</h3>
                    </div>
                    <div style={{backgroundColor:"white", width:"94rem", height:"30rem", display:"flex", position:"absolute", marginTop: "35rem", borderRadius: 20, padding: 30, flexDirection:"column"}}>
                        <div style={{marginBottom: 50}}><TotalViolation></TotalViolation></div>
                        <div style={{marginBottom: 50}}><TotalViolation></TotalViolation></div>
                        <div style={{marginBottom: 50}}><TotalViolation></TotalViolation></div>
                        <div style={{marginBottom: 50}}><TotalViolation></TotalViolation></div>
                        <div style={{marginBottom: 50}}><TotalViolation></TotalViolation></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default History;