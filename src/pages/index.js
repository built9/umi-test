import React, { Component } from "react";
// import { Button,Card } from "antd";
import { connect } from "dva";
import { TagSelect } from "ant-design-pro";

@connect(
  state=>({
    courses:state.goods.courses,
    tags:state.goods.tags,
    loading:state.loading
  }),
  {
    getList:()=>({
      type:"goods/getList"
    })
  }
)
class Goods extends Component {
  componentDidMount(){
    this.props.getList({foo:'bar'})
  }
  tagSelectChange = tags =>{
    console.log(tags)
  }
  render(){
    // if(this.props.loading.models.goods){
    //   return <div>加载中...</div>
    // }
    return(
      <div>
        <TagSelect onChange={this.tagSelectChange}>
          {this.props.tags.map(tag =>{
            return (
              <TagSelect.option key={tag} value={tag}>{tag}</TagSelect.option>
            )
          })}
        </TagSelect>
      </div>
    )
  }
}
export default Goods
