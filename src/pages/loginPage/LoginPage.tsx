import React, { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/authAction';
import { Link, Redirect, useLocation } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container
} from "reactstrap";
import { Account } from '../../styles/types/Models';
// import NavBar from '../../components/common/navbar/NavBar';
import Footer from '../../components/common/Footers/Footer';
import './LoginPage.css';

const LoginPage: FC<{history: any}> = (props) => {
  // const isLogin = useSelector((state: any) => state.authReducer.isLogin)
  const isLogin = false;
  console.log("login");
  
  console.log("isLogin: ", isLogin);
  
  const [user, setUser] = useState<Account>({
    username: '',
    password: ''
  });

  const dispatch = useDispatch();

  function handleChange(e: React.ChangeEvent<any>): void {
    const { name, value } = e.target;
    console.log(name, value);
    setUser(user => ({ ...user, [name]: value }))
  }

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log("submitting");
    console.log("user: ", user);
    
    if (user.username && user.password) {
      const status = await dispatch(login(user, props));
      if (+status === 200) {
        props.history.push("/user");
      }
    }
    console.log("submit done");
    
  }


  return (
    <>
      {
        isLogin
          ? (
            <Redirect to="/user" />
          )
          : (
            <>
              <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="d-flex justify-content-center">
                    <h1>Đăng nhập</h1>
                  </CardHeader>
                  <CardBody className="px-lg-5 pt-5">
                    <Form role="form" onSubmit={handleSubmit}>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Tên đăng nhập"
                            type="text"
                            name="username"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Mật khẩu"
                            type="password"
                            name="password"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-center">
                        <Button className="my-4" color="primary" type="submit">
                          Đăng nhập
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Quên mật khẩu?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Tọa tài khoản mới</small>
                    </a>
                  </Col>
                </Row>
              </Col>
            </>
          )
      }
    </>
  );
};

export default LoginPage;