import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as MainIcon} from '../../assets/icons/PlayerRoom/Will/main_icon.svg'
import willPaper from '../../assets/img/PlayerRoom/will_paper.png'
import { getWill } from '../../apis/api/FriendRecord/friendRecord'
import NoRecord from './NoRecord'

export default function Will({email}) {
  const [content, setContent] = useState(null)

  useEffect(() => {
    getWill(email)
    .then((res) => {
      console.log(res)
      if(res.status === "OK"){
        setContent(res.data.content)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <>
    {
      content ?
      <Container>
        <TextArea>
          <MainIcon/>
          <p>@{email} 님이 작성한 유언장이에요!</p>
        </TextArea>
        <FormInput 
            type={"text"}
            id='content' 
            name='content' 
            value={content}
            placeholder='내용을 입력해주세요.' 
            spellCheck="false"
            required
          />
      </Container>
      :
      <NoRecord />
    }

    </>
  )
}

const Container = styled.div`
  width: 67%;
  max-width: 67%;
  height: calc(100vh - 15rem); 
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex-shrink: 0;
`
const TextArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p{
    font-size: 1.25rem;
    font-weight: 700;
  }
`

const FormInput = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 3rem 8rem;
  box-sizing: border-box;
  font-family: 'UnPilgi';
  font-size: 1.2rem;
  background-image: url(${willPaper});
  border: none;
  border-radius: 1.25rem;
  color: var(--font-gray-3);
  resize: none;

  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    color: var(--font-gray-1);
    font-family: 'UnPilgi';
  }
  caret-color: transparent
`