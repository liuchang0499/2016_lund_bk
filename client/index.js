import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import { observer, Provider, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import store from './store';

import {Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Header from './components/header';
import Admin from './components/admin';
import Features from './components/features';
import HomeHero from './components/homeHero';
import Description from './components/description';
import Footer from './components/footer';
import Team from './components/team';
import BubbleChart from './components/bubbleChart';
import Score from './components/score';
import Pic from './components/pic';
import Pic_line from './components/pic_line';
import Us from './components/us';
import CartNav from './components/cartNav';
import Sshow from './components/sshow';
import Invoice from './components/invoice';
import DeviceBorrow from './components/dborrow';
import Dconsult from './components/dconsult';
import DeviceTest from './components/dtest';
import Sub_line from './components/sub_line';
import CasePresent from './components/casepresent';
import SamplePresent from './components/samplepresent';
import Qtable from './components/qtable';
import Jobs from './components/jobs';
import Greenhand from './components/greenhand';
import Maintain from './components/maintain';
import 'antd/dist/antd.css';
import './index.css';

const app = document.getElementById('app');

const NoMatch = inject('store')(function NoMatch(props) {
  return <h1>404 Page not found</h1>;
});

const Cart = inject('store')(function Cart(props) {
  function render(){
    const cart = (
      <div>
        <CartNav/>
        <Invoice/>
      </div>
    );
    return cart || null;
  }
  return observer({ props, render });
});
const ShopShow = inject('store')(function ShopShow(props) {
  function render(){
    const shopshow = (
      <div>
        <CartNav/>
        <Sshow/>
      </div>
    );
    return shopshow || null;
  }
  return observer({ props, render });
});

const DeviceConsult = inject('store')(function DeviceConsult(props) {
  function render(){
    const deviceconsult = (
      <div>
        <Sub_line/>
        <Dconsult/>
      </div>
    );
    return deviceconsult || null;
  }
  return observer({ props, render });
});

const IndustryCases = inject('store')(function IndustryCases(props) {
  function render(){
    const industrycases = (
      <div>
        <Sub_line/>
        <CasePresent/>
      </div>
    );
    return industrycases || null;
  }
  return observer({ props, render });
});

const IndustrySamples = inject('store')(function IndustrySamples(props) {
  function render(){
    const industrysamples = (
      <div>
        <Sub_line/>
        <SamplePresent/>
      </div>
    );
    return industrysamples || null;
  }
  return observer({ props, render });
});

const Questions = inject('store')(function Questions(props) {
  function render(){
    const questions = (
      <div>
        <Sub_line/>
        <Qtable/>
      </div>
    );
    return questions || null;
  }
  return observer({ props, render });
});

const Shows = inject('store')(function Shows(props) {
  function render(){
    const shows = (
      <div>
        <Pic_line/>
        <Pic/>
      </div>
    );
    return shows || null;
  }
  return observer({ props, render });
});

const Newcome = inject('store')(function Newcome(props) {
  function render(){
    const newcome = (
      <div>
        <Sub_line/>
        <Greenhand/>
      </div>
    );
    return newcome || null;
  }
  return observer({ props, render });
});

const Keep = inject('store')(function Keep(props) {
  function render(){
    const keep = (
      <div>
        <Sub_line/>
        <Maintain/>
      </div>
    );
    return keep || null;
  }
  return observer({ props, render });
});


const Login = inject('store')(function Login(props) {
  function render(){
    const login = (
      <div>
        <Admin />
      </div>
    );
    return login || null;
  }
  return observer({ props, render });
});

const Home = inject('store')(function Home(props) {
  function render(){
    const home = (
      <div>
        <Features />
        <HomeHero />
        <Team />
        <BubbleChart />
        <Score />
        <Description />
      </div>
    );
    return home || null;
  }
  return observer({ props, render });
});

const Main = inject('store')(function Main(props) {

  function componentWillMount(){
    console.debug('componentWillMount Main');
    try {
      // http://stackoverflow.com/a/34015469/988941
      injectTapEventPlugin();
    } catch (error) {
      console.log('injectTapEventPlugin error', error);
    }
  }
  function render(){
    const main = (
      <div>
        <Header />
        { this.props.children }
        <Footer />
        <DevTools />
      </div>
    );
    return main || null;
  }

  return observer({ props, render, componentWillMount });
});

render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={ Main }>
        <IndexRoute component={ Home }></IndexRoute>
        <Route path="/home" component={ Home } />
        <Route path="/admin" component={ Login } />
        <Route path="/cart" component={ Cart } />
        <Route path="/shopshow" component={ ShopShow } />
        <Route path="/rent" component={ DeviceBorrow } />
        <Route path="/service" component={ DeviceConsult } />
        <Route path="/test" component={ DeviceTest } />
        <Route path="/solutions" component={ IndustryCases } />
        <Route path="/design" component={ IndustrySamples } />
        <Route path="/jobs" component={ Jobs } />
        <Route path="/faq" component={ Questions } />
        <Route path="/shows" component={ Shows } />
        <Route path="/lewa" component={ Us } />
        <Route path="/beginnersguide" component={ Newcome } />
        <Route path="/care" component={ Keep } />
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>
  </Provider>
, app);
