import { authInstance } from "../utils/api"

// 로그인
export const userLogin = async (email, pwd) => {
  try {
    await authInstance.post('user/login', {
      email: email,
      pwd: pwd
    })
  } 
  catch (error) {
    console.log(error)
  }
}

// 회원가입
export const userJoin = async (email, pwd) => {
  try {
    await authInstance.post('user/join', {
      email: email,
      pwd: pwd
    })
  } 
  catch (error) {
    console.log(error)
  }
}

// 이메일 중복 확인
export const checkEmail = async (email) => {
  try {
    const {data} = await authInstance.get(`user/email/exists/${email}`)
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 사용자 이름 저장
export const saveUsername = async (username) => {
  try {
    await authInstance.post(`/onboarding/${username}/save`)
  } 
  catch (error) {
    console.log(error)
  }
}

// 지도(단계) 조회
export const getUserMap = async () => {
  try {
    const {data} = await authInstance.get('/map')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 지도(단계) 잠금 오픈
export const openMap = async (stageNum) => {
  try {
    await authInstance.patch(`/map/open/${stageNum}`)
  } 
  catch (error) {
    console.log(error)
  }
}
