import router from "umi/router";
import axios from "axios";

const userinfo = JSON.parse(localStorage.getItem('userinfo')) || {
  token:"",
  tole:"",
  username:"",
  balance:0
}

function login(payload){
  return axios.post("/api/login",payload).then(res=>{
    return {code:res.data.code,userinfo:res.data.data}
  })
}
export default {
  namespace:'user',
  state:userinfo,
  effects:{
    *login({payload},{call,put}){
      try {
        const {userinfo} = yield call(login,payload)
        localStorage.setItem('userinfo',JSON.stringify(userinfo))
        yield put({type:"init",payload:userinfo})
        router.push("/")
      } catch (error) {

      }

    }
  },
  reducers:{
    init(state,action){
      return action.payload
    }
  }
}
