/**
 * Created by kdkjPC on 2018/3/1.
 */
// 引入模块
import index from '@/page/index/index'
import header from '@/page/header/header'
import doc from '@/page/doc/doc'

export default [
  {
    path: '/',
    name: 'index',
    component:index,
  },{
    path:'/header',
    name:'header',
    component:header,
    redirect:"/doc",
    children:[
      {
        path:'/doc',
        name:'doc',
        component:doc
      }
    ]
  }
]
