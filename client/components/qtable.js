import React from 'react';
import { Link } from 'react-router';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';
import { Pagination, Collapse} from 'antd';

const Panel = Collapse.Panel;
const heading ='这里，您能找到需要的解决方案';
const question1='AMPTS II发酵瓶中的气体可以取样分析吗？';
const question2='发酵瓶的气密性好坏如何判断？';
const question3='发酵瓶中的发酵物料装多少合适？';
const question4='发酵瓶顶空体积对实验影响有多大？';
const question5='发酵瓶顶空部分补充N2是否对实验有影响?';
const question6='发酵瓶搅拌可以独立控制转速吗？';
const question7='产甲烷潜力实验一般持续多长时间？';
const answer1='产甲烷潜力实验一般持续多长时间？产甲烷潜力实验一般持续多长时间？';

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
    marginBottom: '20px',
    height: '3px',
    backgroundColor: '#BFBFBF'
  },
  question:{
    fontSize:'24px',
    marginBottom:'10px'
  },
  answer:{
    fontSize:'16px',
  },
  pagination: {
    marginTop:'40px'
  },
  circle:{
    borderRadius:'50%',
    overflow:'hidden'
  },
}

const Qtable = React.createClass ({
  render() {
    return (
    	<div style= {{ 'paddingTop': '120px', 'paddingBottom':'60px' }}>
     	 	<_Row type="flex" justify="center">
	     	 	<_Col> <img style={styles.circle} src="http://fakeimg.pl/125x125/" /> </_Col>
      	</_Row>
         <_Row type="flex" justify="center">
	      	<_Col style={ styles.centre }> <p style={ styles.headingfont }>{ heading }</p> </_Col>
        </_Row>
        <_Row>
          <_Col span={16} offset={4} style={ styles.straightline_long } ></_Col>
        </_Row>
    	  <_Row>
				  <_Col span={16} offset={4}>
            <Collapse bordered={false} defaultActiveKey={['1']}>
              <Panel header= {question1} style={styles.question} key="1">
                <p style={styles.answer}>{answer1}</p>
              </Panel>
              <Panel header= {question2} style={styles.question} key="2">
                <p style={styles.answer}>{answer1}</p>
              </Panel>
              <Panel header= {question3} style={styles.question} key="3">
                <p style={styles.answer}>{answer1}</p>
              </Panel>
              <Panel header= {question4} style={styles.question} key="4">
                <p style={styles.answer}>{answer1}</p>
              </Panel>
              <Panel header= {question5} style={styles.question} key="5">
                <p style={styles.answer}>{answer1}</p>
              </Panel>
              <Panel header= {question6} style={styles.question} key="6">
                <p style={styles.answer}>{answer1}</p>
              </Panel>
              <Panel header= {question7} style={styles.question} key="7">
                <p style={styles.answer}>{answer1}</p>
              </Panel>
            </Collapse>
            </_Col>
         </_Row>
         <_Row style={ styles.pagination } type="flex" justify="center" >
           <_Col ><Pagination defaultCurrent={1} total={50} /></_Col>
         </_Row>
	    </div>
    );
  }
});
export default Qtable;
