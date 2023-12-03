import { authInstance } from "../../utils/api"

// 버킷리스트 전체 조회
export const getAllBucketlist = async () => {
  try {
    const {data} = await authInstance.get('/bucketlist/load')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 텍스트만 있는 버킷리스트 추가
export const addContentBucketlist = async (post) => {
  try {
    await authInstance.post('/bucketlist/add/content', post)
  } 
  catch (error) {
    console.log(error)
  }
}

// 텍스트+파일 모두 있는 버킷리스트 추가
export const addFileBucketlist = async (formData) => {
  try {
    await authInstance.post('/bucketlist/add/file', formData,{
      headers: {
        'Content-Type' : 'multipart/form-data',
      }
    })
  } 
  catch (error) {
    console.log(error)
  }
}

// 타이틀만 있는 버킷리스트 추가
export const addTitleBucketlist = async (title) => {
  try {
    await authInstance.post('/bucketlist/add/title', 
    {
      title: title  
    })
  } 
  catch (error) {
    console.log(error)
  }
}

// 포스트 위치 이동
export const movePost = async (bucketlistId, memoX, memoY) => {
  try {
    await authInstance.patch(`/bucketlist/move/${bucketlistId}?x=${memoX}&y=${memoY}`)
  } 
  catch (error) {
    console.log(error)
  }
}

