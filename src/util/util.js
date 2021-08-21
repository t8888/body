/* eslint-disable */
/*
 * description： 所有项目公用方法
 * author： renpan
 */
import md5 from 'js-md5'


let Util = {};
//  字符串转byte
Util.md5 = (str) => {
  return md5(str)
}
Util.stringToByte = (str) => {
  let bytes = [];
  let len, c;
  len = str.length;
  for (let i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if (c >= 0x010000 && c <= 0x10FFFF) {
      bytes.push(((c >> 18) & 0x07) | 0xF0);
      bytes.push(((c >> 12) & 0x3F) | 0x80);
      bytes.push(((c >> 6) & 0x3F) | 0x80);
      bytes.push((c & 0x3F) | 0x80);
    } else if (c >= 0x000800 && c <= 0x00FFFF) {
      bytes.push(((c >> 12) & 0x0F) | 0xE0);
      bytes.push(((c >> 6) & 0x3F) | 0x80);
      bytes.push((c & 0x3F) | 0x80);
    } else if (c >= 0x000080 && c <= 0x0007FF) {
      bytes.push(((c >> 6) & 0x1F) | 0xC0);
      bytes.push((c & 0x3F) | 0x80);
    } else {
      bytes.push(c & 0xFF);
    }
  }
  return bytes;
};
//  byte转字符串
Util.byteToString = (arr) => {
  if (typeof arr === 'string') {
    return arr;
  }
  let str = '';
  let _arr = arr;
  for (let i = 0; i < _arr.length; i++) {
    let one = _arr[i].toString(2);
    let v = one.match(/^1+?(?=0)/);
    if (v && one.length === 8) {
      let bytesLength = v[0].length;
      let store = _arr[i].toString(2).slice(7 - bytesLength);
      for (let st = 1; st < bytesLength; st++) {
        store += _arr[st + i].toString(2).slice(2);
      }
      str += String.fromCharCode(parseInt(store, 2));
      i += bytesLength - 1;
    } else {
      str += String.fromCharCode(_arr[i]);
    }
  }
  return str;
};
//  加密
Util.encoder = (str, _key) => {
  let m5key = md5(_key);
  let md5Arr = Util.stringToByte(m5key);
  let strArr = Util.stringToByte(str);
  let ctr = 0;
  let result = '';
  for (let i = 0; i < strArr.length; i++) {
    ctr = ctr === md5Arr.length ? 0 : ctr;
    result += String.fromCharCode(md5Arr[ctr]);
    result += String.fromCharCode(strArr[i] ^ md5Arr[ctr++]);
  }
  let result64 = window.btoa(result);
  return result64;
};
//  解密
Util.decoder = (str, _key) => {
  let m5key = md5(_key);// key加密
  let md5Arr = Util.stringToByte(m5key);// key转utf8编码
  let txt = window.atob(str);
  let strObj = txt.split('');// 字符串转数组
  let ctr = 0;
  let result = [];
  let strArr = [];
  // 字符串数组转unicode编码数组
  for (let i = 0; i < strObj.length; i++) {
    strArr.push(strObj[i].charCodeAt());
  }
  // 移位运算
  for (let i = 0; i < strArr.length; i++) {
    ctr = ctr === md5Arr.length ? 0 : ctr;
    result.push(strArr[++i] ^ md5Arr[ctr++]);
  }
  let resultStr = byteToString(result);// 结果转utf8字符串
  return resultStr;
};
/**
 * 为一个Vue的data添加一个新的属性,如果是数组, 则为每一项都添加一个新的属性
 */
Util.addVueDataProperty = function (vm, source, key, defaultValue) {
  if (source instanceof Array) {
    for (let idx = 0; idx < source.length; idx++) {
      let item = source[idx];
      vm.$set(item, key, defaultValue)
    }
  } else {
    vm.$set(source, key, defaultValue)
  }
};

/**
 * 深拷贝对象
 */
Util.deepCopyObj = function (obj) {
  if (obj instanceof Array || typeof obj != 'object') {
    return obj;
  }
  let newobj = {};
  for (let attr in obj) {
    newobj[attr] = this.deepCopyObj(obj[attr]);
  }
  return newobj;
}
/**
 * 拷贝现有键
 */
