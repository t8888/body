<template>
  <div class="orc-view">
    <div style="text-align:left;" v-show="isIE">
      <object classid="clsid:454C18E2-8B7D-43C6-8C17-B1825B49D7DE" ref="captrue" width="380" height="260"></object>
    </div>
    <div class="item-view-ocx">
      <div class="upload-box">
        <p v-show="showMsg">{{showMsg}}</p>
        <el-button v-show="isIE" size="small" @click="changeCaptrue" type="primary">切换镜头</el-button>
        <el-button v-show="isIE" size="small" @click="shot" type="success">拍摄</el-button>
      </div>
      <div v-show="imgSrc">
        <p>拍摄结果</p>
        <img :src="imgSrc" />
      </div>
    </div>
  </div>
</template>
<script>
import _fileUplodAPI from "@/api/fileUplodAPI";
export default {
  name: "orxView",
  props: {
    msg: String
  },
  data() {
    return {
      showMsg: "",
      imgSrc: "",
      isMaincaptrue: true,
      loading: false,
      fileList: [],
      isIE: false,
      captrue: null
    };
  },
  created() {
    this.isIE = this.IEVersion();
  },
  mounted() {
    let _this = this;
    this.$nextTick(function() {
      setTimeout(function() {
        if (_this.isIE) {
          _this.star();
        } else {
          _this.showMsg = "拍摄功能需要在IE下使用";
        }
      }, 1000);
    });
  },
  methods: {
    IEVersion() {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isIE =
        userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
      var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
      var isIE11 =
        userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
      if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 10) {
          return true;
        } else {
          return false; //IE版本<=7
        }
      } else if (isEdge) {
        return true; //edge
      } else if (isIE11) {
        return true; //IE11
      } else {
        return false; //不是ie浏览器
      }
    },
    changeCaptrue() {
      if (this.isMaincaptrue) {
        this.isMaincaptrue = false;
        var str = this.captrue.bStopPlay();
        var str = this.captrue.bStartPlay2(0);
      } else {
         this.isMaincaptrue = true;
        var str = this.captrue.bStopPlay();
        var str = this.captrue.bStartPlay();
      }
    },
    star() {
      let _this = this;
      this.isMaincaptrue = true;
      _this.captrue = _this.$refs["captrue"];
      _this.captrue.bSetMode(3);
      _this.captrue.bStartPlay();
      console.log("cartrue-tar");
    },
    //删除本地图片
    deleteImage() {
      this.IEVersion();
      if (this.isIE) {
        let str = this.captrue.bDeleteFile("c:\\file.jpg");
      }
    },
    //拍摄图片
    shot() {
      //获取拍摄的图片
      let str = this.captrue.bSaveJPG("c:\\", "file");
      let url = this.captrue.sGetBase64();
      this.imgSrc = "data:image/jpeg;base64," + url;
      this.$model.toast("拍摄成功", "success");
      this.$emit("shot");
    },

    stop() {
      if (this.isIE) {
        console.log("cartrue-stop");
        var str = this.captrue.bStopPlay();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.orc-view {
  position: fixed;
  top: 132px;
  right: 10px;
  background: #fff;
  padding: 20px;
  border: 1px solid #f1f1f1;
  z-index: 999;
  .item-view-ocx {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    margin-top: 20px;
    width: 360px;
    height: 260px;
  }
}
</style>



