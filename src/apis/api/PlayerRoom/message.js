import { authInstance } from '../../utils/api'

// 부고문자 조회
export const getMessage = async () => {
  try {
    const {data} = await authInstance.get('/message/load')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

// 부고문자 저장
export const saveMessage = async (inputData) => {
  try{
    await authInstance.post('/message/send', 
    {
      message: inputData
    })
  }
  catch (error) {
    console.log(error)
  }
}

// 부고문자 삭제
export const deleteMessage = async (inputData) => {
  try{
    await authInstance.patch('/message/delete', 
    {
      message: inputData
    })
  }
  catch (error) {
    console.log(error)
  }
}
