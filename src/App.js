import React from "react";
import {
  ProductPage,
  Login,
  AdminPage,
  Cart,
  ShopNav,
  HomeNav,
  Home,
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

  //this function servers as a placeholder
  //It is invoked to update state after a data on the server has changed
  updateState = async (stateVar, databaseLink) => {
    this.setState({ [stateVar]: await api.getData(databaseLink) });
  };

  createProduct = async (newProduct) => {
    await api.postData(
      newProduct,
      "http://localhost:3001/api/products/products"
    );

    this.updateState("products", "http://localhost:3001/api/products/products");
  };

  deleteProduct = async (product) => {
    await api.deleteData(
      product,
      "http://localhost:3001/api/products/products"
    );

    this.updateState("products", "http://localhost:3001/api/products/products");
  };

  createSale = async (order) => {
    await api.postData(order, "http://localhost:3001/api/sales/sales");

    this.updateState("sales", "http://localhost:3001/api/sales/sales").then(
      window.location.reload()
    );
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
          <ShopNav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/shop"
              render={() => (
                <ProductPage
                  products={this.state.products}
                  addToCart={this.addToCart}
                  deleteProduct={this.deleteProduct}
                  loggedIn={this.state.loggedIn}
                />
              )}
            />
            <Route
              path="/cart"
              render={() => (
                <div className=" columns is-centered is-vcentered">
                  <div id="cart" className="column section">
                    <Cart
                      addOrder={this.addOrder}
                      cart={this.state.cart}
                      sales={this.state.sales}
                    />
                  </div>
                </div>
              )}
            />
            <Route path="/login" render={() => this.checkLoginStatus()} />
            <Route path="/admin" render={() => this.checkLoginStatus()} />
          </Switch>
          <ShopNav />
        </div>
      </Router>
    );
  }
}
