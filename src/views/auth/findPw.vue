<template>
  <div class="parkStatistic">
    <div class="un-content">
      <el-form id="findForm" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input  size="small" placeholder="请输入账号" v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password" size="small" placeholder="请输入新密码" v-model="ruleForm.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="repeatPassword">
          <el-input type="password" size="small" placeholder="请再次输入新密码" v-model="ruleForm.repeatPassword"></el-input>
        </el-form-item>
        <el-form-item label="验证码" class="item i no-margin-bottom" prop="verificationCode">
          <el-input class="item-input" size="small" v-model="ruleForm.verificationCode">
            <template slot="append">
              <el-button @click='getCode' round size="small " :disabled="getCodeDisb">{{getCodeText}}</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type=""  @click="cancel()">取消</el-button>
          <el-button type="primary" :loading='loading' @click="submitForm('ruleForm')">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import _api from "@/api/auth";
import md5 from "js-md5";
export default {
  name: "findPw",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        verificationCode: [
          { required: true, message: "请输入手机验证码", trigger: "blur" }
        ],
        repeatPassword: [
          { required: true, message: "请输入原密码", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur"
          },
          { validator: validatePass }
        ]
      },
      loading: false,
      getCodeText: "获取验证码",
      getCodeDisb: false,
      btnColor: "#f07a38",
      captcha: "", // 验证码
      getCodeType: 2,
      ruleForm: {
        verificationCode: "",
        account: "",
        newPassword: "",
        repeatPassword: ""
      }
    };
  },
  methods: {
    //计时器
    doTimess() {
      this.getCodeDisb = true;
      this.btnColor = "#ddd";
      let timeNum = 60,
        _this = this;
      this.getCodeText = "已发送（60）";
      let timeObj = setInterval(function() {
        _this.getCodeText = "已发送（" + timeNum-- + "）";
        if (timeNum == 0) {
          _this.getCodeText = "获取验证码";
          _this.getCodeDisb = false;
          _this.btnColor = "#f07a38";
          clearInterval(timeObj);
        }
      }, 1000);
    },
    //获取手机验证码
    getCode() {
      if(this.ruleForm.account == '' ){
         this.$model.toast("请输入账号", "error");
        return;
      }
      this.$http
        .post(_api.getPhoneVerifyCode(), {
          phone: this.ruleForm.account,
          type: this.getCodeType
        })
        .then(res => {
          if (!res) return;
          this.doTimess();
            this.$model.toast("获取成功", "success");
        });
    },
    cancel() {
      this.$router.go(-1); //返回上一层
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.updatePwdAction();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    updatePwdAction() {
      let data = {
        account: (this.ruleForm.account),
        verificationCode:this.ruleForm.verificationCode,
        pwd: md5(this.ruleForm.newPassword)
      };
      this.loading = true;
      this.$http.post(_api.restMangerPwd(), data).then(res => {
        this.loading = false;
        if (res) {
          this.$model.toast("修改成功", "success");
          sessionStorage.removeItem("boosToken");
          sessionStorage.removeItem("boosUserData");
          this.$router.push({ path: "/" });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.un-content {
  background: #fff;
  padding: 20px;
}
#findForm{
  width:400px;
  margin:40px auto;
}
.courseStatistic {
  .el-cascader {
    width: 100%;
  }
}
.search-row {
  .active.search-item-button {
    border: 1px solid #23b7e5;
    color: #23b7e5;
  }
  margin-bottom: 10px;
  .label-title {
    line-height: 32px;
    font-size: 12px;
  }
}
</style>
