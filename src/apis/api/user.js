import { authInstance } from "../utils/api"

// 로그인

// 회원가입

// 사용자 이름 저장
export const createUsername = async (username) => {
  try {
    const {data} =  await authInstance.post('/onboarding/username/post', {username: username})
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 사용자 이름 수정
export const editName = async (name) => {
  try{
    await authInstance.patch(`user/${name}/modify`)
  }
  catch (error) {
    console.log(error)
  }
}

// 로그아웃
export const logout = async () => {
  try{
    await authInstance.post('/user/logout')
  }
  catch (error) {
    console.log(error)
  }
}

// 데이터 초기화
export const resetData = async () => {
  try{
    await authInstance.delete('/user/reset')
  }
  catch (error) {
    console.log(error)
  }
}