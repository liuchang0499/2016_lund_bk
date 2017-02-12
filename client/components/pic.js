import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import request from 'request'
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';
import { observer, inject } from 'mobx-react';
import { Button,Modal, Input, Menu, Dropdown, Icon, message, Radio } from 'antd';

const heading= '产品介绍';
const sub_heading= 'AnSense  Online';
const button= '询  价';
const category= '选择咨询产品';
const defcategory= '实验仪器';
const AMPTS= 'AMPTS';
const company= '单位名称*';
const contact='联系人*';
const industry= '所属行业*';
const department= '部门*';
const positions= '职位';
const telno= '联系电话*';
const email= '邮箱*';
const address= '地址＊';
const province= '省份＊';
const buytime= '购买时间';
const budget= '预算情况';
const male= '先生';
const famale= '女士';
const zcode= '邮编';
const option_text = '主要特点 | 技术参数 | 应用领域 | 可选配件 | 类似产品';
const h1_1 = ' • 单次运行可在线，自动测量挥发性脂肪酸（VFA），碳酸氢盐,碱度,PH值和氨 ';
const h1_2 = ' • 电子和湿度之间完全隔离 ';
const h1_3 = ' • 双量程的流入/流出分析 ';
const h1_4 = ' • 工业电脑内含 AppliTek 控制器软件 ';
const h2_1 = ' • 第二代的设计，运动部件少，简单维护，无需特殊分析技能 ';
const h2_2 = ' • 电子和湿度之间完全隔离 ';
const h2_3 = ' • 多路复用多大8个采样点 ';
const h2_4 = ' • 扩展数据通信和交换功能 ';
const text_1 = '厌氧消化池常常被认为是自动调节的，但需要对关键参数进行检测，以获得最佳的效果。然而，由于用于厌氧消化的大多数分析方法具有昂贵或费时的特性，工业沼气池通常不广泛检测。出了几个参数，如 PH 值和气体流量。这就是为什么在现实中全面沼气池的商业开发往往受限的原因。运营商宁愿保持承载率相对较低以确保安全';
const text_2 = '工艺效率、性能和产气量在今天的全面沼气池成了次要的。实验室测量，如 GC-MS，用于确定个别挥发性脂肪酸，是非常有选择的方法，但无助于过程控制和透明度。他们常常需要长时间的准备步骤和引起系统性的分析错误，还不算每次分析的高成本。';
const maincategorymenu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);
const subcategorymenu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);
const buytimemenu = (
  <Menu>
    <Menu.Item key="1">1 year</Menu.Item>
    <Menu.Item key="2">3 years</Menu.Item>
    <Menu.Item key="3">5 years</Menu.Item>
  </Menu>
);
const budgetmenu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);
/*const menu = function menu(props) {
  function render(){
    return(
      <Menu>
        <Menu.Item key="1">{ props.itemContext }</Menu.Item>
        <Menu.Item key="2">{ props.itemContext }</Menu.Item>
        <Menu.Item key="3">{ props.itemContext }</Menu.Item>
      </Menu>
    )
  }
  return render();
}*/
const styles = {
  footer_bold:{
    fontWeight: 'bold',
    fontSize: '23px'
  },
  footer_bold_right:{
    float:'left',
    fontWeight: 'bold',
    fontSize: '28px',
  },
  topborder:{
    marginTop:'30px'
  },
  button:{
    width:'90px',
    height:'40px',
    fontSize:'20px'
  },
  product_image: {
    maxWidth: '361px',
    margin: 'auto',
    marginBottom: '50px'
  },
  straightline: {
    position: 'relative',
    content: '',
    marginBottom: '40px',
    marginTop:'5px',
    height: '3px',
    backgroundColor: '#BFBFBF'
  },
  straightline_top: {
    position: 'relative',
    content: '',
    marginBottom: '5px',
    marginTop:'0px',
    height: '3px',
    backgroundColor: '#BFBFBF'
  },
  float_left:{
    float:'left',
    position: 'relative',
    overflow: 'hidden',
    margin: '0px 26px',
    border:'1px #BFBFBF solid'
  },
  list_item: {
    listStyle: 'none',
    margin: '0',
    padding: '0 0 35px 0'
  },
  list_item_li:{
    fontSize:'17px',
    marginBottom: '15px'
  },
  modalrow:{
    padding: '8px 0px',
  }
}