Util.deepCopyExistingObj = function (existingObj, copyObj) {
  if (copyObj instanceof Array || typeof copyObj != 'object') {
    return copyObj;
  }
  let newObj = {};
  for (let attr in existingObj) {
    if (copyObj[attr]) {
      newObj[attr] = copyObj[attr];
    } else {
      newObj[attr] = existingObj[attr];
    }
  }
  return newObj;
}

/** 
 * 获取数组最大值
 */
Util.getArrayMax = function (arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    cur > max ? max = cur : null
  }
  return max;
}
/**
 * 深拷贝数组
 */
Util.deepCopyArr = function (arr) {
  if (arr instanceof Array && arr.length) {
    let newArr = [];
    arr.forEach(item => {
      newArr.push(item);
    })
    return newArr;
  } else {
    return arr;
  }
}
/**
 * 
 * 取出url需要的字段名 = 后面的属性
 * 用法 Util.getUrlParam(id);
 */
Util.getUrlParam = function (key) {
  // 获取URL中?之后的字符
  let str = location.search;
  str = str.substring(1, str.length);
  // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
  let arr = str.split('&');
  let obj = new Object();
  // 将每一个数组元素以=分隔并赋给obj对象
  for (let i = 0; i < arr.length; i++) {
    let tmp_arr = arr[i].split('=');
    obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
  }
  return obj[key];
};
// 日期格式化 ‘yyyy-mm-dd’
Util.formatData = (date) => {
  if (date) {
    let _date = new Date(date);
    return _date.getFullYear() + '-' + ((_date.getMonth() + 1) > 9 ? (+_date.getMonth() + 1) : ('0' + (_date.getMonth() + 1))) + '-' + (_date.getDate() > 9 ? (_date.getDate()) : ('0' + (_date.getDate())))
  } else {
    return ''
  }

},
  // yyyy-mm-dd替换成 yyyy年mm月dd日
  Util.dataToStr1 = (str) => {
    if (str) {
      let arr1 = str.split(' ');
      let arr = arr1[0].split('-');
      return (arr1[1] ? (arr[0] + '年' + arr[1] + '月' + arr[2] + '日' + '  ' + arr1[1]) : (arr[0] + '年' + arr[1] + '月' + arr[2] + '日'))
    } else return '无';
  },
  // yyyy年mm月dd日替换成 yyyy-mm-dd
  Util.dataToStr2 = (str) => {
    if (str) {
      str = str.replace(/[\u4e00-\u9fa5]/g, '-');
      let arr = str.split('-')
      return arr[0] + '-' + arr[1] + '-' + arr[2] + arr[3];
    } else return ''
  };
// 去掉首位空格
Util.trimStr = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, '');
};
// 去掉所有空格
Util.trimAll = (str) => {
  return str.replace(/\s/g, '');
};
// 数组转字符串
Util.propsArrayToString = function (array, type = 'checked', id = "id") {
  let resultArray = []
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    if (current[type]) {
      resultArray.push(current[id])
    }
  }

  return resultArray.join(',')
};

/**
 * list 键名转化
 * 用法 Util.setListAction(list, key, value) ;
 */
Util.setListAction = function (list, value = 'id', key = 'title') {
  if (list.length) {
    let oList = [];
    list.forEach(element => {
      oList.push({
        key: element[key],
        value: element[value]
      })
    });
    return oList;
  } else {
    return list
  }
}
/**
 * 设置local
 * 用法 Util.localStorage(type, name, data);
 */
Util.localStorage = function (type = 'get', name, data) {
  if (type == 'get') {
    return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : '';
  } else if (type == 'set') {
    return localStorage.setItem(name, data ? JSON.stringify(data) : '');
  } else {
    return localStorage.removeItem(name);
  }
}
/**
 * 设置local
 * 用法 Util.localStorage(type, name, data);
 */
Util.sessionStorage = function (type = 'get', name, data) {
  if (type == 'get') {
    let resultData = sessionStorage.getItem(name);
    return resultData ? JSON.parse(resultData)  : '';
  } else if (type == 'set') {
    return sessionStorage.setItem(name, data ? (typeof(data) === 'object') ? JSON.stringify(data) : data : '');
  } else {
    return sessionStorage.removeItem(name);
  }
}
/**
 * local存储 从二级页面返回页面保存在当前页面
 * 用法 Util.setSeacheParams(id);
 */
