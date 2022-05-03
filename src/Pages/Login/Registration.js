import React, {useState} from "react";
import {Box, Link} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {Link as RouterLink, useHistory} from 'react-router-dom';
import {PasswordTextField} from "../../Components/Common/Inputs/PasswordTextField";
import {useTranslation} from "react-i18next";
import {post} from "../../Utils/Api/Fetch";
import {CustomInput} from "../../Components/Common/Inputs/CustomInput";
import {LoginLayout} from "../../Components/Layouts/LoginLayout";


export const Registration = () => {
  const history = useHistory();
  const {t} = useTranslation();
  const [request, setRequest] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [alert, setAlert] = useState({});

  const onRegistration = async () => {
    setRequest(true);
    const payload = {username, email, password2, password: password1};
    const {error, json} = await post('/api/v1/registration/', payload, false);
    error ? setAlert(json) : history.push(`/confirm-email?email=${json?.email}`);
    setRequest(false);
  }

  return (
    <LoginLayout>
      <CustomInput
        value={username}
        onChange={setUsername}
        label="Имя пользователя"
        error={alert?.username}
        helperText={alert?.username && alert.username.join('\n')}
      />
      <CustomInput
        value={email}
        onChange={setEmail}
        label="Электронная почта"
        error={alert?.email}
        helperText={alert?.email && alert.email.join('\n')}
      />
      <PasswordTextField
        value={password1}
        onChange={setPassword1}
        label={'Введите пароль'}
        error={alert?.password}
        helperText={alert?.password && alert.password.join('\n')}
      />
      <PasswordTextField
        value={password2}
        onChange={setPassword2}
        label={'Повторите пароль'}
        error={alert?.password2}
        helperText={alert?.password2 && alert.password2.join('\n')}
      />
      <LoadingButton loading={request} sx={{mt: 3}} variant={'outlined'} fullWidth onClick={onRegistration}>
        Регистрация
      </LoadingButton>
      <Box sx={{mt: 2, display: 'flex'}}>
        <Box sx={{flexGrow: 1}}/>
        <Link component={RouterLink} to={'/login'}>Авторизация</Link>
      </Box>
    </LoginLayout>
  )
};
