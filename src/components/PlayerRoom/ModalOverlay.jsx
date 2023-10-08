import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { usePlay } from '../../contexts/Play';
import { ReactComponent as CloseModal } from '../../assets/icons/close_modal.svg'
import title from '../../assets/img/title.png'

import Will from '../PlayerRoom/MainModalContent/Will'
import Phone from '../PlayerRoom/MainModalContent/Phone'
import Diary from '../PlayerRoom/MainModalContent/Diary'
import Board from './MainModalContent/Board';
import Shelf from './MainModalContent/Shelf/Shelf';

export default function ModalOverlay({curIdx, setCamera}) {
  const {setFocus} = usePlay()
  const [comp, setComp] = useState()

  const handleClick = (e) => {
    setFocus(false)
    setCamera()
  };

  useEffect(() => {
    switch(curIdx) {
      case 1:
        setComp(<Will/>)
        break;
      case 2:
        setComp(<Board/>)
        break;
      case 3:
        setComp(<Phone/>)
        break;
      case 4:
        setComp(<Diary/>)
        break;
      case 5: 
        setComp(<Shelf/>)
        break;
    }
  },[]);
  

  return (
    <Overlay>
    <Header>
      <img src={title} />
      <CloseModal onClick={handleClick}/>
    </Header>
    <MainComp>
      {comp}
    </MainComp>
  </Overlay>
  )
}

const Overlay = styled.div`
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  text-align: center;
  background-color: #1C1717B2;
  &{
    z-index: 999;
  }

`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.75rem 6.25rem 1rem 6.25rem;
  img{
    width: 11.25rem;
  }
`
const MainComp = styled.div`
  height: 100%:
`