import { authInstance } from "../../utils/api"

export const getWill = async (email) => {
  try {
    const {data} = await authInstance.get(`friendroom/${email}/will`)
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

export const getMessage = async (email) => {
  try {
    const {data} = await authInstance.get(`friendroom/${email}/message`)
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

export const getFuneral = async (email) => {
  try {
    const {data} = await authInstance.get(`friendroom/${email}/funeral`)
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

export const getBucketlist = async (email) => {
  try {
    const {data} = await authInstance.get(`friendroom/${email}/bucketlist`)
    return data
  } 
  catch (error) {
    console.log(error)
  }
}