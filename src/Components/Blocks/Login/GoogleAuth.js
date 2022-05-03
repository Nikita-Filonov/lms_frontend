import React from "react";
import GoogleLogin from "react-google-login";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Box} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {useAlerts} from "../../../Providers/Theme/AlertsProvider";
import {post} from "../../../Utils/Api/Fetch";
import {useUsers} from "../../../Providers/UsersProvider";
import {GoogleAuthStyles} from "../../../Styles/Blocks";
import {toImage} from "../../../Utils/Utils";
import {store} from "../../../index";
import {SET_BACKDROP} from "../../../Redux/User/actionTypes";

export const GoogleAuth = () => {
  const {t} = useTranslation();
  const {setAlert} = useAlerts();
  const {login} = useUsers();
  const history = useNavigate();

  const googleLogin = async (payload) => {
    store.dispatch({type: SET_BACKDROP, payload: true});
    const safePayload = {user: payload.profileObj, idToken: payload.tokenId}
    const {error, json} = await post('/api/v1/login/google/', safePayload, false);

    if (error) {
      setAlert(t('login.authErrorGoogle'));
    } else {
      await login(json.token);
      history.push('/characters');
    }
    store.dispatch({type: SET_BACKDROP, payload: false});
  }

  return (
    <Box sx={{mt: 2}}>
      <Typography component={'p'} variant={'body1'} sx={GoogleAuthStyles.text}>
        {t('login.orContinueWith')}
      </Typography>
      <Box sx={GoogleAuthStyles.buttonContainer}>
        <GoogleLogin
          clientId="422840835835-mjcta1a19qn03l6dudlj2amla8uclgr8.apps.googleusercontent.com"
          buttonText="Войти с помощью Google"
          onSuccess={async data => await googleLogin(data)}
          onFailure={() => {
          }}
          cookiePolicy={'single_host_origin'}
          render={renderProps =>
            <Box sx={GoogleAuthStyles.buttonWrapper}>
              <IconButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <img alt={'google.png'} style={GoogleAuthStyles.image} src={toImage('google.png')}/>
              </IconButton>
            </Box>
          }
        />
      </Box>
    </Box>
  )
}
