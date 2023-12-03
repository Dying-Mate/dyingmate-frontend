import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as MainIcon} from '../../../../assets/icons/PlayerRoom/Diary/main_icon.svg'
import MethodItem from '../../../Diary/MethodItem'
import MethodExplain from '../../../Diary/MethodExplain';
import { useDiaryContext } from '../../../../contexts/DiaryContext';
import FuneralSelectData from '../../../../data/funeral_select';

export default function StepOne({method}) {
  const {diary, setDiary} = useDiaryContext()
  const [curIdx, setCurIdx] = useState();

  useEffect(() => {
    setCurIdx(method ? method : 1)
  },[])

  useEffect(() => {
    setDiary((data) => ({...data, 'method': curIdx}))
  },[curIdx])


  return (
    <Content>
      <TextArea>
        <MainIcon/>
        <Text>
          <p>장례방식은,</p>
          <p>당신의 존재와 가치를 빛내는 소중한 결정입니다.<br/>
            당신의 흔적을 남길 장례방식을 고민하며, 감정과 세심함을 담아 정해보세요. 
          </p>
        </Text>
      </TextArea>
      <Main>
        <ul>
          {
            FuneralSelectData && FuneralSelectData.map((item, i) => (
              <MethodItem isSelected={(curIdx === i+1) ? true: false} handleOnClick={() => setCurIdx(i+1)} itemText={item.itemText} />
            ))
          }
        </ul>
        <MethodExplain explain={curIdx && FuneralSelectData[curIdx-1].explain} />
      </Main>
    </Content>

  )
}

const Content = styled.div`
  width: 60rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4.25rem;
  flex-shrink: 0;
`
const TextArea = styled.div`
  display: flex;
  width: 100%;
  gap: 1.8rem;
  margin-bottom: 3.75rem;
`
const Text = styled.div`
  flex-direction: column;
  text-align: left;
  gap: 0.75rem;
  font-size: 0.9rem;
  p:nth-child(1){
    font-size: 1.25rem;
  }
`
const Main = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  ul {
    flex: 60%;
  }
`