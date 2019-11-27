import {
  NotFound,
  Login,
  Settings,
  DashBoard,
  ArticleList,
  ArticleEdit
} from '../views'


export const mainRoutes = [{
  pathname: '/404',
  component: NotFound
},
{
  pathname: '/login',
  component: Login
}]

export const adminRoutes = [
  {
    pathname: '/admin/dashboard',
    component: DashBoard,
    title: '仪表盘',
    isNav: true,
    icon:'dashboard'
  },
  {
    pathname: '/admin/article',
    component: ArticleList,
    exact: true,
    title: '文章列表',
    isNav: true,
    icon:'unordered-list'


  },
  {
    pathname: '/admin/article/edit/:id',
    component: ArticleEdit
  },
  {
    pathname: '/admin/settings',
    component: Settings,
    title: '设置',
    isNav: true,
    icon:'setting'


  }]