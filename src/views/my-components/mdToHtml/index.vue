<!-- 
@author wupeng
@date   19.9.23
@description 实现md转html
-->
<template>
  <div>
    <div class="head">
      <el-upload class="upload-demo"
                 drag
                 :auto-upload="false"
                 action="https://jsonplaceholder.typicode.com/posts/"
                 multiple
                 :on-change="change">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip"
             slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
    <div class="body">
      <div v-text="result" class="markdown-body"></div>
      <div v-html="result" class="markdown-body"></div>
    </div>
  </div>
</template>

<script>
import $axios from '@/api/index'
export default {
  components: {
  },
  data () {
    return {
      fileString: '',
      result: ''
    }
  },
  methods: {
    change (file, fileList) {
      let _this = this
      console.log(file, fileList)
      let reader = new FileReader()
      reader.readAsText(file.raw, 'UTF-8')
      reader.onload = function (evt) {
        //读取完文件之后会回来这里
        _this.fileString = evt.target.result // 读取文件内容（全局）
        _this.getHtml()
      }
    },
    getHtml() {
      this.result = this.$marked(this.fileString)
      console.log(this.result)
    }
  },
  mounted () {
    // change() {
    //   var nameReg = /\w+\./gi;
    //   name = valuePos.match(nameReg);
    //   result = [
    //     "<!DOCTYPE html>",
    //     '<html lang="en">',
    //     "<head>",
    //     '    <meta charset="UTF-8">',
    //     '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    //     '    <meta http-equiv="X-UA-Compatible" content="ie=edge">',
    //     "    <title>"
    //   ].join("");
    //   result += name + "html" + "</title>";
    //   ///css
    //   result += "<style>div{width: 50%;margin: auto;}img{max-width:100%}</style>";
    //   var chImg = /(!\[[\S| ]+\])(\()([\S| ]+)(\))/gi;
    //   fileString = fileString.replace(chImg, '<img src="$3">'); //图片
    //   var chA = /(##\s+\[)([\S| ]+)(\]\()(\S+)\)/gi;
    //   fileString = fileString.replace(/#(?=\S+\))/g, '%23');//先将链接中的#转化为%23；
    //   fileString = fileString.replace(chA, '<h2><a href="$4">$2</a></h2>');//标题超链接
    //   fileString = fileString.replace(/(\[)([\S| ]+)(\]\()(\S+)\)/g, "<a href='$4'>$2</a>");//非标题超链接
    //   fileString = fileString.replace(/[\n|\r]+/g, "</br>");//空格
    //   result += "<body><div>";//div居中宽50%；
    //   result += fileString;
    //   result += "</div></body>";
    // }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 88px;
}
</style>