import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const heading= '以下是我们开放申请的职位（点击标题查看职位介绍）';
const job1= '行政助理';
const job2= '市场助理';
const job3= '产品销售工程师';
const job4= '干发酵技术开发工程师';
const duty1= '工作职责：';
const duty_list1= '1A.常驻北京，负责公司的行政事务和日常工作；';
const duty_list2= '1B.常驻长沙，北京轮训6个月，负责长沙办事处的筹建；';
const duty_list3= '2.单于理会与项目会议，会议记录及整理工作；';
const duty_list4= '3.负责公司产品销售记录情况；';
const duty_list5= '4.公司基本建设及信息维护和整理工作。';
const req1= '职位要求：';
const req_list1= '1.大专及以上学历；';
const req_list2= '2.精通PC/Mac 常用办公软件；';
const req_list3= '3.专业性强，愿与公司创业团队共同进退。';
const email= '请将简历发送至 HR@novaskantek.com';

const styles= {
  fontbold:{
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop:'50px'
},
  imag:{
    float:'left'
  },
  straightline_long: {
    position: 'relative',
    content: '',
    marginTop:'5px',
    marginBottom: '2px',
    height: '3px',
    backgroundColor: '#BFBFBF'
  },
  headingfont:{
    fontWeight: 'bold',
    fontSize: '22px'
  },
  content_title:{
    fontWeight: 'bold',
    fontSize: '18px'
  },
  p:{
    padding:'40px 0'
  }
};


const GallerySpots = function GallerySpots(props) {
  function render() {
    return (
      <div>
        <_Row>
            <_Col span={6}></_Col>
              <_Col  span={18}>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
            </_Col>
          </_Row>
          <_Row>
            <_Col span={6}></_Col>
              <_Col  span={18}>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
            </_Col>
          </_Row>
          <_Row>
            <_Col span={6}></_Col>
              <_Col  span={18}>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
            </_Col>
          </_Row>
          <_Row>
            <_Col span={6}></_Col>
              <_Col  span={18}>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
              <img style={styles.imag} src="http://fakeimg.pl/260x180/"/>
            </_Col>
          </_Row>
          </div>
    )
  }
  return render();
}

 const Jobs = React.createClass ({
  render(){
    return (
      <div style= {{ 'paddingTop': '120px', 'paddingBottom':'60px' }}>
        <_Row span={18} offset={3}>
          <GallerySpots/>
        </_Row>
        <_Row>
          <_Col span={8} offset={6} style={ styles.fontbold } >
             <p style={ styles.headingfont }>{ heading }</p>
          </_Col>
        </_Row>
        <_Row >
          <_Col span={12} offset={6} style={ styles.straightline_long } ></_Col>
        </_Row>
        <_Row>
          <_Col span={12} offset={6}>
             <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header={ job1 } key="1">
                  <p>{job1}</p>
                </Panel>
                <Panel header={ job2 } key="2">
                  <p>{job1}</p>
                </Panel>
                <Panel header={ job3 } key="3">
                  <p>{job1}</p>
                </Panel>
                <Panel header={ job4 } key="4">
                  <p>{job1}</p>
                </Panel>
              </Collapse>
              <p style={styles.p}>{email}</p>
          </_Col>
        </_Row>
        <_Row>
          <GallerySpots/>
       </_Row>
     </div>
   )
  }
});

export default Jobs;
