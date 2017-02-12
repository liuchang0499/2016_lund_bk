import React from 'react';
import { render } from 'react-dom';
import { observer, inject } from 'mobx-react';
import { Button, Col, Row, Form, Icon, Input } from 'antd';
// import request from 'superagent';
import cookie from 'react-cookie';

const FormItem = Form.Item;
const styles = {
  offsetHeader:{
    padding: '100px'
  },
  box: {
    padding: '20px'
  }
}

const Admin = Form.create()(inject('store')(function Admin (props){

  function componentDidMount(){
    console.log('Admin mount', this);
    // request.get('/api/brands', function(err, res){
    //   props.store.setBrands(JSON.stringify(res.body));
    // });

  }

  function handlerRegister(){
    console.log('handlerRegister');
    request.post('/api/register')
      .send( {'username': 'test', 'password':'test123' } )
      .end(function(err, res){
      console.log(err, res);
    })
  }

  function handlerLogin(){
    console.log('handlerLogin');
    request.post('/api/login')
      .send( {'username': 'test', 'password':'test123' } )
      .end(function(err, res){
        console.log(err, res);
      })
  }

  function handlerPing(){
    console.log('handlerPing');
    request.post('/api/me', function(err, res){
      console.log(err, res.body);
    })
  }

  function handlerLogout(){
    console.log('handlerLogout');
    request.post('/api/logout', function(err, res){
      console.log(err, res.body);
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  function addCookie() {
    console.debug('addCookie');
    cookie.save('productionId', Math.random(), { path: '/' });
  }

  function loadCookie() {
    console.debug('loadCookie', cookie.load('productionId'));
    props.store.setCookie(cookie.load('productionId'));
  }

  function removeCookie() {
    console.debug('removeCookie');
    cookie.remove('productionId');
    props.store.setCookie('none cookie');
  }

  function render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div style= {styles.offsetHeader}>
        <Row style={styles.box}>
          <Col span={5} offset={2}>
            <Button bsStyle="primary" onClick={handlerRegister}>Register</Button>
          </Col>
          <Col span={5}>
            <Button bsStyle="primary" onClick={handlerLogin}>Login</Button>
          </Col>
          <Col span={5}>
            <Button bsStyle="primary" onClick={handlerPing}>Ping</Button>
          </Col>
          <Col span={5}>
            <Button bsStyle="primary" onClick={handlerLogout}>Logout</Button>
          </Col>
        </Row>
        <Row style={styles.box}>
          <Col span={20} offset={2}>
            <Form inline onSubmit={handleSubmit}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input addonBefore={<Icon type="user" />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">Log in</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
        <Row style={styles.box}>
          <Col span={20} offset={2}>
            <div>Cookie Key: productionId</div>
            <div>Cookie value: {props.store.cookie}</div>
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={3}>
            <Button bsStyle="primary" onClick={addCookie}>Add Cookie</Button>
          </Col>
          <Col span={6}>
            <Button bsStyle="primary" onClick={loadCookie}>Load Cookie</Button>
          </Col>
          <Col span={6}>
            <Button bsStyle="primary" onClick={removeCookie}>Remove Cookie</Button>
          </Col>
        </Row>
        <div id="viewport"/>
      </div>
    )
  };

  return observer({
    componentDidMount,
    render
  })
}));

export default Admin;
