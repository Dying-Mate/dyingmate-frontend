import { authInstance, defaultInstance } from "../utils/api"

// 로그인
export const userLogin = async (email, pwd) => {
  try {
    const {data} = await defaultInstance.post('/user/login', {
      email: email,
      pwd: pwd
    })
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 회원가입
export const userJoin = async (email, pwd) => {
  try {
    const {data} = await defaultInstance.post('/user/join', {
      email: email,
      pwd: pwd
    })
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 이메일 중복 확인
export const checkEmail = async (email) => {
  try {
    return defaultInstance.get(`/user/email/exists/${email}`)
  } 
  catch (error) {
    console.log(error)
  }
}

// 사용자 이름 저장
export const saveUsername = async (username) => {
  try {
    return await authInstance.post(`/user/${username}/save`)
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
    await authInstance.patch(`/map/open/${stageNum}`, {})
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


