/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-02 21:57:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-03 19:13:48
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
export async function yiyuanaccess(params) {
    return await axios.post(`${base}/detail`, qs.stringify({
        'live_name': params
    })); //获取特定医院信息
}