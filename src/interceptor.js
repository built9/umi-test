import axios from "axios";
import { notification } from "antd";

const codeMessage = {
  401:'用户没有权限',
  500:'服务器错误'
}
axios.interceptors.response.use(null,({response})=>{
  if(codeMessage[response.status]){
    notification.error({
      message:`请求错误${response.status}:${response.config.url}`,
      description:codeMessage[response.status]
    })
    return Promise.reject()
  }
})
