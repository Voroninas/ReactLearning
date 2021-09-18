import * as axios from 'axios'

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '5330e579-2c3e-4d0f-8660-ef176eeacb36'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  unfollowUser(usersId) {
    return instance.delete(`follow/${usersId}`)
      .then(response => response.data)
  },  // i thing the problem is here, maybe response have another structure
  followUser(usersId) {
    return instance.post(`follow/${usersId}`)
      .then(response => response.data)
  } // i thing the problem is here, maybe response have another structure
}

export const userProfileAPI = {
  getAuthUserData(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data)
  }
}

export const authUserDataAPI = {
  getAuthUserData() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  }
}

/*export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)
}*/

/*export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)
}*/