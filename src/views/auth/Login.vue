<template>
  <div class="login">
    <div class="login-box-warp">
      <div class="login-box">
        <div class="title ">
          智慧体育系统
        </div>
        <div class="form">
          <el-form
            ref="formlogin"
            id="formlogin"
            :model="loginData"
            :rules="rules"
            method="post"
            onsubmit="return false;"
          >
            <el-form-item label="" prop="account" class="item">
              <el-input
                size="small"
                placeholder="请输入用户名"
                v-model="loginData.account"
              >
              </el-input>
              <div class="input-left-icon">
                <i class="iconfont icon-user"></i>
              </div>
            </el-form-item>
            <el-form-item label="" prop="pwd" class="item">
              <el-input
                size="small"
                placeholder="请输入密码"
                type="password"
                v-model="loginData.pwd"
              >
              </el-input>
              <div class="input-left-icon">
                <i class="iconfont  icon-pwd"></i>
              </div>
            </el-form-item>
            <el-form-item
              label=""
              class="item i no-margin-bottom"
              prop="verifyCodeByUser"
            >
              <el-input
                size="small"
                placeholder="请输入验证码"
                v-model="loginData.verifyCodeByUser"
              >
              </el-input>
              <img
                class="vcode-img"
                :src="verifyCodeUrl"
                alt="验证码"
                @click="getVerifyCode"
              />
            </el-form-item>
            <!-- <p class="fg-pw"> <span @click="fgPw()">忘记密码</span></p> -->
            <div class=" text-center" style="margin-top:40px;">
              <el-button
                size="small"
                :loading="loginState"
                :disabled="loginState"
                class="login-btn"
                type="warning"
                @click="subLoginMsg()"
                >{{
                  loginState
                    ? "登录中"
                    : "登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录"
                }}</el-button
              >
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <div
      height="60px"
      class="no-print"
      style="position:fixed;bottom:10px;width:100%;text-align:center;"
    >
      <p>西安晨曦领跑信息科技有限公司</p>
      <p>
        <a
          style="color:#58666e;"
          href="http://www.beian.miit.gov.cn/"
          target="_blank"
          class="f_txt2"
          >Copyright © cxlpsports.com. All rights reserved | 陕ICP备19014597号
        </a>
      </p>
    </div>
    t
  </div>
</template>
<script>
import md5 from "js-md5";
import apiAuth from "@/api/auth";
export default {
  name: "login",
  data() {
    return {
      rules: {
        verifyCodeByUser: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      hintMsg: "", // 错误信息
      loginState: false,
      loading: false,
      rememberPwd: false,
      verifyCodeUrl: "",
      loginData: {
        verifyCode: "",
        verifyCodeByUser: "",
        account: "",
        pwd: "",
      },
    };
  },
  created() {
    this.getVerifyCode();
    if (this.$util.localStorage("get", "userInfo")) {
      this.rememberPwd = true;
      this.loginData = { ...this.$util.localStorage("get", "userInfo") };
    }
  },
  methods: {
    getVerifyCode() {
      this.loading = true;
      this.$http
        .post(apiAuth.verifyCode(), { verifyCode: "h5" })
        .then((res) => {
          this.loading = false;
          if (res) {
            this.loginData.verifyCode = res.data.verifyCode;
            this.verifyCodeUrl =
              "data:image/png;base64," + res.data.base64String;
          }
        });
    },
    doLogin() {
      this.loginState = true;
      let vm = this;
      let obj = { ...this.loginData };
      obj.pwd = md5(obj.pwd);
      this.$http.post(apiAuth.loginWeb(), obj).then((res) => {
        vm.loginState = false;
        if (res && res.data.schoolId) {
          this.$util.sessionStorage("set", "userInfo", res);
          this.$util.sessionStorage("set", "adminuid", res.data.uid);
          this.$util.sessionStorage("set", "token", res.data.token);
          this.$util.sessionStorage("set", "schoolId", res.data.schoolId);
          this.$store.commit("userInfo", res.data);
          vm.$router.push({ path: "/" });
        } else {
          this.getVerifyCode();
        }
      });
    },
    fgPw() {
      this.$router.push({ path: "/findPwd" });
    },
    subLoginMsg() {
      let _this = this;
      this.$refs["formlogin"].validate((validate, c) => {
        if (validate) {
          _this.doLogin();
        } else {
          this.$model.toast("验证失败！", "error");
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
.login {
  height: 100%;
  width: 100%;
  background-image: url("../../assets/images/login-bg.jpg");
  background-size: cover;

  .login-box {
    width: 523px;
    height: 529px;
    background: #ffffff;
    box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 4;
    margin: auto;
    background: #fff;
    overflow: visible;
    border-radius: 0.3125rem;
    border: 0.0625rem solid #ccc;
    box-sizing: border-box;
    .title {
      width: 100%;
      height: 23px;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ff7d27;
      line-height: 50px;
      text-align: center;
      margin: 64px 0 52px;
    }
    #formlogin {
      width: 396px;
      margin: 1.25rem auto;
      .vcode-img {
        width: 160px;
        height: 52px;
        position: absolute;
        top: 0px;
        right: 0;
        z-index: 999;
      }
      .fg-pw {
        & > span:hover {
          color: #409eff;
        }
        cursor: pointer;
        margin-bottom: 20px;
        font-size: 12px;
        text-align: right;
      }
      .item {
        border: 1px solid rgba(188, 188, 188, 0.07);
        &.no-margin-bottom {
          margin-bottom: 0;
        }
        .el-form-item__content {
          position: relative;
        }
        margin-bottom: 40px;
        padding: 0;
        .forget-pw-safe {
          display: inline-block;
          float: right;
        }
        i {
          font-size: 18px;
        }
      }
      .el-input {
        width: 100%;
        margin-right: 0;
        el-input__inner:hover {
          border-color: #ff7d27;
        }
        .el-input__inner {
          width: 100% !important;
        }
      }
      .login-btn {
        width: 200px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        padding: 0;
        background-image: url("../../assets/images/login-btn.jpg");
        background-size: 100%;
        background-color: #409eff;
        color: #fff;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        border: none;
        border-radius: 5px;
      }
    }
  }
}
</style>
