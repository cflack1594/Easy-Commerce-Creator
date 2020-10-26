import { AdminPage } from "./AdminPage";
import { Login } from "./Login/index";
import { ProductPage } from "./ProductPage";
import { Cart } from "./Cart.js";
import { ShopNav } from "./ShopNav.js";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bulma/css/bulma.css";

export class ShopSitePage extends React.Component {
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
      <div className="has-background-grey-dark">
        <ShopNav />
        <Router>
          <div>
            <Switch>
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
          </div>
        </Router>
        <ShopNav />
      </div>
    );
  }
}
