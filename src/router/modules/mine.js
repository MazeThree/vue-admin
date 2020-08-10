import Layout from '@/layout'
const myCom = {
  path: '/my-com',
  component: Layout,
  name: 'MyCom',
  meta: { title: '我的', icon: 'el-icon-set-up' },
  redirect: '/my-com/gisTest',
  children: [
    {
      path: 'canvas',
      name: 'canvas',
      component: () => import('@/views/mine/canvas'),
      meta: { title: 'canvas绘制' }
    },
    {
      path: 'gisTest',
      name: 'gisTest',
      component: () => import('@/views/mine/gisTest'),
      meta: { title: 'gis开发测试' }
    },
    {
      path: 'selectTree',
      name: 'selectTree',
      component: () => import('@/views/mine/selectTree'),
      meta: { title: '下拉树' }
    },
    {
      path: 'mdToHtml',
      name: 'mdToHtml',
      component: () => import('@/views/mine/mdToHtml'),
      meta: { title: 'MD转HTML' }
    },
    {
      path: 'echartDemo',
      name: 'echartDemo',
      component: () => import('@/views/mine/echartDemo'),
      meta: { title: '静态echart首页' }
    },
    {
      path: 'mark',
      name: 'mark',
      component: () => import('@/views/mine/mark'),
      meta: { title: '记录' }
    }
  ]
}
export default myCom
