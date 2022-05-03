import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {NavigationDrawer} from "./Components/Navigation/NavigationDrawer";
import {createStore} from "redux";
import reducer from './Redux/Reducers';


export const store = createStore(reducer);

const CustomRoute = () => {
  return (
    <NavigationDrawer>
      <div>
        asdsadsa
      </div>
    </NavigationDrawer>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomRoute/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
