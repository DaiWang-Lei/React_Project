// import NotFound from './NotFound'
// import Login from './Login'
// import Settings from './Settings'
// import DashBoard from './DashBoard'
// import ArticleList from './Article'
// import ArticleEdit from './Article/Edit'




// import Loadable from 'react-loadable'
import Loadable from './Myloadable'
import { Loading } from '../components'
// 下面是懒加载
const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading
})
const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading
})
const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading
})
const DashBoard = Loadable({
  loader: () => import('./DashBoard'),
  loading: Loading
})
const ArticleList = Loadable({
  loader: () => import('./Article'),
  loading: Loading
})
const ArticleEdit = Loadable({
  loader: () => import('./Article/Edit'),
  loading: Loading
})


export {
  NotFound,
  Login,
  Settings,
  DashBoard,
  ArticleList,
  ArticleEdit
}
// export { default as NotFound } from './NotFound'
// export { default as Login } from './Login'
// export { default as Settings } from './Settings'
// export { default as DashBoard } from './DashBoard'
// export { default as ArticleList } from './Article'
// export { default as ArticleEdit } from './Article/Edit'
