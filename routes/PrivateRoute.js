import Redirect from "umi/redirect";
import { connect } from "dva";

export default connect(state=>({isLogin:!!state.user.token}))(props =>{
  if(!props.isLogin){
    return (
      <Redirect
       to={{
         pathname:'login',
         state:{from:props.location.pathname}
       }}
      />
    )
  }
  return(
    <div>
      <div>PrivateRoute(routes/PrivateRoute.js)</div>
      {props.children}
    </div>
  )
})
