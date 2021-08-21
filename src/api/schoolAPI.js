/**
 * @author renpan
 * @date 2019-6-20
 * @describe 运营管理
 * @export
 */
import config from "@/util/config";
const httpUrl = config.checkCurrentEnv().bUrl;
export default class {
  //学年列表
  static getAllTermList() {
    return httpUrl + "/school/getAllTermList1.0";
  }
  static getGrade() {
    return httpUrl + "/pad/yj/yJGradeList1.0";
  }
  //班级列表
  static getClassList() {
    return httpUrl + "/school/getClassList1.0";
  }
  //添加班级
  static addClass() {
    return httpUrl + "/school/addClass1.0";
  }
  //添加班级
  static delClass() {
    return httpUrl + "/school/delClass1.0";
  }
  //.获取学校课次信息
  static getWeekCourseTime() {
    return httpUrl + "/school/getWeekCourseTime1.0";
  }
  //修改学校课次信息
  static updateWeekCourseTime() {
    return httpUrl + "/school/updateWeekCourseTime1.0";
  }
  //获取课程的班级信息
  static getWeekCourseClass() {
    return httpUrl + "/school/getWeekCourseClass1.0";
  }
  //给某班添加体育课程
  static addWeekCourseClass() {
    return httpUrl + "/school/addWeekCourseClass1.0";
  }
  //.删除某班体育课程
  static delWeekCourseClass() {
    return httpUrl + "/school/delWeekCourseClass1.0";
  }
  //获取老师班级列表
  static getTeacherClassList() {
    return httpUrl + "/school/getTeacherClassList1.0";
  }
  //获取某班一周的课表
  static getOneClassCourse() {
    return httpUrl + "/school/getOneClassCourse1.0";
  }
  //修改老师班级列表
  static updateTeacherClassList() {
    return httpUrl + "/school/updateTeacherClassList1.0";
  }
  //获取老师已分配的班级列表
  static getTeacherSelectedCLass() {
    return httpUrl + "/school/getTeacherSelectedClass1.0";
  }
  //查询班级学生信息列表
  static getClassStudentList() {
    return httpUrl + "/school/getClassStudentList1.0";
  }
  //学生信息列表(分页)
  static getStudentList() {
    return httpUrl + "/school/getStudentList1.0";
  }
  //根据年级获取班级列表
  static getGraceClassList() {
    return httpUrl + "/school/getGraceClassList1.0";
  }
  //.获取教学资源列表(分页)
  static TeacheSourceList() {
    return httpUrl + "/school/TeacheSourceList1.0";
  }
  //获取一个学生的评价记录列表(分页
  static StuRecordPJList() {
    return httpUrl + "/school/StuRecordPJList1.0";
  }
  //获取视力导出列表
  static getVisionExportList() {
    return httpUrl + "/school/getVisionExportList1.0";
  }
  //获取国标体测导出列表
  static getGBExportList() {
    return httpUrl + "/school/getGBExportList1.0";
  }
  //.获取平时最优成绩导出列表
  static getZYExportList() {
    return httpUrl + "/school/getZYExportList1.0";
  }
  //获取平时最低成绩导出列表
  static getPJExportList() {
    return httpUrl + "/school/getPJExportList1.0";
  }
  //获取体测记录导出列表
  static getTestExportList() {
    return httpUrl + "/school/getTestExportList1.0";
  }
  //.获取体检记录导出列表
  static getBodyTestExportList() {
    return httpUrl + "/school/getBodyTestExportList1.0";
  }
  //.导出综合国标体测数据
  static exportGBdata() {
    return httpUrl + "/school/exportGBdata1.0";
  }
  //导出视力数据
  static exportVisionData() {
    return httpUrl + "/school/exportVisionData1.0";
  }
  //.导出平时最优体测数据
  static exportZYdata() {
    return httpUrl + "/school/exportZYdata1.0";
  }
  //.学生信息导出
  static exportStudentData() {
    return httpUrl + "/school/exportStudentData1.0";
  }
  static getStudentExportList() {
    return httpUrl + "/school/getStudentExportList1.0";
  }
  //.导出平时最低体测数据
  static exportPJdata() {
    return httpUrl + "/school/exportPJdata1.0";
  }
  static getYesterDayClassTravelStudentInfo() {
    return httpUrl + "/school/getYesterDayClassTravelStudentInfo1.0"
  }
  //.导出体测记录数据
  static exportTestData() {
    return httpUrl + "/school/exportTestData1.0";
  }
  //.导出体检记录数据
  static exportBodyTestData() {
    return httpUrl + "/school/exportBodyTestData1.0";
  }
  //.获取上报综合成绩列表
  static getSchoolReportList() {
    return httpUrl + "/school/getSchoolReportList1.0";
  }
  //取某班学生综合体质信息列表.综合占比-01-学校端---综合体质占比率--优秀学生列表.jpg
  static getAllStudentReportZhtzList() {
    return httpUrl + "/school/getAllStudentReportZhtzList1.0";
  }
  //获取某班学生运功员选材信息列表
  static getAllStudentSelectList() {
    return httpUrl + "/school/getAllStudentSelectList1.0";
  }
  //老师获取课堂空间图片和视频
  static SchoolDayRecordSource() {
    return httpUrl + "/school/SchoolDayRecordSource1.0";
  }
  //老师提删除已经提交的课堂空间图片和视频
  static delSchoolDayRecordSource() {
    return httpUrl + "/school/delSchoolDayRecordSource1.0";
  }
  //获取班级评价数据
  static SchoolDayRecordPJ() {
    return httpUrl + "/school/SchoolDayRecordPJ1.0";
  }
  //班级评价记录 最低排序
  static SchoolDayRecordPJTJ() {
    return httpUrl + "/school/SchoolDayRecordPJTJ1.0";
  }
  static SchoolDayRecordPJTJNew() {
    return httpUrl + "/school/SchoolDayRecordPJTJNew1.0";
  }
  //.获取一个学生本学年统计数据
  static SchoolDayRecordPJStu() {
    return httpUrl + "/school/SchoolDayRecordPJStu1.0";
  }
  //获取年级信息列表
  static getGradeList() {
    return httpUrl + "/yyht/getGradeList1.0";
  }

