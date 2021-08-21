/**
 * @author renpan
 * @date 2019-5-17
 * @describe 权限相关API
 * @export
 */
import auth from './auth'
import busAPI from './businessManageAPI'
import fileUplodAPI from './fileUplodAPI'
import gradeAPI from './gradeAPI'
import healthClassifyAPI from './healthClassifyAPI'
import otherAPI from './otherAPI'
import schoolAPI from './schoolAPI'
import systemManage from './systemManage'
import userAPI from './userAPI'
import highSchoolAPI from './highSchoolAPI'
import openSportsAPI from "./openSportsAPI";
export default {
    auth: auth,
    userAPI: userAPI,
    systemManage: systemManage,
    schoolAPI: schoolAPI,
    otherAPI: otherAPI,
    healthClassifyAPI: healthClassifyAPI,
    gradeAPI: gradeAPI,
    fileUplodAPI: fileUplodAPI,
    busAPI: busAPI,
    highSchoolAPI: highSchoolAPI,
    openSportsAPI: openSportsAPI,
}