/*
 * description： 本项目公用方法
 * author： renpan
 */
import {
  Message,
  MessageBox,
  Notification
} from 'element-ui';
let Model = {};
// 提示
Model.toast = function (msg, type = 'warning', time = 3000) {
  Message({
    message: msg,
    type: type,
    duration: time
  });
}
// 通知
Model.notify = function (msg, title = '提示', type = 'warning', time = 3000) {
  Notification({
    title: title,
    message: msg,
    type: type,
    duration: time
  });
}
// 确认弹窗
Model.confirm = function (msg,callback, title = "提示",type = "warning") {
  MessageBox.confirm(msg, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    lockScroll: false,
    type: type
  }).then(() => {
    callback();
  }).catch(() => { });
}
export default Model