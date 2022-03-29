import axios from "./axios";


export const getMenu = (param)=>{
    return axios.request({
        url:'permission/getMenu',
        method:'post',
        data: param
    })
}

export const getSystem = () => {
    return axios.request({
      url: '/system/getData',
      method: 'get'
    })
  }