const Pic = (inject('store')(function Dconsult (props){

  function componentDidMount(){
    console.log('Dconsult mount', this);
  }


  function showModal(e) {
     props.store.setVisible(true);
  }

   function handleOk(e) {
    console.log('Clicked OK');
    props.store.setconfirmLoading(true);
    setTimeout(() => {
      props.store.setVisible(false);
      props.store.setconfirmLoading(false);
    }, 2000);
    
  }

  function handleCancel(e) {
    console.log(e);
    props.store.setVisible(false);
  }
  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  function render(){
    return (
        <div style= {{ 'paddingTop': '120px', 'paddingBottom':'60px' }}>
          <_Row>
            <_Row>
             <_Col span={12} offset={5} > <h4 style={ styles.footer_bold_right}> { sub_heading }</h4></_Col>
             <_Col span={2} > <Button style={styles.button} onClick={showModal} type="primary">{ button }</Button></_Col>
            </_Row>
            <_Row>
              <Modal title={button} visible={this.props.store.visible} onOk={handleOk} confirmLoading={this.props.store.confirmLoading} onCancel={handleCancel}>
               {/* <p>{this.state.ModalText}</p>*/}
                <_Row style={styles.modalrow}>
                  <_Col span={3}>{category}</_Col>
                  <_Col span={6}>
                    <Dropdown.Button onClick={handleButtonClick} overlay={maincategorymenu} type="ghost">{defcategory}</Dropdown.Button>
                  </_Col>
                  <_Col span={4} offset={3}>
                    <Dropdown.Button onClick={handleButtonClick} overlay={subcategorymenu} type="ghost">{AMPTS}</Dropdown.Button>
                  </_Col>
                </_Row>
                <_Row style={styles.modalrow}>
                  <_Col span={3}>{company}</_Col>
                  <_Col span={4}><Input placeholder="default size" /></_Col>
                  <_Col span={2} offset={3}>{contact}</_Col>
                  <_Col span={4}><Input placeholder="default size" /></_Col>
                  <_Col span={6} offset={1}><Radio>{male}</Radio><Radio>{famale}</Radio></_Col>
                </_Row>
                 <_Row style={styles.modalrow}>
                  <_Col span={3}>{industry}</_Col>
                  <_Col span={4}><Input placeholder="default size" /></_Col>
                  <_Col span={2} offset={3}>{department}</_Col>
                  <_Col span={4}><Input placeholder="default size" /></_Col>
                  <_Col span={2} offset={1}>{positions}</_Col>
                  <_Col span={4}><Input placeholder="default size" /></_Col>
                </_Row>
                 <_Row style={styles.modalrow}>
                  <_Col span={3}>{telno}</_Col>
                  <_Col span={4}><Input placeholder="default size" /></_Col>
                  <_Col span={2} offset={3}>{email}</_Col>
                  <_Col span={4}><Input placeholder="default size" /></_Col>
                </_Row>
                 <_Row style={styles.modalrow}>
                  <_Col span={3}>{address}</_Col>
                  <_Col span={4}><Input placeholder="default size" /></_Col>
                  <_Col span={2} offset={3}>{province}</_Col>
                  <_Col span={4}><Input placeholder="default size" /></_Col>
                  <_Col span={2} offset={1}>{zcode}</_Col>
                  <_Col span={4}><Input placeholder="default size" /></_Col>
                </_Row>
                 <_Row style={styles.modalrow}>
                  <_Col span={3}>{buytime}</_Col>
                  <_Col span={4}>
                    <Dropdown.Button onClick={handleButtonClick} overlay={buytimemenu} type="ghost">{defcategory}</Dropdown.Button>
                  </_Col>
                  <_Col span={2} offset={3}>{budget}</_Col>
                  <_Col span={4} >
                    <Dropdown.Button onClick={handleButtonClick} overlay={budgetmenu} type="ghost">{AMPTS}</Dropdown.Button>
                  </_Col>
                </_Row>
              </Modal>
            </_Row>
            <_Row >
              <_Col span={14} offset={5} style={ styles.straightline } ></_Col>
            </_Row>
            <_Row>
              <_Col span={8} offset={4}>
                <_Col style={ styles.product_image }>
                  <img src="images/duel-phone-big.png"/>
                </_Col>
              </_Col>
              <_Col span={6}>
                  <h4 style={ styles.footer_bold} >{ heading }</h4>
                  <p>{ text_1 } <br/> { text_2 }</p>
              </_Col>
             </_Row>
              <_Row>
                <_Col span={14} offset={5}>
                  <_Col style={ styles.float_left}>
                     <img class="cicle" src="http://fakeimg.pl/123x123/" alt=""/>
                  </_Col>
                  <_Col style={ styles.float_left}>
                     <img class="cicle" src="http://fakeimg.pl/123x123/" alt=""/>
                  </_Col>
                  <_Col style={ styles.float_left}>
                     <img class="cicle" src="http://fakeimg.pl/123x123/" alt=""/>
                  </_Col>
                </_Col>
            </_Row>
          </_Row>
          <_Row style={styles.topborder}>
            <_Row type="flex" justify="center" >
              <_Col style={ styles.straightline_top } ></_Col>
            </_Row>
             <_Row >
              <_Col span={14} offset={5}>
                <h4 style={ styles.footer_bold} > { option_text }</h4>
              </_Col>
            </_Row>
            <_Row >
              <_Col span={14} offset={5} style={ styles.straightline } ></_Col>
            </_Row>
          </_Row>
          <_Row type="flex" justify="center">
            <_Col span={8} offset={2}>
              <ul style={ styles.list_item }>
                  <li style={ styles.list_item_li }> { h1_1 }</li>
                  <li style={ styles.list_item_li }> { h1_2 }</li>
                  <li style={ styles.list_item_li }> { h1_3 }</li>
                  <li style={ styles.list_item_li }> { h1_4 }</li>
                </ul>
            </_Col>
            <_Col span={8} >
                <ul style={ styles.list_item }>
                  <li style={ styles.list_item_li }> { h2_1 }</li>
                  <li style={ styles.list_item_li }> { h2_2 }</li>
                  <li style={ styles.list_item_li }> { h2_3 }</li>
                  <li style={ styles.list_item_li }> { h2_4 }</li>
                </ul>
            </_Col>
          </_Row>
        </div>
   )
  };
  return observer({
    render
  })
}));
export default Pic;