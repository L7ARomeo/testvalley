import axiosBase from 'axios'
import { API_HOST } from '@src/constants/apis'
const api = (token?: string) => {
  if (token) {
    return axiosBase.create({
      baseURL: API_HOST,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  }
  return axiosBase.create({
    baseURL: API_HOST,
    headers: {
      Accept: 'application/json',
    },
  })
}

export default api
