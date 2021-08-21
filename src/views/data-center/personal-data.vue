<template>
  <div class="container">
    <div class="">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据中心</el-breadcrumb-item>
        <el-breadcrumb-item>个人报告</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="data_title">
      <div class="title_name">里史蒂夫</div>
      <div class="title_year">2020-2021学年</div>
      <div class="title_year">2021-4-15 14:20:45</div>
      <div class="title_year">一年级1班</div>
      <div class="title_year">运动时长 45min</div>
      <div class="title_year">年龄 8岁</div>
      <div class="title_year">身高 153cm</div>
      <div class="title_year">体重 39kg</div>
    </div>
    <div class="big_echart">
      <div class="echart_left">
        <div class="left_fst">
          <div class="fst_title">
            运动负荷
          </div>
          <div class="fst_cont">
            <div class="fst_cont_1">
              <div>
                <div class="fst_pic">中强度</div>
                <div class="bottom_text">负荷强度</div>
              </div>
              <div class="fst_bigbox">
                <div class="fst_left_box">
                  <div style="display:flex;align-items: center;">
                    <div class="point"></div>
                    <div class="fst_cont">目标值</div>
                  </div>
                  <div class="data_fst">高强度</div>
                </div>
                <div class="fst_left_box1">
                  <div style="display:flex;align-items: center;">
                    <div class="point"></div>
                    <div class="fst_cont">完成度</div>
                  </div>
                  <div class="data_fst">60%</div>
                </div>
                <div class="looke">查看建议</div>
              </div>
            </div>

            <div class="line"></div>
            <div class="fst_cont_1">
              <div>
                <div class="fst_pic">中强度</div>
                <div class="bottom_text">负荷强度</div>
              </div>
              <div class="fst_bigbox">
                <div class="fst_left_box">
                  <div style="display:flex;align-items: center;">
                    <div class="point"></div>
                    <div class="fst_cont">目标值</div>
                  </div>
                  <div class="data_fst">高强度</div>
                </div>
                <div class="fst_left_box1">
                  <div style="display:flex;align-items: center;">
                    <div class="point"></div>
                    <div class="fst_cont">完成度</div>
                  </div>
                  <div class="data_fst">60%</div>
                </div>
                <div class="looke">查看建议</div>
              </div>
            </div>
          </div>
          <div class="line2"></div>
          <div class="left_item">
            <div class="item_title">
              <div class="left_point"></div>
              <div class="sec_title">平均心率</div>
              <img src="@/assets/images/quest.png" class="quest_img" alt="" />
              <div class="sec_title_cont">(已完成44人)</div>
            </div>
            <div class="item_cont">
              <div class="item_fst">
                <div class="item_fst_left">
                  完成度
                </div>
                <div class="item_fst_left1">
                  90%
                </div>
                <div style="flex:1">
                  <div class="item_fst_left2">
                    未完成
                  </div>
                </div>
                <div class="item_fst_left3">
                  查看未完成
                </div>
              </div>
              <div class="line_box">
                <div class="big_line"></div>
                <div class="big_line1"></div>
                <div class="big_line2"></div>
              </div>
              <div class="item_fst">
                <div class="item_fst_left">
                  完成值
                </div>
                <div class="item_fst_left1">
                  90%
                </div>
                <div class="mubiao">
                  目标值
                </div>
                <div class="max_length">
                  最大值 100%
                </div>
              </div>
            </div>
          </div>
          <div class="left_item">
            <div class="item_title">
              <div class="left_point"></div>
              <div class="sec_title">练习密度</div>
              <img src="@/assets/images/quest.png" class="quest_img" alt="" />
              <div class="sec_title_cont">(已完成44人)</div>
            </div>
            <div class="item_cont">
              <div class="item_fst">
                <div class="item_fst_left">
                  完成度
                </div>
                <div class="item_fst_left1">
                  90%
                </div>
                <div style="flex:1">
                  <div class="item_fst_left2">
                    未完成
                  </div>
                </div>
                <div class="item_fst_left3">
                  查看未完成
                </div>
              </div>
              <div class="line_box">
                <div class="big_line"></div>
                <div class="big_line1"></div>
                <div class="big_line2"></div>
              </div>
              <div class="item_fst">
                <div class="item_fst_left">
                  完成值
                </div>
                <div class="item_fst_left1">
                  90%
                </div>
                <div class="mubiao">
                  目标值
                </div>
                <div class="max_length">
                  最大值 100%
                </div>
              </div>
            </div>
          </div>
          <div class="left_item">
            <div class="item_title">
              <div class="left_point"></div>
              <div class="sec_title">中高强度运动时间</div>
              <img src="@/assets/images/quest.png" class="quest_img" alt="" />
              <div class="sec_title_cont">(已完成44人)</div>
            </div>
            <div class="item_cont">
              <div class="item_fst">
                <div class="item_fst_left">
                  完成度
                </div>
                <div class="item_fst_left1">
                  90%
                </div>
                <div style="flex:1">
                  <div class="item_fst_left2">
                    未完成
                  </div>
                </div>
                <div class="item_fst_left3">
                  查看未完成
                </div>
              </div>
              <div class="line_box">
                <div class="big_line"></div>
                <div class="big_line1"></div>
                <div class="big_line2"></div>
              </div>
              <div class="item_fst">
                <div class="item_fst_left">
                  完成值
                </div>
                <div class="item_fst_left1">
                  90%
                </div>
                <div class="mubiao">
                  目标值
                </div>
                <div class="max_length">
                  最大值 100%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left_sec"></div>
      </div>
      <div class="echart_center"></div>
      <div class="echart_right">
        <div class="right_fst"></div>
        <div class="right_sec"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.max_length {
  flex: 1;
  text-align: right;
  font-size: 13px;
  color: #555;
}
.mubiao {
  font-size: 13px;
  color: #555;
}
.line_box {
  position: relative;
  margin-top: 10px;
  height: 6px;
}
.big_line1 {
  height: 6px;
  border-radius: 3px;
  background-color: #4895ea;
  position: absolute;
  width: 80%;
  z-index: 2;
}
.big_line2 {
  height: 6px;
  border-radius: 3px;
  background-color: #e67736;
  position: absolute;
  width: 60%;
  z-index: 3;
}
.big_line {
  height: 6px;
  width: 100%;
  position: absolute;
  z-index: 1;
  border-radius: 3px;
  background-color: #a8a8a8;
}
.item_cont {
  margin-left: 18px;
}
.item_fst_left {
  font-size: 13px;
  color: #555;
}
.item_fst_left1 {
  font-size: 13px;
  color: #ee7e3e;
  margin-left: 15px;
}
.item_fst_left3 {
  background-color: #ec5c58;
  color: #fff;
  height: 20px;
  font-size: 12px;
  border-radius: 4px;
  line-height: 20px;
  padding: 0 10px;
}
.item_fst_left2 {
  height: 20px;
  border: 1px #e83323 solid;
  color: #e83323;
  font-size: 13px;
  padding: 0 10px;
  width: 50px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  border-radius: 4px;
  margin-left: 15px;
}
.item_fst {
  display: flex;
  margin-top: 15px;
  align-items: center;
}
.sec_title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
}
.sec_title_cont {
  color: #555;
  font-size: 14px;
}
.quest_img {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}
.left_point {
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin-right: 10px;
  background-color: #444;
}
.left_item {
  margin: 15px;
}
.item_title {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.left_sec {
}
.data_fst {
  font-weight: normal;
}
.line2 {
  height: 1px;
  background-color: #f5c9a8;
  margin: 0 25px;
}
.fst_bigbox {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
}
.fst_left_box {
  display: flex;
  align-items: center;
  /* margin-left: 30px; */
  margin-top: 15px;
  justify-content: space-between;
}
.looke {
  width: 90px;
  background-color: #ec5c58;
  color: #fff;
  margin: 0 auto;
  text-align: center;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-top: 15px;
}
.fst_left_box1 {
  display: flex;
  align-items: center;
  /* margin-left: 30px; */
  justify-content: space-between;
  margin-top: 15px;
}
.bottom_text {
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
}
.point {
  height: 5px;
  width: 5px;
  margin-right: 5px;
  border-radius: 2.5px;
  background-color: #e97c38;
}
.fst_cont {
  font-size: 12px;
  color: #444;
  font-weight: bold;
}
.fst_cont_2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.fst_pic {
  height: 70px;
  width: 80px;
  background: url("../../assets/images/chart.png");
  background-size: 100%;
  background-repeat: no-repeat;
  font-size: 16px;
  text-align: center;
  line-height: 70px;
  color: #6487f7;
  font-weight: bold;
}
.fst_cont_1 {
  flex: 1;
  height: 150px;
  margin: 0 25px 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.fst_cont_2 {
  flex: 1;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.line {
  width: 1px;
  background: #f5c9a8;
  height: 120px;
}
.fst_cont {
  display: flex;
  align-items: center;
}
.fst_title {
  font-size: 30px;
  line-height: 76px;
  color: #111111;
  text-align: center;
}
.echart_center {
  width: 20px;
}
.left_fst {
  height: 600px;
  background: #fff;
  box-shadow: 2px 2px 5px #ececec, -2px -2px 5px #ececec;
  border-radius: 4px;
}
.echart_left {
  flex: 1;
}
.right_fst {
  height: 290px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 2px 2px 5px #ececec, -2px -2px 5px #ececec;
  border-radius: 4px;
}
.right_sec {
  height: 290px;
  background: #fff;
  box-shadow: 2px 2px 5px #ececec, -2px -2px 5px #ececec;
  border-radius: 4px;
}
.echart_right {
  flex: 1;
}
.title_name {
  font-size: 15px;
  color: #6083f7;
  font-weight: bold;
}
.el-breadcrumb {
  line-height: 30px;
  margin-top: 10px;
}
.big_echart {
  margin-top: 20px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
}
.container {
  padding: 0 30px;
}
.title_year {
  font-size: 15px;
  color: #333;
}
.data_title {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 50px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 2px 2px 5px #ececec, -2px -2px 5px #ececec;
}
</style>
