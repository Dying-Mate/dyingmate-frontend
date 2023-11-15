import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Grandma_Profile from '../../assets/img/Profile/profile_1.png'
import Man_Profile from '../../assets/img/Profile/profile_2.png'
import Woman_Profile from '../../assets/img/Profile/profile_3.png'

export default function UserProfile({photoNum}) {
  const [profile, setProfile] = useState()

  useEffect(() => {
    switch (photoNum) {
      case 0:
        setProfile(Grandma_Profile)
        break;
      case 1:
        setProfile(Man_Profile);
        break;
      case 2:
        setProfile(Woman_Profile);
        break;
    }
  },[])

  return (
    <Profile src={profile}/>
  )
}

const Profile = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;s
`