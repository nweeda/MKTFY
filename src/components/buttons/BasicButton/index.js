import Link from 'antd/lib/typography/Link';
import React from 'react';
import './basicButton.css'

//Link rel="basicButton" href="basicButton.css"

function BasicButton(props){
    return (
        <button class="myClass">{props.children}</button>
    );  
}

export default BasicButton;