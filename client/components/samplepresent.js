import React from 'react';
import { render } from 'react-dom';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';
import _Card from 'antd/lib/card';

const heading= '设计集成';
const label_case= '继承案例';
const label_service= '服务流程 ';
const label_introduction= '项目介绍';
const caseone= '案例一';
const casetwo= '案列二';
const casethree= '案列三';
const casefour= '案例四';

const styles = {
  headingfont:{
    fontWeight: 'bold',
    fontSize: '28px'
  },
  straightline_long: {
    position: 'relative',
    content: '',
    marginBottom: '40px',
    height: '3px',
    backgroundColor: '#BFBFBF',
  },
  conpsize:{
    margin:'0',
    position:'relative',
    float:'left'
  },
  p:{
    fontSize:'14px',
    marginBottom: '10px',
    marginTop:'10px',
  }
}

const SampleSpots = function SampleSpots(props) {
  function render() {
    return (
      <_Card style={{  }} bordered={false} bodyStyle={{ padding: 0 }}>
        <div className="bg_gray">
          <_Col span={8}><img src="http://fakeimg.pl/350x200/" style={styles.conpsize }/></_Col>
          <_Col span={16}><p style={ styles.p }>{ props.casenum }</p></_Col>
        </div>
      </_Card>
    )
  }
  return render();
}

const SamplePresent = React.createClass ({
  render(){
    return (
	     <div style= {{ 'paddingTop': '120px', 'paddingBottom':'60px' }}>
        <_Row>
          <_Col span={16} offset={4}>
            <_Col style={styles.headingfont} span={21}>{ heading }</_Col>
            <_Col span={1}><a>{ label_case }</a></_Col>
            <_Col span={1}><a>{ label_service}</a></_Col>
            <_Col span={1}><a>{ label_introduction }</a></_Col>
          </_Col>
        </_Row>
        <_Row>
          <_Col span={16} offset={4}>
            <_Row>
              <_Col style={ styles.straightline_long } ></_Col>
            </_Row>
            <_Row >
              <_Col><SampleSpots casenum={ caseone }/></_Col>
            </_Row>
            <_Row >
              <_Col><SampleSpots casenum={ casetwo }/></_Col>
            </_Row>
            <_Row >
              <_Col><SampleSpots casenum={ casethree }/></_Col>
            </_Row>
            <_Row >
              <_Col><SampleSpots casenum={ casefour }/></_Col>
            </_Row>
            </_Col>
          </_Row>
     </div>
    )
  }
});
  export default SamplePresent;