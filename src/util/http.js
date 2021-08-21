import axios from "axios";
import config from "./config";
import Util from './util'
import {
  Message
} from 'element-ui';

const comData = config.commonData();
const md5Key = config.md5Key();
// 响应成功
function responseSuccess(data) {
  if (data.status != 200) {
    Message({
      message: '网络异常，请稍候重试!',
      type: 'error'
    });
    return
  }
  var header = data.data.header
  if (header.code == 501 || header.code == 502) {
    Message({
      message: '您的登录状态已失效,请重新登录',
      type: 'error'
    });
    return
  }
  if(header.code != 200){
    Message({
      message:data.data.data.resultStr,
      type: 'error'
    });
    return 
  }
  if (data.data.data.result != 2) {
    Message({
      message: data.data.data.resultStr,
      type: 'error'
    });
    return
  }
  return data.data
}
// 响应错误
function responseError(response) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (response.status === -404) {
    Message({
      message: response.msg,
      type: 'error'
    });
  }
  if (response.data && (!response.data.success)) {
    Message({
      message: response.msg,
      type: 'error'
    });
  }
  return response
}

//文件上传 responseSuccess
var fileSuccess = function(data){
  if (data.status != 200) {
    Message({
      message: '网络异常，请稍候重试!',
      type: 'error'
    });
    return
  }
  return data.data
}
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  }
);

// 请求方式配置
let Http = {};
Http.post = function (url, data, encode = false) {
  let obj = { ...comData,...data}
  let params = {};
  let userInfo = sessionStorage.getItem('userInfo')
  obj.uid = sessionStorage.getItem('adminuid')
  if(!obj.token){
    obj.token = sessionStorage.getItem('token')
  }
  if(userInfo){
    if(!obj.termId) obj.termId = JSON.parse(userInfo).data.termVO.termId
    obj.schoolId = JSON.parse(userInfo).data.schoolId
    obj.schoolType = JSON.parse(userInfo).data.schoolType
  }
 
  //  加密参数
  if (encode) obj = Util.encoder(JSON.stringify(obj), md5Key);
  // TODO  服务暂
  return axios({
    method: "post",
    url: url,
    params,
    data: obj,
    timeout: 50000,
    headers: {'content-type': "application/x-www-form-urlencoded; charset=utf-8"}
  })
    .then(Response => {
      //  解密返回数据
      if (encode) Response = JSON.parse(Util.decoder(data, md5Key));
      return responseSuccess(Response);
    })
    .catch(Response => {
      return responseError(Response);
    });
};
//文件上传
Http.fileUpload = function (url, data) {
  // TODO  服务暂
  return axios({
    method: "post",
    url: url,
    data: data,
    timeout: 50000,
    headers: {'content-type': "multipart/form-data"}
  })
    .then(Response => {
      return fileSuccess(Response);
    })
    .catch(Response => {
      return responseError(Response);
    });
};
Http.get = function (url, params) {
  // get
  return axios({
    method: "get",
    url,
    params, // get 请求时带的参数
    timeout: 50000,
    headers: {}
  })
    .then(Response => {
      return responseSuccess(Response);
    })
    .catch(Response => {
      return responseError(Response);
    });
};
export default  Http