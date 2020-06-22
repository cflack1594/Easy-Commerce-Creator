import React from "react";
import "./App.css";
import { Home, Login, AdminPage, Cart, Nav } from "components";
import * as api from "api";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
//add state proxy for components to work with

export class App extends React.Component {
  state = {
    auth: [],
    cart: [],
    products: [],
    orders: [],
    sales: [],
    loggedIn: true,
    activePage: "Home",
  };

  async componentDidMount() {
    try {
      this.setState({
        products: await api.getData(
          "http://localhost:3001/api/products/products"
        ),
        sales: await api.getData("http://localhost:3001/api/sales/sales"),
        auth: await api.getData("http://localhost:3001/api/auth/auth"),
      });
    } catch (e) {
      throw Error(e);
    }
  }

  getData = async (url) => {
    try {
      const resp = await api.getData(url);
      return resp;
    } catch (e) {
      throw Error(e);
    }
  };

  addProduct = (newProduct) => {
    api.postData(newProduct, "http://localhost:3001/api/products/products");
    this.setState({ products: [...this.state.products, newProduct] });
  };

  addOrder = (newOrder) => {
    const order = newOrder.reduce((acc, current) => {
      acc.price
        ? (acc.price += Number.parseFloat(current.price * current.quantity))
        : (acc.price = Number.parseFloat(current.price * current.quantity));
      acc.value
        ? acc.value.push({ name: current.name, quantity: current.quantity })
        : (acc.value = [{ name: current.name, quantity: current.quantity }]);

      return acc;
    }, {});
    this.setState({ orders: [...this.state.orders, order] });
    this.updateSales(order);
    this.setState({ cart: [] });
  };

  addToCart = (order) => {
    let updatedCart = [...this.state.cart];

    let foundOrder = this.state.cart.findIndex(
      (cartItem) => cartItem.name === order.name
    );

    if (this.state.cart[foundOrder])
      updatedCart[foundOrder].quantity += order.quantity;
    else updatedCart.push(order);

    this.setState({ cart: updatedCart });
  };

  //uses the orderID key to find and remove the fulfilled order within the state array
  updateOrders = (orderID, orders) => {
    const updatedOrders = orders.filter((order, index) => index !== orderID);
    this.setState({ orders: updatedOrders });
  };

  updateSales = (order) => {
    this.setState({ sales: [...this.state.sales, order] });
    api.postData(order, "http://localhost:3001/api/sales/sales");
  };

  login = (status) => {
    this.setState({ loggedIn: status });
  };

  goToPage = (link) => {
    this.setState({ activePage: link });
  };

  checkLoginStatus = () =>
    this.state.loggedIn ? (
      <AdminPage
        addProduct={this.addProduct}
        addOrder={this.addOrder}
        updateOrders={this.updateOrders}
        sales={this.state.sales}
        orders={this.state.orders}
      />
    ) : null;

  checkPage = (page) => {
    let ret;

    switch (page) {
      case "Cart":
        ret = (
          <Cart
            addOrder={this.addOrder}
            cart={this.state.cart}
            sales={this.state.sales}
          />
        );
        break;
      case "Home":
        ret = (
          <Home
            products={this.state.products}
            addOrder={this.addOrder}
            addToCart={this.addToCart}
          />
        );
        break;
      case "Login":
        ret = (
          <div>
            <Login
              auth={this.state.auth}
              login={this.login}
              loggedIn={this.state.loggedIn}
            />
            {this.checkLoginStatus()}
          </div>
        );
        break;
      default:
        ret = <h1>Page Not Found</h1>;
        break;
    }

    return ret;
  };

  render() {
    return (
      <div className="App">
        <Nav goToPage={this.goToPage} />
        {this.checkPage(this.state.activePage)}
        <Nav goToPage={this.goToPage} />
      </div>
    );
  }
}

//routing = (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/" component={App}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to={{
//               pathname: "/login",
//               props: {
//                 auth: this.state.auth,
//                 login: this.login,
//                 loggedIn: this.state.loggedIn,
//               },
//             }}
//           >
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link to="/Admin">Admin</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route exact path="/" component={this} />
//         <Route exact path="/Login" component={components.Login} />
//         <Route exact path="/Admin" component={components.AdminPage} />
//       </Switch>
//     </div>
//   </Router>
// );
