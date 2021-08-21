/**
 * @author renpan
 * @date 2019-6-18
 * @describe 运营管理
 * @export
 */
import config from "@/util/config";
const httpUrl = config.checkCurrentEnv().bUrl;
export default class {
  // 获取周期编码
  static getZyCycleList(){
    return httpUrl +'/yyht/getZyCycleList1.0'
  }
  static getZyStageList() {
    return httpUrl + '/yyht/getZyStageList1.0'
  }
  //获取行政区划信息
  static loginWeb() {
    return httpUrl + "/yyht/login1.0";
  }
  //获取行政区划信息
  static getDistrictInfo() {
    return httpUrl + "/getDistrictInfo1.0";
  }
  // 获取学校列表(分页)
  static getSchoolList() {
    return httpUrl + "/yyht/getSchoolList1.0";
  }
  // 获取学校信息
  static getSchoolInfo() {
    return httpUrl + "/yyht/getSchoolInfo1.0";
  }
  //保存学校信息
  static saveSchoolInfo() {
    return httpUrl + "/yyht/saveSchoolInfo1.0";
  }
  //  调整学校状态
  static changeSchoolInfo() {
    return httpUrl + "/yyht/changeSchoolInfo1.0";
  }
  //删除学校信息
  static delSchoolInfo() {
    return httpUrl + "/yyht/delSchoolInfo1.0";
  }
  //获取学校管理人员列表
  static getSchoolManagerList() {
    return httpUrl + "/yyht/getSchoolManagerList1.0";
  }
  //获取学校管理人员信息
  static getSchoolManagerInfo() {
    return httpUrl + "/yyht/getSchoolManagerInfo1.0";
  }
  //调整学校管理人员状态
  static changeSchoolManagerInfo() {
    return httpUrl + "/yyht/changeSchoolManagerInfo1.0";
  }
  //删除学校管理人员信息
  static delSchoolManagerInfo() {
    return httpUrl + "/yyht/delSchoolManagerInfo1.0";
  }
  //获取学校管理人员角色列表
  static getSchoolManagerRoleList() {
    return httpUrl + "/yyht/getSchoolManagerRoleList1.0";
  }
  //重置管理人员密码
  static restPwdSchoolManager() {
    return httpUrl + "/yyht/restPwdSchoolManager1.0";
  }
  //获取合同列表

