import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';
import _Card from 'antd/lib/card';


const heading = '评测介绍';
const subHeading = '在这里，我们为您提供最准确、详细的测评信息';
const details = '我们为您提供最准确、详细的测评信息 ';
const styles = {

};

const TopSpots = function TopSpots() {
  function render() {
    return (
      <_Card style={{  }} bodyStyle={{ padding: 0 }}>
        <div>
          <img style={{ display: 'block' }} alt="example" width="100%" src="http://fakeimg.pl/250x370" />
        </div>
        <div style={{ padding: '10px 16px', marginTop: '-50px', backgroundColor: '#134C86', opacity: '0.9' }}>
          <p style={{ color: '#FFF' }}>ATML 简要评测</p>
        </div>
      </_Card>
    )
  }
  return render();
}

const SecondarySpots = function SecondarySpots(props) {
  // console.log(props);
  function render() {
    return (
      <_Card style={{  }} bodyStyle={{ padding: 0 }}>
        <div>
          <img style={{display: 'block', height: '50%'}} alt="example" width="100%" src="http://fakeimg.pl/250x200/" />
        </div>
        <div style={{ padding: '5px 16px', marginTop: '-40px', backgroundColor: props.color, opacity: '0.9' }}>
          <p style={{ color: '#FFF' }}>ATML 简要评测</p>
        </div>
      </_Card>
    )
  }
  return render();
}

const HomeHero = React.createClass ({
  render(){
    return (
      <div style= {{ 'paddingBottom': 100, 'backgroundColor': '#ECECEC' }}>
        <_Row>
          <_Col span={6} offset={4} style={{ 'borderBottom': '1px inset #BCBCBC', 'marginTop': '50px'}}></_Col>
          <_Col span={4} style={{'textAlign':'center'}}>
            <_Row style= {{ 'paddingBottom': 10,}}>
              <_Col span={24} ><h3 style= {{ 'paddingTop': '30px', 'backgroundColor': '#ECECEC', fontSize: '26px' }} >{heading}</h3></_Col>
            </_Row>
          </_Col>
          <_Col span={6} style={{ 'borderBottom': '1px inset #BCBCBC', 'marginTop': '50px'}}></_Col>
        </_Row>

        <_Row  style= {{ 'paddingBottom': 50, textAlign: 'center' }}>
          <_Col span={6} offset={9} >
            <h5 style= {{ fontSize: '10px', fontWeight:'normal', 'backgroundColor': '#ECECEC' }} >{subHeading}</h5>
          </_Col>
        </_Row>

        <_Row type="flex" justify="spaceAround" align="middle">
          <_Col span={6} offset={3}>
            <TopSpots />
          </_Col>

          <_Col span={12} >
            <_Row>
              <_Col span={11} offset={1}><SecondarySpots color={'#7ABCBA'}/></_Col>
              <_Col span={11} offset={1}><SecondarySpots color={'#B6CDB1'}/></_Col>
            </_Row>
            <_Row style={{marginTop: '5px'}}>
              <_Col span={11} offset={1}><SecondarySpots color={'#E4C781'}/></_Col>
              <_Col span={11} offset={1}><SecondarySpots color={'#E0887F'}/></_Col>
            </_Row>

          </_Col>

        </_Row>
      </div>
    )
  }
});

export default HomeHero;
