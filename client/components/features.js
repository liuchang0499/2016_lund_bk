import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';
import { Row, Col, Button, Carousel } from 'antd';

const styles = {
  button:{
    fontSize:'20px',
    marginBottom:'10px'
  },
  space:{
    marginBottom:'40px'
  }
}
const Titles =['生物反应器模拟器——探索沼气模拟值1','生物反应器模拟器——探索沼气模拟值2','生物反应器模拟器——探索沼气模拟值3'];
const subTitles =['该生物反应器的仿真是在连续操作模式在实验室规模模拟厌氧发酵过程的普通沼气仿真\r' +
                 '平台。该系统是由一个Web的软件运行在与互联网链接从任何计算机或移动设备访问\r' +
                 '的高效的云计算解决方案的控制。--1','该生物反应器的仿真是在连续操作模式在实验室规模模拟厌氧发酵过程的普通沼气仿真\r' +
                 '平台。该系统是由一个Web的软件运行在与互联网链接从任何计算机或移动设备访问\r' +
                 '的高效的云计算解决方案的控制。--2','该生物反应器的仿真是在连续操作模式在实验室规模模拟厌氧发酵过程的普通沼气仿真\r' +
                 '平台。该系统是由一个Web的软件运行在与互联网链接从任何计算机或移动设备访问\r' +
                 '的高效的云计算解决方案的控制。--3'];
const button ='详细信息'

const Features =inject ('store') ( function Features (props){

  function componentDidMount(){
    // console.log('Features mount', this.props.store.title);
  };

   function handleSelect(dataindex, e) {
     //console.debug('selected=' + selectedIndex + ', direction=' + e.direction, props);
    props.store.setIndex(dataindex);
  }

  function render(){
    return (
      <div>
        <Row style={{ marginTop: '100px' }}>
          <Col span={8} offset={8}>
            <h4 style={{ textAlign: 'center' }} >{Titles[this.props.store.index]}</h4>
            <small style={{ fontSize: '8px' }}>
              {subTitles[this.props.store.index]}
            </small>
            <Row>
              <Col span={8} offset={8}>
                <Button style={styles.button} type="primary">{ button }</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col style={styles.space} span={20} offset={2}>
            <Carousel autoplay afterChange={this.handleSelect}>
              <img src="http://fakeimg.pl/800x280"/>
              <img src="http://fakeimg.pl/800x280"/>
              <img src="http://fakeimg.pl/800x280"/>
            </Carousel>
          </Col>
        </Row>
      </div>
    )
  };

  return observer({
    componentDidMount,
    render,
    handleSelect
  })
});

export default Features ;
