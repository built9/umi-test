import React, { Component } from 'react';
import styles from './login.css';
import { Login } from 'ant-design-pro';
import logoImg from '../assets/images/logo.jpg';
import { connect } from 'dva';

const { UserName, Password, Submit } = Login

@connect()
class UserLogin extends Component {
  onSubmit = (err, values) => {
    console.log(err, values)
    if(!err){
      console.log('登录成功')
      this.props.dispatch({type:'user/login',payload:values})
    }
  };

  render() {
    return (
      <div className={styles.loginForm}>
        <img className={styles.logo} src={logoImg} alt="logo"/>
        <Login onSubmit={this.onSubmit}>
          <UserName
            name="username"
            placeholder="user"
            rules={[{required: true,message: '请输入用户名'}]}
          />
          <Password
            name="password"
            placeholder="password"
            rules={[{required: true,message: '请输入密码'}]}
          />
          <Submit>login</Submit>
        </Login>
      </div>
    );
  }
}
export default UserLogin
