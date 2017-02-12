import React from 'react';
import { render } from 'react-dom';
import { Row, Col, Button, InputNumber, Table } from 'antd';
import mobx from 'mobx';
import { observer, inject, toJS } from 'mobx-react';
import { Form, Input, Cascader, Select, Popconfirm } from 'antd';
import { Mention } from 'antd';
import cookie from 'react-cookie';

const { toString } = Mention;
const FormItem = Form.Item;
// const Option = Select.Option;
// const onChange =InputNumber.onChange;
// const onChangess= Mention.onChange;

let value= Input.value;

const yourorder= '您的订单信息';
const orderfill= '填写核对订单信息';
const category= '100ml 玻璃瓶';
const button= '确认订单';
const contact= '联系人*';
const phone= '联系电话*';
const email= '邮箱*';
const company= '单位名称*';
const department= '部门*';
const area= '所在地区*';
const address= '详细地址*';
const comment= '订单备注*';

const residences = [
  {
    value: '北京',
    label: '北京',
    children: [
      {
        value: '东城区',
        label: '东城区',
      },
      { value: '西城区',
        label: '西城区',
      },
      { value: '丰台区',
        label: '丰台区',
      },
      { value: '石景山区',
        label: '石景山区',
      },
      { value: '海淀区',
        label: '海淀区',
      },
      { value: '房山区',
        label: '房山区',
      }
    ],
  },
  {
    value: '天津',
    label: '天津',
    children: [
      {
        value: '和平区',
        label: '和平区',
      },
      {
        value: '河东区',
        label: '河东区',
      },
      {
        value: '南开区',
        label: '南开区',
      }
    ],
  }
];

const styles = {
  fontbold: {
    fontWeight: 'bold',
    fontSize: '23px',
    marginBottom: '10px'
  },
  floatRight: {
    float: 'right'
  },
  imgSize: {
    float: 'left',
    marginRight: '20px'
  },
  inputnumber: {
    width: '40px',
    height: '30px',
    fontSize: '20px',
    marginBottom: '10px',
    marginTop: '35px',
  },
  prices: {
    fontSize: '20px',
    marginBottom: '10px',
    marginTop: '35px',
  },
  input: {
    margin: '0 auto'
  },
  phone: {
    width: '220px',
    height: '40px'
  },
  cascader: {
    width: '250px',
    height: '40px',
    fontSize: '18px',
    marginBottom: '3px'
  },
  mention: {
    width: '100%',
    height: '100px'
  },

  label: {
    textAlign: 'right'
  },
  button: {
    width: '90px',
    height: '35px'
  },
  end: {
    marginTop: '60px'
  },
  form: {
    marginLeft: '20px'
  },
  formItemMargin: {
    margin: '10px 0px'
  }
};

