import './Utils/Locales/i18n';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch} from "react-router-dom";
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
import {CoursesList} from "./Pages/Courses/CoursesList";
import {CoursesProvider} from "./Providers/CoursesProvider";


export const store = createStore(reducer);

const CustomRoute = () => {
  return (
    <React.Fragment>
      <SuspenseBackdrop/>
      <NavigationDrawer>
        <Switch>
          <PrivateRoute exact path="/home" component={Login}/>
          <PrivateRoute exact path="/courses" component={props =>
            <CoursesProvider>
              <CoursesList {...props}/>
            </CoursesProvider>
          }/>
          <PublicRoute exact path="/login" component={Login}/>
          <PublicRoute exact path="/registration" component={Registration}/>
          <PublicRoute exact path="/confirm-email" component={ConfirmEmail}/>
        </Switch>
      </NavigationDrawer>
    </React.Fragment>
  )
}


ReactDOM.render(
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
