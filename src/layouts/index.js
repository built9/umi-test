
import styles from './index.css';
import { Layout, Menu,Icon,Badge,Dropdown } from 'antd';
import Link from 'umi/link';
import logoImg from '../assets/images/logo.jpg';
import { connect } from 'dva'
const { Header, Footer, Content } = Layout;
const { Item } = Menu;

export default connect(state=>({
  count:state.cart.length,
  cart:state.cart
}))(function(props) {
  const { pathname } = props.location
  const menus = [
    { path:'/',name:'商品'},
    { path:'/users',name:'用户'},
    { path:'/about',name:'关于'}
  ]
  const selectedKeys = menus.filter(menu =>{
    if(menu.path === '/'){
      return pathname === "/"
    }
    return pathname.startsWith(menu.path)
  }).map(menu => menu.path)

  const menu =(
    <Menu>
      {props.cart.map((item,index)=>(
        <Menu.Item key={index}>
          {item.name}*{item.count}<span>¥{item.count*item.price}</span>
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <div className={styles.normal}>
      <Layout>
        <Header className={styles.header}>
          <Menu theme="dark" mode="horizontal" style={{lineHeight:'64px',float:'left'}} selectedKeys={selectedKeys}>
            <Item>
              <img className={styles.logo} src={logoImg} alt="logo"/>
            </Item>
            <Item key="/">
              <Link to="/">商品</Link>
            </Item>
            <Item key="/users">
            <Link to="/users">用户</Link>
            </Item>
            <Item key="/about">
            <Link to="/about">关于</Link>
            </Item>
          </Menu>
          <Dropdown overlay={menu} placement="bottomRight">
            <div style={{float:"right"}}>
              <Icon type="shopping-cart" style={{fontSize:18}}></Icon>
              <span>我的购物车</span>
              <Badge count={props.count} offset={[-4,-18]}></Badge>
            </div>
          </Dropdown>
        </Header>
        <Content className={styles.content}>
          <div className={styles.box}>{props.children}</div>
        </Content>
        <Footer className={styles.footer}>Footer</Footer>
      </Layout>
    </div>
  );
})
