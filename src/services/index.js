import axios from 'axios'
import { message} from 'antd'
const isDev = process.env.NODE_ENV === 'development'
const service = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/238059' : isDev
})


// 设置请求拦截器
service.interceptors.request.use(config => {
  console.log(config);
  config.data =Object.assign({},config.data,{
    // 真实情况，这样验证token
    // authToken:window.localStorage.getItem('authToken')
    // 现在先随便写一个
    authToken:'itissuibianToken'
  })
  
  return config
})


// 设置响应拦截器
service.interceptors.response.use(res => {
  console.log(res);
  
  if (res.data.code === 200) {
    return res.data.data
  } else {
    // 全局处理错误
    // message.error('网络延迟，稍后再试')
    message.error(res.data.errMsg ? res.data.errMsg:'网络延迟，稍后再试')
  }
})

export const getArticles = () => {
  return service.post('/api/v1/acrticleList')
}