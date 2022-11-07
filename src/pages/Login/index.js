import React from 'react';
import BasicButton from '../../components/buttons/BasicButton';
import './login.css';
import Logo from '../../assets/MKTFYlogo.png';
//import Column from 'antd/lib/table/Column';
import Page from '../muiTesting/grid.js';

function Login(){
    return (
        <div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
                <img src={Logo} style={{width: '235px'}}/>
                <BasicButton style={{display:"flex", }}>Login</BasicButton>
                <BasicButton>Create Account</BasicButton>
                <Page>TEST</Page>
        </div>
    );  
}

export default Login;