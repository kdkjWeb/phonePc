/**
 * Created by kdkjPC on 2018/3/1.
 */
// 引入模块
import index from '@/page/index/index'
import header from '@/page/header/header'
import doc from '@/page/doc/doc'
import history from '@/page/history/history'
import newCreate from '@/page/newCreate/newCreate'
import information from '@/page/information/information'
import showDoc from '@/page/showDoc/showDoc'

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
        component:doc,
        redirect:"/showDoc",
        children:[{
          path:'/showDoc',
          name:'showDoc',
          component:showDoc
        },{
          path:'/newCreate',
          name:'newCreate',
          component:newCreate
        }]
      },{
        path: '/history',
        name: 'history',
        component: history
      },{
        path: '/information',
        name: 'information',
        component: information
      }
    ]
  }
]
