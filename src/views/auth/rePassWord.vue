<template>
  <div class="parkStatistic">
    <div class="bg-light pd-shadow p-bg">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>修改密码</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="un-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="原密码" prop="oldPassword">
          <el-input type="password"  v-model="ruleForm.oldPassword"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password"  v-model="ruleForm.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="repeatPassword">
          <el-input type="password" v-model="ruleForm.repeatPassword"></el-input>
        </el-form-item>
        <el-form-item>
           <el-button type="" @click="cancel()">取消</el-button>
          <el-button type="primary" :loading='loading' @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import apiAuth from "@/api/auth";
export default {
  name: "rePassWord",
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      rules:{
        oldPassword: [
          { required: true, message: '请输入原密码', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        repeatPassword: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
          {validator:validatePass}
        ]
      },
      loading: false,
      ruleForm:{
        oldPassword: "",
        newPassword:"",
        repeatPassword:""
      }
    }
  },
  methods: {
    cancel(){
      this.$router.go(-1);//返回上一层
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updatePwdAction()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
   updatePwdAction() {
      let data = {
        oldPwd: this.$util.md5(this.ruleForm.oldPassword),
        pwd: this.$util.md5(this.ruleForm.newPassword)
      };
      this.loading = true;
      this.$http.post(apiAuth.changePlatUserPwd(), data).then(res => {
        this.loading = false;
        if (res) {
          this.$model.toast("修改成功, 请重新登录", "success");
          sessionStorage.removeItem("adminuid");
          sessionStorage.removeItem("userInfo");
          this.$router.push({ path: "/" });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.un-content{
  background:#fff;
  padding:20px;
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
