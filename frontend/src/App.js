import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/users-list.component'
import CreateUser from './components/create-user.component'
import LoginUser from './components/login'
import UploadProduct from './components/upload-product'
import ProductList from './components/listProduct'


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              {/* <li className="navbar-item">
                <Link to="/" className="nav-link">Users</Link>
              </li> */}
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create User</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="navbar-item">
                <Link to="/uploadProduct" className="nav-link">Upload Product</Link>
              </li>
              <li className='navbar-item'>
                <Link to="/ProductList" className="nav-link"> Products List</Link>
              </li>
 

            
             
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/" exact component={UsersList}/>
        <Route path="/create" component={CreateUser}/>
        <Route path="/login" component={LoginUser}/>
        <Route path="/uploadProduct" component={UploadProduct}/>
        <Route path="/ProductList" component={ProductList}/>

      </div>
    </Router>
  );
}

export default App;
