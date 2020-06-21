import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

// const routing = (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/Login">Login</Link>
//         </li>
//         <li>
//           <Link to="/Admin">Admin</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route path="/" component={App} />
//         <Route path="/Login" component={Login} />
//         <Route path="/Admin" component={AdminPage} />
//       </Switch>
//     </div>
//   </Router>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
