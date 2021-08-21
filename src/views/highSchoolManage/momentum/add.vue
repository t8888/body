<template>
  <div class="parkStatistic">
    <div class="bg-light pd-shadow p-bg">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/momentum' }">团队管理</el-breadcrumb-item>
        <el-breadcrumb-item>学生配置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    
    <div class="bg-forOne">
        <!-- <el-form :model="dataForm" :rules="rules" ref="dataForm" label-width="100px" class="form-body">
            <el-form-item label="团队名称" prop="noticeTitle" class="form-item">
                <el-input v-model="dataForm.noticeTitle" maxlength="30" show-word-limit placeholder="请输入团队名称" style="hight:30px"></el-input>
            </el-form-item>
        </el-form> -->
    
        <el-row class="teamName">
            <el-col class="">团队名称 : {{teamName}}</el-col>
            <!-- <el-col class="">{{teamId}}</el-col> -->
        </el-row>
        <el-row gutter="90">
            <el-col span="12">
                <el-row class="elRow list-top-btn" gutter="">
                    <el-col span="12" align="left" style="color:#fdb200">待选学生</el-col>
                    <!-- <el-col span="8" align="right">年级</el-col> -->
                    <!-- <el-col span="8" align="right">班级</el-col> -->
                    <el-col :span="5" class="chooseBox" align="right" hidden>
                        <el-select v-model="params.termId" size="small" placeholder="" @change="getGradeList">
                            <el-option :value="item.termId" :label="item.termName" v-for="(item,index) in termList" :key="index"> </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="5" class="chooseBox" align="right">
                        <el-select v-model="params.gradeCode" size="small" placeholder="" @change="getClassList">
                            <!-- <el-option label="全部"> </el-option> -->
                            <el-option :value="item.gradeCode" :label="item.gradeName" v-for="(item,index) in gradeList" :key="index"> </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="7" class="chooseBox" align="right">
                        <el-select v-model="params.classId" size="small" placeholder="" @change="getList">
                            <!-- <el-option label="全部"> </el-option> -->
                            <el-option :value="item.classId" :label="item.className" v-for="(item,index) in classList" :key="index"> </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            
                <el-table stripe fit ref="singleTable" highlight-current-row size="small" :data="list" tooltip-effect="dark" style="width: 100%" height="400px">
                    <el-table-column align="center" type="index" label="序号" width="150px"></el-table-column>
                    <el-table-column show-overflow-tooltip align="center" label="姓名">
                        <template slot-scope="scope">
                            <span @click="getFormObj($event)">{{scope.row.name}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column show-overflow-tooltip label="性别" align="center">
                        <template slot-scope="scope">
                            <span> {{scope.row.sex == 1 ? "男":"女"}}</span>
                        </template>
                    </el-table-column>
                </el-table>
                
                <el-row class="bottonRow">
                    <el-col align="right">
                        <el-button type="primary" size="small" @click="selectAll()">全选</el-button>
                    </el-col>                   
                </el-row>
            </el-col>
        <!-- </div> -->
        <!-- <div class="half"> -->
            
            <el-col span="12">
                <el-row class="elRow list-top-btn">
                    <el-col span="8" align="left" style="color:#fdb200">已选学生</el-col>
                </el-row>
                
                <el-table stripe fit ref="singleTable" highlight-current-row size="small" :data="listFormObj" tooltip-effect="dark" style="width: 100%" height="400px">
                    <el-table-column align="center" prop="className" label="班级"></el-table-column>
                    <el-table-column show-overflow-tooltip align="center" label="姓名">
                        <template slot-scope="scope">
                            <span @click="deleteFormObj($event)">{{scope.row.studentName}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column show-overflow-tooltip label="性别" align="center">
                        <template slot-scope="scope">
                            <span> {{scope.row.sex == 1 ? "男":"女"}}</span>
                        </template>
                    </el-table-column>
                </el-table>
                
                <el-row class="bottonRow">
                    <el-col align="right">
                        <el-button type="primary" size="small" @click="deleteAll()">清空</el-button>
                    </el-col>                   
                </el-row>
            </el-col>
        <!-- </div> -->
        </el-row>
        <!-- <el-row>
            <el-form :model="dataForm" :rules="rules" ref="dataForm" hidden></el-form>
        </el-row> -->
        <el-row>
            <el-col align="right" class="commitRow">
                <el-button type="primary" size="small" @click="closeDialog()">取消</el-button>
                <el-button type="primary" size="small" @click="saveUser">提交</el-button>
            </el-col>
        </el-row>
    </div>
        
        <!-- <el-form-item label="内容" prop="content">
          <el-input type="textarea" rows="16" maxlength="150" show-word-limit v-model="dataForm.content" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="closeDialog()">取消</el-button>
          <el-button type="primary" @click="submitForm('dataForm')">提交</el-button>
        </el-form-item> -->
      
    
  </div>
</template>
<script>
import _api from "@/api/otherAPI";
import _apiS from "@/api/schoolAPI";
import _fileUplodAPI from "@/api/fileUplodAPI";
export default {
  name: "dongLiangTuanDuiAdd",
  data() {
    return {
      fileAction: _fileUplodAPI.WebFileUpload(),
      noticetId: this.$route.query.id || "",
      fileList: [],
      list: [],
      
      selectedTeam:[],
      listFormObj: [],
      sNumberObj:[],
      copyList: [],
      teamId: this.$route.query.teamId || "",
      teamName: this.$route.query.teamName || "",
      sNumber: [],

      termList: [],
      gradeList: [],
      classList: [],
      imageUrl: "",
      params: {
        classId: "",
        gradeCode: "",
        name: "",
        termId: "",
        pageindex: '1',
        countOfPage: '100000000'
      }
    };
  },
  created() {   
    this.getAllTermList();
    this.getSelectedTeamList();
  },
  methods: {
    //深拷贝数组
    deepClone(data){
       var type = Object.prototype.toString.call(data);
       var obj;
       if(type === 'array'){
           obj = [];
       } else if(type === 'object'){
           obj = {};
       } else {
           //不再具有下一层次
           return data;
       }
       if(type === 'array'){
           for(var i = 0, len = data.length; i < len; i++){
               obj.push(deepClone(data[i]));
           }
       } else if(type === 'object'){
           for(var key in data){
               obj[key] = deepClone(data[key]);
           }
       }
       return obj;
    },
    //获取已选择的学生
    getSelectedTeamList(){
        this.$http.post(_api.getTeamStu(), { teamId: this.teamId }).then((res) => {
        if (!res) return;
        this.listFormObj = res.data.zhtyYjSysStudentVOList || [];
        for(let r=0; r<this.listFormObj.length; r++){
            this.selectedTeam.push(this.listFormObj[r].studentName);
        }
        //console.log(this.sNumber);
        // for(let j=0; j<this.sNumber.length; j++){
        //     for(let i=0; i<this.listAll.length; i++){
        //         if(this.listAll[i].sNumber == this.sNumber[j]){
        //             this.listFormObj.push(this.listAll[i]);
        //             this.selectedTeam.push(this.listAll[i].name);
        //         }
        //     }
        // }
        //console.log(this.list);
        //console.log("右边列表数据"+this.listFormObj);
      });
    },
    //获取一行数据
    getFormObj(e){        
        let sName = e.target.innerText;        
        for(let i=0; i<this.copyList.length; i++){
            if (this.copyList[i].name == sName && !this.selectedTeam.includes(sName)){       
                this.listFormObj.push({
                  snumber:this.copyList[i].sNumber, 
                  studentName:this.copyList[i].name, 
                  sex:this.copyList[i].sex,
                  className:this.copyList[i].className});
                this.selectedTeam.push(sName);
                console.log("这是获取"+this.listFormObj);
            }       
        }        
    },
    //清除一行数据
    deleteFormObj(e){
        let dName = e.target.innerText;
        for(let i=0; i<this.listFormObj.length; i++){
            if (this.listFormObj[i].studentName == dName){
                this.listFormObj.splice(i,1);
                this.selectedTeam.splice(i,1);
            }
        }
    },
    //全部选择
    selectAll(){
        this.listFormObj = this.listFormObj.concat(this.copyList);
        
        for(let i=0; i<this.listFormObj.length; i++){
            this.sNumber.push(this.listFormObj[i].sNumber);
        }
        //console.log("去重前"+this.sNumber);
        this.sNumber = Array.from(new Set(this.sNumber));
        let arr = [];
        for(let j=0; j<this.listFormObj.length; j++){
            if(this.sNumber.includes(this.listFormObj[j].sNumber)&&!arr.includes(this.listFormObj[j])){
                arr.push(this.listFormObj[j]);
            }
        }
        this.listFormObj = arr;
        //console.log("去重后"+this.sNumber.length);
    },
    //全部清空
    deleteAll(){
        this.listFormObj = [];
        this.selectedTeam = [];
    },
    //获取班级列表
    getClassList() {
      this.classId = "";
      this.gradeList.map((item, index) => {
        if (item.gradeCode == this.params.gradeCode) {
          this.classList = item.classList;
          if (this.classList.length > 0) {
            this.params.classId = this.classList[0].classId;
            this.getListAction();
          } else {
            this.noListDataFun();
          }
        }
      });
    },
    //无数据
    noListDataFun() {
      this.listData = [];
      this.total = 0;
    },
    //获取年级列表
    getGradeList() {
      this.$http
        .post(_apiS.getClassList(), { termId: this.params.termId })
        .then((res) => {
          this.gradeList = res.data.dataList;
          if (this.gradeList.length > 0) {
            this.params.gradeCode = this.gradeList[0].gradeCode;
            this.getClassList();
          } else {
            this.noListDataFun();
          }
        });
    },
    //获取学年
    getAllTermList() {
      this.$http.post(_apiS.getAllTermList(), {}).then((res) => {
        if (!res) return;
        this.termList = res.data.dataList || [];
        // if (this.termList.length > 0) {
        //   this.params.termId = this.termList[0].termId;
        //   this.getGradeList();
        // } else {
        //   this.noListDataFun();
        // }
        for(let i=0; i<this.termList.length; i++){
          if(this.termList[i].status == 1){
            this.params.termId = this.termList[i].termId;
            this.getGradeList();
          }
        }
      });
    },
    // 获取列表数据
    getListAction() {
      this.loading = true;
      this.$http.post(_apiS.getStudentList(), this.params).then(res => {
        this.loading = false;
        this.list = res.data.dataList;
        this.copyList = this.deepClone(this.list);
        this.total = res.data.totalCount || 0;
      });
    },
    //获取学生列表
    getList() {
      this.getListAction();
    },

    closeDialog() {
      this.$router.go(-1);
    },
    //提交数据
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
      for(let i=0; i<this.listFormObj.length; i++){
        this.sNumber.push(this.listFormObj[i].snumber)
      }
      this.$http.post(_api.saveTeamStu(), {teamId: this.teamId, sNumberList:this.sNumber}).then(res => {
        if (!res) {
          return;
        }
        this.$model.toast("操作成功！", "success");
        this.$router.go(-1);
      });
    }
  }
};
</script>
<style lang="scss" type="text/css" scoped>
.noBorder{
    border:none !important;
    background: transparent !important;
}
.el-input {
        width: 100%;
        margin-right: 0;
        .el-input__inner {
            border: none !important;
            background-color: transparent !important;
        }
}
.list-top-btn{
    border-bottom: 1 solid #fdb200 !important;    
}
div.borderSet{//加不上
    border: 1 solid #fdb200 !important;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    width:46%;
    float:left;
    margin: 10px;
    padding: 10px;
}
.el-table>tbody>tr:nth-child(even)>td, 
.l-table>tbody>tr:nth-child(even)>th {
    background:#DFF8FF;
}
.el-table>thead>tr:nth-child(even)>td, 
.el-table>thead>tr:nth-child(even)>th {
    background:#DFF8FF;
}
</style>
<style lang="scss" scoped>
.upload-box{
    width:440px;
  }
.elRow{
      margin-bottom: 10px;
      height: 30px;
      border-bottom: 1 solid #fdb200 !important;
  }


.bg-forOne{
	margin:20px;
    padding: 20px;
    background: #fff;
	.teamName{
		background:#fff;
		padding-bottom: 30px;
        //margin: 20px;
        font-size: 14px;
	}
    .list-top-btn{
    border-bottom: 1 solid #fdb200 !important;    
    }
    .el-input {
        width: 100%;
        margin-right: 0;
        .el-input__inner {
            border: none !important;
            background-color: transparent !important;
        }
      }
    .table-body{
        background:#fff;
        padding:20px;
        width: 46%;
        float: left;
        border: 1 solid #fdb200 !important;
        //padding: 1%;
        //margin: 1%;
    }
    .form-item{
        width: 40%;
    }
    &>.el-table>tbody>tr:nth-child(even)>td, 
    &>.l-table>tbody>tr:nth-child(even)>th {
        background:#DFF8FF;
    }
    &>.el-table>thead>tr:nth-child(even)>td, 
    &>.el-table>thead>tr:nth-child(even)>th {
        background:#DFF8FF;
    }
}
.bottonRow{
    margin: 10px 0;
}
.commitRow{
    margin: 20px 0;
}
.chooseBox{
    margin-top: -6px;
}


</style>


