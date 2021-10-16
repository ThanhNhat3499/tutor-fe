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
import React, { FC } from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { User } from "../../../styles/types/Models";

const UserHeader: FC<{user: User}> = (props) => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../../assets/img/theme/profile-cover.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col>
              <h1 className="display-2 text-white">Chào {props.user.username}</h1>
              <p className="text-white mt-0 mb-5">
                Đây là trang thông tin cá nhân của bạn. 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
