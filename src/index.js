import './Utils/Locales/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {NavigationDrawer} from "./Components/Navigation/NavigationDrawer";
import {createStore} from "redux";
import reducer from './Redux/Reducers';
import {Provider} from "react-redux";
import {ThemeWrapper} from "./Providers/Theme/ThemeProvider";
import {CustomThemeProvider} from "./Providers/Theme/CustomThemeProvider";
import {PublicRoute} from "./Components/Navigation/Routers/PublicRoute";
import {Login} from "./Pages/Login/Login";
import {Registration} from "./Pages/Login/Registration";
import ConfirmEmail from "./Pages/Login/ConfirmEmail";
import {AlertsProvider} from "./Providers/Theme/AlertsProvider";
import {UsersProvider} from "./Providers/UsersProvider";
import SuspenseBackdrop from "./Components/Common/SuspenseBackdrop";
import {PrivateRoute} from "./Components/Navigation/Routers/PrivateRoute";


export const store = createStore(reducer);

const CustomRoute = () => {
  return (
    <React.Fragment>
      <SuspenseBackdrop/>
      <NavigationDrawer>
        <Routes>
          <Route exact path='/home' element={<PrivateRoute/>}>
            <Route exact path='/home' element={<Login/>}/>
          </Route>
          <Route exact path='/login' element={<PublicRoute/>}>
            <Route exact path='/login' element={<Login/>}/>
          </Route>
          <Route exact path='/registration' element={<PublicRoute/>}>
            <Route exact path='/registration' element={<Registration/>}/>
          </Route>
          <Route exact path='/confirm-email' element={<PublicRoute/>}>
            <Route exact path='/confirm-email' element={<ConfirmEmail/>}/>
          </Route>
        </Routes>
      </NavigationDrawer>
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeWrapper>
          <CustomThemeProvider>
            <AlertsProvider>
              <UsersProvider>
                <CustomRoute/>
              </UsersProvider>
            </AlertsProvider>
          </CustomThemeProvider>
        </ThemeWrapper>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
