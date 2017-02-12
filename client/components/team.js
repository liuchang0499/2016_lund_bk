import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Row, Col} from 'antd';

const description = '通过使用AMPTS系统，即使是第一次进行测评的学生，也可以得到重复性较好的结果。我们把AMPTS作为常规教学和科研工作中的标准化测试设备。';
const name = 'JUES van Lier博士 ';
const job = '代尔夫特理工大学卫生工程系全职教授'

const styles = {
  subscribe: {
    backgroundImage: 'url(../images/brown_bg.png)'
  },
  image: {
    margin: '-15px auto'
  },
  cicle: {
    display: 'block',
    width: '82%',
    maxWidth: '100%',
    height: 'auto'
  },
  text: {
    textAlign: 'right',
    marginTop:'20px',
    marginBottom:'18px',
  },
  content: {
    fontSize: '13px',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  name:{
    fontSize: '8px',
    color: '#FFFFFF',
    textAlign: 'left'
  },
   job:{
    fontSize:'8px',
    color:'#FFFFFF',
    textAlign: 'left'
  }
};

const Team = React.createClass ({
  render(){
    return (
      <Row style={styles.subscribe}>

        <Col style={styles.text} span={10} offset={5} >
          <Row>
            <Col span={24}>
              <p style={ styles.content }>{description}</p>
            </Col>
          </Row>
          <Row style={{ marginTop: '10px' }}>
            <Col span={9} offset={15}>
              <p style={ styles.content }>{ name }</p>
            </Col>
          </Row>
          <Row>
            <Col span={9} offset={15}>
              <p style={ styles.job }>{ job }</p>
            </Col>
          </Row>
        </Col>
        <Col style={styles.image} span={4} offset={2}>
          <img src="/images/prev-9727.png" style={styles.cicle}/>
        </Col>
      </Row>
   )
  }
});
export default Team;
