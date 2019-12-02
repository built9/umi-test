export default {
  'post /api/login':(req,res)=>{
    const {username,password} = req.body;
    if(username == 'haha' && password == "123"){
      return res.json({
        code:0,
        data:{
          token:"ddwerwe",
          role:"admin",
          balance:1000,
          username:"haha"
        }
      })
    }

    return res.status(401).json({
      code:-1,
      msg:"用户名或密码错误"
    })
  }
}
