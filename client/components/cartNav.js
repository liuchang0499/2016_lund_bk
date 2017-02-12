import React from 'react';
import { render } from 'react-dom';
import _Row from 'antd/lib/row';
import _Col from 'antd/lib/col';

const Bioprocess = 'Bioprocess Control';
const WTW = 'WTW';

const styles = {
  font_bold: {
    fontSize: '19px',
    color: '#06dab5',
    font: 'Arial',
    fontWeight: 'bold'
  },
  font_normal: {
    fontSize: '19px',
    color: '#232528',
    font: 'Arial'
  },
  inc: {
    height: '30px',
    weight: '30px',
  },
  bg_gray: {
    backgroundColor: '#F4F4F4',
    width: '100%',
    position: 'fixed',
    zIndex: '9',
    height: '62px',
    marginTop: '62px'
  }
}

const CartNav = React.createClass ({
  render(){
    return (
      <_Row type="flex" justify="space-around" align="middle" style={styles.bg_gray}>
        <_Col span={22} offset={2}>
          <_Row>
             <_Col span={4} offset={6}  ><a style={styles.font_bold } href="#">{ Bioprocess }</a></_Col>
             <_Col span={4} offset={2}  ><a style={styles.font_normal } href="#">{ WTW }</a> </_Col>
             <_Col span={2} offset={4}  ><a style={styles.font_normal } href="/cart"><img style={styles.inc} src="/images/bag.png"/></a> </_Col>
          </_Row>
        </_Col>
     </_Row>
    )
  }
});

export default CartNav;