const Invoice = Form.create()(inject('store')(function Invoice (props){

  function componentDidMount(){
    console.log('Invoice mount', props);
  }

  function onChangess(editorState) {
    console.log('onChangess', toString(editorState));
  }

  function onChange(event) {
    console.log('input value', event);
    value = event;
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        props.store.openPdf(values);
      }
    });
  }

  function onDelete (index) {
    console.log('onDelete', index);
    // props.store.deleteCart(index);
  }

  function addCookie() {
    console.debug('addCookie');
    cookie.save('productionId', 1, { path: '/' });
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

  function onRowClick (record, event) {
    console.log(record, event, value);
    props.store.updateCartTotals(event, value);
  }

  function render(){
    const { getFieldDecorator } = this.props.form;
    const columns = [
      {
        title: '产品',
        dataIndex: 'product',
        key: 'product',
            render: text => <div><img style={styles.imgSize} src="http://fakeimg.pl/150x150" /><h5 style={ styles.category}>{text}</h5></div>,
      }, {
        title: '单价',
        dataIndex: 'prices',
        key: 'prices'
      }, {
        title: '数量',
        dataIndex: 'amount',
        key: 'amount',
        onChange: (value) => {
          console.log('changed', value);
        },
        render: text => <InputNumber style={styles.inputnumber} min={1} max={100} defaultValue={1} onChange={onChange}/>,
      }, {
        title: '小结',
        dataIndex: 'totals',
        key: 'totals'
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record, index) => {
          return (
            <Popconfirm title="Sure to delete?" onConfirm={onDelete(index)}>
              <a href="#">X</a>
            </Popconfirm>
          )
        }
      }
    ];
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
        <Option value="46">+46</Option>
      </Select>
    );
    return (
      <Row style={{ paddingTop: '155px', marginBottom: '30px' }}>
        <Col span={20} offset={2}>
          <Row style={{borderBottom:'3px solid #BFBFBF', marginBottom: '25px'}}>
            <Col span={6} offset={2}>
              <h4 style={ styles.fontbold}>{ yourorder }</h4>
            </Col>
          </Row>
          <Row>
            <Col span={20} offset={2}>
               <Table columns={columns} dataSource={mobx.toJS(props.store.cart)} pagination={false} onRowClick={onRowClick}/>
            </Col>
          </Row>

          <Row style={{borderBottom:'3px solid #BFBFBF', marginBottom: '25px', marginTop: '50px'}}>
           <Col span={6} offset={2}>
             <h4 style={ styles.fontbold}>{ orderfill }</h4>
            </Col>
          </Row>

          <Form onSubmit={handleSubmit}>
            <Row style={styles.form}>
              <Col span={10} offset={2}>

                <Row type="flex" justify="space-around" align="middle">
                  <Col style={styles.label} span={4}>
                    {contact}
                  </Col>
                  <Col span={20}>
                    <FormItem style={styles.formItemMargin}>
                      {getFieldDecorator('contact', {
                        rules: [{ required: true, message: '' }],
                      })(
                        <Input style={styles.input}/>
                      )}
                     </FormItem>
                   </Col>
                </Row>

                <Row type="flex" justify="space-around" align="middle">
                   <Col style={styles.label} span={4}>
                    {email}
                  </Col>
                  <Col span={20}>
                   <FormItem style={styles.formItemMargin}>
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: '' }],
                      })(
                        <Input style={styles.input} placeholder={email} />
                      )}
                    </FormItem>
                  </Col>
                </Row>

                <Row type="flex" justify="space-around" align="middle">
                  <Col style={styles.label} span={4}>
                    {company}
                  </Col>
                  <Col span={20}>
                  <FormItem style={styles.formItemMargin}>
                    {getFieldDecorator('company', {
                      rules: [{ required: true, message: '' }],
                    })(
                      <Input style={styles.input} placeholder={company} />
                    )}
                  </FormItem>
                 </Col>
                 </Row>

                 <Row type="flex" justify="space-around" align="middle">
                  <Col style={styles.label} span={4}>
                    {area}
                  </Col>
                  <Col span={20}>
                  <FormItem style={styles.formItemMargin}>
                    {getFieldDecorator('residence', {
                      initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                      rules: [{ type: 'array', required: true, message: '' }],
                    })(
                      <Cascader style={styles.cascader} options={residences} />
                    )}
                  </FormItem>
                </Col>
                </Row>
                <Row type="flex" justify="space-around" align="middle">
                  <Col style={styles.label} span={4}>
                    {address}
                  </Col>
                  <Col span={20}>
                  <FormItem style={styles.formItemMargin}>
                    {getFieldDecorator('address', {
                      rules: [{ required: true, message: '' }],
                    })(
                      <Input style={styles.input} placeholder={address} />
                    )}
                  </FormItem>
                </Col>
                </Row>

             </Col>

            <Col span={10}>
              <Row type="flex" justify="space-around" align="middle">
                <Col style={styles.label} span={4}>
                    {phone}
                </Col>
                <Col span={20}>
                  <FormItem style={styles.formItemMargin}>
                      {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '' }],
                      })(
                        <Input style={styles.phone} addonBefore={prefixSelector} placeholder={phone} />
                      )}
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={24} style={{marginBottom: '40px'}}></Col>
              </Row>

              <Row type="flex" justify="space-around" align="middle">
                <Col style={styles.label} span={4}>{ department }</Col>
                <Col span={20}>
                  <FormItem style={styles.formItemMargin}>
                    {getFieldDecorator('department', {
                      rules: [{ required: true, message: '' }],
                    })(
                      <Input style={styles.input} placeholder={department} />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </Col>

            </Row>
            <Row style={{borderTop:'1px solid #BFBFBF', marginBottom: '25px', paddingTop: '20px'}}>

                <Col style={styles.label} span={2} offset={2}>
                  {comment}
                </Col>
                <Col span={14}>
                  <FormItem >
                    <Mention style={styles.mention} onChange={onChangess} suggestions={['afc163']} multiLines />
                  </FormItem>
                 </Col>

            </Row>
            <Row>
              <Col style={styles.end} span={3} offset={21}>
                <FormItem>
                  <Button style={styles.button} type="primary" htmlType="submit" >{ button }</Button>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }

  return observer({
    componentDidMount,
    render,
    onChange,
    onRowClick,
    onDelete
  });
}));

export default Invoice;
