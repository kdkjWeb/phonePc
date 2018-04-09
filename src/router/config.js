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
import department from '@/page/department/department'
import showDoc from '@/page/showDoc/showDoc'
import editor from '@/page/editor/editor'

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
        },
          {
            path: '/editor',
            name: 'editor',
            component: editor
          }
        ]
      },{
        path: '/history',
        name: 'history',
        component: history
      },{
        path: '/information',
        name: 'information',
        component: information
      },{
        path: '/department',
        name: 'department',
        component: department
      }
    ]
  }
]
