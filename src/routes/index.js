import {
  NotFound,
  Login,
  Settings,
  DashBoard,
  ArticleList,
  ArticleEdit
} from '../views'


export const mainRouter = [{
  pathname: '/404',
  component: NotFound
},
{
  pathname: '/login',
  component: Login
}]

export const adminRouter = [
  {
    pathname: '/admin/dashboard',
    component: DashBoard
  },
  {
    pathname: '/admin/settings',
    component: Settings
  },
  {
    pathname: '/admin/article',
    component: ArticleList,
    exact:true
  },
  {
    pathname: '/admin/article/edit/:id',
    component: ArticleEdit
  }]