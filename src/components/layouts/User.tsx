/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import UserNavbar from "../Navbars/AdminNavbar";
import AuthNavbar from '../Navbars/AuthNavbar';
import Footer from "../common/Footers/Footer";
import Sidebar from "../Sidebar/Sidebar";

import routes from "../../routes";
import { useSelector } from "react-redux";

const Admin = (props) => {

  // const isLogin = useSelector((state: any) => state.authReducer.isLogin)
  const user = useSelector((state: any) => state.authReducer.user);

  const mainContent = React.useRef(null);
  const location = useLocation();

  console.log("User");
  

  // React.useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   mainContent.current.scrollTop = 0;
  // }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
            exact={prop.exact}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../../assets/img/brand/182317106_469927980759768_6648296259117268252_n.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        {
          (user !== null || user !== {})
            ? (
              <UserNavbar
                {...props}
                brandText={getBrandText(props.location.pathname)}
                user={user}
              />
            )
            : (
              <AuthNavbar />
            )
        }
        <Switch>
          {getRoutes(routes)}
          {/* <Redirect from="*" to="/admin/index" /> */}
        </Switch>
        <Container fluid>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Admin;
