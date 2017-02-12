import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import request from 'request'
import { Button, Modal, Form, Input, Icon } from 'antd';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';
import { observer, inject } from 'mobx-react';
const FormItem=Form.Item;
const heading= '查询相关设备';
const hinding= '输入唯一标识编码（生产编码/序列号/购买订单编码）';
const proces= '售后维修流程';
const download= '保修单下载>';
const order= '订单';
const buyer= '购买单位';
const time= '购买时间';
const repair= '是否维修';
const maintain= '是否保修';
const contact= '联系人';
const button= '继续查询';

const styles = {
  centre:{
    marginTop:'35px',
    marginBottom:'25px',
  },
  headingfont:{
    fontWeight: 'bold',
    fontSize: '26px',
  },
  label:{
    fontWeight:'bold',
    fontSize:'20px'
  },
  label_right:{
    textAlign:'right',
    color:'#16BB62'
  },
  straightline_long: {
    position: 'relative',
    content: '',
    marginBottom: '50px',
    marginTop:'5px',
    height: '3px',
    backgroundColor: '#BFBFBF'
  },
  textinput:{
    width:'400%',
    marginBottom :'20px',
    border:'3px solid #16BB62'
  },
  list_item: {
    marginLeft:'40px',
    marginTop:'50px',
  },
  list_item_li:{
    paddingTop:'5px',
    paddingLeft:'20px',
    fontSize:'16px',
  },
  list_item_li_active:{
    paddingTop:'5px',
    paddingLeft:'20px',
    fontSize:'16px',
    backgroundColor:'#EEEEEE',
},
  circle:{
    borderRadius:'50%',
    overflow:'hidden'
  },
  orderpic:{
    marginTop:'50px'
},
  modalp:{
    paddingBottom:'100px',
  }
}

const Dconsult = Form.create()(inject('store')(function Dconsult (props){

  function componentDidMount(){
    console.log('Dconsult mount', this);
  }

  function handleSubmit(e) {
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  function showModal(e) {
    props.store.setVisible(true);
  }

  function handleOk(e) {
    console.log('Clicked OK');
    props.store.setVisible(false);
  }

  function handleCancel(e) {
    console.log(e);
    props.store.setVisible(false);
  }

  function render(){
    const { getFieldDecorator } = this.props.form;
      return (
        <div style= {{ 'paddingTop': '120px', 'paddingBottom':'60px' }}>
          <_Row type="flex" justify="center">
            <_Col><img style={styles.circle} src="http://fakeimg.pl/125x125/"/></_Col>
          </_Row>
          <_Row type="flex" justify="center">
            <_Col style={ styles.centre }>
              <p style={ styles.headingfont }>{ heading }</p>
            </_Col>
          </_Row>
          <_Row>
            <_Col span={8} offset={8}>
              <Form inline onSubmit={handleSubmit}>
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: {hinding} }],
                  })(
                    <Input ddonBefore={<Icon type="user" />} style={styles.textinput} placeholder={ hinding } />
                  )}
                </FormItem>
              </Form>
            </_Col>
          </_Row>
          <_Row>
            <_Col span={16} offset={4}>
              <_Col span={12}>
                <label style={styles.label} onClick={showModal}>{ proces }</label>
              </_Col>
              <_Col span={12} style={styles.label_right}>
                <label >{ download }</label>
              </_Col>
            </_Col>
          </_Row>
          <_Row>
            <Modal style={styles.modalsize} visible={ this.props.store.visible} onOk={handleOk} onCancel={handleCancel}>
              <_Row>
                <_Col span={12} ><img style={styles.orderpic} src="http://fakeimg.pl/300x255/" /></_Col>
                <_Col span={12}>
                  <p >
                    <ul style={ styles.list_item }>
                      <li style={ styles.list_item_li_active }> { buyer }</li>
                      <li style={ styles.list_item_li }> { time }</li>
                      <li style={ styles.list_item_li_active }> { repair }</li>
                      <li style={ styles.list_item_li }> { maintain }</li>
                      <li style={ styles.list_item_li_active }> { contact }</li>
                    </ul>
                  </p>
                </_Col>
              </_Row>
            </Modal>
          </_Row>
          <_Row>
            <_Col span={16} offset={4} style={ styles.straightline_long } ></_Col>
          </_Row>
          <_Row type="flex" justify="center">
            <_Col>
               <img src="/images/diagram.png" />
            </_Col>
          </_Row>
        </div>
      )
    };
    return observer({
    render
  })
}));

export default Dconsult;
