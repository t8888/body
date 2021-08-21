/**
 * @author renpan
 * @date 2019-5-21
 * @describe 系统管理
 * @export
 */
import config from "@/util/config";
const httpUrl = config.checkCurrentEnv().sysUrl;
export default class {
  // 只获取系统级用户，不获取业务用户
  static getAccountList() {
    return httpUrl + "/getAccountList1.0";
  }
  // 获取用户信息接口
  static getUserInfo() {
    return httpUrl + "/getUserInfo1.0";
  }
  // 修改密码，用户页面中对用户密码修改功能
  static changePwd() {
    return httpUrl + "/changePwd1.0";
  }
  //  删除用户，用户页面列表中的删除功能
  static delUserInfo() {
    return httpUrl + "/delUserInfo1.0";
  }
  //设为虚拟用户，用户页面列表中的设置虚拟用户按钮功能
  static setVirtualUser() {
    return httpUrl + "/setVirtualUser1.0";
  }
  //打开添加用户页面
  static addUser() {
    return httpUrl + "/addUser1.0";
  }
  //用户保存用户
  static saveUser() {
    return httpUrl + "/saveUser1.0";
  }
  //获取部门下的角色信息(可为多个部门),主要用在添加、修改账号功能
  static getPositionList() {
    return httpUrl + "/getPositionList1.0";
  }
  //获取部门下的子系统信息(可为多个部门),主要用在添加、修改账号功能
  static getStorefrontListForDept() {
    return httpUrl + "/getStorefrontListForDept1.0";
  }
  //保存配置权限
  static openConfigurePower() {
    return httpUrl + "/openConfigurePower1.0";
  }
  //打开配置权限页面
  static saveConfigurePower() {
    return httpUrl + "/saveConfigurePower1.0";
  }
  //获取业务用户列表
  static getBusUserList() {
    return httpUrl + "/getBusUserList1.0";
  }
  //获取业务用户信息
  static getBusUserInfo() {
    return httpUrl + "/getBusUserInfo1.0";
  }
  //打开添加业务用户页面
  static addBusUser() {
    return httpUrl + "/addBusUser1.0";
  }
  //保存业务用户信息
  static saveBusUser() {
    return httpUrl + "/saveBusUser1.0";
  }
  //删除业务用户
  static delBusUserInfo() {
    return httpUrl + "/delBusUserInfo1.0";
  }
  //获取菜单列表
  static getFunctionList() {
    return httpUrl + "/getFunctionList1.0";
  }
  //获取下级功能菜单列表信息
  static getSubFunctionList() {
    return httpUrl + "/getSubFunctionList1.0";
  }
  //页面展现添加三级菜单分开展现； 菜单类型：在页面设置成只读：1-1级，2-2级，3-3级
  static saveFunctionInfo() {
    return httpUrl + "/saveFunctionInfo1.0";
  }
  //获取菜单信息
  static getFunctionInfo() {
    return httpUrl + "/getFunctionInfo1.0";
  }
  //删除菜单信息
  static delFunctionInfo() {
    return httpUrl + "/delFunctionInfo1.0";
  }
  //获取数据源监控列表
  static getDataSourceList() {
    return httpUrl + "/getDataSourceList1.0";
  }
  //获取部门列表
  static getDepartList() {
    return httpUrl + "/getDepartList1.0";
  }
  //获取部门信息
  static getDepartInfo() {
    return httpUrl + "/getDepartInfo1.0";
  }
  //保存部门信息
  static saveDepartInfo() {
    return httpUrl + "/saveDepartInfo1.0";
  }
  //删除部门信息
  static delDepartInfo() {
    return httpUrl + "/delDepartInfo1.0";
  }
  //根据部门获取子系统列表
  static getStorefrontListByDept() {
    return httpUrl + "/getStorefrontListByDept1.0";
  }
  //获取子系统列表
  static getStorefrontList() {
    return httpUrl + "/getStorefrontList1.0";
  }
  //获取子系统信息
  static getStorefrontInfo() {
    return httpUrl + "/getStorefrontInfo1.0";
  }
  //添加子系统信息   -改
  static addStorefrontInfo() {
    return httpUrl + "/addStorefrontInfo1.0";
  }
  //保存子系统信息
  static saveStorefrontInfo() {
    return httpUrl + "/saveStorefrontInfo1.0";
  }
  //删除子系统信息
  static delStorefrontInfo() {
    return httpUrl + "/delStorefrontInfo1.0";
  }
  //主要用在角色管理-列表获取功能
  static getPositionInfoList() {
    return httpUrl + "/getPositionInfoList1.0";
  }
  //打开角色修改页面，或查看角色详情
  static gePositionInfo() {
    return httpUrl + "/gePositionInfo1.0";
  }
  //打开添加角色页面
  static addPosition() {
    return httpUrl + "/addPosition1.0";
  }
  //保存角色信息
  static savePositionInfo() {
    return httpUrl + "/savePositionInfo1.0";
  }
  //保存修改后的角色信息 修改时，所属部门不能调整
  static updatePositionInfo() {
    return httpUrl + "/updatePositionInfo1.0";
  }
  //删除角色信息
  static delPositionInfo() {
    return httpUrl + "/delPositionInfo1.0";
  }
  //获取接口列表
  static getInterfaceList() {
    return httpUrl + "/getInterfaceList1.0";
  }
  //获取接口信息
  static getInterfaceInfo() {
    return httpUrl + "/getInterfaceInfo1.0";
  }
  //保存接口信息
  static saveInterfaceInfo() {
    return httpUrl + "/saveInterfaceInfo1.0";
  }
  //删除接口信息
  static delInterfaceInfo() {
    return httpUrl + "/delInterfaceInfo1.0";
  }
  //更改接口状态
  static changeInterfaceStatus() {
    return httpUrl + "/changeInterfaceStatus1.0";
  }
  //获取每个按钮关联的接口信息列表
  static getFunctionInterfaceList() {
    return httpUrl + "/getFunctionInterfaceList1.0";
  }
  //获取该菜单设置的接口关联信息
  static getFunctionInterfaceInfo() {
    return httpUrl + "/getFunctionInterfaceInfo1.0";
  }
  //保存该菜单设置的接口关联信息
  static saveFunctionInterfaceInfo() {
    return httpUrl + "/saveFunctionInterfaceInfo1.0";
  }
  //清除该菜单设置的接口关联信息
  static delFunctionInterfaceInfo() {
    return httpUrl + "/delFunctionInterfaceInfo1.0";
  }
  //获取操作日志列表
  static getUserRecordList() {
    return httpUrl + "/getUserRecordList1.0";
  }
  //获取操作日志信息
  static getUserRecordInfo() {
    return httpUrl + "/getUserRecordInfo1.0";
  }
  //删除操作日志
  static delUserRecord() {
    return httpUrl + "/delUserRecord1.0";
  }
  //获取白明单列表
  static getWhiteIpList() {
    return httpUrl + "/getWhiteIpList1.0";
  }
  //获取白明单信息
  static getWhiteIpInfo() {
    return httpUrl + "/getWhiteIpInfo1.0";
  }
  //保存白明单信息
  static saveWhiteIpInfo() {
    return httpUrl + "/saveWhiteIpInfo1.0";
  }
  //删除白明单
  static delWhiteIp() {
    return httpUrl + "/delWhiteIp1.0";
  }
  //获取登录日志列表
  static getLoginLogList() {
    return httpUrl + "/getLoginLogList1.0";
  }
  //获取登录日志信息
  static getLoginLogInfo() {
    return httpUrl + "/getLoginLogInfo1.0";
  }
  //删除登录日志
  static delLoginLog() {
    return httpUrl + "/delLoginLog1.0";
  }
  //获取系统字典列表
  static getSysDicList() {
    return httpUrl + "/getSysDicList1.0";
  }
  //获取系统字典信息
  static getSysDicInfo() {
    return httpUrl + "/getSysDicInfo1.0";
  }
  //保存系统字典信息
  static saveSysDicInfo() {
    return httpUrl + "/saveSysDicInfo1.0";
  }
  //删除系统字典
  static delSysDic() {
    return httpUrl + "/delSysDic1.0";
  }
  //获取app版本类型列表
  static getAppVersionTypeList() {
    return httpUrl + "/getAppVersionTypeList1.0";
  }
  //获取app版本类型信息
  static getAppVersionTypeInfo() {
    return httpUrl + "/getAppVersionTypeInfo1.0";
  }
  //保存app版本类型信息
  static saveAppVersionTypeInfo() {
    return httpUrl + "/saveAppVersionTypeInfo1.0";
  }
  //废弃app版本类型
  static delAppVersionType() {
    return httpUrl + "/delAppVersionType1.0";
  }
  //获取app版本信息列表
  static getAppVersionInfoList() {
    return httpUrl + "/getAppVersionInfoList1.0";
  }
  //获取app版本信息
  static getAppVersionInfo() {
    return httpUrl + "/getAppVersionInfo1.0";
  }
  //添加app版本信息
  static addAppVersionInfo() {
    return httpUrl + "/addAppVersionInfo1.0";
  }
  //保存app版本信息
  static saveAppVersionInfo() {
    return httpUrl + "/saveAppVersionInfo1.0";
  }
  //废弃app版本信息
  static delAppVersionInfo() {
    return httpUrl + "/delAppVersionInfo1.0";
  }
}