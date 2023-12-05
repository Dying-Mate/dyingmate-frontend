import { authInstance } from "../../utils/api"

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

// 친구 추가
export const addFriend = async (email, name, profile) => {
  try {
    await authInstance.post('/friend/add', {
      friendEmail: email,
      friendName: name,
      friendProfile: profile
    })
  } 
  catch (error) {
    console.log(error)
  }
}

// 친구 요청 수락
export const acceptRequest = async (email) => {
  try {
    await authInstance.post(`friend/accept?acceptEmail=${email}`)
  } 
  catch (error) {
    console.log(error)
  }
}

// 친구 요청 수락
export const refuseRequest = async (email) => {
  try {
    await authInstance.delete(`friend/refuse?refuseEmail=${email}`)
  } 
  catch (error) {
    console.log(error)
  }
}
