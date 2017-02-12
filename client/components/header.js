import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';
import { Row, Col, BackTop, Input, Menu, Icon } from 'antd';
import request from 'request';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const home='首 页';
const apparatus='实验室仪器';
const equipment='沼气工程装备';
const meter='沼气仪表';
const instrument='水质分析仪';
const evaluation='设备测评';
const school='乐蛙学院';
const styles = {
  bg:{
    backgroundColor:'#000',
    height:'62px',
    position: 'fixed',
    zIndex:'98'
  },
  black:{
    backgroundColor:'#000',
  },
  logo:{
    marginTop:'15px',
    height:'30px',
    width:'100px'
  },
  image: {
    height:'25px',
    width:'25px'
  },
  input:{
   marginTop:'15px',
   marginBottom:'10px'
  },
  title:{
    color:'#FFF',
  }
}

const Header = inject('store')(function Header (props){

  function componentDidMount(){
    console.log('header mount');
    // request.get('http://localhost:3000/brands', function(err, res){
    //   props.store.setBrands(JSON.stringify(res.body));
    // })
  };

  function handleClick(e) {
    console.log('click ', e);
    props.store.setCurrent(e.key);
  }

  function render(){
    return (
      <div>
        <Row>
          <Col style={styles.bg} span={24}>
            <Row>
              <Col span={4} offset={1}>
                <a href="/"><img style={styles.logo} src="/images/Logo.png" /></a>
              </Col>
              <Col span={18} style={styles.black}>
                <Menu style={styles.black} onClick={handleClick} selectedKeys={[this.props.store.current]} mode="horizontal">
                  <SubMenu title={<span ><Link style={styles.title} to={'/shopshow'}><Icon type="setting" />{apparatus}</Link></span>}>
                    <MenuItemGroup title="Item 1">
                      <Menu.Item key="setting:1">Option 1</Menu.Item>
                      <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                      <Menu.Item key="setting:3">Option 3</Menu.Item>
                      <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>
                  <SubMenu title={<span style={styles.title}><Icon type="setting" />{equipment}</span>}>
                    <MenuItemGroup title="Item 1">
                      <Menu.Item key="setting:1">Option 1</Menu.Item>
                      <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                      <Menu.Item key="setting:3">Option 3</Menu.Item>
                      <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>
                  <SubMenu title={<span style={styles.title}><Icon type="setting" />{meter}</span>}>
                    <MenuItemGroup title="Item 1">
                      <Menu.Item key="setting:1">Option 1</Menu.Item>
                      <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                      <Menu.Item key="setting:3">Option 3</Menu.Item>
                      <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>
                  <SubMenu title={<span ><Link style={styles.title} to={'/shows'}><Icon type="setting" />{instrument}</Link></span>}>
                    <MenuItemGroup title="Item 1">
                      <Menu.Item key="setting:1">Option 1</Menu.Item>
                      <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                      <Menu.Item key="setting:3">Option 3</Menu.Item>
                      <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>

                  <Menu.Item style={styles.title} key="mailss"><Link style={styles.title} to={'/devicetest'}>{evaluation}</Link></Menu.Item>
                  <Menu.Item style={styles.title} key="mails"><Link style={styles.title} to={'/lewa'}>{school}</Link></Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Col>
        </Row>
        <BackTop/>
        {this.props.children}
      </div>
    )
  };

  return observer({
    componentDidMount,
    render
  })
});

export default Header;