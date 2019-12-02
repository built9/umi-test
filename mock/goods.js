const course = {
  data:{
    'javascript':[
      {
        id:1,
        name:'es6语法实战',
        img:'1.jpg',
        price:100,
        solded:'564'
      },
      {
        id:2,
        name:'es6语法实战',
        img:'2.jpg',
        price:100,
        solded:'564'
      }
    ],
    'react':[
      {
        id:3,
        name:'es6语法实战',
        img:'3.jpg',
        price:100,
        solded:'564'
      },
      {
        id:4,
        name:'es6语法实战',
        img:'1.jpg',
        price:100,
        solded:'564'
      }
    ],
    'vuejs':[
      {
        id:5,
        name:'es6语法实战',
        img:'2.jpg',
        price:100,
        solded:'564'
      },
      {
        id:6,
        name:'es6语法实战',
        img:'3.jpg',
        price:100,
        solded:'564'
      }
    ],
    'git':[
      {
        id:5,
        name:'es6语法实战',
        img:'2.jpg',
        price:100,
        solded:'564'
      },
      {
        id:6,
        name:'es6语法实战',
        img:'3.jpg',
        price:100,
        solded:'564'
      }
    ],
    'python':[
      {
        id:5,
        name:'es6语法实战',
        img:'2.jpg',
        price:100,
        solded:'564'
      },
      {
        id:6,
        name:'es6语法实战',
        img:'3.jpg',
        price:100,
        solded:'564'
      }
    ]
  },
  tags:['javascript','react','vuejs','git','python']
}

course.tags.forEach(tag => {
  course.data[tag].forEach(v=>{
    v.tag = tag
  })
});
export default {
  'get /api/goods':(req,res,next)=>{
    setTimeout(() => {
      res.json({
        code:0,
        courseData:course
      })
    }, 2500);
  }
}
