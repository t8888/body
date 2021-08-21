/**
 * @author renpan
 * date 20180823
 * describe 环境检查
 * @param
 */
import md5 from 'js-md5'
/* eslint-disable */
export default {
  md5Key(){
    return ''
  },
  commonData(){
    return {
        'fileSizeAtPath': md5('1000'),
        'clientSource': 'web',
        'enterType': 'YYHT', // 系统业源类型	string	前后台约定参数,请求公参
        'clientVersion': '1.0'
    }
  },
  checkCurrentEnv() {
    let root = '';

    if (typeof window != 'undefined') {
      root = window.location.origin;
    } else {
      return
    }

    // 协议检查
    const Http = window.location.protocol.includes('https') ? 'https' : 'http';
    
    // 业务
    const Url = root.includes('localhost') || root.includes('schooldev.cxlpsports.com') ?  'apidev.cxlpsports.com' : 'api.cxlpsports.com';
    // 权限
    const UrlSys = root.includes('localhost') || root.includes('schooldev.cxlpsports.com') ?  'securitydev.cxlpsports.com' : 'security.cxlpsports.com';
    //上传空间
    const fileUploadName = root.includes('localhost') || root.includes('schooldev.cxlpsports.com') ?  'cxlp' : 'cxlp';
    //导出
    const servertPath = root.includes('localhost') || root.includes('schooldev.cxlpsports.com') ?  'expdev.cxlpsports.com/sports-web-handle' : 'exp.cxlpsports.com/sports-web-handle';
    //导出
    const excelExportUrl = root.includes('localhost') || root.includes('schooldev.cxlpsports.com') ?  'expdev.cxlpsports.com/sports-web-handle' : 'exp.cxlpsports.com/sports-web-handle';
    // 文件上传地址
    const fileUpload = root.includes('localhost') || root.includes('schooldev.cxlpsports.com') ?  'f.cxlpsports.com/fileupload' : 'f.cxlpsports.com/fileupload';

    return {
      fileUploadName:fileUploadName,
      servertPath:Http + "://" +servertPath,
      excelExportUrl:Http + "://" +excelExportUrl,
      fileUpload:Http + "://" +fileUpload,
      sysUrl:Http + "://" + UrlSys,
      bUrl:Http + "://" + Url,
    }
  }
}