  static getContractList() {
    return httpUrl + "/yyht/getContractList1.0";
  }
  //.获取合同信息
  static getContractInfo() {
    return httpUrl + "/yyht/getContractInfo1.0";
  }
  //保存合同信息
  static saveContractInfo() {
    return httpUrl + "/yyht/saveContractInfo1.0";
  }
  //.删除合同信息
  static delContractInfo() {
    return httpUrl + "/yyht/delContractInfo1.0";
  }
  //获取学校列表(不分页)
  static getSchoolListS() {
    return httpUrl + "/yyht/getSchoolListS1.0";
  }
  //.获取代理商列表(分页)
  static getAgentList() {
    return httpUrl + "/yyht/getAgentList1.0";
  }
  //.获取代理商列表(不分页)
  static getAgentListS() {
    return httpUrl + "/yyht/getAgentListS1.0";
  }
  //获取代理商信息
  static getAgentInfo() {
    return httpUrl + "/yyht/getAgentInfo1.0";
  }
  //保存代理商信息
  static saveAgentInfo() {
    return httpUrl + "/yyht/saveAgentInfo1.0";
  }
  //删除代理商信息
  static delAgentInfo() {
    return httpUrl + "/yyht/delAgentInfo1.0";
  }
  //获取客户经理列表(分页)
  static getManagerList() {
    return httpUrl + "/yyht/getManagerList1.0";
  }
  //获取客户经理列表(不分页)
  static getManagerListS() {
    return httpUrl + "/yyht/getManagerListS1.0";
  }
  //获取客户经理信息
  static getManagerInfo() {
    return httpUrl + "/yyht/getManagerInfo1.0";
  }
  //保存客户经理信息
  static saveManagerInfo() {
    return httpUrl + "/yyht/saveManagerInfo1.0";
  }
  //删除客户经理信息
  static delManagerInfo() {
    return httpUrl + "/yyht/delManagerInfo1.0";
  }
  //获取学年信息列表
  static getTermList() {
    return httpUrl + "/yyht/getTermList1.0";
  }
  //获取学年信息
  static getTermInfo() {
    return httpUrl + "/yyht/getTermInfo1.0";
  }
  //保存学年信息
  static saveTermInfo() {
    return httpUrl + "/yyht/saveTermInfo1.0";
  }
  //调整学年状态
  static changeTermInfo() {
    return httpUrl + "/yyht/changeTermInfo1.0";
  }
  //删除学年信息
  static delTermInfo() {
    return httpUrl + "/yyht/delTermInfo1.0";
  }
  //获取民族信息列表
  static getNationList() {
    return httpUrl + "/yyht/getNationList1.0";
  }
  //获取年级信息列表
  static getGradeList() {
    return httpUrl + "/yyht/getGradeList1.0";
  }
  //获取成绩级别信息列表
  static getHealthLevelList() {
    return httpUrl + "/yyht/getHealthLevelList1.0";
  }
  //.获取成绩级别信息
  static getHealthLevelInfo() {
    return httpUrl + "/yyht/getHealthLevelInfo1.0";
  }
  //修改成绩级别信息
  static updateHealthLevelInfo() {
    return httpUrl + "/yyht/updateHealthLevelInfo1.0";
  }
  //调整成绩级别状态
  static changeHealthLevelInfo() {
    return httpUrl + "/yyht/changeHealthLevelInfo1.0";
  }
  //获取国标分类信息列表
  static getHealthClassifyList() {
    return httpUrl + "/yyht/getHealthClassifyList1.0";
  }
  //获取国标分类信息
  static getHealthClassifyInfo() {
    return httpUrl + "/yyht/getHealthClassifyInfo1.0";
  }
  //修改国标分类信息
  static updateHealthClassifyInfo() {
    return httpUrl + "/yyht/updateHealthClassifyInfo1.0";
  }
  //调整国标分类状态
  static changeHealthClassifyInfo() {
    return httpUrl + "/yyht/changeHealthClassifyInfo1.0";
  }
  //获取分类单位信息列表
  static getClassifyUnitList() {
    return httpUrl + "/yyht/getClassifyUnitList1.0";
  }
  //获取分类单位信息
  static getClassifyUnitInfo() {
    return httpUrl + "/yyht/getClassifyUnitInfo1.0";
  }
  //调整分类单位信息状态
  static changeClassifyUnitInfo() {
    return httpUrl + "/yyht/changeClassifyUnitInfo1.0";
  }
  //获取总分评定等级列表(新增)
  static getScoreLevelList() {
    return httpUrl + "/yyht/getScoreLevelList1.0";
  }
  //获取总分评定等级信息(新增)
  static getScoreLevelInfo() {
    return httpUrl + "/yyht/getScoreLevelInfo1.0";
  }
  //修改总分评定等级信息(新增)
  static updateScoreLevelInfo() {
    return httpUrl + "/yyht/updateScoreLevelInfo1.0";
  }
  //调整总分评定等级状态(新增)
  static changeScoreLevelInfo() {
    return httpUrl + "/yyht/changeScoreLevelInfo1.0";
  }
  //获取视力标准信息列表
  static getVisionStandardList() {
    return httpUrl + "/yyht/getVisionStandardList1.0";
  }
  //获取视力标准信息
  static getVisionStandardInfo() {
    return httpUrl + "/yyht/getVisionStandardInfo1.0";
  }
  //修改视力标准信息
  static updateVisionStandardInfo() {
    return httpUrl + "/yyht/updateVisionStandardInfo1.0";
  }
  //获取总评分描述信息
  static getScroeLevelDescInfo() {
    return httpUrl + "/yyht/getScroeLevelDescInfo1.0";
  }
  //修改总评分描述信息
  static updateScroeLevelDescInfo() {
    return httpUrl + "/yyht/updateScroeLevelDescInfo1.0";
  }
  //获取年级对应国标分类信息列表(国标)-分页
  static getGradeClassifyListGB() {
    return httpUrl + "/yyht/getGradeClassifyListGB1.0";
  }
  //打开年级对应国标分类信息(国标)
  static openGradeClassifyGB() {
    return httpUrl + "/yyht/openGradeClassifyGB1.0";
  }
  //保存年级对应国标分类信息(国标)
  static saveGradeClassifyGB() {
    return httpUrl + "/yyht/saveGradeClassifyGB1.0";
  }
  //删除年级对应国标分类信息(国标)
  static delGradeClassifyInfoGB() {
    return httpUrl + "/yyht/delGradeClassifyInfoGB1.0";
  }
  //.复制上年年级对应国标分类信息(国标
  static copyGradeClassifyGB() {
    return httpUrl + "/yyht/copyGradeClassifyGB1.0";
  }
  //获取年级对应国标分类信息列表(国标)-不分页
  static getGradeClassifyListSGB() {
    return httpUrl + "/yyht/getGradeClassifyListSGB1.0";
  }
  //获取国标指标信息列表(国标)
  static getHealthStandardListGB() {
    return httpUrl + "/yyht/getHealthStandardListGB1.0";
  }
  //获取国标指标信息(国标)
  static getHealthStandardInfoGB() {
    return httpUrl + "/yyht/getHealthStandardInfoGB1.0";
  }
  //保存国标指标信息(国标)
  static saveHealthStandardInfoGB() {
    return httpUrl + "/yyht/saveHealthStandardInfoGB1.0";
  }
  //删除国标指标信息(国标)
  static delHealthStandardInfoGB() {
    return httpUrl + "/yyht/delHealthStandardInfoGB1.0";
  }
  //复制上年国标指标信息(国标)
  static copyHealthStandardInfoGB() {
    return httpUrl + "/yyht/copyHealthStandardInfoGB1.0";
  }
  /*
  *
  *分级教学类型列表(分页)
  *
  */
  //分级教学类型列表(分页)
  static FenTypeList() {
    return httpUrl + "/yyht/FenTypeList1.0";
  }
  //分级教学类型详情
  static FenTypeGet() {
    return httpUrl + "/yyht/FenTypeGet1.0";
  }
  //分级教学类型删除
  static FenTypeDel() {
    return httpUrl + "/yyht/FenTypeDel1.0";
  }
  //分级教学类型新增修改
  static FenTypeSave() {
    return httpUrl + "/yyht/FenTypeSave1.0";
  }
  //分级教学类型启用停用
  static FenTypeChange() {
    return httpUrl + "/yyht/FenTypeChange1.0";
  }
  //分级教学方法列表(分页)
  static FenMethodList() {
    return httpUrl + "/yyht/FenMethodList1.0";
  }
  //分级教学方法详情
  static FenMethodGet() {
    return httpUrl + "/yyht/FenMethodGet1.0";
  }
  //分级教学方法删除
  static FenMethodDel() {
    return httpUrl + "/yyht/FenMethodDel1.0";
  }
  //分级教学方法新增修改
  static FenMethodSave() {
    return httpUrl + "/yyht/FenMethodSave1.0";
  }
  //分级教学方法启用停用
  static FenMethodChange() {
    return httpUrl + "/yyht/FenMethodChange1.0";
  }
  //分级教学数据列表(分页)
  static FenInfoList() {
    return httpUrl + "/yyht/FenInfoList1.0";
  }
  //.分级教学数据详情
  static FenInfoGet() {
    return httpUrl + "/yyht/FenInfoGet1.0";
  }
  //.分级教学数据删除
  static FenInfoDel() {
    return httpUrl + "/yyht/FenInfoDel1.0";
  }
  //分级教学数据新增修改
  static FenInfoSave() {
    return httpUrl + "/yyht/FenInfoSave1.0";
  }
  //分级教学数据启用停用
  static FenInfoChange() {
    return httpUrl + "/yyht/FenInfoChange1.0";
  }
  /*
  *
  *训练计划内容和每日运动方案(分页)
  *
  */
  //训练内容数据列表(分页)
  static sysTrainInfoList() {
    return httpUrl + "/yyht/SysTrainInfoList1.0";
  }
  //训练内容数据详情
  static sysTrainInfoGet() {
    return httpUrl + "/yyht/SysTrainInfoGet1.0";
  }
  //训练内容数据删除
  static sysTrainInfoDelSys() {
    return httpUrl + "/yyht/SysTrainInfoDel1.0";
  }
  //训练内容数据新增修改
  static sysTrainInfoSave() {
    return httpUrl + "/yyht/SysTrainInfoSave1.0";
  }
  //.训练内容数据启用停用
  static sysTrainInfoChange() {
    return httpUrl + "/yyht/SysTrainInfoChange1.0";
  }
  //训练内容详情数据编辑
  static sysTrainInfoDetailSave() {
    return httpUrl + "/yyht/SysTrainInfoDetailSave1.0";
  }
  //方案列表（分页）
  static sysActionInfoList() {
    return httpUrl + "/yyht/SysActionInfoList1.0";
  }
  //方案详情
  static sysActionInfoGet() {
    return httpUrl + "/yyht/SysActionInfoGet1.0";
  }
  //方案删除
  static sysActionInfoDel() {
    return httpUrl + "/yyht/SysActionInfoDel1.0";
  }
  //方案启用停用
  static sysActionInfoChange() {
    return httpUrl + "/yyht/SysActionInfoChange1.0";
  }
  //.方案新增修改
  static sysActionInfoSave() {
    return httpUrl + "/yyht/SysActionInfoSave1.0";
  }
  //.资讯一级分类（分页）
  static HeathZixunList() {
    return httpUrl + "/yyht/HeathZixunList1.0";
  }
  //.资讯一级分类详情
  static HeathZixunGet() {
    return httpUrl + "/yyht/HeathZixunGet1.0";
  }
  //.资讯一级分类删除
  static HeathZixunDel() {
    return httpUrl + "/yyht/HeathZixunDel1.0";
  }
  //.资讯一级分类停启用
  static HeathZixunChange() {
    return httpUrl + "/yyht/HeathZixunChange1.0";
  }
  //.资讯一级分类新增修改
  static HeathZixunSave() {
    return httpUrl + "/yyht/HeathZixunSave1.0";
  }
  //.资讯二级分类（分页）
  static HeathZixunTypeList() {
    return httpUrl + "/yyht/HeathZixunTypeList1.0";
  }

