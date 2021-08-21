<template>
  <div class="parkStatistic">
    <div class="bg-light pd-shadow p-bg">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据中心</el-breadcrumb-item>
        <el-breadcrumb-item>个人报告</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="un-content">
      <div class="p-lrbg">
        <div class="seach_box">
          <div class="time_box">
            <div class="time_title">
              学年
            </div>
            <div class="value_box">
              2020 — 2021
            </div>
          </div>
          <div class="time_box">
            <div class="time_title">
              年级
            </div>
            <div class="value_box"></div>
            <el-select
              v-model="yearValue"
              type="year"
              width="200"
              style="opacity:0; position:absolute;z-index: 9;margin-left: 50px;"
              placeholder="请选择年"
            >
            </el-select>
          </div>
          <div class="time_box">
            <div class="time_title">
              班级
            </div>
            <div class="value_box"></div>
            <el-select
              v-model="yearValue"
              type="year"
              width="200"
              style="opacity:0; position:absolute;z-index: 9;margin-left: 50px;"
              placeholder="请选择年"
            >
            </el-select>
          </div>
        </div>
        <div class="bg-fff  clearfix">
          <el-table
            :stripe="true"
            :border="true"
            ref="singleTable"
            highlight-current-row
            size="small"
            tooltip-effect="dark"
            width="100%"
          >
            <el-table-column
              show-overflow-tooltip
              type="index"
              width=""
              label="序号"
              align="center"
            >
            </el-table-column>
            <el-table-column
              show-overflow-tooltip
              property="teamName"
              width=""
              label="姓名"
              align="center"
            >
            </el-table-column>
            <el-table-column
              show-overflow-tooltip
              property="teamName"
              width=""
              label="运动时长(min)"
              align="center"
            ></el-table-column>
            <el-table-column width="" align="center">
              <template slot="header" slot-scope="scope">
                <div class="big_table">
                  <div class="table_text">是否完成</div>
                  <img src="../../assets/images/ques.png" class="ques_icon" />
                </div>
              </template>
            </el-table-column>
            <el-table-column width="" align="center">
              <template slot="header" slot-scope="scope">
                <div class="big_table">
                  <div class="table_text">是否达标</div>
                  <img src="../../assets/images/ques.png" class="ques_icon" />
                </div>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="" align="center">
              <template slot-scope="scope">
                <el-button
                  size="large"
                  style="color: #eb4a43;"
                  type="text"
                  @click="goPersonalDate(scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            :current-page="1"
            :total="10"
            @current-change="currentChangeAction"
            @prev-click="currentChangeAction"
            @next-click="currentChangeAction"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import schoolAPI from "@/api/schoolAPI";
export default {
  name: "pesonal",
  components: {},
  data() {
    const vm = this;
    return {
      yearValue: "",
    };
  },
  mounted() {
    this.getschoolGrade();
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    //个人数据
    goPersonalDate(e) {
      this.$router.push({
        path: "/personalData",
        query: { studentId: e.studentId },
      });
    },
    //获取年级
    getschoolGrade() {
      this.$http
        .post(schoolAPI.getGrade(), {
          countOfPage: 10,
          pageindex: 1,
          schoolId: this.userInfo.schoolId,
          schoolType: 2,
          token: this.userInfo.token,
          uid: this.userInfo.uid,
        })
        .then((res) => {});
    },
    // 分页更改
    currentChangeAction(val) {
      if (val) this.params.pageindex = val;
      this.getListAction();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bg-fff {
  padding: 20px;
}
.time_box {
  display: flex;
  align-items: center;
}
.value_box {
  border: 1px #cdcdcd solid;
  border-radius: 4px;
  text-align: center;
  height: 25px;
  line-height: 25px;
  width: 150px;
  margin-right: 20px;
}
/deep/.el-table th > .cell {
  font-size: 15px;
}
/deep/ .el-table .cell.el-tooltip {
  font-size: 15px;
}
/deep/ .el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: 0.1px #ef9d69 solid;
  color: #666;
}

/deep/ .el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: 0.1px #ef9d69 solid;
}

/deep/ .el-table--border th,
.el-table__fixed-right-patch {
  border-bottom: 0.1px #ef9d69 solid;
  border-right: 0.1px #ef9d69 solid;
  background-color: #e4f7fe;
  color: #333;
}

.el-table--border,
.el-table--group {
  border: 0.1px #ef9d69 solid;
}

// /deep/ .el-table td, .el-table th.is-leaf{
// 	border: 1px #ef9d69 solid;
// }
/deep/ .el-table td,
.el-table th.is-leaf {
  border-bottom: unset;
}
.p-lrbg {
  padding: unset;
}

/deep/ .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #e4f7fe;
}

.ques_icon {
  height: 15px;
  width: 15px;
}

.big_table {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.un-content {
  padding: 20px;
}

.time_title {
  width: 50px;
  font-size: 14px;
}
.content-body {
  background: #fff;
}

.list-top-btn {
  // border-bottom: 1px solid #fdb200;
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
.seach_box {
  height: 40px;
  background-color: #fff;
  margin-bottom: 20px;
  box-shadow: 2px 2px 5px #ececec, -2px -2px 5px #ececec;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 20px;
}

.elInputStyle {
  margin-top: 4px;
}
</style>
