/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";
// import {Route, BrowserRouter as Router} from "react-router-dom";
// import TreesMap from "./components/map";
// import ProfilMap from "./components/profil-map.js";
import Home from "./components/home.js";
import "../style.scss";

// function App() {
//     return (
//         <div>
//             <Router>
//                 <Route path={"/map"}><TreesMap /></Route>
//             </Router>
//         </div>
//     )
// }

ReactDOM.render(<Home />, document.querySelector("#app"));
// ReactDOM.render(<ProfilMap />, document.querySelector("#profil"));
// ReactDOM.render(<TreesMap />, document.querySelector("#map"));
