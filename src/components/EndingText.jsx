import React from 'react'
import styled from 'styled-components'

export default function EndingText() {
  return (
    <>
      <TextWrapper>
        <p>엔딩에 들어갈 멘트 엔딩에 들어갈 멘트</p>
      </TextWrapper>
    </>
  )
}

const TextWrapper = styled.div`
  position: absolute;
  top: 10rem;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;

  p{
    font-size: 1.25rem;
    color: white;
    letter-spacing: 0.2rem;
    animation: fadeIn 3s

  }
`