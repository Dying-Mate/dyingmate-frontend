import React, { useState } from 'react'
import styled from 'styled-components'
import TestProfile from '../../../../assets/img/splashBg.png'
import {AiOutlineLike, AiTwotoneLike} from 'react-icons/ai'

export default function OneCommentItem({name, content, likeCount, date}) {  
  const [isClicked, setIsClicked] = useState() 
  const handleLikeCount = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <CommentItem>
        <WriterInfo>
          <Profile image={TestProfile}/>
          <p>{name}</p>
        </WriterInfo>
        <MainContent>
          <p>{content}</p>
        </MainContent>
        <Footer>
          <Like>
            {isClicked ? <AiTwotoneLike color={'var(--main-color)'} onClick={handleLikeCount}/> :<AiOutlineLike onClick={handleLikeCount}/>}
            <p>{likeCount}개</p>
          </Like>
          <p>{date} 작성됨</p>
        </Footer>
      </CommentItem>
    </>
  )
}

const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Profile = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-image: url(${props => props.image});
`

const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p{
    font-size: 1.125rem;
    font-weight: 700;
    color: #f3f3f3;
  }
`

const MainContent = styled.p`
  text-align: left;
  font-weight: 500;
  color: white;
  line-height: 150%;

`

const Footer = styled.div`
  display: flex;
  align-items: center;  
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #dedede;
`

const Like = styled.div`
  display: flex;
  gap: 0.5rem;

  svg{
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
  }
`