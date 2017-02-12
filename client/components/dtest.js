import React from 'react';
import { render } from 'react-dom';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';
import _Card from 'antd/lib/card';
import { Pagination } from 'antd';

const content_1="对于一个高效的厌氧过程，监测其厌氧微生物的生存能力和浓度是非常重要的。这些信息可以通过活性测试来获取（例如：产甲烷活性，酸化和水解活性）。这类确定厌氧过程中关键步骤分解代谢活性的实验通常通过传统的手动方法进行，这需要投入大量的人力，并且容易产生很大的人为误差。然而，通过高度自动化的批次实验系统（AMPTS）来开展这类实验将最小化人为误差，从而保证实验数据的准确性最大化。利用添加剂最优化厌氧过程";
const content_2="许多用于生产沼气的生物质大多都有各种关键营养物质含量不足的问题。营养无知的不足意味着厌氧发酵罐中的微生物不能在最佳条件下工作，这一长期不稳定性因素可能导致厌氧过程的不稳定。微量和大量营养元素或过程刺激药剂的添加，如：酵制剂和细菌，可能帮助改善生物降解过程以及获得更多的生产操作方法。然而，诸如此类的添加剂若用量过大对微生物是有毒性的，并且最佳用量也因厌氧过程的不同而不同。通过高度自动化批次发酵平台（AMPTS II),用户可以很容易的洋酒不同添加剂的直接影响并且了解他们是如何影响厌氧过程的。";
const detials = '• 环境影响测评技术导测大气';
const test ='设备测评';
const caseone= '通过测试细菌活性优化厌氧过程';
const casetwo= '利用添加剂最优化厌氧过程';
const casethree ='案例三';
const casefour ='案例四';
const recommendation ='相关推荐';
const devicerec ='仪器推荐';

const styles = {
  bg_gray:{
    backgroundColor: '#EEEEEE',
    marginBottom:'15px',
  },
  space:{
    marginTop:'50px',
    marginBottom:'50px'
  },
  bg_gray_whole:{
    backgroundColor: '#EEEEEE',
    paddingTop:'30px',
    paddingBottom:'30px'
  },
  conpsize:{
    margin:'0',
    position:'relative',
    float:'left'
  },
  fontbold:{
    fontWeight: 'bold',
    fontSize: '23px'
  },
  list_item: {
    listStyle: 'none',
    margin: '0',
    padding: '0 0 35px 0'
  },
  list_item_li:{
    marginBottom: '5px',
    fontSize:'14px'
  },
  caselabel:{
    marginBottom: '10px',
    marginLeft:'20px',
    borderTop:'20x',
  },
  casecontent:{
    fontSize:'14px',
    marginBottom: '10px',
    marginTop:'10x',
    marginLeft:'20px'
  },
  straightline: {
    position: 'relative',
    content: '',
    marginTop:'5px',
    marginBottom: '20px',
    height: '3px',
    backgroundColor: '#BFBFBF'
  },
}

const TestSpots = function TestSpots(props) {
  function render() {
    return (
      <_Col span={10} offset={4}>
        <_Row className="bg_gray">
          <_Col span={8}><img style={styles.conpsize } src="http://fakeimg.pl/300x200/" alt="" /></_Col>
          <_Col span={16}>
            <h3 style={ styles.caselabel }>{ props.caseNo }</h3>
            <p style={ styles.casecontent } >{ props.content }</p>
          </_Col>
        </_Row>
      </_Col>
    )
  }
  return render();
}

const SubSpots = function SubSpots(props) {
  function render() {
    return (
       <_Col span={5} offset={1}>
         <_Row>
          <_Col>
            <ul style={ styles.list_item }>
             <p style={ styles.list_item_li } >{ detials }</p>
            </ul>
          </_Col>
        </_Row>
      </_Col>
    )
  }
  return render();
}
const TopSpots = function TopSpots() {
  function render() {
    return (
      <_Card style={{  }} bodyStyle={{ padding: 0 }}>
        <div>
          <img style={{ display: 'block' }} alt="example" width="100%" src="http://fakeimg.pl/250x200" />
        </div>
        <div style={{ padding: '10px 16px', marginTop: '-50px', backgroundColor: '#134C86', opacity: '0.9' }}>
          <p style={{ color: '#FFF' }}>{ detials }</p>
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
          <img style={{display: 'block', height: '50%'}} alt="example" width="100%" src="http://fakeimg.pl/150x90/" />
        </div>
        <div style={{ padding: '5px 16px', marginTop: '-40px', backgroundColor: props.color, opacity: '0.9' }}>
          <p style={{ color: '#FFF' }}>{ detials }</p>
        </div>
      </_Card>
    )
  }
  return render();
}

const DeviceTest = React.createClass ({
  render(){
    return (
        <div style= {{ 'paddingTop': '60px', 'paddingBottom':'60px' }}>
            <_Row type="flex" justify="spaceAround" align="middle" style={styles.bg_gray_whole}>
              <_Col span={4} offset={4}>
                <_Row>
                  <_Col><SecondarySpots color={'#7ABCBA'}/></_Col>
                  <_Col><SecondarySpots color={'#B6CDB1'}/></_Col>
                </_Row>
              </_Col>
              <_Col span={6} offset={1}>
                <_Row>
                  <TopSpots />
                </_Row>
              </_Col>
              <_Col span={4} offset={1}>
                <_Row>
                  <_Col><SecondarySpots color={'#7ABCBA'}/></_Col>
                  <_Col><SecondarySpots color={'#B6CDB1'}/></_Col>
                </_Row>
              </_Col>
            </_Row>
            <_Row style={styles.space}>
              <_Col span={10} offset={4}>
                <h4 style={ styles.fontbold} > { test }</h4>
                <_Col style={ styles.straightline } ></_Col>
              </_Col>
              <_Col span={5} offset={1}>
                <h4 style={ styles.fontbold} > { devicerec }</h4>
                <_Col style={ styles.straightline } ></_Col>
              </_Col>
              <_Col>
                <TestSpots caseNo={ caseone } content={ content_1 } />
              </_Col>
              <_Col>
                <SubSpots/>
              </_Col>
              <_Col>
                <TestSpots caseNo={ caseone } content={ content_2 } />
              </_Col>
              <_Col>
                <TestSpots caseNo={ casethree } />
              </_Col>
              <_Col span={5} offset={1}>
                <h4 style={ styles.fontbold} > { recommendation }</h4>
                <_Col style={ styles.straightline } ></_Col>
              </_Col>
              <_Col>
                <SubSpots/>
              </_Col>
              <_Col>
                <TestSpots caseNo={ casethree } />
              </_Col>
              <_Col>
                <TestSpots caseNo={ casefour } />
              </_Col>
              <_Col span={5} offset={1}>
                <h4 style={ styles.fontbold} > { devicerec }</h4>
                <_Col style={ styles.straightline } ></_Col>
              </_Col>
              <_Col>
                <SubSpots/>
              </_Col>
            </_Row>
            <_Row>
              <_Col span={6} offset={4}></_Col>
              <_Col span={13}>
                <Pagination defaultCurrent={1} total={50} />
              </_Col>
            </_Row>
          </div>
    )
  }
});
export default DeviceTest;