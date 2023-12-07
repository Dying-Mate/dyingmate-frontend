import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import {useNavigate} from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext';

export default function GoogleAuth() {
  const code = new URL(window.location.href).searchParams.get("code");
  const baseUrl = 'https://dying-mate-server.link'
  const navigate = useNavigate()

  const {user, setUser, token, setToken, setLogin} = useAuthContext()
  const [accessTokenFetching, setAccessTokenFetching] = useState(false)

  const getUserInfo = async () => {
    if(accessTokenFetching) return;

    try{
      setAccessTokenFetching(true)

      const res = await axios.post(
        `${baseUrl}/user/google?code=${code}`, {}, {
          withCredentials: true
        }
      )
      localStorage.setItem('login-token', res.data.data.accessToken)
      setToken(res.data.data.accessToken)
      setUser(res.data.data)
      setAccessTokenFetching(false)
      setLogin(true)
      navigate("/onboarding",{state: {isSocialLogin: true}} )
    }catch(error) {
      console.log(error)
      setAccessTokenFetching(false)
    }
  }

  useEffect(() => {
    if(code && !token) {
      getUserInfo()
    }
  },[code, user])


  return (
    <>
      <Loading />
    </>
  )
}
