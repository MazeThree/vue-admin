<template>
  <div>
    <el-upload ref="upload"
               action=""
               class="upload-demo"
               name="files"
               drag
               :http-request="handleBeforeUpload"
               :file-list="value">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip"
           slot="tip">建议上传文件不超过2M</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'asp-upload',
  props: ['value', 'uploadType'],
  methods: {
    async handleBeforeUpload (params) {
      const file = params.file
      const formData = new FormData()
      if (this.uploadType === 'excel') {
        let type = file.name.slice(file.name.lastIndexOf('.') + 1).toLowerCase()
        if (type === 'xlsx') {
          formData.append('files', file)
          const res = await this.$http.sendRequest({
            method: 'POST',
            url: '/v1/scada/uploadExcel',
            data: formData
          })
          if (res) {
            // console.log(res)
            this.$emit('input', res, 'excel')
            this.$message({
              message: '上传成功',
              type: 'success'
            })
          } else {
            this.$message({
              message: '上传失败!',
              type: 'error'
            })
          }
        } else {
          this.$refs.upload.clearFiles()
          this.$message({
            message: '请上传Excel文件 !',
            type: 'error'
          })
        }
      } else {
        formData.append('files', file)
        const res = await this.$http.sendRequest({
          method: 'POST',
          url: '/v1/scada/upload',
          data: formData
        })
        if (res.code === 200) {
          this.$emit('input', res.data)
          this.$message({
            message: '上传成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
      return false
    }
  },
  mounted () {}
}
</script>

<style scoped>
</style>
