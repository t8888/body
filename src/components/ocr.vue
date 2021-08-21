<template>
  <div class="orc-view">
    <el-dialog title="图片预览" :visible.sync="dialogVisible" width="70%" :before-close="handleClose">
      <el-image :src="imageUrl" :fit="fit"></el-image>
    </el-dialog>
    <div>
      <div class="upload-box">
        <el-upload ref="elUpload" :show-file-list="true"  :on-change="onchange" class="upload-demo" :on-preview="onPreview" :http-request="upload" list-type="picture" :multiple="false" :limit="1" :before-upload="beforeAvatarUpload" action="" :before-remove="beforeRemove" :file-list="fileList">
          <el-button size="small" :loading="loading" @click="onExceed" type="primary">{{loading?"上传中...":"上传"}}</el-button>
        </el-upload>
      </div>
    </div>
  </div>
</template>
<script>
import _fileUplodAPI from "@/api/fileUplodAPI";
export default {
  name: "orcView",
  props: {
    msg: String,
    status: {
      type: Number,
      default: 0
    },
    resurl: {
      type: String,
      default: ""
    },
    imgname:{
       type: String,
      default: ""
    },
    isocr: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialogVisible: false,
      loading: false,
      imageUrl: "",
        fit: 'contain',
      fileList: [],
      captrue: null
    };
  },
  watch: {
    resurl: function(val) {
      if (val) {
        let arr = [{ name: this.imgname, url: val }];
        this.fileList = arr;
      }
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    onExceed() {
      this.fileList = [];
    },
    onchange(file, fileList) {
      var _this = this;
      var event = event || window.event;
      var file = event.target.files[0];
      var reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imageUrl = e.target.result; //将图片路径赋值给src
      };
      reader.readAsDataURL(file);
    },
    onPreview(file) {
      if (this.resurl) this.imageUrl = this.resurl;
      this.dialogVisible = true;
    },
    //判断图片大小
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 4;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      // if (!isLt2M) {
      //   this.$message.error("上传头像图片大小不能超过4MB!");
      // }
      return isJPG && isLt2M;
    },

    //删除图片
    beforeRemove(file, fileList) {
      this.loading = false;
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    upload(param) {
      this.loading = true;
      let fileObj = param.file;
      let formData = new FormData();
      //判断是否OCR
      let postUrl = this.isocr
        ? _fileUplodAPI.OCRFileUpload(this.status)
        : _fileUplodAPI.WebFileUpload(this.status);
      formData.append("file", fileObj);
      // 发起请求
      this.$http.fileUpload(postUrl, formData).then(res => {
        if (!res) return;
        this.$emit("upload", res);
        this.$model.toast("上传成功", "success");
        this.loading = false;
      });
    }
  }
};
</script>


