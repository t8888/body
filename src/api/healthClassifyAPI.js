/**
 * @author renpan
 * @date 2019-6-20
 * @describe 运营管理
 * @export
 */
import config from "@/util/config";
const httpUrl = config.checkCurrentEnv().bUrl;
export default class {
  //.获取健康分类信息列表
  static getHealthClassifyListSC() {
    return httpUrl + "/school/getHealthClassifyListSC1.0";
  }
  //获取国标分类信息列表
  static getHealthClassifyList() {
    return httpUrl + '/yyht/getHealthClassifyList1.0'
  }
  //.获取分类单位信息列表
  static getClassifyUnitList() {
    return httpUrl + '/yyht/getClassifyUnitList1.0'
  }
  //获取健康分类信息
  static getHealthClassifyInfoSC() {
    return httpUrl + "/school/getHealthClassifyInfoSC1.0";
  }
  //保存健康分类信息
  static saveHealthClassifyInfoSC() {
    return httpUrl + "/school/saveHealthClassifyInfoSC1.0";
  }
  //调整健康分类状态
  static changeHealthClassifyInfoSC() {
    return httpUrl + "/school/changeHealthClassifyInfoSC1.0";
  }
  //复制国标分类信息(健康)
  static copyHealthClassifyInfoSC() {
    return httpUrl + "/school/copyHealthClassifyInfoSC1.0";
  }
  //获取体质分类信息列表
  static getHealthClassifyListTZ() {
    return httpUrl + "/school/getHealthClassifyListTZ1.0";
  }
  //.获取体质分类信息
  static getHealthClassifyInfoTZ() {
    return httpUrl + "/school/getHealthClassifyInfoTZ1.0";
  }
  //保存体质分类信息
  static saveHealthClassifyInfoTZ() {
    return httpUrl + "/school/saveHealthClassifyInfoTZ1.0";
  }
  //调整体质分类状态
  static changeHealthClassifyInfoTZ() {
    return httpUrl + "/school/changeHealthClassifyInfoTZ1.0";
  }
  //复制国标分类信息(体质)
  static copyHealthClassifyInfoTZ() {
    return httpUrl + "/school/copyHealthClassifyInfoTZ1.0";
  }
}