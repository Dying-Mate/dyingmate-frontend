import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getBucketlist } from '../../apis/api/FriendRecord/friendRecord'
import OnePostItem from '../PlayerRoom/MainModalContent/Board/OnePostItem'
import Loading from './Loading'
import NoRecord from './NoRecord'

export default function Board({email}) {
  const [allBucketlist, setAllBucketlist] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getBucketlist(email)
    .then((res) => {
      console.log(res)
      if(res.status === "OK") {
        setAllBucketlist(res.data.fileResponseList)
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
        <NoRecord email={email} text={"버킷리스트"}/>
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