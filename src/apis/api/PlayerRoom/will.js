import { authInstance } from '../../utils/api'

// 유언장 조회
export const getWill = async () => {
  try {
    const {data} = await authInstance.get('/will/load')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 유언장 저장
export const saveWill = async (inputData) => {
  try{
    await authInstance.post('/will/write', 
    {
      content: inputData
    })
  }
  catch (error) {
    console.log(error)
  }
}

// 유언장 수정
export const editWill = async (inputData) => {
  try{
    await authInstance.patch('/will/modify', 
    {
      content: inputData
    })
  }
  catch (error) {
    console.log(error)
  }
}
