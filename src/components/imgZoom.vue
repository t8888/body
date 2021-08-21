<template>
  <div class="dialog-view">
    <el-dialog title="图片预览" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-image
      :src="url"
      :fit="fit"></el-image>
    </el-dialog>
  </div>
</template>
<script>
import _fileUplodAPI from "@/api/fileUplodAPI";
export default {
  name: "orcView",
  props: {
    msg: String,
    url: {
      type: String,
      default: ""
    },

    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fit: 'fill',
    };
  },

  methods: {}
};
</script>


