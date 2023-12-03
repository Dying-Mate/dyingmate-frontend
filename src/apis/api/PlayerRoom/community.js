
import { authInstance } from '../../utils/api'

// 전체 댓글 조회
export const getCommentList = async () => {
  try {
    const {data} = await authInstance.get('/community')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 댓글 등록
export const addComment = async (content) => {
  try{
    await authInstance.post('/community/register', 
    {
      content: content
    })
  }
  catch (error) {
    console.log(error)
  }
}

// 좋아요 추가
export const addLike = async (id) => {
  try{
    await authInstance.post(`/heart/${id}`)
  }
  catch (error) {
    console.log(error)
  }
}

// 좋아요 취소
export const cancelLike = async (id) => {
  try{
    await authInstance.delete(`/heart/${id}`)
  }
  catch (error) {
    console.log(error)
  }
}