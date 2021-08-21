/**
 * @author renpan
 * @date 2019-6-20
 * @describe 运营管理
 * @export
 */
import config from "@/util/config";
const httpUrl = config.checkCurrentEnv().bUrl;
export default class {
    
    static getStudentProInfo() {
        return httpUrl + "/school/zkty/getStudentProInfo1.0";
    }
  
    static saveStudentProInfo() {
        return httpUrl + "/school/zkty/saveStudentProInfo1.0";
    }
 
    static saveNoticeInfo() {
        return httpUrl + "/school/zkty/saveNoticeInfo1.0";
    }
  
    static delNoticeInfo() {
        return httpUrl + "/school/zkty/delNoticeInfo1.0";
    }
    //获取公告列表
    static getZkScNoticeList() {
        return httpUrl + "/school/zkty/getZkScNoticeList1.0";
    }
    //获取公告信息
    static getZkScNoticeInfo() {
        return httpUrl + "/school/zkty/getZkScNoticeInfo1.0";
    }
    //保存公告信息
    static saveZkNoticeInfo() {
        return httpUrl + "/school/zkty/saveZkNoticeInfo1.0";
    }
    //删除公告信息
    static delZkNoticeInfo() {
        return httpUrl + "/school/zkty/delZkNoticeInfo1.0";
    }
    static getStudentZkReportList(){
        return httpUrl + "/school/zkty/getStudentZkReportList1.0"
    }
    static getZkTermList() {
        return httpUrl + "/yyht/zkty/getZkTermList1.0";
    }
}