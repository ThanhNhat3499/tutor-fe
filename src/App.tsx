import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import './styles/scss/style.scss';
import routes from './routes';
// import Header from './components/common/header/Header';
import UserLayout from './components/layouts/User';
import AuthLayout from './components/layouts/Auth';

function App() {
  console.log("app");
  
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        {/* <NavBar/> */}
        <Switch>
          {/* {routes.map( data => {
            return (
              <Route exact={data.exact} path={data.path} component={data.component}/>
            )
          })} */}
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Route path="/user" render={(props) => <UserLayout {...props} />} />
          {/* <Redirect to="/auth/login"/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
