import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';

const heading= '设备租赁详情';
const sixmonth= '小于6个月租赁时间';
const pricemax= '5000元/月';
const oneyear= '12个月—18个月';
const pricemiddle= '4500元/月';
const moreyear= '18个月以上>';
const pricelow= '4000元/月';
const label= '设备租赁详细信息咨询请发送邮件到';

const styles = {
  fontbold:{
    fontWeight: 'bold',
    fontSize: '20px'
  },
  label:{
    fontSize: '20px',
    color:'#AAAAAA',
    marginBottom:'40px'
  },
  img:{
    marginTop:'30px',
    marginLeft:'20px'
  },
  straightline_long: {
    position: 'relative',
    content: '',
    marginTop:'5px',
    marginBottom: '5px',
    height: '3px',
    backgroundColor: '#BFBFBF'
  },
  straightline_long_break: {
    borderTop:'#00686b 1px dashed',
    overflow:'hidden',
    height:'1px'
  },
  list_item: {
    listStyle: 'none',
    marginTop: '50px ',
    padding: '0 0 5px 0'
  },
  list_item_li:{
    marginBottom: '50px',
    fontSize:'18px'
  },
  float_left:{
    float:'left',
    marginTop:'5px',
    marginRight:'5px'
  },
}

const RentSpots = function RentSpots(props) {
  function render() {
    return (
        <_Col span ={17} offset={5}>
          <_Col span={8}><img style={styles.img} src="http://fakeimg.pl/245x225/" /></_Col>
          <_Col span={8}>
            <ul style={ styles.list_item }>
              <li style={ styles.list_item_li }><img style={styles.float_left } src="/images/bullet.png" /> { sixmonth }</li>
              <li style={ styles.list_item_li }><img style={styles.float_left } src="/images/bullet.png" /> { oneyear }</li>
              <li style={ styles.list_item_li }><img style={styles.float_left } src="/images/bullet.png" /> { moreyear }</li>
            </ul>
          </_Col>
          <_Col span={8}>
            <ul style={ styles.list_item }>
              <li style={ styles.list_item_li }> { props.pricemax }</li>
              <li style={ styles.list_item_li }> { props.pricemiddle }</li>
              <li style={ styles.list_item_li }> { props.pricelow }</li>
            </ul>
        </_Col>
      </_Col>
    )
  }
  return render();
}

const DeviceBorrow = React.createClass ({

  render() {
    return (
       <div style= {{ 'paddingTop': '120px', 'paddingBottom':'60px' }}>
         <_Row>
           <_Col span ={3} offset={5}>
             <p style={styles.fontbold } >{ heading }</p>
           </_Col>
         </_Row>
         <_Row>
           <_Col span ={14} offset={5} style={ styles.straightline_long } ></_Col>
         </_Row>
         <_Row>
           <_Row>
             <RentSpots pricemax={ pricemax } pricemiddle={ pricemiddle } pricelow={ pricelow }/>
           </_Row>
           <_Row>
             <_Col span ={14} offset={5} style={ styles.straightline_long_break} ></_Col>
           </_Row>
           <_Row>
             <RentSpots pricemax={ pricemax } pricemiddle={ pricemiddle } pricelow={ pricelow }/>
           </_Row>
           <_Row>
             <_Col span ={14} offset={5} style={ styles.straightline_long_break} ></_Col>
           </_Row>
           <_Row>
             <RentSpots pricemax={ pricemax } pricemiddle={ pricemiddle } pricelow={ pricelow }/>
           </_Row>
         </_Row>
         <_Row>
           <_Col span ={14} offset={5} style={ styles.straightline_long } ></_Col>
         </_Row>
         <_Row>
           <_Col span ={8} offset={5}> <p style={styles.label } >{ label }</p>  </_Col>
         </_Row>
       </div>
    );
  }
});
export default DeviceBorrow;
