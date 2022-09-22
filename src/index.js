import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloExternalComponent from './components/HelloExternalComponent'

// //การสร้าง Function Component
// function HelloFuncComponent(){
//   return <h1>สวัดดี Function Component</h1>
// }
// //การสร้าง Class Component
// class HelloClassComponent extends React.Component{
//   render() {
//      return <h2>สวัสดี Class Component</h2>
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloFuncComponent/> 
    <HelloClassComponent/> 
    <HelloExternalComponent/>  */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
