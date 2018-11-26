
import axios from 'axios'
const MyHttpServer={}
MyHttpServer.install = function (Vue) {

    // 1. 添加全局方法或属性

  
    // 2. 添加全局资源
    
  
    // 4. 添加实例方法
    Vue.prototype.$http = axios;
}

export default MyHttpServer