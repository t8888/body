<template>
  <div class="parkStatistic">
    <div class="bg-light pd-shadow p-bg">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>团队管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="un-content" v-loading="loading">
      <div class="content-body pd-shadow">
        <div class="p-bg " style="padding-bottom:0;padding-top:0;">
          <div class="list-top-btn">
            <el-row :gutter="24">
              <el-col :span="10" style="text-align:left">
                <el-form class="form-body">
                  <el-col :span="9" style="text-align:left">
                    <el-input size="small" v-model="params.teamName" placeholder="请输入团队名称" class="elInputStyle"></el-input>
                  </el-col>
                  <!-- <el-col :span="15"></el-col> -->
                  <el-col :span="1">
                    <el-form-item>
                      <el-button size="small" type="primary" @click="currentChangeAction(1)">查询</el-button>
                    </el-form-item>
                  </el-col>
                </el-form>
              </el-col>
              <el-col :span="8" style="text-align:left">
                  <!-- <el-input size="small" v-model="params.teamName" placeholder="请输入团队名称"></el-input> -->
              </el-col>
              <el-col :span="6">
                <el-form class="form-body">
                  <el-col :span="16"></el-col>
                  <el-col :span="1">
                    <el-form-item>
                      <el-button size="small" type="primary" @click="addTeam">新建团队</el-button>
                    </el-form-item>
                  </el-col>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="p-lrbg">
          <div class="bg-fff  clearfix">
            <el-table ref="singleTable" highlight-current-row size="small" :data="list" tooltip-effect="dark" style="width: 100%">
              <el-table-column show-overflow-tooltip type="index" width="200px" label="序号" align="center"></el-table-column>
              <el-table-column show-overflow-tooltip property="teamName" label="团队名称" align="center"></el-table-column>
              <el-table-column label="操作" width="200px" align="center">
                <template slot-scope="scope">
                  <el-button size="mini" type="text"  @click="addStudent(scope.row)">学生配置</el-button>
                  <el-button size="mini" type="text" v-if="scope.row.status==1" @click="changeStatus(scope.row)">禁用</el-button>
                  <el-button size="mini" type="text" v-if="scope.row.status==2" @click="changeStatus(scope.row)">发布</el-button>
                  <el-button size="mini" type="text" @click="addTeam(scope.row)">重命名</el-button>
                  <!-- <el-button size="mini" type="text" @click="delFun(scope.row)">删除</el-button> -->
                </template>
              </el-table-column>
            </el-table>
            <el-pagination background layout="total, prev, pager, next, jumper" :current-page="params.pageindex" :total="total" @current-change="currentChangeAction" @prev-click="currentChangeAction" @next-click="currentChangeAction"></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _api from "@/api/otherAPI";
export default {
  name: "dongLiangTuanDui",
  components: {},
  data() {
    const vm = this;
    return {
      dataForm: {
        teamName: "",
      },
      rules: {
        teamName: [
          { required: true, message: "请输入团队名称", trigger: "blur" }
        ],        
      },
      list: [],
      total: 0,
      loading: true,
      params: {
        teamName: "",
        pageindex: 1,
        countOfPage: 10
      }
    };
  },
  created() {
    this.currentChangeAction(1);
  },
  methods: {
    // 分页更改
    currentChangeAction(val) {
      if (val) this.params.pageindex = val;
      this.getListAction();
    },
    // //添加团队
    // submitForm(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       this.saveUser();
    //       location.reload();
    //     } else {
    //       this.$model.toast("验证失败！", "error");
    //       return false;
    //     }
    //   });
    // },
    // saveUser() {
    //   let data = { ...this.dataForm };
    //   this.$http.post(_api.saveTeam(), data).then(res => {
    //     if (!res) {
    //       return;
    //     }
    //     this.$model.toast("操作成功！", "success");
    //   });
    // },
    
    // 获取列表数据
    getListAction() {
      this.loading = true;
      this.$http.post(_api.getTeamList(), this.params).then(res => {
        this.loading = false;
        this.list = res.data.zhtyYjSysTeamVOList;
        this.total = res.data.totalCount || 0;
      });
    },
    info(row) {
      this.$router.push({
        path: "/momentumInfo",
        query: {
          id: row.noticetId
        }
      });
    },
    //删除数据
    doDel(row) {
      this.$http
        .post(_api.deleteTeam(), { teamId: row.teamId })
        .then(res => {
          if (!res) return;
          this.$model.toast("删除成功！", "success");
          this.currentChangeAction(this.params.pageindex);
        });
    },
    delTeam(row) {
      let _this = this;
      this.$model.confirm("是否确认删除？", function() {
        _this.doDel(row);
      });
    },
    handleDelete(row){ //删除行数
        this.list.splice(row.index, 1);
    },
    //变换状态
    doChangeStatus(row) {
      this.$http
        .post(_api.forbidTeam(), {
          teamId: row.teamId,
          status: row.status == 2 ? 1 : 2
        })
        .then(res => {
          if (!res) return;
          this.currentChangeAction(this.params.pageindex);
          this.$model.toast("操作成功！", "success");
        });
    },
    //修改状态
    changeStatus(row) {
      let _this = this;
      this.$model.confirm(
        "是否确认" + (row.status == 2 ? "发布" : "禁用") + "？",
        function() {
          _this.doChangeStatus(row);
        }
      );
    },
    //添加学生
    addStudent(row) {
        if(row.status == 1){
            this.$util.setOtherPageSaveData(this.params);
            this.$router.push({
                path: "/momentumAdd", query: {
                    teamId: row.teamId,
                    teamName: row.teamName,

                }
            });
        }
      
    },
    //添加团队
    addTeam(){
      this.$router.push({ path: "/momentumAddTeam" });
    },
    addTeam(row){
      this.$router.push({
                path: "/momentumAddTeam", query: {
                    teamName: row.teamName,
                    teamId: row.teamId,
                }
            });
    },

    // 修改
    editFun(row) {
      this.$router.push({
        path: "/momentumAdd",
        query: {
          id: row.noticetId
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.un-content {
  padding: 20px;
}
.content-body {
  background: #fff;
}
.list-top-btn {
  border-bottom: 1px solid #fdb200;
  color: #666;
  .el-col {
    padding: 1px !important;
  }
  span {
    display: block;
    height: 34px;
    line-height: 34px;
  }
  button {
    font-size: 14px;
  }
}
.courseStatistic {
  .el-cascader {
    width: 100%;
  }
}
.search-row {
  margin-bottom: 10px;
  .label-title {
    line-height: 32px;
    font-size: 12px;
  }
}
.elInputStyle{
    margin-top: 4px;
}
</style>
