<template>
  <div class="parkStatistic">
    <div class="bg-light pd-shadow p-bg">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/momentum' }">团队管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{teamId? "编辑":"新建"}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="bg-form-content">
      <el-form :model="dataForm" :rules="rules" ref="dataForm" label-width="100px" class="form-body form-label-150">
        <el-form-item label="新建团队" prop="teamName">
          <el-input v-model="dataForm.teamName" type="textarea" maxlength="30" show-word-limit placeholder="请输入团队名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="closeDialog()">取消</el-button>
          <el-button type="primary" @click="submitForm('dataForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import _api from "@/api/otherAPI";
import _fileUplodAPI from "@/api/fileUplodAPI";
export default {
  name: "sCNoticeInfo",
  watch: {},
  data() {
    let uData = this.$util.sessionStorage("get", "userInfo").data;
    return {
      userName: uData.userInfoVO ? uData.userInfoVO.userName : uData.username,
      fileAction: _fileUplodAPI.WebFileUpload(),
      teamId: this.$route.query.teamId || "",
      fileList: [],
      imageUrl: "",

      
      dataForm: {
        teamName: this.$route.query.teamName || "",
      },
      rules: {
        teamName: [
          { required: true, message: "请输入团队名称", trigger: "blur" }
        ],        
      },     
    };
  },
  created() {
  },
  methods: {
    getInfo() {
      this.$http
        .post(_api.getScNoticeInfo(), { noticetId: this.noticetId })
        .then(res => {
          if (!res) {
            return;
          }
          this.dataForm = res.data.noticeVO;
        });
    },
    //添加团队
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.saveUser();
        } else {
          this.$model.toast("验证失败！", "error");
          return false;
        }
      });
    },
    saveUser() {
      let data = { ...this.dataForm };
      if (this.teamId) data.teamId = this.teamId;
      this.$http.post(_api.saveTeam(), data).then(res => {
        if (!res) {
          return;
        }
        this.$model.toast("操作成功！", "success");
        this.$router.go(-1);
      });
    },
    closeDialog() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.upload-box {
  width: 440px;
}
.txt-box{
  width:500px;
  padding:10px;
  line-height:24px;
  word-break:break-all;word-wrap:break-word;
  border:1px solid #ddd;
  border-radius: 5px;
}
</style>


