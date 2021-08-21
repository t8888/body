/**
 * @author renpan
 * @date 2019-6-20
 * @describe 运营管理
 * @export
 */
import config from "@/util/config";
const httpUrl = config.checkCurrentEnv().bUrl;
export default class {
  //.获取学校管理人员列表
  static getManagerList() {
    return httpUrl + "/school/getManagerList1.0";
  }
  //获取学校管理人员信息
  static getManagerInfo() {
    return httpUrl + "/school/getManagerInfo1.0";
  }
  //添加学校管理人员
  static saveManagerInfo() {
    return httpUrl + "/school/saveManagerInfo1.0";
  }
  //调整学校管理人员状态
  static changeManagerInfo() {
    return httpUrl + "/school/changeManagerInfo1.0";
  }
  //删除学校管理人员信息
  static delManagerInfo() {
    return httpUrl + "/school/delManagerInfo1.0";
  }
  //获取学校管理人员角色列表
  static getSchoolManagerRoleList() {
    return httpUrl + "/yyht/getSchoolManagerRoleList1.0";
  }
  //重置管理人员密码
  static restPwdManager() {
    return httpUrl + "/school/restPwdManager1.0";
  }
  //整老师pad授权信息
  static changeUsePad() {
    return httpUrl + "/school/changeUsePad1.0";
  }
  //获取学校老师列表
  static getTeacherList() {
    return httpUrl + "/school/getTeacherList1.0";
  }
  //获取学校老师信息
  static getTeacherInfo() {
    return httpUrl + "/school/getTeacherInfo1.0";
  }
  //添加学校老师
  static saveTeacherInfo() {
    return httpUrl + "/school/saveTeacherInfo1.0";
  }
  //调整学校老师状态
  static changeTeacherInfo() {
    return httpUrl + "/school/changeTeacherInfo1.0";
  }
  //删除学校老师信息
  static delPadTeacherInfo() {
    return httpUrl + "/school/delPadTeacherInfo1.0";
  }
  //重置老师密码系统默认
  static restPwdTeacher() {
    return httpUrl + "/school/restPwdTeacher1.0";
  }
}