  //..训练内容数据详情
  static TrainInfoGet() {
    return httpUrl + "/school/TrainInfoGet1.0";
  }
  //.训练内容数据删除
  static TrainInfoDel() {
    return httpUrl + "/school/TrainInfoDel1.0";
  }
  //.训练内容数据新增修改
  static TrainInfoSave() {
    return httpUrl + "/school/TrainInfoSave1.0";
  }
  //.训练内容数据启用停用
  static TrainInfoChange() {
    return httpUrl + "/school/TrainInfoChange1.0";
  }
  //.训练内容详情数据编辑
  static TrainInfoDetailSave() {
    return httpUrl + "/school/TrainInfoDetailSave1.0";
  }
  //.老师训练计划列表(分页)
  static TrainPlanList() {
    return httpUrl + "/school/TrainPlanList1.0";
  }
  //.老师训练计划详情
  static TrainPlanGet() {
    return httpUrl + "/school/TrainPlanGet1.0";
  }
  //.老师训练计划删除
  static TrainPlanDel() {
    return httpUrl + "/school/TrainPlanDel1.0";
  }
  //.老师训练计划停用启用
  static TrainPlanChange() {
    return httpUrl + "/school/TrainPlanChange1.0";
  }
  //.老师训练计划新增修改
  static TrainPlanSave() {
    return httpUrl + "/school/TrainPlanSave1.0";
  }
  //..方案列表（分页）
  static ActionInfoList() {
    return httpUrl + "/school/ActionInfoList1.0";
  }
  //.方案详情
  static ActionInfoGet() {
    return httpUrl + "/school/ActionInfoGet1.0";
  }
  //.每日运动发送记录列表
  static ActionClassList() {
    return httpUrl + "/school/ActionClassList1.0";
  }
  //..每日运动新建发送
  static ActionClassCreate() {
    return httpUrl + "/school/ActionClassCreate1.0";
  }
  //.每日运动发送记录详情
  static ActionClassGet() {
    return httpUrl + "/school/ActionClassGet1.0";
  }
  //.训练内容分类列表（分页）
  static TrainClassifyList() {
    return httpUrl + "/school/TrainClassifyList1.0";
  }
  //.获取学生最新一次BMI各级别人数
  static getStudentsNewBMIRatio() {
    return httpUrl + "/school/getStudentsNewBMIRatio1.0";
  }
  //.获取学生最新一次非BMI各级别人数
  static getStudentsNewNoBMIRatio() {
    return httpUrl + "/school/getStudentsNewNoBMIRatio1.0";
  }
  //.获取综合占比各级别人数
  static getAllScoreRatio() {
    return httpUrl + "/school/getAllScoreRatio1.0";
  }
  //.获取学生最新一次视力各级别人数
  static getStudentsNewVisionRatio() {
    return httpUrl + "/school/getStudentsNewVisionRatio1.0";
  }
  //.获取学生最新某国标各年级情况
  static getClassifyLevelGradeInfo() {
    return httpUrl + "/school/getClassifyLevelGradeInfo1.0";
  }
  //.获取学生最新某国标各班级情况
  static getClassifyLevelClassInfo() {
    return httpUrl + "/school/getClassifyLevelClassInfo1.0";
  }
  //.获取综合占比各年级人数
  static getAllScoreLevelGradeInfo() {
    return httpUrl + "/school/getAllScoreLevelGradeInfo1.0";
  }
  //.获取综合占比各班级人数
  static getAllScoreLevelClassInfo() {
    return httpUrl + "/school/getAllScoreLevelClassInfo1.0";
  }
  //.获取学生最新视力各年级人数
  static getVisionLevelGradeInfo() {
    return httpUrl + "/school/getVisionLevelGradeInfo1.0";
  }
  //.获取学生最新视力各班级人数
  static getVisionLevelClassInfo() {
    return httpUrl + "/school/getVisionLevelClassInfo1.0";
  }
  static getClassAllStudentRecordList() {
    return httpUrl + "/pad/getClassAllStudentRecordList1.0";
  }
  static updateStudentInfo() {
    return httpUrl + "/school/updateStudentInfo1.0";
  }
  static delStudentInfo() {
    return httpUrl + "/school/delStudentInfo1.0";
  }
  static getNationList() {
    return httpUrl + "/yyht/getNationList1.0";
  }
  static getStudentInfo() {
    return httpUrl + "/school/getStudentInfo1.0";
  }
  static addStudentInfo() {
    return httpUrl + "/school/addStudentInfo1.0";
  }
  //训练项目列表（分页）
  static TrainProList() {
    return httpUrl + "/school/TrainProList1.0";
  }

