import React from 'react';
import { render } from 'react-dom';
import { Row, Col} from 'antd';

const Apptek = 'Apptek';
const WTW = 'WTW';
const Hash = 'Hash';

const styles = {
  line:{
    marginBottom:'10px'
  },
  font_bold:{
    fontSize: '19px',
    color: '#06dab5',
    font:'Arial',
    fontWeight:'bold',
  },
  font_normal:{
    fontSize: '19px',
    color: '#232528',
    font:'Arial',
  },
  bg_gray:{
    backgroundColor:'#F4F4F4',
    width:'100%',
    position: 'fixed',
    zIndex:'9'
  },
  top:{
    height:'72px'
  },

}

const Pic_line = React.createClass ({
  render(){
    return (
     	 	<Row style={styles.bg_gray}>
          <Col style={styles.top}></Col>
          <Row type="flex" justify="space-around" style={styles.line}>
           <Col span={8}>
             <Col span={4} offset={3} ><a style={styles.font_bold } href="#">{ Apptek }</a></Col>
             <Col span={4} offset={3} ><a style={styles.font_normal } href="#">{ WTW }</a> </Col>
             <Col span={4} offset={3} ><a style={styles.font_normal } href="#">{ Hash }</a></Col>
           </Col>
          </Row>
      	</Row>
    )
  }
});
export default Pic_line;