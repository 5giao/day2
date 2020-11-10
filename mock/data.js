/*
 * @Author: your name
 * @Date: 2020-11-10 19:58:05
 * @LastEditTime: 2020-11-10 20:00:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \下拉\dome\mock\data.js
 */
const Mock=require('mockjs')

module.exports=Mock.mock({
    'list|4-7':[{
        "title":'@ctitle',
        "desc":'@cword(4,6)',
        "id":'@id'
    }]
})