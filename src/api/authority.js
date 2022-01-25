// 权限管理API  【菜单、角色、权限】
import request from '@/utils/request'
export function addMenu(data) {
    return request({
        url: '/MRouting/getMOD_Stats',
        method: 'post',
        data
    })
}

export function menuList(query) {
    return request({
        url: '/Mplan/Orderinfo',
        method: 'get',
        params: query
    })
}
 
 
export function getKvalue(query) {
    return request({
        url: '/MRouting/getMOD_Stats',
        method: 'get',
        params: query
    })
}