/*
 * @Author: your name
 * @Date: 2020-11-10 19:55:52
 * @LastEditTime: 2020-11-10 20:06:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \下拉\dome\vue.config.js
 */
const list=require('./mock/data')
module.exports={
    lintOnSave:false,
    devServer:{
        before(app){
            app.get('/list',(req,res)=>{
                res.json(list)
            })
        }
    }
}