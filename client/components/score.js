import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Row, Col } from 'antd';

const description = '以工业化、规模化，市场化和融合技术创新为特点的产业朝气是当今世界范围内最为现实可行的清洁燃料和能源的生产手段，特别适合中国需要兼顾经济社会发展和维护改善环境的巨大需求。';
const name = '刘京';
const job = '首席科学家 瑞典隆德大学生物技术系副教授';

const styles = {
  subscribe: {
    background: 'url(../images/blue_bg.png)'
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
    textAlign: 'left',
    marginTop:'20px',
    marginBottom:'18px'
  },
   content:{
    fontSize:'11px',
    color:'#FFFFFF'
  },
  name:{
    fontSize:'8px',
    color:'#FFFFFF',
    textAlign:'right'
  },
  job:{
    fontSize:'8px',
    color:'#FFFFFF',
    textAlign:'right'
  }
};

 const Score = React.createClass ({
  render(){
    return (
        <Row style={styles.subscribe}>
           <Col span={4}></Col>
           <Col style={styles.image} span={4} offset={3}>
              <img src="/images/JingLiu.png" style={styles.cicle}/>
           </Col>
            <Col style={styles.text} span={10} offset={2}><br/>
              <Row>
                <p style={ styles.content } >{description}</p>
                <p style={ styles.name } >{name}</p>
                <p style={ styles.job } >{job}</p>
              </Row>
            </Col>
          </Row>
    )
  }
});
export default Score;