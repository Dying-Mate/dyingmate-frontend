import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getBucketlist } from '../../apis/api/FriendRecord/friendRecord'
import OnePostItem from '../PlayerRoom/MainModalContent/Board/OnePostItem'
import NoRecord from './NoRecord'

export default function Board({email}) {
  const [allBucketlist, setAllBucketlist] = useState(null)

  useEffect(() => {
    getBucketlist(email)
    .then((res) => {
      console.log(res)
      if(res.status === "OK") {
        setAllBucketlist(res.data.fileResponseList)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <>
    {
      allBucketlist ?
      <Container>
        <BoardContainer>
          <PostWrapper>
            {allBucketlist && allBucketlist.map((memo, idx) => (
              <OnePostItem key={idx} memo={memo} isMine={false}/>
            ))}            
          </PostWrapper>
        </BoardContainer>
      </Container>
      :
      <NoRecord />
    }
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 15rem); 
  padding: 0 3.75rem;
  box-sizing: border-box;
  z-index: 999;
  position: relative;
`

const BoardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #D9995D;
  border: 5px solid white;
  box-sizing: border-box;
  border-radius: 2.5rem;  
  background-size: fill;
`

const PostWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`