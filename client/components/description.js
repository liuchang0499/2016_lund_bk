import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';

const heading = '乐蛙学院';
const professorview = '专家视角';
const fermentation = '发酵无聊';
const produce = '工艺工程';
const processcontrol = '过程控制';
const liquids = '沼渣沼液';
const refinement = '净化提纯';
const cacultors = '在线计算器';
const downloads = '资料下载';
const text = '支持高效的沼气科研技术和服务，以及沼气发电厂及流程的改进操作，从而帮助实现高效的沼气生产的群众。';

const styles = {
  app_dev: {
    marginBottom:'10px'
  },
  footerbold:{
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom:'10px',
    marginTop:'-10px'
  },
  info:{
    opacity: '1',
  }
}

const Description = React.createClass ({
  render(){
    return (
      <div style= {{ 'textAlign':'center', 'paddingTop': '120px', 'paddingBottom':'60px' }}>
        <_Row>
         <_Col span={18} offset={3}>
            <_Row style={{ marginBottom: '45px' }}>
              <_Col span={9} style={{paddingBottom:'10px', borderBottom:'1px inset #EDEDED'}}></_Col>
              <_Col span={6}>
                <h3 style={{ fontSize: '26px'}}>{ heading }</h3>
              </_Col>
              <_Col span={9} style={{paddingBottom:'10px', borderBottom:'1px inset #EDEDED'}}></_Col>
            </_Row>

            <_Row type="flex" justify="space-around">
                <_Col span={5} style={styles.info}>
                    <div style={styles.member}>
                        <img style={{margin: 'auto auto'}}src="/images/professor.jpg" alt=""/>
                    </div>
                    <div style={ styles.app_dev }>
                        <p style={ styles.footerbold }>{ professorview }</p>
                        <h6 style={{ fontSize:'10px', lineHeight:'12px', textAlign: 'justify', fontWeight: 'unset' }}>{ text }</h6>
                    </div>
                </_Col>
                <_Col span={5} offset={1} style={styles.info}>
                    <div style={styles.member}>
                        <img style={{margin: 'auto auto'}}src="/images/faxiao.jpg" alt=""/>
                    </div>
                    <div style={ styles.app_dev }>
                         <p style={ styles.footerbold }>{ fermentation }</p>
                        <h6 style={{ fontSize:'10px', lineHeight:'12px', textAlign: 'justify', fontWeight: 'unset' }}>{ text }</h6>
                    </div>
                </_Col>
                <_Col span={5} offset={1} style={styles.info}>
                    <div style={styles.member}>
                        <img  style={{margin: 'auto auto'}}src="/images/process.jpg" alt=""/>
                    </div>
                    <div style={ styles.app_dev }>
                        <p style={ styles.footerbold }>{ produce }</p>
                        <h6 style={{ fontSize:'10px', lineHeight:'12px', textAlign: 'justify', fontWeight: 'unset' }}>{ text }</h6>
                    </div>
                </_Col>
                <_Col span={5} offset={1} style={styles.info}>
                    <div style={styles.member}>
                        <img style={{margin: 'auto auto'}}src="/images/control.jpg" alt=""/>
                    </div>
                    <div style={ styles.app_dev } >
                        <p style={ styles.footerbold }>{ processcontrol }</p>
                        <h6 style={{ fontSize:'10px', lineHeight:'12px', textAlign: 'justify', fontWeight: 'unset' }}>{ text }</h6>
                    </div>
                </_Col>
            </_Row>

            <_Row type="flex" justify="space-around">
                <_Col span={5} style={styles.info}>
                    <div style={styles.member}>
                        <img style={{margin: 'auto auto'}}src="/images/liquid.jpg" alt=""/>
                    </div>
                    <div style={ styles.app_dev }>
                        <p style={ styles.footerbold }>{ liquids }</p>
                        <h6 style={{ fontSize:'10px', lineHeight:'12px', textAlign: 'justify', fontWeight: 'unset' }}>{ text }</h6>
                    </div>
                </_Col>
                <_Col span={5} offset={1} style={styles.info}>
                    <div style={styles.member}>
                        <img style={{margin: 'auto auto'}}src="/images/clean.jpg" alt=""/>
                    </div>
                    <div style={ styles.app_dev }>
                        <p style={ styles.footerbold }>{ refinement }</p>
                        <h6 style={{ fontSize:'10px', lineHeight:'12px', textAlign: 'justify', fontWeight: 'unset' }}>{ text }</h6>
                    </div>
                </_Col>
                <_Col span={5} offset={1} style={styles.info}>
                    <div style={styles.member}>
                        <img style={{margin: 'auto auto'}}src="/images/caculator.jpg" alt=""/>
                    </div>
                    <div style={ styles.app_dev }>
                        <p style={ styles.footerbold }>{ cacultors }</p>
                        <h6 style={{ fontSize:'10px', lineHeight:'12px', textAlign: 'justify', fontWeight: 'unset' }}>{ text }</h6>
                    </div>
                </_Col>
                <_Col span={5} offset={1} style={styles.info}>
                    <div style={styles.member}>
                        <img style={{margin: 'auto auto'}}src="/images/download.jpg" alt=""/>
                    </div>
                    <div style={ styles.app_dev } >
                        <p style={ styles.footerbold }>{ downloads }</p>
                        <h6 style={{ fontSize:'10px', lineHeight:'12px', textAlign: 'justify', fontWeight: 'unset' }}>{ text }</h6>
                    </div>
               </_Col>
            </_Row>
          </_Col>
        </_Row>
      </div>
    )
  }
});

export default Description;
