/**
 * @author renpan
 * @date 2019-6-20
 * @describe 运营管理
 * @export
 */
import config from "@/util/config";
const httpUrl = config.checkCurrentEnv().bUrl;
export default class {

  //获取市学校综合数据
  static getCitySchoolOverviewList(){
    return httpUrl + "/yyht/datav/shanXiDataVCity1.0";
  }

  //获取年级对应国标分类信息列表(国标)-分页
  static getGradeClassifyListGB() {
    return httpUrl + "/yyht/getGradeClassifyListGB1.0";
  }
  //获取年级对应健康分类信息列表(学校)-分页
  static getGradeClassifyListSC() {
    return httpUrl + "/school/getGradeClassifyListSC1.0";
  }
  //获取年级信息列表
  static getGradeList() {
    return httpUrl + "/yyht/getGradeList1.0";
  }
  //获取年级对应健康分类信息列表(学校)-不分页
  static getGradeClassifyListSSC() {
    return httpUrl + "/school/getGradeClassifyListSSC1.0";
  }
  //打开年级对应健康分类信息(学校)
  static openGradeClassifySC() {
    return httpUrl + "/school/openGradeClassifySC1.0";
  }
  
  //保存年级对应健康分类信息(学校)
  static saveGradeClassifySC() {
    return httpUrl + "/school/saveGradeClassifySC1.0";
  }
  //删除年级对应健康分类信息(学校)
  static delGradeClassifyInfoSC() {
    return httpUrl + "/school/delGradeClassifyInfoSC1.0";
  }
  //.复制学校上年年级对应健康分类信息(学校)
  static copyGradeClassifySC() {
    return httpUrl + "/school/copyGradeClassifySC1.0";
  }
   //获取成绩级别信息列表
   static getHealthLevelList() {
    return httpUrl + "/yyht/getHealthLevelList1.0";
  }
  //复制国标本年年级对应分类信息(学校)
  static copyGBGradeClassifySC() {
    return httpUrl + "/school/copyGBGradeClassifySC1.0";
  }
  //获取年级对应体质分类信息列表(学校)-分页
  static getGradeClassifyListTZ() {
    return httpUrl + "/school/getGradeClassifyListTZ1.0";
  }
  //获取年级对应体质分类信息列表(学校)-不分页
  static getGradeClassifyListSTZ() {
    return httpUrl + "/school/getGradeClassifyListSTZ1.0";
  }
  //打开年级对应体质分类信息(学校)
  static openGradeClassifyTZ() {
    return httpUrl + "/school/openGradeClassifyTZ1.0";
  }
  //保存年级对应体质分类信息(学校)
  static saveGradeClassifyTZ() {
    return httpUrl + "/school/saveGradeClassifyTZ1.0";
  }
  //删除年级对应体质分类信息(学校)
  static delGradeClassifyInfoTZ() {
    return httpUrl + "/school/delGradeClassifyInfoTZ1.0";
  }
  //复制学校上年年级对应体质分类信息(学校)
  static copyGradeClassifyTZ() {
    return httpUrl + "/school/copyGradeClassifyTZ1.0";
  }
  //复制国标本年年级对应分类信息(学校)
  static copyGBGradeClassifyTZ() {
    return httpUrl + "/school/copyGBGradeClassifyTZ1.0";
  }
  //
  static getHealthStandardListGB() {
    return httpUrl + "/yyht/getHealthStandardListGB1.0";
  }
  //
  static getHealthStandardInfoGB() {
    return httpUrl + "/yyht/getHealthStandardInfoGB1.0";
  }
  //获取健康指标信息列表(学校)
  static getHealthStandardListSC() {
    return httpUrl + "/school/getHealthStandardListSC1.0";
  }
  //获取健康指标信息(学校)
  static getHealthStandardInfoSC() {
    return httpUrl + "/school/getHealthStandardInfoSC1.0";
  }
  //保存健康指标信息(学校)
  static saveHealthStandardInfoSC() {
    return httpUrl + "/school/saveHealthStandardInfoSC1.0";
  }
  //删除健康指标信息(学校)
  static delHealthStandardInfoSC() {
    return httpUrl + "/school/delHealthStandardInfoSC1.0";
  }
  //复制上年学校健康指标信息(学校)
  static copyHealthStandardInfoSC() {
    return httpUrl + "/school/copyHealthStandardInfoSC1.0";
  }
  //复制本年国标指标信息(学校)
  static copyGBHealthStandardInfoSC() {
    return httpUrl + "/school/copyGBHealthStandardInfoSC1.0";
  }
  //获取体质指标信息列表(学校)
  static getHealthStandardListTZ() {
    return httpUrl + "/school/getHealthStandardListTZ1.0";
  }
  //获取体质指标信息(学校)
  static getHealthStandardInfoTZ() {
    return httpUrl + "/school/getHealthStandardInfoTZ1.0";
  }
  //保存体质指标信息(学校)
  static saveHealthStandardInfoTZ() {
    return httpUrl + "/school/saveHealthStandardInfoTZ1.0";
  }
  //.删除体质指标信息(学校)
  static delHealthStandardInfoTZ() {
    return httpUrl + "/school/delHealthStandardInfoTZ1.0";
  }
  //复制上年学校体质指标信息(学校)
  static copyHealthStandardInfoTZ() {
    return httpUrl + "/school/copyHealthStandardInfoTZ1.0";
  }
  //复制本年国标指标信息(学校)
  static copyGBHealthStandardInfoTZ() {
    return httpUrl + "/school/copyGBHealthStandardInfoTZ1.0";
  }

  //copy自school-data-view的gradeAPI
  //.获取学生最新一次BMI各级别人数
  static getStudentsNewBMIRatio() {
    return httpUrl + "/yyht/datav/getStudentsNewBMIRatioDataV1.0";
  }
  //.获取学生最新一次非BMI各级别人数
  static getStudentsNewNoBMIRatio() {
    return httpUrl + "/yyht/datav/getStudentsNewNoBMIRatioDataV1.0";
  }
  //.获取综合占比各级别人数
  static getAllScoreRatioDataV() {
    return httpUrl + "/yyht/datav/getAllScoreRatioDataV1.0";
  }
  //.获取学生最新一次视力各级别人数
  static getStudentsNewVisionRatio() {
    return httpUrl + "/yyht/datav/getStudentsNewVisionRatioDataV1.0";
  }
  static getSchoolResource() {
    return httpUrl + "/yyht/datav/getSchoolResourceDataV1.0"
  }
  static getSchoolDayTravelInfo() {
    return httpUrl + "/yyht/datav/getSchoolDayTravelInfo1.0"
  }
  static getDayTravelRank() {
    return httpUrl + "/yyht/datav/getDayTravelRank1.0"
  }
  static getStudentSelectList() {
    return httpUrl + "/yyht/datav/getStudentSelectList1.0"
  }
  static datavNewList() {
    return httpUrl + "/yyht/datav/datavNewList1.0"
  }
  static getSportTrend() {
    return httpUrl + '/yyht/datav/getSportTrend1.0'
  }
}