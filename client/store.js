import { observable, asReference } from 'mobx';
import pdfjs from 'pdfjs';

// url is a application config variable
const FONT_URL = '/assets/asf.ttf';
function getFont(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'arraybuffer';

  if (xhr.overrideMimeType) {
    xhr.overrideMimeType('text/plain; charset=x-user-defined');
  } else {
    xhr.setRequestHeader('Accept-Charset', 'x-user-defined');
  }

  return new Promise(function(resolve, reject) {
    xhr.addEventListener('load', function(event) {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.statusText));
      }
    }, false);

    xhr.addEventListener('error', function(error) {
      reject(Error(xhr.statusText));
    }, false);

    xhr.send(null);
  });
}


const store = observable({
  title: asReference('青枣网'),
  brands: '',
  username: '',
  password: '',
  index: 0,
  menu: '',
  cookie: 'init cookie',
  visible: false,
  current: 'mail',
  openKeys: [],
  sum:0,
  cart:[{
    key: 0,
    product: '100ml 玻璃瓶',
    prices: 1000,
    amount: 1,
    totals: 1000
  },
  {
    key: 1,
    product: '200ml 玻璃瓶',
    prices: 1500,
    amount: 1,
    totals: 1500
  },
  {
    key: 2,
    product: '300ml 玻璃瓶',
    prices: 2000,
    amount: 1,
    totals: 2000
  }]
});

store.setBrands = function (data){
  store.brands = data;
};

store.setUsername = function (data){
  store.username = data;
};

store.setPassword = function (data){
  store.password = data;
};

store.setIndex = function (index) {
  store.index = index;
};

store.setMenu = function(data){
  store.menu = data;
};

store.setCookie = function(data) {
  store.cookie = data;
};

store.setVisible = function(data) {
  store.visible = data;
};

store.setCurrent = function(data){
  store.current = data;
};

store.setOpenKeys = function(data){
  store.openKeys = data;
};

store.addCart = function(data) {
  store.cart.push(data);
};

store.deleteCart = function(data) {
  store.cart.splice(data, 1);;
};

store.updateCartTotals = function(index, amount) {
  console.debug(store.cart, index, amount);
  store.cart[index].amount = amount;
  store.cart[index].totals = store.cart[index].amount * store.cart[index].prices;
};

function analyzeOrder(order){
  console.log('test', json.key);
}

store.openPdf = function(form){
  console.log('openPdf--');

  getFont(FONT_URL).then(function(regular) {
    const font = pdfjs.createTTFFont(regular);
    const doc = pdfjs.createDocument({
      font,
      fontSize: 32
    });


    const text = doc.text({
      font,
      fontSize: 14,
      lineSpacing: 1.35
    });

      text.add('-----订货明细-----\n\n');
    store.cart.forEach(function(value) {
      console.log('step1 ', value);
      console.log('step2: ', form);
      console.log('step3 ', value.key);

      text.add('产品编号:'+JSON.stringify(value.key));
      text.add('产品名称:'+JSON.stringify(value.product));
      text.add('产品单价:'+JSON.stringify(value.prices));
      text.add('\n');
      text.add('产品数量:'+JSON.stringify(value.amount));
      text.add('产品小结:'+JSON.stringify(value.totals));
      text.add('\n\n');
      store.sum=store.sum+value.totals;
    });

    text.add('总计:'+store.sum);
    text.add('\n\n\n\n\n\n');
    text.add('-----订货人详情-----\n\n');

   // text.add(JSON.stringify(form));
    text.add('联系人:'+JSON.stringify(form.contact));
    text.add('联系电话: +'+JSON.stringify(form.prefix)+' '+JSON.stringify(form.phone));
    text.add('邮箱:'+JSON.stringify(form.email));
    text.add('\n');
    text.add('单位名称:'+JSON.stringify(form.company));
    text.add('部门:'+JSON.stringify(form.department));
    text.add('所在地区:'+JSON.stringify(form.residence));
    text.add('\n');
    text.add('详细地址:'+JSON.stringify(form.address));

    const pdf = doc.render();
    window.open(pdf.toDataURL());
  }).catch(function(error) {
    console.error('Error', error.message);
  });
};

export default store;
