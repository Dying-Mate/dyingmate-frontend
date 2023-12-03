import { authInstance } from '../../utils/api'

// 다이어리 조회
export const getDiary = async () => {
  try {
    const {data} = await authInstance.get('/funeral/select')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 다이어리 저장
export const saveDiary = async (formData) => {
  try {
    await authInstance.post('/funeral/save', formData,{
      headers: {
        'Content-Type' : 'multipart/form-data',
      }
    })
  } 
  catch (error) {
    console.log(error)
  }
}
