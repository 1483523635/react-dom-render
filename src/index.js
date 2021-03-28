// import React, { StrictMode } from 'react';
import ReactDom from './kreact/react-demo-1';

import App from './App';

const root = document.getElementById("root");

function FunctionComponent(props) {
    return (
        <div>
            <h2>{ props.name }</h2>
        </div>
    )
}


const jsx = (
    <div>
        <h1>哈哈</h1>
        <a href="https://www.baidu.com" target="_blank">baidu</a>
        <FunctionComponent name="xiaoqu"/>
        <App value="qqq" />
    </div>
)
ReactDom.render(
    jsx,
    root);

