import React, { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../redux/actions/authAction';
import store from '../../redux/store';
import { Account, CV } from '../../styles/types/Models';
import { JsxElement } from 'typescript';
import { Redirect } from 'react-router-dom';
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
  Container,
  Label,
  FormText,
  CustomInput,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Collapse
} from "reactstrap";
import ReactDatetime from "react-datetime";
import axios from '../../utils/axios.utils';
import './RegisterForm.css';

const RegisterPage: FC<{history: any}> = (props) => {

  const isLogin = useSelector((state: any) => state.authReducer.isLogin);
  const [user, setUser] = useState<Account>({
    username: '',
    password: ''
  });
  const [isTutor, setIsTutor] = useState<boolean>(false);
  const [cvInfo, setCvInfo] = useState(<></>);
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  function handleChange(e: React.ChangeEvent<any>): void {
    const { name, value } = e.target;
    console.log(name, value);
    setUser(user => ({ ...user, [name]: value }))
  }

  function handleRoleChange(e: React.ChangeEvent<any>): void {
    const { name, value } = e.target;

    setIsTutor(value.toUpperCase() === 'TUTOR');
    setUser(user => ({ ...user, [name]: value }))
  }

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    if (user.username && user.password) {
      const status = dispatch(register(user, props));
      if (+status === 200) {
        props.history.push("/user");
      }
    }
  }

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setUploading(true);
    axios
      .post("/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setUser(user => ({ ...user, [e.target.name]: response.data }))
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  useEffect(() => {
    console.log("loading...");    
    const cv = isTutor ? (
                            <div className="form-label-group">
                            <label>CV</label>
                            <input type="text" name="cv" className="form-control" placeholder="Password" onChange={handleChange} />
                          </div>
                        )
                      : <></>;
    setCvInfo(cv);          
  }, [isTutor]);

  // console.log("register page");
  // console.log("isTutor: ", isTutor);
  console.log("user: ", user);
  
  

  return (
    <>
      {
        !isLogin
          ? (
            <>
              <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="d-flex justify-content-center">
                    <h1>Đăng ký</h1>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form" onSubmit={handleSubmit}>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="username"
                            placeholder="Tên đăng nhập"
                            type="text"
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
                            name="password"
                            placeholder="Mật khẩu"
                            type="password"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="email"
                            placeholder="Email"
                            type="email"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fas fa-signature"/>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="fullname"
                            placeholder="Họ và tên"
                            type="text"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <ReactDatetime
                            inputProps={{
                              name: "birthday",
                              placeholder: "Ngày sinh",
                              onChange: handleChange
                            }}
                            timeFormat={false}
                            // onChange={handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fas fa-phone" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="phone"
                            placeholder="Số điện thoại"
                            type="text"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-pin-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            name="address"
                            placeholder="Địa chỉ"
                            type="text"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3 d-flex justify-content-around">
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="Nu"
                            name="gender"
                            type="radio"
                            value="Nu"
                            onChange={handleChange}
                          />
                          <label className="custom-control-label" htmlFor="Nu">
                            Nữ
                          </label>
                        </div>
                        
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="Nam"
                            name="gender"
                            type="radio"
                            value="Nam"
                            onChange={handleChange}
                          />
                          <label className="custom-control-label" htmlFor="Nam">
                            Nam
                          </label>
                        </div>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup>
                          <Input type="file" name="picture" id="exampleFile" onChange={uploadFile} />
                          <FormText color="muted">
                            Chọn ảnh đại diện
                          </FormText>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup inline className="mb-3 d-flex justify-content-around">
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="TUTOR"
                            name="role"
                            type="radio"
                            value="TUTOR"
                            onClick={handleRoleChange}
                          />
                          <label className="custom-control-label" htmlFor="TUTOR">
                            Gia sư
                          </label>
                        </div>
                        
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="STUDENT"
                            name="role"
                            type="radio"
                            value="STUDENT"
                            onClick={handleRoleChange}
                          />
                          <label className="custom-control-label" htmlFor="STUDENT">
                            Học sinh
                          </label>
                        </div>
                      </FormGroup>
                      <Collapse isOpen={isTutor}>
                        <FormGroup className="mb-3">
                          <InputGroup>
                            <Input className="cv-img" type="file" name="CV" id="exampleFile" onChange={uploadFile} />
                            <FormText color="muted">
                              Tải CV lên dưới dạng file .pdf
                            </FormText>
                          </InputGroup>
                        </FormGroup>
                      </Collapse>
                      <div className="text-center">
                        <Button className="my-4" color="primary" type="submit">
                          Đăng ký
                        </Button>
                      </div>
                      <div className="text-center">
                        <a
                          className="text-gray"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <small>Bạn đã có tài khoản ?</small>
                        </a>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </>
          )
          : <Redirect to="/user" />
      }
    </>
  );
};

export default RegisterPage;