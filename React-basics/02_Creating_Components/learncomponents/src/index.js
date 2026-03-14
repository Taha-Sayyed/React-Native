import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function HelloWorld(){
    return <h1>Hello Taha Sayyed</h1>
}

function add(x,y){
    return x+y;
}

function MyComponent_1(){
    return <p>Addition of 2 and 3 is {add(2,3)}</p>
}

function MyComponent_2(){
    const link="https://github.com/"
    return <a href={link}>GitHub</a>
}

function MyComponent_3() {
  const imgLink = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";

  return <img src={imgLink} alt="GitHub Logo" />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(<HelloWorld/>);*/
/*root.render(<MyComponent_1/>);*/
root.render(<MyComponent_3/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

