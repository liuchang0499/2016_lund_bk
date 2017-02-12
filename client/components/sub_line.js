import React from 'react';
import { render } from 'react-dom';
import { Row, Col} from 'antd';

const greenhand='新手入门';
const industryapplication='行业应用';
const question='常见问题';
const maintein='维护保养';
const repairs='设备维修';
const integrate='设计集成';
const rent='设备租赁';

const styles = {
  line:{
    marginBottom:'10px'
  },
  li_space:{
    marginLeft:'25px',
    marginRight:'25px',
    marginBottom:'8px',
    color:'#000',
    fontSize: '16px',
  },
  active:{
    marginLeft:'25px',
    marginRight:'25px',
    marginBottom:'8px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  bg_gray:{
    backgroundColor:'#F4F4F4',
    width:'100%',
    position: 'fixed',
    zIndex:'9',
  },
   top:{
    height:'72px'
  }
}

const Sub_line = React.createClass ({
  render(){
    return (
      <Row style={styles.bg_gray}>
        <Col style={styles.top}></Col>
        <Row type="flex" justify="space-around" style={styles.line}>
           <Col span={12}>
             <Col span={3} ><a style={styles.active} href="#">{ greenhand }</a></Col>
             <Col span={3} ><a style={styles.li_space} href="#">{ industryapplication }</a> </Col>
             <Col span={3} ><a style={styles.li_space} href="#">{ question }</a></Col>
             <Col span={3} ><a style={styles.li_space} href="#">{ maintein }</a></Col>
             <Col span={3} ><a style={styles.li_space} href="#">{ repairs }</a> </Col>
             <Col span={3} ><a style={styles.li_space} href="#">{ integrate }</a></Col>
             <Col span={3} ><a style={styles.li_space} href="#">{ rent }</a></Col>
           </Col>
        </Row>
      </Row>
    )
  }
});
export default Sub_line;