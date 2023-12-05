import { authInstance } from "../../utils/api"

// 친구 목록 조회
export const getFriendList = async () => {
  try {
    const {data} = await authInstance.get('/friend/list')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 사용자 검색
export const getSearchList = async () => {
  try {
    const {data} = await authInstance.get('/friend/search')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}