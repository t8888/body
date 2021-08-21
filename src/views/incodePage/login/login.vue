<template>
  <div class="login">
    <div class="login-box-warp">
        <p>正在授权...</p>
    </div>
    <div height="60px" class=" no-print" style="position:fixed;bottom:10px;width:100%;text-align:center;">
      <p>西安晨曦领跑信息科技有限公司</p>
      <p><a style="color:#58666e;" href="http://www.beian.miit.gov.cn/" target="_blank" class="f_txt2">Copyright © cxlpsports.com. All rights reserved | 陕ICP备19014597号 </a></p>
    </div>
  </div>
</template>
<script>
import apiAuth from "@/api/auth";
export default {
  name: "loginNew",
  data() {
    return {
      token: this.$route.query.token,
      loginState: false,
      loading: false
    };
  },
  created() {
    this.doLogin();
  },
  methods: {
    doLogin() {
      this.$http
        .post(apiAuth.schoolLoginAuth(), {
          token: this.token
        })
        .then(res => {
          if (res && res.data.schoolId) {
            this.$util.sessionStorage("set", "userInfo", res);
            this.$util.sessionStorage("set", "adminuid", res.data.uid);
            this.$util.sessionStorage("set", "schoolId", res.data.schoolId);
            this.$router.replace({ path: "/dataViewNew" });
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  type="text/css">
.login {
  height: 100%;
  width: 100%;
  background-size: 100% 100%;

  .login-box {
    width: 24rem;
    height: 22rem;
    left: 50%;
    top: 50%;
    margin-left: -12rem;
    margin-top: -11rem;
    position: fixed;
    z-index: 4;
    background: #fff;
    overflow: visible;
    border-radius: 0.3125rem;
    border: 0.0625rem solid #ccc;
    box-sizing: border-box;
    .title {
      width: 100%;
      height: 3.375rem;
      line-height: 3.375rem;
      font-weight: 600;
      color: #fff;
      text-align: center;
      border-radius: 4px 4px 0 0;
      text-indent: 1.25rem;
    }
    #formlogin {
      width: 17.5rem;
      margin: 1.25rem auto;
      .vcode-img {
        width: 60px;
        height: 32px;
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
        &.no-margin-bottom {
          margin-bottom: 0;
        }
        .el-form-item__content {
          position: relative;
        }
        margin-bottom: 20px;
        padding: 0;
        .forget-pw-safe {
          display: inline-block;
          float: right;
        }
        i {
          font-size: 1rem;
        }
      }
      .el-input {
        width: 17.5rem;
        margin-right: 0;
        .el-input__inner {
          width: 100% !important;
        }
      }
      .login-btn {
        display: inline-block;
        width: 100%;
        text-align: center;
        background-color: #409eff;
        color: #fff;
        height: 2rem;
        border-radius: 0;
      }
    }
  }
}
</style>