Util.setSeacheParams = function (id, params) {
  // 是否启用
  Util.localStorage("set", "eduIsSeach", id ? true : false);
  if (id) {
    // 保存当前查询参数
    Util.localStorage("set", "eduSeachData", params);
    // 当前操作项，返回后此项高亮
    Util.localStorage("set", "eduItemId", id);
  }
}
/**
 * 指定字符串切割 可前后
 * 用法 Util.getCutOutStr('12334','3')  34;
 */
Util.getCutOutStr = function (string, str, type = 0) {
  let str_before = string.split(str)[0];
  let str_after = string.split(str)[1];
  return type ? str_before : str_after
};
/** 
 * description 自定义上传停止上传需要清除element-ui 自带的upload上传失败的展示
 * directions Util.delUpload(list)
 */
Util.delUpload = function (list) {
  list.push({
    name: 'delUplad'
  });
  list.splice(list.length - 1, 1);
  return list;
}
/**
 * local存储 从二级页面返回页面保存在当前页面
 * 用法 Util.setSeacheParams(id);
 */
Util.setSeacheParams = function (id, params) {
  // 是否启用
  Util.localStorage("set", "eduIsSeach", id ? true : false);
  if (id) {
    // 保存当前查询参数
    Util.localStorage("set", "eduSeachData", params);
    // 当前操作项，返回后此项高亮
    Util.localStorage("set", "eduItemId", id);
  }
}
// 保存列表参数跳转
Util.setOtherPageSaveData = (params) => {
  Util.localStorage("set", "pageSeachPageData", params);
};
// 保存列表参数跳转
Util.removeOtherPageSaveData = (d) => {
  Util.localStorage("remove", "pageSeachPageData");
};
// 保存列表参数跳转
Util.getOtherPageSaveData = () => {
  let data = Util.localStorage("get", "pageSeachPageData") || "";
  if (data) {
    return data
  }
  return false
}
// 列表对象去除重复，arr 去重数组，去重依照的属性
Util.arrayUnique = (arr, name) => {
  let hash = {}
  return arr.reduce(function(item, next) {
      hash[next[name]] ? '' : hash[next[name]] = true && item.push(next)
      return item
  }, [])
}
/** 
 * description 下载文件
 * directions Util.funDownload(content, filename)
 */
Util.funDownload = function (content, filename) {
  // 创建隐藏的可下载链接
  let eleLink = document.createElement('a');
  eleLink.download = filename;
  eleLink.target = '_blank';
  eleLink.style.display = 'none';
  eleLink.href = content.split('?')[0];
  console.log(eleLink.href);
  // 触发点击
  document.body.appendChild(eleLink);
  eleLink.click();
  // 然后移除
  document.body.removeChild(eleLink);
};
Util.funDocxDownload = function (content, filename) {

    // 创建隐藏的可下载链接
    let eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.target = '_blank';
    eleLink.style.display = 'none';
    eleLink.href = encodeURI(content);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};
Util.strToGetTime = (str) => {
  if(!str) return;
  return  new Date(str).getTime();
}
/** 
 * auth renpan
 * time 20181227
 * description 数组转字符串用 "," 间隔
 * directions Util.fnavList(content, filename)
 */
Util.arrToStr = (arr) => {
  let str = ''
  arr.map(function (item, index) {
    str += item + ','
  })
  return str.substr(0, str.length - 1)
}
// 获取当前日期
Util.getNowDate = (type = '年月日') => {
  let _date = new Date();
  return _date.getFullYear() + (type == '年月日' ? '年' : '-') + ((_date.getMonth() + 1) > 9 ? (+_date.getMonth() + 1) : ('0' + (_date.getMonth() + 1))) + (type == '年月日' ? '月' : '-') + (_date.getDate() > 9 ? (_date.getDate()) : ('0' + (_date.getDate()))) + (type == '年月日' ? '日' : '')
},
/** 
 * auth renpan
 * time 20181227
 * description 遍历
 * directions Util.fnavList()
 * 如果不需要一级菜单 hasFristNav 传 false
 */