  //训练项目分类列表（分页）
  static TrainProclassList() {
    return httpUrl + "/school/TrainProclassList1.0";
  }
  //.训练内容数据列表(分页)
  static TrainInfoList() {
    return httpUrl + "/school/TrainInfoList1.0";
  }
  //.全部成绩导出
  static getAllScoreExportList() {
    return httpUrl + "/school/getAllScoreExportList1.0";
  }
  //.全部成绩导出
  static exportAllScoreData() {
    return httpUrl + "/school/exportAllScoreData1.0";
  }
  //获取全校每日运动统计信息
  static getSchoolTravelStatisticsInfo() {
    return httpUrl + "/school/getSchoolTravelStatisticsInfo1.0";
  }
  //.获取年级每日运动统计信息
  static getGradeTravelStatisticsInfo() {
    return httpUrl + "/school/getGradeTravelStatisticsInfo1.0";
  }
  //获取班级每日运动统计信息
  static getClassTravelStatisticsInfo() {
    return httpUrl + "/school/getClassTravelStatisticsInfo1.0";
  }
  //获取学生每日运动统计信息
  static getStudentTravelStatisticsInfo() {
    return httpUrl + "/school/getStudentTravelStatisticsInfo1.0";
  }
  //*********获取中考选科学生统计信息
  static getStudentSelectStatisticsList() {
    return httpUrl + "/schoolnew/getStudentSelectStatisticsList1.0";
  }
  //*********获取中考选科班级学生列表
  static getStudentSelectList() {
    return httpUrl + "/schoolnew/getStudentSelectList1.0";
  }
  //*********获取中考学生选科详情
  static getStudentSelectDetail() {
    return httpUrl + "/schoolnew/getStudentSelectDetail1.0";
  }
  static getZyCycleList() {
    return httpUrl + "/yyht/getZyCycleList1.0"
  }
  static getSchoolClassifyLevelGradeInfo() {
    return httpUrl + "/school/getSchoolClassifyLevelGradeInfo1.0"
  }
  static getSchoolClassifyLevelClassInfo() {
    return httpUrl + "/school/getSchoolClassifyLevelClassInfo1.0"
  }

  static getSchoolAllScoreLevelGradeInfo() {
    return httpUrl + "/school/getSchoolAllScoreLevelGradeInfo1.0"
  }
  static getSchoolAllScoreLevelClassInfo() {
    return httpUrl + "/school/getSchoolAllScoreLevelClassInfo1.0"
  }

  static getSchoolClassifyLevelClassStudent() {
    return httpUrl + "/school/getSchoolClassifyLevelClassStudent1.0"
  }

  static getSchoolAllScoreLevelClassStudent() {
    return httpUrl + "/school/getSchoolAllScoreLevelClassStudent1.0"
  }
  static changeStudentClass() {
    return httpUrl + "/school/changeStudentClass1.0"
  }
  static changeStudentStatus() {
    return httpUrl + "/school/changeStudentStatus1.0"
  }
  static getStudentsNewVisionClassStudent() {
    return httpUrl + "/school/getStudentsNewVisionClassStudent1.0"
  }


  static getStudentsNewVisionGradeInfo() {
    return httpUrl + "/school/getStudentsNewVisionGradeInfo1.0"
  }
  static getStudentsNewVisionClassInfo() {
    return httpUrl + "/school/getStudentsNewVisionClassInfo1.0"
  }


  static getSchoolResource() {
    return httpUrl + "/school/getSchoolResource1.0"
  }
  static getAthleteSelectionClassList() {
    return httpUrl + "/school/getAthleteSelectionClassList1.0"
  }

