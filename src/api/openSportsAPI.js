/**
 * @author huangliang
 * @date 2021-5-31
 * @describe 权限相关API
 * @export
 */
import config from "@/util/config";
const httpUrl = config.checkCurrentEnv().bUrl;
const sysUrl = config.checkCurrentEnv().sysUrl;
export default class {
    static authByTicket(){
        return httpUrl + "/open/authByTicket1.0";
    }
    //获取省学校综合数据
    static getProvinceSchoolOverviewList(){
        return httpUrl + "/yyht/datav/shanXiDataVProvince1.0";
    }
    //省综合体质数据
    static getProvinceAllScoreRatioDataV(){
        return httpUrl + "/yyht/datav/getAllScoreRatioDataVProvince1.0";
    }
    //省学生视力占比
    static getProvinceStudentsNewVisionRatio(){
        return httpUrl + " /yyht/datav/getStudentsNewVisionRatioDataVProvince1.0";
    }
    //省学生BMI占比
    static getProvinceStudentsNewBMIRatio(){
        return httpUrl + "/yyht/datav/getStudentsNewBMIRatioDataVProvince1.0";
    }
    //获取市学校综合数据
    static getCitySchoolOverviewList(){
        return httpUrl + "/yyht/datav/shanXiDataVCity1.0";
    }
    //市综合体质数据
    static getCityAllScoreRatioDataV(){
        return httpUrl + "/yyht/datav/getAllScoreRatioDataVCity1.0";
    }
    //市学生视力占比
    static getCityStudentsNewVisionRatio(){
        return httpUrl + "/yyht/datav/getStudentsNewVisionRatioDataVCity1.0";
    }
    //市学生BMI占比
    static getCityStudentsNewBMIRatio(){
        return httpUrl + "/yyht/datav/getStudentsNewBMIRatioDataVCity1.0";
    }

}