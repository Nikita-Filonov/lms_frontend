import React from 'react'
import {Navigate, Route} from 'react-router-dom'

export const PublicRoute = ({component: Component, ...rest}) => {
  const token = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Navigate to={{pathname: '/home', state: {from: props.location}}}/>
        ) : (
          <Component {...props} />
        )
      }
    />
  )
};
