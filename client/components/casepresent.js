import React from 'react';
import { render } from 'react-dom';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';
import _Card from 'antd/lib/card';

const heading= '我们的专业来自于多例的行业应用';
const caseone= '案例一';
const casetwo= '案列二';
const casethree= '案列三';
const casefour= '案例四';

const styles = {
  centre:{
    textAlign:'center',
    marginTop:'35px',
    marginBottom:'25px',
  },
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
  circle:{
    borderRadius:'50%',
    overflow:'hidden'
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

const CaseSpots = function CaseSpots(props) {
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

const CasePresent = React.createClass ({
  render(){
    return (
      <div style= {{ 'paddingTop': '120px', 'paddingBottom':'60px' }}>
       	<_Row type="flex" justify="center">
          <_Col><img style={styles.circle} src="http://fakeimg.pl/125x125/"/></_Col>
        </_Row>
    		<_Row>
          <_Col style={ styles.centre }><p style={ styles.headingfont }>{ heading }</p></_Col>
        </_Row>
        <_Row>
          <_Col span={16} offset={4}>
            <_Row>
              <_Col style={ styles.straightline_long } ></_Col>
            </_Row>
            <_Row>
              <_Col><CaseSpots casenum={ caseone }/></_Col>
            </_Row>
            <_Row>
              <_Col><CaseSpots casenum={ casetwo }/></_Col>
            </_Row>
            <_Row>
              <_Col><CaseSpots casenum={ casethree }/></_Col>
            </_Row>
            <_Row>
              <_Col><CaseSpots casenum={ casefour }/></_Col>
            </_Row>
          </_Col>
        </_Row>
      </div>
    )
  }
});
  export default CasePresent;