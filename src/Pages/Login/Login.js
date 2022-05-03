import React, {useState} from "react";
import {Box, Link} from "@mui/material";
import {Alert, LoadingButton} from "@mui/lab";
import {Link as RouterLink} from 'react-router-dom';
import {post} from "../../Utils/Api/Fetch";
import {useUsers} from "../../Providers/UsersProvider";
import {useTranslation} from "react-i18next";
import {PasswordTextField} from "../../Components/Common/Inputs/PasswordTextField";
import {CustomInput} from "../../Components/Common/Inputs/CustomInput";
import {LoginLayout} from "../../Components/Layouts/LoginLayout";


export const Login = () => {
  const {login} = useUsers();
  const {t} = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({});

  const onLogin = async () => {
    const {json, code} = await post('/login/', {email, password}, false);
    if (code === 401) {
      setAlert(t('login.authError'));
      return;
    }

    json.token ? await login(json.token) : setAlert(json);
  }

  return (
    <LoginLayout>
      {alert.message && <Alert sx={{mt: 2}} severity={alert.level}>{alert.message}</Alert>}
      <CustomInput
        label="Электронная почта"
        value={email}
        onChange={setEmail}
        error={alert?.email?.length > 0}
        helperText={alert?.email}
      />
      <PasswordTextField
        value={password}
        onChange={setPassword}
        label={'Пароль'}
        error={alert?.password?.length > 0}
      />
      <LoadingButton sx={{mt: 3}} variant={'outlined'} fullWidth onClick={onLogin}>
        Войти
      </LoadingButton>
      <Box sx={{mt: 2, display: 'flex'}}>
        <Link>Забыли пароль?</Link>
        <Box sx={{flexGrow: 1}}/>
        <Link component={RouterLink} to={'/registration'}>Регистрация</Link>
      </Box>
    </LoginLayout>
  )
};
