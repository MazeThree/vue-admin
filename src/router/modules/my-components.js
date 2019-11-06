import Layout from '@/layout'
const myCom = {
  path: '/my-com',
  component: Layout,
  name: 'MyCom',
  meta: { title: '我的', icon: 'el-icon-set-up' },
  redirect: '/my-com/selcetTree',
  children: [
    {
      path: 'selectTree',
      name: 'selectTree',
      component: () => import('@/views/my-components/selectTree'),
      meta: { title: '下拉树' }
    },
    {
      path: 'mdToHtml',
      name: 'mdToHtml',
      component: () => import('@/views/my-components/mdToHtml'),
      meta: { title: 'MD转HTML' }
    },
    {
      path: 'echartDemo',
      name: 'echartDemo',
      component: () => import('@/views/my-components/echartDemo'),
      meta: { title: '静态echart首页' }
    }
  ]
}
export default myCom
