
import axios from 'axios'
const MyHttpServer={}
MyHttpServer.install = function (Vue) {

    // 1. 添加全局方法或属性

  
    // 2. 添加全局资源
    
    axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
    // 4. 添加实例方法
    Vue.prototype.$http = axios;
}

export default MyHttpServer