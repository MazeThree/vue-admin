## 导航条设计思路

### 说明

参照了阿里的导航条设计风格[Ant Design Pro](https://preview.pro.ant.design/dashboard/analysis?language=zh-CN&layout=topmenu&contentWidth=Fixed),但没看实现源码（因为是React写的。。。没接触）,于是自己整理思路用Vue的方法实现的,主要考虑了后期路由权限的的原因，渲染路由长度不定，所以超出的部分不好展示统一丢在更多里面，实现主要借助了数组的filter()和slice()方法,在取到整个router数组对象时，首先通过filter过滤掉隐藏的(hidden:true),再将数组拆分为两个(slice取前6个和剩余的)分别渲染即可。

> 注意：由于路由设置了hidden属性会默认不在导航条显示，所以要先过滤掉，否则明明拆分了6个数组，但展示的可能不全


### 实现

html部分


js部分
```js
  mounted () {
    const nav = this.routes.filter(item => !item.hidden)
    this.routesShow = nav.slice(0,6)
    this.routesHidden = nav.slice(6)
  }
```

### 项目目录

```
├── public                     # 静态资源
│   ├── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 图片、字体等静态资源
│   ├── components             # 全局公用组件
│   ├── layout                 # 页面整体布局盒子
│   ├── mixins                 # 全局混入模块
│   ├── plugins                # 全局插件部分
│   ├── router                 # 路由
│   ├── store                  # 全局store管理
│   ├── style                  # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用vendor（excel导入导出）
│   ├── views                  # views所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .borwserslistrc            # 浏览器兼容相关
├── .env.xxx                   # 环境变量配置&emsp;
├── .eslintrc.js               # eslint 配置项
├── .gitignore.js              # git忽略文件设置
├── .babelrc.config.js         # babel-loader 配置
├── package.json               # package.json
├── postcss.config.js          # postcss 配置
└── vue.config.js              # vue-cli 配置

```

### Online

[在线浏览](https://gcddblue.gitee.io/vue-admin-webapp)

Copyright (c) 2019 Maze
