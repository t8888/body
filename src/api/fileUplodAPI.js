/**
 * @author renpan
 * @date 2019-6-18
 * @describe 运营管理
 * @export
 */
import config from "@/util/config";
const excelExportUrl = config.checkCurrentEnv().excelExportUrl
const fileUpload = config.checkCurrentEnv().fileUpload;
const fileUploadName = config.checkCurrentEnv().fileUploadName
export default class {
   //文件上传
   static WebFileUpload() {
    return fileUpload + "/WebFileUpload?bucketName="+fileUploadName;
  }
   //excel导出
   static BUTIEExport(titleId,typeId) {
       let _uid = sessionStorage.getItem('adminuid');
    return excelExportUrl + "/BUTIEExport?titleId=" + titleId +'&uid='+_uid +'&typeId='+typeId
  }
    static JKBGDOCExport(id, type) {
        let _uid = sessionStorage.getItem('adminuid');
        return excelExportUrl + "/DOCStudentExport?type=" + type + '&uid=' + _uid + '&scid=' + id;
    }
}