Util.fnavList = (list,hasFristNav = true) => {
  let resutlArr = []
  list.map(function (item, index) {
    let item1Obj = {}
    item1Obj.powerVo = item.powerVo
    item1Obj.list = []
    if (item.powerList2 && item.powerList2.length > 0) {
      item.powerList2.map(function (item2, index2) {
        let item2Obj = {}
        item2Obj.powerVo = item2.powerVo
        item2Obj.list = []
        if (item2.powerList3 && item2.powerList3.length > 0) {
          item2.powerList3.map(function (item3, index3) {
            let item3Obj = {}
            item3Obj.powerVo = item3.powerVo
            item3Obj.list = []
            if (item3.powerList4 && item3.powerList4.length > 0) {
              item3.powerList4.map(function (item4, index4) {
                item3Obj.list.push(item4.powerVo)
              })
            }
            item2Obj.list.push(item3Obj)
          })
        }
        if(hasFristNav) item1Obj.list.push(item2Obj)
        else resutlArr.push(item2Obj)
      })
    }
    if(hasFristNav) resutlArr.push(item1Obj)
  })
  return resutlArr
}
/** 
 * auth renpan
 * time 20181227
 * description 遍历
 * directions Util.fnavList(content, filename)
 */
Util.functionList = (list) => {
  let resutlArr = [], resultIdArr = [];
  list.map(function (item, index) {
    if (item.functionPositionVO.isChcek == 1) resultIdArr.push(item.functionPositionVO.fid)
    let item1Obj = {}
    item1Obj.id = item.functionPositionVO.fid
    item1Obj.label = item.functionPositionVO.fname
    item1Obj.isChcek = item.functionPositionVO.isChcek
    item1Obj.children = []
    if (item.functionList2 && item.functionList2.length > 0) {
      item.functionList2.map(function (item2, index2) {
        if (item2.functionPositionVO2.isChcek == 1) resultIdArr.push(item2.functionPositionVO2.fid)
        let item2Obj = {}
        item2Obj.id = item2.functionPositionVO2.fid
        item2Obj.label = item2.functionPositionVO2.fname
        item2Obj.isChcek = item2.functionPositionVO2.isChcek
        item2Obj.children = []
        if (item2.functionList3 && item2.functionList3.length > 0) {
          item2.functionList3.map(function (item3, index3) {
            if (item3.functionPositionVO3.isChcek == 1) resultIdArr.push(item3.functionPositionVO3.fid)
            let item3Obj = {}
            item3Obj.id = item3.functionPositionVO3.fid
            item3Obj.label = item3.functionPositionVO3.fname
            item3Obj.isChcek = item3.functionPositionVO3.isChcek
            item3Obj.children = []
            if (item3.functionList4 && item3.functionList4.length > 0) {
              item3.functionList4.map(function (item4, index4) {
                if (item4.functionPositionVO4.isChcek == 1) resultIdArr.push(item4.functionPositionVO4.fid)
                item3Obj.children.push({
                  id: item4.functionPositionVO4.fid,
                  label: item4.functionPositionVO4.fname,
                  isChcek: item4.functionPositionVO4.isChcek,
                })
              })
            } else {
              if (item3.buttonList3) {
                item3.buttonList3.map(function (item4, index4) {
                  if (item4.isChcek == 1) resultIdArr.push(item4.buttonId)
                  item3Obj.children.push({
                    id: item4.buttonId,
                    last: true,
                    isChcek: item4.isChcek,
                    label: item4.buttonName
                  })
                })
              }
            }
            item2Obj.children.push(item3Obj)
          })
        } else {
          if (item2.buttonList2) {
            item2.buttonList2.map(function (item3, index4) {
              if (item3.isChcek == 1) resultIdArr.push(item3.buttonId)
              item2Obj.children.push({
                id: item3.buttonId,
                last: true,
                isChcek: item3.isChcek,
                label: item3.buttonName
              })
            })
          }
        }
        item1Obj.children.push(item2Obj)
      })
    } else {
      if (item.buttonList1) {
        item.buttonList1.map(function (item2, index4) {
          if (item2.isChcek == 1) resultIdArr.push(item2.buttonId)
          item1Obj.children.push({
            id: item2.buttonId,
            isChcek: item2.isChcek,
            last: true,
            label: item2.buttonName
          })
        })
      }
    }
    resutlArr.push(item1Obj)
  })
  return {
    resultIdArr: resultIdArr,
    resutlArr: resutlArr
  }
}
export default Util