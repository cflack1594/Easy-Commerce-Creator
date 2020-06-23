import React from "react";
import { Home, Login, AdminPage, Cart, Nav } from "components";
import * as api from "api";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
//add state proxy for components to work with

export class App extends React.Component {
  state = {
    auth: [],
    cart: [],
    products: [],
    sales: [],
    loggedIn: false,
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

  createProduct = async (newProduct) => {
    await api.postData(
      newProduct,
      "http://localhost:3001/api/products/products"
    );
    this.setState({ products: [...this.state.products, newProduct] });
  };

  deleteProduct = async (product) => {
    await api.deleteData(
      product,
      "http://localhost:3001/api/products/products"
    );
    this.setState({
      products: this.state.products.filter((item) => item._id !== product._id),
    });
  };

  createSale = async (order) => {
    await api
      .postData(order, "http://localhost:3001/api/sales/sales")
      .then(window.location.reload(false));
  };

  updateSale = async (order) => {
    order.completed = true;
    await api.updateData(order, "http://localhost:3001/api/sales/sales");
  };

  createUser = async (newUser) => {
    await api.postData(newUser, "http://localhost:3001/api/auth/auth");
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

    order.orderId = this.state.sales.length;
    order.completed = false;

    this.createSale(order);
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

  login = (status) => {
    this.setState({ loggedIn: status });
  };

  goToPage = (link) => {
    this.setState({ activePage: link });
  };

  checkLoginStatus = () =>
    this.state.loggedIn ? (
      <AdminPage
        createProduct={this.createProduct}
        addOrder={this.addOrder}
        updateSale={this.updateSale}
        sales={this.state.sales}
      />
    ) : null;

  getPage = (page) => {
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
            addToCart={this.addToCart}
            deleteProduct={this.deleteProduct}
            loggedIn={this.state.loggedIn}
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
              createUser={this.createUser}
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
        {this.getPage(this.state.activePage)}
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
//         <Route exact path="/Login" component={components.Login loggedIn={this.state.login}} />
//         <Route exact path="/Admin" component={components.AdminPage} />
//       </Switch>
//     </div>
//   </Router>
// );
