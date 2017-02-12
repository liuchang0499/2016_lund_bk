import React from 'react';
import { render } from 'react-dom';
import { Collapse } from 'antd';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';
const Panel = Collapse.Panel;

const heading_top='什么是碧普保养服务？';
const sub_heading_top='碧普保养服务是在仪器使用满2年后，定期（每两年）进行系统保养和维护的一箱服务（详见表1）。设备保养是对精密分析一起质量担保服务的延伸，为设备的正常使用提供全方位专业保障。';
const heading_middle='服务保障范围';
const sub_heading_middle='保障产品型号：AMPTS BRS Endeavor uFlow';
const save='更省钱';
const save_content='保养服务将承担设备超出原厂一年质保期后的维修风险，避免设备故障产生的不可预计费用。';
const flexible='更灵活';
const flexible_content='提供简易保养、基础保养和全面保养三种保养方案随心选择；在实验空档期将设备交由碧普公司专业售后维修工程师对仪器进行维护保养，从而可避免繁琐的售后流程，保障实验的正常进度。';
const easy='更省心';
const easy_content='降低设备故障引起的数据失效及研究项目进程延滞.';
const question1='设备质量很好，为什么还要购买保养服务？';
const question2='购买保养服务有什么好处？';
const answer2='跟随设备使用年限和是试验批次的增加，使用过程中的正常磨损，以及不正常操作，都可以让设备电机、气体管道或气体计量单元等部件损坏。Bioprocess Control中国技术服务中心推出的保养服务正式为广大用户提供了降低未来使用成本和风险的一项保障。';
const heading_end='用户日常维护';
const cell1='A单元';
const cell2='B单元';
const cell3='C单元';
const update='升级更新';
const digestion_content='1. 厌氧消化指各种有机物在厌氧条件下，被各类厌氧消化微生物分解转化，最终产生沼气的全过程。';
const category_content='2. 厌氧小环过程中的五大类群的细菌分别是：a)发酵性细菌b)产氢产乙酸菌c)耗氢产乙酸菌d)食氢产甲烷菌e)食乙酸产甲烷菌';

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
  sub_centre:{
    textAlign:'center',
    marginTop:'5px',
    marginBottom:'5px',
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
  tableimg:{
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
  rowbottom:{
    marginBottom:'30px'
  },
  bg:{
    backgroundColor:'#F7F7F7'
  },
  question:{
    fontSize:'30px',
    marginBottom:'10px'
  },
  answer:{
    fontSize:'18px',
  },
  cell:{
    fontWeight: 'bold',
    fontSize: '24px',
    color:'#50AD82'
  },
  end_content:{
    marginTop:'10px',
    marginBottom:'10px'
  },
  range:{
    textAlign:'center',
    padding:'20px'
  }
}

const MaintainSpots = function MaintainSpots(props) {
  function render() {
    return (
      <_Row>
        <_Col style={ styles.centre }>
          <p style={ styles.cell }>{ props.cellNo }</p>
        </_Col>
        <_Col style={styles.end_content}>
          <p>{digestion_content}</p>
          <p>{category_content}</p>
        </_Col>
      </_Row>
    )
  }
  return render();
}

const RangeSpots = function RangeSpots(props) {
  function render() {
    return (
      <_Col style={styles.range} span={8}>
        <_Row type="flex" justify="center">
          <_Col>
            <img style={styles.imgsize} src={props.imgurl} />
          </_Col>
          <_Col>
             <h2>{props.label}</h2>
             <p>{props.content}</p>
          </_Col>
        </_Row>
      </_Col>
    )
  }
  return render();
}

const Maintain = React.createClass ({
  render(){
    return (
      <div style= {{ 'paddingTop': '120px', 'paddingBottom':'60px' }}>
        <_Row type="flex" justify="center">
          <_Col><img style={styles.circle} src="http://fakeimg.pl/125x125/"/></_Col>
        </_Row>
        <_Row type="flex" justify="center">
          <_Col span={24} style={ styles.centre }>
            <p style={ styles.headingfont }>{ heading_top }</p>
          </_Col>
          <_Col span={10}>
           <p style={ styles.sub_centre }>{ sub_heading_top }</p>
          </_Col>
        </_Row>
        <_Row>
          <_Col span ={12} offset={6} style={ styles.straightline_long}></_Col>
        </_Row>
        <_Row type="flex" justify="space-around" >
          <_Col span={12}>
            <_Col style={ styles.centre }>
              <p style={ styles.headingfont }>{ heading_middle }</p>
            </_Col>
            <_Col>
              <p style={ styles.sub_centre }>{ sub_heading_middle }</p>
              <_Col style={styles.tableimg}> <img src="/images/table.png" /> </_Col>
            </_Col>
          </_Col>
        </_Row>
        <_Row  type="flex" justify="space-around" >
          <_Col style={styles.bg} span={12}>
            <_Col style={ styles.centre }>
              <p style={ styles.headingfont }>{ heading_middle }</p>
            </_Col>
            <RangeSpots imgurl="/images/doublearrow.png" label={save} content={save_content} />
            <RangeSpots imgurl="/images/profile.png" label={flexible} content={flexible_content} />
            <RangeSpots imgurl="/images/buck.png" label={easy} content={easy_content} />
           </_Col>
         </_Row>
         <_Row type="flex" justify="center">
          <_Col span={12} >
            <Collapse bordered={false} defaultActiveKey={['1']}>
              <Panel header= {question1} style={styles.question} key="1">
                <p style={styles.answer}>{answer2}</p>
              </Panel>
              <Panel header= {question2} style={styles.question} key="2">
                <p style={styles.answer}>{answer2}</p>
              </Panel>
            </Collapse>
            </_Col>
        </_Row>
        <_Row type="flex" justify="center">
          <_Col style={ styles.straightline_long } ></_Col>
        </_Row>
        <_Row type="flex" justify="center">
          <_Col span={12} >
            <_Row>
              <_Col style={ styles.centre }>
                <p style={ styles.headingfont }>{ heading_end }</p>
              </_Col>
            </_Row>
            <_Row>
              <_Col><MaintainSpots cellNo={ cell1 }/></_Col>
            </_Row>
            <_Row>
              <_Col><MaintainSpots cellNo={ cell2 }/></_Col>
            </_Row>
            <_Row>
              <_Col><MaintainSpots cellNo={ cell3 }/></_Col>
            </_Row>
            <_Row>
              <_Col><MaintainSpots cellNo={ update }/></_Col>
            </_Row>
          </_Col>
        </_Row>
      </div>
    )
  }
});
export default Maintain;