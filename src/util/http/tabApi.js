/*
 * @Author: your name
 * @Date: 2020-11-29 11:24:25
 * @LastEditTime: 2020-11-29 14:22:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /example-demo/src/utils/http/tabApi.js
 */
import base from './base'; // 导入接口域名列表
import axios from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块


const tabApi = {    
    // 根据发贴人 ID 来查询他发的所有贴子    
    tabList (id) {
        return axios.get(`${base.json}/posts?userId=${id}`); 
    },
}

export default tabApi;