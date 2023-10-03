import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StepOne from './Diary/StepOne'
import StepTwo from './Diary/StepTwo'
import StepThree from './Diary/StepThree'
import StepFinal from './Diary/StepFinal'
import {ReactComponent as PrevButton} from '../../../assets/icons/PlayerRoom/Diary/prev_btn.svg'
import {ReactComponent as NextButton} from '../../../assets/icons/PlayerRoom/Diary/next_btn.svg'
import ProgressBar from '../../Diary/ProgressBar'

export default function Diary() {
  const [comp, setComp] = useState()
  const [curIdx, setCurIdx] = useState(1)

  const handleIndex = (side, e) => {
    if(side === 'prev'){
      if(curIdx === 1) {
        setCurIdx(1);
        return;
      }
      setCurIdx(curIdx - 1)
    }
    else if(side === 'next') {
      if(curIdx === 4) {
        setCurIdx(4)
        return;
      }
      setCurIdx(curIdx + 1)
    }
  }

  useEffect(() => {

    switch(curIdx) {
      case 1:
        setComp(<StepOne/>)
        break;
      case 2:
        setComp(<StepTwo/>)
        break;
      case 3:
        setComp(<StepThree/>)
        break;
      case 4:
        setComp(<StepFinal/>)
        break;
    }
  },[curIdx])


  return (
    <>
      <Container>
        <div>
          <Button onClick={(e)=>{handleIndex('prev', e)}} style={(curIdx === 1) ? {opacity: 0} : {}}><PrevButton/></Button>
          {comp}
          <Button onClick={(e)=>{handleIndex('next', e)}} style={(curIdx === 4) ? {opacity: 0} : {}}><NextButton/></Button>
        </div>
      </Container>
      <ProgressBar curIdx={curIdx}/>

    </>
  )
}
const Container = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 2.5rem;  
  padding: 1rem 8rem 2.5rem 8rem;
  color: white;
  margin: auto;

  & > div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5.75rem;
  }


`


const Button = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  width: 8.5rem;
`
