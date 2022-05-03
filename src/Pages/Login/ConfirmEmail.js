import React, {useEffect, useRef, useState} from "react";
import {Button, TextField, Typography} from "@mui/material";
import {MailOutline, VpnKey} from "@mui/icons-material";
import {post} from "../../Utils/Api/Fetch";
import {useHistory} from "react-router-dom";
import {Trans, useTranslation} from "react-i18next";
import {useUsers} from "../../Providers/UsersProvider";
import {LoginLayout} from "../../Components/Layouts/LoginLayout";
import {useAlerts} from "../../Providers/Theme/AlertsProvider";

const WAIT_SECONDS = 30;

const ConfirmEmail = () => {
  const {t} = useTranslation();
  const {login} = useUsers();
  const {setAlert} = useAlerts();
  const history = useHistory();
  const interval = useRef(null);
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [seconds, setSeconds] = useState(WAIT_SECONDS);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(history.location.search);
    setEmail(queryParams.get('email'));
  }, [])

  useEffect(() => seconds === 0 && clearInterval(interval.current), [seconds])

  useEffect(() => {
    if (!disabled) {
      return;
    }

    const timeout = setTimeout(() => setDisabled(false), WAIT_SECONDS * 1000);
    interval.current = setInterval(() => setSeconds(state => state - 1), 1000)
    return () => clearInterval(timeout);
  }, [disabled]);

  const onSendEmail = async () => {
    setDisabled(true);
    setSeconds(WAIT_SECONDS);
    const {error} = await post('/api/v1/user/send-confirm-email/', {email}, false);
    setAlert(error ? t('confirmEmail.errorSendingEmail') : t('confirmEmail.successSendingEmail'));
  }

  const onSendCode = async () => {
    const {error, json} = await post('/api/v1/user/confirm-email/', {email, code}, false);
    !error && await login(json?.token);
    setAlert(error ? t('confirmEmail.activationErrorAlert') : t('confirmEmail.activationSuccessAlert'));
  }

  return (
    <LoginLayout withAuth={false}>
      <Typography variant={'subtitle1'} sx={{mt: 3, textAlign: 'center'}}>{t('confirmEmail.title')}</Typography>
      <Typography sx={{mt: 2}} variant={'body2'}>
        <Trans defaults={t('confirmEmail.block_1', {email})} components={[<strong/>]}/>
      </Typography>
      <Typography sx={{mt: 2}} variant={'body2'}>{t('confirmEmail.block_2')}</Typography>
      <Button
        size={'small'}
        sx={{mt: 2}}
        disabled={disabled}
        onClick={onSendEmail}
        fullWidth
        variant={'outlined'}
        startIcon={<MailOutline/>}
      >
        {seconds === 0 ? t('confirmEmail.sendEmail') : t('confirmEmail.sendEmailIn', {count: seconds})}
      </Button>
      <TextField
        value={code}
        onChange={event => setCode(event.target.value)}
        sx={{mt: 5}}
        label={t('confirmEmail.codeInputLabel')}
        placeholder={t('confirmEmail.codeInputPlaceholder')}
        fullWidth
        size={'small'}
      />
      <Button
        size={'small'}
        sx={{mt: 3}}
        disabled={code.length === 0}
        onClick={onSendCode}
        fullWidth
        variant={'outlined'}
        startIcon={<VpnKey/>}
      >
        {t('confirmEmail.sendCode')}
      </Button>
    </LoginLayout>
  )
}

export default ConfirmEmail;
