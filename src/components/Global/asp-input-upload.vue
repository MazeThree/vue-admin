<template>
  <div>
    <el-input style="vertical-align: unset;"
              :placeholder="placeholder"
              v-model="fileName"
              clearable
              @clear="clear"
              :disabled="disabled"
              >
      <el-upload slot="append"
                ref="upload"
                action=""
                :show-file-list="false"
                :multiple="false"
                :http-request="handleUpload"
                :disabled="disabled">
        <el-button size="small"
                  type="primary"
                  style="color: #000;" >{{button}}</el-button>
      </el-upload>
    </el-input>
    <p style="padding-top: 5px;" v-show="tips !== ''">{{tips}}</p>
  </div>
</template>

<script>
export default {
  name: 'asp-input-upload',
  props: {
    placeholder: {
      type: [String, Number],
      default: '多文件请上传压缩包'
    },
    // 请求地址
    url: {
      type: String,
      default: ''
    },
    accept: {
      type: String,
      default: null
    },
    Size: {
      type: [String, Number],
      default: 30
    },
    button: {
      type: String,
      default: '点击上传'
    },
    tips: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  // 是否只返回叶子节点，多选可用
  data () {
    return {
      show: false,
      fileName: '',
      file: ''
    }
  },
  watch: {
  },
  methods: {
    clear () {
      this.$emit('clear')
    },
    async handleUpload (params) {
      if (Number(this.Size) * 1024 * 1024 > params.file.size) {
        const file = params.file
        const formData = new FormData()
        formData.append('files', file)
        try {
          const res = await this.$http.sendRequest({
            method: 'POST',
            url: this.url,
            data: formData
          })
          this.file = res
          this.fileName = params.file.name
          this.$emit('input', this.fileName)
          this.$emit('response', res)
          this.$emit('onSuccess', params)
        } catch (e) {
          this.$message.error('上传失败!')
          this.$emit('onError', params)
        }
      } else {
        this.$message(`文件大小超出${this.Size}M`)
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>