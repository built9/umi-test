import axios from "axios";

function getGoods(){
  return axios.get("/api/goods").then((data)=>{
    return {
      courses:data.data.courseData.data,
      tags:data.data.courseData.tags
    }
  })
}
export default {
  namespace:'goods',
  state:{
    courses:{},
    tags:[]
  },
  effects:{
    *getList(action,{call,put}){
        const payload = yield call(getGoods)
        yield put({type:"initGoods",payload:payload})
    }
  },
  reducers:{
    initGoods(state,action){
      return action.payload
    }
  }
}
