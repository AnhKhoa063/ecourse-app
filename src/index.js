import React from 'react';
import ReactDOM from 'react-dom';
// import ContextParent from './ContextParent';
// import ShowFilterProduct from './FilterProduct';
// import NameForm from './Form';
// import Greeting from './Greeting';
import './index.css';
// import ReactRouter from './ReactRouter';
// import NumberListShow from './Key';
// import LoginControl from './LoginControl';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Toggle from './Toggle';
// import TestUserList from './TestUserList';
// import User from './User';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DemoRedux from './DemoRedux';
import { reducer } from './UserReducer';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <User fullName="Le Tran Anh Khoa" age="21"/> */}
//     {/* <TestUserList /> */}
//     {/* <Toggle/> */}
//     {/* <Greeting isLoggedIn={false} /> */}
//     {/* <LoginControl/> */}
//     {/* <NumberListShow/> */}
//     {/* <NameForm/> */}
//     <ReactRouter/>
//     {/* <ShowFilterProduct/> */}
//     {/* <ContextParent/> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const store = createStore(reducer);

const render = () => ReactDOM.render(
  <Provider store={store}>
    <DemoRedux 
      value={store.getState()} 
      helloVi={() => store.dispatch({ type: 'vi'})} 
      helloEn={() => store.dispatch({ type: 'en'})}
    />
  </Provider>,
  document.getElementById('root')
);
render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
