import Vue from 'vue'

const AspColorPicker = Vue.component('asp-color-picker', {
  functional: true,
  render (h, self) {
    // let labelWidth = self.props.labelWidth || '64px'
    // self.data.attrs = { ...self.data.attrs, labelWidth }
    // self.data.on = {
    //   update: (model) => {
    //     self.listeners['update:model'](model)
    //   }
    // }
    console.log(self)
    return h('el-color-picker', self.data, self.children)
  }
})

export default AspColorPicker
