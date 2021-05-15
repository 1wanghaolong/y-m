/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-02 21:57:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-12 00:01:00
 */
import axios from 'axios';
import qs from 'qs'
let base = "http://localhost:3000";

// export const yiyuanaccess = (params) => {  //获取特定医院信息
//     return new Promise((resolve, reject) => {

//         axios.post(`${base}/detail`, qs.stringify({
//             'live_name': params
//         })
//         )
//             .then(res => {
//                 console.log(res);
//                 return resolve(res)
//             })
//             .catch(err => {
//                 console.error("请求失败");
//             })
//     })

// }
export async function yiyuanaccess(params) {//获取特定医院信息
    try {
        return await axios.post(`${base}/detail`, qs.stringify({
            'live_name': params
        })); //获取特定医院信息
    } catch (e) {
        console.log(e, "获取失败");
    }
}
export async function zhuce(username, password, sex, phone, idicator, brithday) {//注册接口
    try {
        return await axios.post(`/register`, qs.stringify({
            'username': username,
            'password': password,
            'sex': sex,
            'phone': phone,
            "idicator": idicator,
            'brithday': brithday
        })); //获取特定医院信息
    } catch (e) {
        console.log(e, "获取失败");
    }
}
export async function dl(username, password) {//登录接口
    try {
        return await axios.get(`/login/${username}&&${password}`); //获取特定医院信息
    } catch (e) {
        console.log(e, "获取失败");
    }
}
export async function erci() {//首页二次接口
    try {
        return await axios.get(`/shouye2`); //获取首页二次信息
    } catch (e) {
        console.log(e, "获取失败");
    }
}