import React from 'react';
import ReactDom from 'react-dom';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';






function Greeting(){
  return  <div>
            <Hello />
            <Message />
          </div>;
}

const Hello = () => <h2>Hello World!</h2>;
const Message = () => <p>This is a Text!</p>

/*const Greeting = () => {
  return React.createElement('h1', {}, 'hello world');
};*/



ReactDom.render(<Greeting />, document.getElementById('root'));
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
