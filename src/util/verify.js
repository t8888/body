/*
 * description： 项目需要的正则验证
 * author： renpan
 */

let Verify = {}
/**
 * 手机号验证
 */
Verify.mobile = (val = '') => {
  const reg = /^(13[0-9]|14[45679]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  if (reg.test(val)) {
    return true;
  } else {
    return false;
  }
}
/**
 * 验证输入字母数字
 */
Verify.letterNumber = (val = '') => {
  const reg = /^[0-9a-zA-Z]*$/g;
  if (reg.test(val)) {
    return true;
  } else {
    return false;
  }
}
/**
 * 文字与空格验证
 */
Verify.chineseCharacter = (val = '') => {
  const reg = /^[a-zA-Z\d~\!@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'\<,\>\.\?\/]+$/;
  if (!reg.test(val)) {
    return true;
  } else {
    return false;
  }
}
/**
 * 电话验证
 */
Verify.phone = (val = '') => {
  const reg0 = /0\d{2,3}\d{7,8}/;
  const reg1 = /^[48]00\d+$/;
  const reg2 = /^\d{11}$/;
  if (reg0.test(val) || reg1.test(val) || reg2.test(val)) {
    return true;
  } else {
    return false
  }
}
/**
 * 姓名验证
 */
Verify.name = (val = '') => {
  const reg = /^[\u4e00-\u9fa5]+$/;
  if (reg.test(val)) {
    return true;
  } else {
    return false;
  }
}
/**
 * 身份证验证
 */
Verify.idCard = (val = '') => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (!reg.test(val)) {
    return false;
  } else {
    return true;
  }
}
/**
 * 营业执照验证
 */
Verify.bussAuthNum = (val = '') => {
  const reg = /^\d{15}$/;
  if (!reg.test(val)) {
    return false;
  } else {
    return true;
  }
}
/**
 * 费率验证
 */
Verify.feeValue = (val = '') => {
  const reg = /[1-9]\d*/;
  if (!reg.test(val)) {
    return false;
  } else {
    return true;
  }
}
/**
 * 统一社会信用代码
 */
Verify.socialCredit = (Code = "") => {
  var patrn = /^[0-9A-Z]+$/;
  //18位校验及大写校验
  if ((Code.length != 18) || (patrn.test(Code) == false)) {
    console.info("不是有效的统一社会信用编码！");
    return false;
  } else {
    var Ancode; //统一社会信用代码的每一个值
    var Ancodevalue; //统一社会信用代码每一个值的权重 
    var total = 0;
    var weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]; //加权因子 
    var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
    //不用I、O、S、V、Z 
    for (var i = 0; i < Code.length - 1; i++) {
      Ancode = Code.substring(i, i + 1);
      Ancodevalue = str.indexOf(Ancode);
      total = total + Ancodevalue * weightedfactors[i];
      //权重与加权因子相乘之和 
    }
    var logiccheckcode = 31 - total % 31;
    if (logiccheckcode == 31) {
      logiccheckcode = 0;
    }
    var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";
    var Array_Str = Str.split(',');
    logiccheckcode = Array_Str[logiccheckcode];


    var checkcode = Code.substring(17, 18);
    if (logiccheckcode != checkcode) {
      console.info("不是有效的统一社会信用编码！");
      return false;
    } else {
      return true;
    }
  }
}

export default Verify