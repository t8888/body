/**
 * @author renpan
 * @date 2019-5-17
 * @describe 权限相关API
 * @export
 */
import config from "@/util/config";
const httpUrl = config.checkCurrentEnv().bUrl;
const sysUrl = config.checkCurrentEnv().sysUrl;
export default class {
 //登录
 static schoolLoginAuth() {
  return httpUrl + "/school/schoolLoginAuth1.0"
}
  //登录
  static loginWeb() {
    return httpUrl + "/school/schoolLogin1.0"
  }
  // 找回管理人员密码
  static restMangerPwd() {
    return httpUrl + "/school/restMangerPwd1.0";
  }
  // 测试阶段验证码统一用“000000”！
  static getPhoneVerifyCode() {
    return httpUrl + "/getPhoneVerifyCode1.0";
  }
 // 修改平台登录用户的密码
 static changePlatUserPwd() {
  return sysUrl + "/changePlatUserPwd1.0";
}
  // 验证码
  static verifyCode() {
    return httpUrl + "/sync/verifyCode3.7";
  }
  //用户登录后，调用该接口获取权限
  static power() {
    // return httpUrl +'/school/getShoolPower1.0'
    return sysUrl + "/power2.0";
  }
}