/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-21 15:35:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 15:39:10
 */
module.exports={
  devServer:{
    open:true,
    port:8080,
    host:"127.0.0.1",
    proxy:{
      '/q':{
        target:'http://127.0.0.1',
        changeOrigin:true,
        pathRewrite:{
           '/q':''
        }
      }
    }
  }
}