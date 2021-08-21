/**
 * @author renpan
 * @date 2019-6-20
 * @describe 运营管理
 * @export
 */
import config from "@/util/config";
const httpUrl = config.checkCurrentEnv().bUrl;
export default class {
  //获取公告列表
  static getScNoticeList() {
    return httpUrl + "/school/getScNoticeList1.0";
  }
  //获取公告信息
  static getScNoticeInfo() {
    return httpUrl + "/school/getScNoticeInfo1.0";
  }
  //保存公告信息
  static saveNoticeInfo() {
    return httpUrl + "/school/saveNoticeInfo1.0";
  }
  //删除公告信息
  static delNoticeInfo() {
    return httpUrl + "/school/delNoticeInfo1.0";
  }
  //获取动量团队
  static getTeamList() {
    return httpUrl + "/yyht/yj/zhtyYjSysTeamList1.0";
  }
  //添加动量团队
  static saveTeam() {
    return httpUrl + "/yyht/yj/zhtyYjSysTeamAdd1.0";
  }
  //删除动量团队
  static forbidTeam() {
    return httpUrl + "/yyht/yj/zhtyYjSysTeamDel1.0";
  }
  //配置动量团队学生
  static getTeamStu() {
    return httpUrl + "/yyht/yj/zhtyYjSysStudentList1.0";
  }
  //配置动量团队学生
  static saveTeamStu() {
    return httpUrl + "/yyht/yj/zhtyYjSysStudentAdd1.0";
  }
  
}