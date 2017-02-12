import React from 'react';
import { render } from 'react-dom';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';

const heading='欢迎进入新手入门';
const princeple='厌氧消化原理';
const material='厌氧消化材料';
const condition='厌氧消化条件';
const machine='厌氧消化器';
const digestion='1. 厌氧消化  （沼气发酵： 我国常用叫法）';
const charactor='2. 沼气的化学组成和理化性质';
const methane='3. 甲烷';
const propose='4. 沼气的用途';
const behaviour='5. 沼气窒息性中毒的表现';
const stage='6.产生沼气的三个阶段（也有理解成四个阶段的）';
const category='7.厌氧消化过程中的五大类群细菌';
const digestion_content='厌氧消化指各种有机物在厌氧条件下，被各类厌氧消化微生物分解转化，最终产生沼气的全过程。';
const category_content='厌氧小环过程中的五大类群的细菌分别是：a)发酵性细菌b)产氢产乙酸菌c)耗氢产乙酸菌d)食氢产甲烷菌e)食乙酸产甲烷菌';

const styles = {
  circle:{
    borderRadius:'50%',
    overflow:'hidden'
  },
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
    marginTop:'20px',
    marginBottom: '20px',
    height: '3px',
    backgroundColor: '#BFBFBF'
  },
  cell:{
    marginTop:'20px',
    marginBottom:'20px'
  },
  content:{
    marginTop:'10px',
    marginBottom:'10px'
  },
  straightline_long_break: {
    borderTop:'#00686b 1px dashed',
    overflow:'hidden',
    height:'1px'
  },
}

const GuideSpots = function GuideSpots(props) {
  function render() {
    return (
      <div>
        <_Row>
          <_Col style={styles.cell} span={13} offset={5}>
            <h2>{props.header}</h2>
            <p style={styles.content}>{props.content}</p>
          </_Col>
        </_Row>
        <_Row>
          <_Col span ={13} offset={5} style={ styles.straightline_long_break}></_Col>
        </_Row>
       </div>
    )
  }
  return render();
}

const Greenhand = React.createClass ({
  render(){
    return (
      <div style= {{ 'paddingTop': '120px', 'paddingBottom':'60px' }}>
        <_Row type="flex" justify="center">
          <_Col><img style={styles.circle} src="http://fakeimg.pl/125x125/"/></_Col>
        </_Row>
         <_Row type="flex" justify="center">
          <_Col style={ styles.centre }> <p style={ styles.headingfont }>{ heading }</p> </_Col>
        </_Row>
        <_Row >
          <_Col span={13} offset={5} style={ styles.straightline_long } ></_Col>
        </_Row>
        <_Row type="flex" justify="space-around" >
           <_Col span={12}>
             <_Col span={4} offset={1}>
               <img style={styles.imgsize} src="/images/princeple.png" />
             </_Col>
             <_Col span={4} offset={2} >
               <img style={styles.imgsize} src="/images/material.png" />
             </_Col>
             <_Col span={4} offset={2} >
               <img style={styles.imgsize} src="/images/condition.png" />
             </_Col>
             <_Col span={4} offset={2} >
               <img style={styles.imgsize} src="/images/machine.png" />
             </_Col>
           </_Col>
        </_Row>
        <_Row >
          <_Col span={13} offset={5} style={ styles.straightline_long } ></_Col>
        </_Row>
        <_Row>
          <_Row>
            <GuideSpots header={digestion} content={digestion_content}/>
          </_Row>
          <_Row>
            <GuideSpots header={charactor} content={digestion_content}/>
          </_Row>
          <_Row>
            <GuideSpots header={methane} content={digestion_content}/>
          </_Row>
          <_Row>
            <GuideSpots header={propose} content={digestion_content}/>
          </_Row>
          <_Row>
            <GuideSpots header={behaviour} content={digestion_content}/>
          </_Row>
          <_Row>
            <GuideSpots header={stage} content={digestion_content}/>
          </_Row>
          <_Row>
            <GuideSpots header={category} content={digestion_content}/>
          </_Row>
        </_Row>
      </div>
    )
  }
});
export default Greenhand;