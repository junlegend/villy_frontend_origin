import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Signup from './pages/Signup/Signup';
// import ProductDetail from './pages/ProductDetail/ProductDetail';
import Recommend from './pages/Recommend/Recommend';
import Cart from './pages/Cart/Cart';
import Order from './pages/Cart/Order/Order';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/:v1/:v2" component={Product} />
          <Route exact path="/productDetail" component={ProductDetail} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/product/:productID" component={ProductDetail} /> */}
          <Route exact path="/recommend" component={Recommend} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/order" component={Order} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