  //.资讯二级分类详情
  static HeathZixunTypeGet() {
    return httpUrl + "/yyht/HeathZixunTypeGet1.0";
  }
  //.资讯二级分类删除
  static HeathZixunTypeDel() {
    return httpUrl + "/yyht/HeathZixunTypeDel1.0";
  }
  //.资讯二级分类停启用
  static HeathZixunTypeChange() {
    return httpUrl + "/yyht/HeathZixunTypeChange1.0";
  }
  //..资讯二级分类新增修改
  static HeathZixunTypeSave() {
    return httpUrl + "/yyht/HeathZixunTypeSave1.0";
  }
  //..资讯三级分类（分页）
  static HeathZixunProList() {
    return httpUrl + "/yyht/HeathZixunProList1.0";
  }
  //.资讯三级分类详情
  static HeathZixunProGet() {
    return httpUrl + "/yyht/HeathZixunProGet1.0";
  }
  //..资讯三级分类删除
  static HeathZixunProDel() {
    return httpUrl + "/yyht/HeathZixunProDel1.0";
  }
  //.资讯三级分类停启用
  static HeathZixunProChange() {
    return httpUrl + "/yyht/HeathZixunProChange1.0";
  } 
  //.资讯三级分类新增修改
  static HeathZixunProSave() {
    return httpUrl + "/yyht/HeathZixunProSave1.0";
  }
  static getSchoolResource(){
    return httpUrl + "/school/getSchoolResource1.0"
  }
  static saveSchoolResource(){
    return httpUrl + "/school/saveSchoolResource1.0"
  }

    /**
     * 运动工具管理
     */
    static zhtyYdSubjectSchoolChange(){
        return httpUrl + "/yyht/yd/zhtyYdSubjectSchoolChange1.0"
    }
    static zhtyYdSubjectSchoolList(){
        return httpUrl + "/yyht/yd/zhtyYdSubjectSchoolList1.0"
    }
    static zhtyYdTypeList(){
        return httpUrl + "/yyht/yd/zhtyYdTypeList1.0"
    }

    /**
     * 数据大屏 信息咨询
     */
    static zhtyDatavNewChange(){
        return httpUrl + "/yyht/datav/zhtyDatavNewChange1.0"
    }
    static zhtyDatavNewDel(){
        return httpUrl + "/yyht/datav/zhtyDatavNewDel1.0"
    }
    static zhtyDatavNewGet(){
        return httpUrl + "/yyht/datav/zhtyDatavNewGet1.0"
    }
    static zhtyDatavNewList(){
        return httpUrl + "/yyht/datav/zhtyDatavNewList1.0"
    }
    static zhtyDatavNewSave(){
        return httpUrl + "/yyht/datav/zhtyDatavNewSave1.0"
    }
}