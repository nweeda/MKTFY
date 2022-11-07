import Link from 'antd/lib/typography/Link';
import React from 'react';
import './basicButton.css'

function BasicButton(props){
//if props.color === 
//else if props.color ===
let buttonStyle={}
//two ways:
if(props.color==='purple'){
    buttonStyle.backgroundColor='purple'
}

let buttonClass='myClass'
if(props.color==='purple'){
    buttonClass=buttonClass+" purpleButton"
}
    return (
        <button style={buttonStyle} className={buttonClass}>{props.children}</button>
    );  
}

export default BasicButton;