import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Row, Col} from 'antd';

const copyright = '版权所有: 碧普华瑞环境技术(北京)有限公司 Copyright';
const companyid = '2016 京ICP备11039760号.';
const aboutSite = '关于青枣网';
const jobs = '加入我们';
const mediaChannel = '媒体通道';
const feedback = '反馈建议:';
const contact_tel = '客服电话:';
const worktime = '工作时间: 周一到周五 09 : 00 - 17 : 00';
const tel = '全国免费咨询电话';
const telno = '400-8989-939';
const partner = '合作伙伴';

const styles = {
  inc: {
    height: '20px',
    float:'left',
    backgroundColor:'transparent'
  }
}
const Footer = React.createClass ({
  render(){
    return (
      <footer>
        <Row style={{ backgroundColor:'#ECECEC', borderTop: '3px groove #BFBFBF', height: '280px' }}>
          <Col span={11} offset={3} style={{marginTop:'30px'}}>
            <p style={{ fontSize: '12px', fontWeight: 'bold' }}> { aboutSite } | <Link to={'/jobs'}>{jobs} </Link> | {mediaChannel}</p>
            <p style={{ fontSize: '12px', marginTop:'15px'}}>{ feedback }</p>
            <p style={{ fontSize: '12px' }}>{ contact_tel }</p>
            <p style={{ fontSize: '12px' }}>{ worktime }</p>
            <p style={{ fontSize: '12px', fontWeight: 'bold', marginTop:'20px' }}>{ tel }</p>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}> { telno }</p>
          </Col>
          <Col span={7} style={{marginTop:'30px'}}>
            <Row>
              <p style={{ fontSize: '12px', fontWeight: 'bold' }} >{ partner }</p>
            </Row>
            <Row>
             <Col span={6}>
              <img style={{ height: '40px' }} src="/images/4c_awite-logo_2014.png" />
             </Col>
             <Col span={4}>
              <img style={{ height: '35px' }} src="/images/logo3.png" />
             </Col>
             <Col span={8}>
              <img  style={{ height: '20px' }} src="/images/bpc_logo.png" />
             </Col>
            </Row>
          </Col>
        </Row>
        <Row type="flex" align="middle" style={{backgroundColor:'#DDDDDD', height: '55px'}}>
           <Col span={11} offset={3}>
              <p style={{ fontSize: '8px' }}>{copyright}&#169;{companyid}</p>
           </Col>
           <Col span={5} offset={5}>
              <img style={styles.inc} src="/images/logologos.png"></img>
           </Col>
        </Row>
      </footer>
    )
  }
});
export default Footer ;