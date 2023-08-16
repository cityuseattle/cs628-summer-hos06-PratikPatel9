// Section 2 - App.js
// https://reactrouter.com/en/main/router-components/browser-router#browserrouter
// https://reactrouter.com/en/main/components/routes
// https://reactrouter.com/en/main/route/route
// import React, { Component } from "react";
// import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Details from "./Details";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       // <BrowserRouter>
//       <MemoryRouter>
//         <div className="container">
//           <nav className="navbar">
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/details">Details</Link>
//               </li>
//             </ul>
//           </nav>
//           <div className="content">
//             <Routes>
//               <Route exact path="/" element={<Home />} />
//               <Route exact path="/about" element={<About />} />
//               <Route exact path="/details" element={<Details />} />
//             </Routes>
//           </div>
//         </div>
//       {/*  </BrowserRouter> */}
//       </MemoryRouter>
//     );
//   }
// }

// export default App;

// Section 3 - MemoryRouter.js
// https://reactrouter.com/en/main/router-components/memory-router#memoryrouter

// import React, { Component } from 'react';
// // import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';
// import { HashRouter, Routes, Route, Link } from "react-router-dom";
// import Home from './Home';
// import About from './About';
// import Details from './Details';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       // <MemoryRouter>
//       <HashRouter>
//         <div className="container">
//           <nav className="navbar">
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/details">Details</Link>
//               </li>
//             </ul>
//           </nav>
//           <div className="content">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/details" element={<Details />} />
//             </Routes>
//           </div>
//         </div>
//       {/* // </MemoryRouter> */}
//       </HashRouter>
//     );
//   }
// }

// export default App;
// Section 5 - NestedRouting.js
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Details from "./Details";
import Team from "./Team";
import Member from "./Member";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <nav className="navbar">
              <ul>
                {/* <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/details">Details</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li> */}
                <li>
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/details" activeClassName="active">
                    Details
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/team" activeClassName="active">
                    Team
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/details" element={<Details />} />
                <Route path="/team" element={<Team />}>
                  {/* Nested Routing */}
                  <Route path="member/:id" element={<Member />} />
                </Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
