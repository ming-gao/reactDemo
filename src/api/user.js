import request from '../util/request'

/**
 * 获取首页列表
 */
function getGroupTable(){
    return new Promise((resolve, reject) => {
        request("get",'/usergroup').then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}

export {
    getGroupTable
}

