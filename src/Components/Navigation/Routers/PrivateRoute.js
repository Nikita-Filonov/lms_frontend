import React from 'react'
import {Navigate, Route} from 'react-router-dom'

export const PrivateRoute = ({component: Component, ...rest}) => {
  const token = localStorage.getItem('token');

  return (
    <React.Fragment>
      <Route
        {...rest}
        render={props =>
          token ? (
            <Component {...props} />
          ) : (
            <Navigate to={{pathname: '/login', state: {from: props.location}}}/>
          )
        }
      />
    </React.Fragment>
  )
};
