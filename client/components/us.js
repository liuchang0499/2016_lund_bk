import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Icon,Collapse,Button,Row, Col } from 'antd';

const Panel = Collapse.Panel;
const description = ' • 环境影响测评技术导测大气环境';
const detials = '环境影响测评技术导测大气';
const link = '详情 >>';
const material ='发酵物料';
const control ='过程控制';
const proces ='工艺工程';
const event = '活动预告';
const onlinecomputer = '在线计算机';

const styles = {
  list_item: {
    listStyle: 'none',
    padding: '10px 0 35px 0'
  },
  list_item_li:{
    marginBottom: '6px',
    fontSize:'17px'
  },
  list_item_large: {
    listStyle: 'none',
    margin: '0',
    padding: '-5px 0 0px 0',
  },
  list_item_li_large:{
    marginBottom: '18px',
    marginTop:'25px',
    fontSize:'18px',
  },
  list_item_font:{
    fontSize:'14px'
  },
  list_item_link:{
    fontSize:'14px',
    color: '#23b051',
    textAlign: 'left',
    fontCorlor:'#23b051'
  },
  float_left:{
    float:'left',
    paddingBottom:'20px'
  },
  footer_bold:{
    fontWeight: 'bold',
    fontSize: '20px'
  },
  straightline: {
    position: 'relative',
    content: '',
    marginTop:'5px',
    marginBottom: '20px',
    height: '3px',
    backgroundColor: '#BFBFBF'
  },
  dossline:{
    border:'1px dotted #000',
    position: 'relative',
    marginBottom: '8px',
    marginTop:'3px',
  },
};
const LewaSpots = function LewaSpots(props) {
  function render() {
    return (
      <Col span={11}>
        <Col>
          <h4 style={ styles.footer_bold} >{ props.label }</h4>
          <div style={ styles.straightline } ></div>
         </Col>
         <Col span={24}>
            <Col span={15} style={ styles.float_left } >
              <img src="http://fakeimg.pl/303x163/"/>
            </Col>
            <Col span={8} offset={1} style={ styles.list_item_font} >
              <p>{ detials } </p>
              <p style={ styles.list_item_link} >{ link }</p>
            </Col>
          </Col>
          <Col>
            <ul style={ styles.list_item }>
              <li style={ styles.list_item_li }> { description }</li>
              <li style={ styles.list_item_li }> { description }</li>
              <li style={ styles.list_item_li }> { description }</li>
            </ul>
          </Col>
        </Col>
    )
  }
  return render();
}

const Us = React.createClass ({
  render(){
    return (
      <div style= {{ 'paddingTop': '120px', 'paddingBottom':'60px' }}>
        <Row style= {{ 'paddingBottom':'30px' }}>
          <Col span={12} offset={4}>
            <Row>
              <Col>
                <h4 style={ styles.footer_bold} > { material } </h4>
              </Col>
            </Row>
            <Row>
              <Col span={22} style={ styles.straightline } ></Col>
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  <img style={{ display: 'block' }} alt="example" width="100%" src="http://fakeimg.pl/550x300" />
                </div>
                <div style={{ padding: '10px 16px', marginTop: '-50px', backgroundColor: '#134C86', opacity: '0.9' }}>
                  <p style={{ color: '#FFF' }}>ATML 简要评测</p>
                </div>
              </Col>
              <Col span={8} offset={2}>
                <ul style={ styles.list_item }>
                  <li style={ styles.list_item_li }> { detials }</li>
                  <div style={styles.dossline}></div>
                  <li style={ styles.list_item_li }> { detials }</li>
                  <div style={styles.dossline}></div>
                  <li style={ styles.list_item_li }> { detials }</li>
                  <div style={styles.dossline}></div>
                  <li style={ styles.list_item_li }> { detials }</li>
                  <div style={styles.dossline}></div>
                  <li style={ styles.list_item_li }> { detials }</li>
                  <div style={styles.dossline}></div>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row>
              <Col>
                <h4 style={ styles.footer_bold} > { event } </h4>
              </Col>
             </Row>
             <Row>
               <Col style={ styles.straightline } ></Col>
            </Row>
            <Row>
              <Col>
                <Collapse bordered={false} style={ styles.list_item_large }>
                  <Panel style={ styles.list_item_li_large } header={detials} key="1">
                    <p></p>
                  </Panel>
                  <Panel style={ styles.list_item_li_large } header={detials} key="2">
                    <p></p>
                  </Panel>
                  <Panel style={ styles.list_item_li_large } header={detials} key="3">
                    <p></p>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={4}>
            <LewaSpots label={ material }/>
            <Col span={1}></Col>
            <LewaSpots label={ proces }/>
            <LewaSpots label={ proces}/>
            <Col span={1}></Col>
            <LewaSpots label={ control }/>
            <LewaSpots label={ event }/>
            <Col span={1}></Col>
            <LewaSpots label={ material }/>
          </Col>
          <Col span={4}>
            <Row>
              <Col>
                <h4 style={ styles.footer_bold} > { onlinecomputer } </h4>
              </Col>
            </Row>
            <Row>
              <Col style={ styles.straightline } ></Col>
            </Row>
            <Row>
              <Col>
                <Collapse bordered={false} style={ styles.list_item_large }>
                  <Panel style={ styles.list_item_li_large } header={detials} key="1">
                    <p></p>
                  </Panel>
                  <Panel style={ styles.list_item_li_large } header={detials} key="2">
                    <p></p>
                  </Panel>
                  <Panel style={ styles.list_item_li_large } header={detials} key="3">
                    <p></p>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </Col>
        </Row>
    </div>
   )
  }
});
export default Us;

