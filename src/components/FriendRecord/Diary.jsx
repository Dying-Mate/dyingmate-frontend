import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GraveStoneSrc from '../../assets/img/PlayerRoom/gravestone.png'
import UploadFrameSrc from '../../assets/img/PlayerRoom/upload_frame.png'
import {ReactComponent as MainIcon} from '../../assets/icons/PlayerRoom/Diary/main_icon.svg'
import FuneralSelectData from '../../data/funeral_select'
import { getFuneral } from '../../apis/api/FriendRecord/friendRecord'
import Loading from './Loading'
import NoRecord from './NoRecord'

export default function Diary({email}) {
  const [funeral, setFuneral] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getFuneral(email)
    .then((res) => {
      console.log(res)
      if(res.status === "OK") {
        setFuneral({...res.data})
      }
      setIsLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <>
      { isLoading ? <Loading />
      :
      funeral ?
        <Container> 
        <TextArea>
          <MainIcon/>
          <Text>
            <p>@{email} 님은 {FuneralSelectData[funeral.method-1].itemText}</p>
            <p>{FuneralSelectData[funeral.method-1].explain}</p>
          </Text>
        </TextArea>
        <Result>
          <GraveStone><p>{funeral.epitaph}</p></GraveStone>
          <UploadBox>
            <img src={UploadFrameSrc}/>
            <img src={funeral.portrait_photo} />
          </UploadBox>
        </Result>
      </Container>
      :
      <NoRecord email={email} text={"죽음준비"}/>
      }

    </>
  )
}

const Container = styled.div`
  width: 60rem;
  height: calc(100vh - 15rem); 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-shrink: 0;
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 55rem;
  width: fit-content;
  gap: 1.8rem;
 
`
const Text = styled.div`
  text-align: left;
  font-size: 1.125rem;
  p:nth-child(1){
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
    font-weight: 600;
  }

`

const Result = styled.div`
  display: flex;
  width: 20rem;
`

const GraveStone = styled.div`
  background-image: url(${GraveStoneSrc});
  width: 13rem;
  height: 20rem;
  background-repeat:no-repeat;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Perpetua Titling MT;  
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.33125rem;

  p {
    width: 9rem;
    word-break: break-all;
    text-align: center;
  }
`

const UploadBox = styled.div`
  background-repeat:no-repeat;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  transform: rotate( -5deg ) translate(-30%, 20%) scale(0.8);

  img:nth-child(2){
    position: absolute;
    width: 10.8rem;
    height: 15rem;
    border-radius: 0.25rem;
  }
`