  static getYesterDayTravelStatisticsInfo() {
    return httpUrl + "/school/getYesterDayTravelStatisticsInfo1.0"
  }
  static getYesterDayGradeTravelStatisticsInfo() {
    return httpUrl + "/school/getYesterDayGradeTravelStatisticsInfo1.0"
  }
  static getYesterDayClassTravelStatisticsInfo() {
    return httpUrl + "/school/getYesterDayClassTravelStatisticsInfo1.0"
  }
  static getSchoolMindHasScaleStatisticsInfo() {
    return httpUrl + "/school/getSchoolMindHasScaleStatisticsInfo1.0"
  }
  static getGradeMindHasScaleStatisticsInfo() {
    return httpUrl + "/school/getGradeMindHasScaleStatisticsInfo1.0"
  }
  static getClassMindHasScaleStatisticsInfo() {
    return httpUrl + "/school/getClassMindHasScaleStatisticsInfo1.0"
  }
  static getSchoolMindNoScaleStatisticsInfo() {
    return httpUrl + "/school/getSchoolMindNoScaleStatisticsInfo1.0"
  }
  static getGradeMindNoScaleStatisticsInfo() {
    return httpUrl + "/school/getGradeMindNoScaleStatisticsInfo1.0"
  }
  static getClassMindNoScaleStatisticsInfo() {
    return httpUrl + "/school/getClassMindNoScaleStatisticsInfo1.0"
  }
  // 每日运动统计
  static getSchoolAndGradeBingInfo() {
    return httpUrl + "/school/getSchoolAndGradeBingInfo1.0"
  }
  static getClassBingInfo() {
    return httpUrl + "/school/getClassBingInfo1.0"
  }
  static getSchoolAndGradeDayTravelInfo() {
    return httpUrl + "/school/getSchoolAndGradeDayTravelInfo1.0"
  }
  static getClassDayTravelInfo() {
    return httpUrl + "/school/getClassDayTravelInfo1.0 "
  }
  /*********************修改每日运动排名统计接口 */
  static getTravelInfo() {
    return httpUrl + "/schoolnew/getSchoolAndClassRankInfo1.0"
  }
  /**********************获取国标体测记录列表 */
  static getSportTestRecordListGB() {
    return httpUrl + "/schoolnew/getTestBatchInfoList1.0"
  }
  /**********************获取国标体测记录详情 */
  static getSportTestRecordInfoGB() {
    return httpUrl + "/schoolnew/getBatchStatisticsInfo1.0"
  }
  //*********************获取国标分类信息列表 */
  static getHealthClassifyList() {
    return httpUrl + '/yyht/getHealthClassifyList1.0'
  }
  //*********************获取测试批次统计数据 */
  static getSportTestRecordGB() {
    return httpUrl + '/schoolnew/getBatchStatisticsInfo1.0'
  }
  //*********************获取测试批次学生详细数据 */
  static getSportTestRecordDetailListGB() {
    return httpUrl + '/schoolnew/getBatchDetailList1.0'
  }
  //获取成绩级别信息列表
  static getHealthLevelList() {
    return httpUrl + '/yyht/getHealthLevelList1.0'
  }
  //获取国标单项测试列表
  static getDxNewList() {
    return httpUrl + '/schoolnew/getDxNewList1.0'
  }
  //获取国标单项统计列表(班级)
  // static getSchoolClassifyLevelClassInfo() {
  //   return httpUrl + '/school/getSchoolClassifyLevelClassInfo1.0'
  // }
  //获取国标单项统计列表(年级)
  // static getSchoolClassifyLevelGradeInfo() {
  //   return httpUrl + '/school/getSchoolClassifyLevelGradeInfo1.0'
  // }
  //获取国标单项统计数据
  static getDxNewStatistics() {
    return httpUrl + '/schoolnew/getDxNewStatistics1.0'
  }
  //获取视力测试列表
  static getVisionNewList() {
    return httpUrl + '/schoolnew/getVisionNewList1.0'
  }
  //获取综合数据列表
  static getAllScoreNewList() {
    return httpUrl + '/schoolnew/getAllScoreNewList1.0'
  }
  //获取某班学生中考综合评分信息列表
  // static getStudentZkReportList() {
  //   return httpUrl + '/school/zkty/getStudentZkReportList1.0'
  // }
  static getSchoolAndGradeCycleTravelInfo() {
    return httpUrl + "/school/getSchoolAndGradeCycleTravelInfo1.0"
  }
  static getClassCycleTravelInfo() {
    return httpUrl + "/school/getClassCycleTravelInfo1.0"
  }
  //考勤评价
  static SchoolDayRecord() {
    return httpUrl + "/school/SchoolDayRecord1.0";
  }
  static SchoolDayRecordNew() {
    return httpUrl + "/school/SchoolDayRecordNew1.0";
  }
}