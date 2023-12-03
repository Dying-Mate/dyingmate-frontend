import { authInstance } from "../../utils/api"

// 나의 방에서 모든 기능 수행 완료 여부
export const isAllDone = async () => {
  try {
    const {data} = await authInstance.get('/ending')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}