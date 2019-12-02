// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi',
      dll: false,
      // routes: {
      //   exclude: [
      //     /components\//,
      //   ],
      // },
    }],
  ],
  routes: [{
    path: "/login",
    component: './login'
  },
  {
    path: "/",
    component: "../layouts",
    routes: [{
      path: "/",
      component: "./goods/index"
    },{
      path: "/about",
      component: "./about",
      Routes:["./routes/PrivateRoute.js"]
    },{
      path: "/users",
      component: "./users/_layout",
      routes:[
        {path:'/users/',component:"./users/index"},
        {path:'/users/:id',component:"./users/$id"},
        {
          component: "./NotFound"
        }
      ]
    },{
      component: "./NotFound"
    }]
  }]
}
