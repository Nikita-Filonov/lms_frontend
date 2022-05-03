import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
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


export const store = createStore(reducer);

const CustomRoute = () => {
  return (
    <NavigationDrawer>
      <PublicRoute exact path="/login" component={Login}/>
      <PublicRoute exact path="/registration" component={Registration}/>
      <PublicRoute exact path="/confirm-email" component={ConfirmEmail}/>
    </NavigationDrawer>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <CustomThemeProvider>
          <AlertsProvider>
            <UsersProvider>
              <CustomRoute/>
            </UsersProvider>
          </AlertsProvider>
        </CustomThemeProvider>
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
