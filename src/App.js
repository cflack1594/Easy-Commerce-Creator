import React from "react";
import {
  Home,
  Login,
  AdminPage,
  Cart,
  Nav,
  ProductPage,
  RegisterSite,
} from "components";
import * as api from "api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bulma/css/bulma.css";

export class App extends React.Component {
  state = {
    auth: [],
    cart: [],
    products: [],
    sales: [],
    loggedIn: false,
    activeDBTarget: "",
    activeLink: "register",
  };

  async componentDidMount() {
    try {
      // these links are hard coded as the default when the site is first loaded
      this.setState({
        products: await api.getData(
          "ecommerce-site-demo",
          "http://localhost:3001/api/products/products"
        ),
        sales: await api.getData(
          "ecommerce-site-demo",
          "http://localhost:3001/api/sales/sales"
        ),
        auth: await api.getData(
          "ecommerce-site-demo",
          "http://localhost:3001/api/auth/auth"
        ),
        activeLink: window.location.href,
      });
    } catch (e) {
      throw Error(e);
    }
  }

  //this function servers as a placeholder
  //It is invoked to update state after a data on the server has changed
  updateStateFromServer = async (stateVar, databaseLink) => {
    this.setState({ [stateVar]: await api.getData(databaseLink) });
  };

  //these functions will be used after refactoring the interactivity functions below them
  // createData = async (newData, dataTarget) => {
  //   await api.postData(newData, dataTarget);
  //   this.updateStateFromServer(dataTarget);
  // };

  // updateData = async (newData, dataTarget) => {
  //   await api.updateData(newData, dataTarget);
  //   this.updateStateFromServer(dataTarget);
  // };

  // deleteData = async (currentData, dataTarget) => {
  //   await api.deleteData(currentData, dataTarget);
  //   this.updateStateFromServer(dataTarget);
  // };

  createProduct = async (newProduct) => {
    await api.postData(
      newProduct,
      "http://localhost:3001/api/products/products"
    );

    this.updateStateFromServer(
      "products",
      "http://localhost:3001/api/products/products"
    );
  };

  deleteProduct = async (product) => {
    await api.deleteData(
      product,
      "http://localhost:3001/api/products/products"
    );

    this.updateStateFromServer(
      "products",
      "http://localhost:3001/api/products/products"
    );
  };

  createSale = async (order) => {
    await api.postData(order, "http://localhost:3001/api/sales/sales");

    this.updateStateFromServer(
      "sales",
      "http://localhost:3001/api/sales/sales"
    ).then(window.location.reload());
  };

  updateSale = async (order) => {
    order.completed = true;
    await api.updateData(order, "http://localhost:3001/api/sales/sales");
  };

  createUser = async (newUser) => {
    await api.postData(newUser, "http://localhost:3001/api/auth/auth");
  };

  //On checkout this function creates the data for a sale and sends it to the administrator side where they can review and fulfill the order for the customer
  addOrder = async (newOrder) => {
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

  setDBTarget = (page) => {
    this.setState({ activeDBTarget: page });
  };

  setActiveLink = (currentLink) => {
    this.setState({ activeLink: currentLink });
  };

  checkLoginStatus = () => (
    <div className="section columns is-centered is-vcentered">
      <div className="box has-background-dark">
        <Login
          auth={this.state.auth}
          login={this.login}
          loggedIn={this.state.loggedIn}
          createUser={this.createUser}
        />
        {this.state.loggedIn ? (
          <Switch>
            <Redirect from="/login" to="/admin" />
            <Route path="/admin">
              <AdminPage
                createProduct={this.createProduct}
                addOrder={this.addOrder}
                updateSale={this.updateSale}
                sales={this.state.sales}
              />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Redirect to="/login" />
            <Route path="/login"></Route>
          </Switch>
        )}
      </div>
    </div>
  );

  render() {
    return (
      <Router>
        <div className="has-background-grey-dark">
          <Nav
            loggedIn={this.state.loggedIn}
            activeLink={this.state.activeLink}
          />
          <Switch>
            <Route
              path
              exact="/"
              render={() => <Home setActiveLink={this.setActiveLink} />}
            />
            <Route path="/register-new-site" component={RegisterSite} />
            <Route
              path="/shop"
              render={() => (
                <ProductPage
                  products={this.state.products}
                  addToCart={this.addToCart}
                  deleteProduct={this.deleteProduct}
                  loggedIn={this.state.loggedIn}
                  setActiveLink={this.setActiveLink}
                />
              )}
            />
            <Route
              path="/cart"
              render={() => (
                <Cart
                  addOrder={this.addOrder}
                  cart={this.state.cart}
                  sales={this.state.sales}
                />
              )}
            />
            <Route path="/login" render={() => this.checkLoginStatus()} />
            <Route path="/admin" render={() => this.checkLoginStatus()} />
          </Switch>
          <Nav
            loggedIn={this.state.loggedIn}
            activeLink={this.state.activeLink}
          />
        </div>
      </Router>
    );
  }
}
