import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardFooter
} from "reactstrap";
import ChangePasswordForm from '../../../components/ChangePasswordForm';
import UserHeader from '../../../components/common/Headers/UserHeader';
import { Redirect, Link } from 'react-router-dom';
import { User } from '../../../styles/types/Models';
import { useEffect } from 'react';
import { updateUser } from '../../../redux/actions/authAction';
import NewPostLookingForTutorForm from '../../../components/NewPostLookingForTutorForm';

const ProfilePage: FC<{history: any}> = (props) => {

  const data: User = useSelector((state: any) => state.authReducer.user);
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>({...data});
  
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [isOpenNewPostForm, setIsOpenNewPostForm] = useState(false);

  const setEditMode = () => {
    setIsEditable(prevState => !prevState);
  }

  const popUpForm = () => {
    setIsOpenForm(prevState => !prevState);
  }

  const popUpNewPostForm = () => {
    setIsOpenNewPostForm(prevState => !prevState);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  }

  const handleUpdateUser = async () => {
    const status = await dispatch(updateUser(user._id, user));
    if (+status === 200) {
      setEditMode();
    }
  }

  useEffect(() => {
    if (data === null) {
      props.history.push('/user');
    }
  }, [data, user]);
  
  return (
    <>
      {
        (user !== null)
          ? (
            <>
              <UserHeader user={user} />
              {/* Page content */}
              <Container className="mt--7" fluid>
                <Row>
                  <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                    <Card className="card-profile shadow">
                      <Row className="justify-content-center">
                        <Col className="order-lg-2" lg="3">
                          <div className="card-profile-image">
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                              <img
                                alt="..."
                                className="rounded-circle"
                                src={`http://localhost:5000/api/uploads/${user.picture}`}
                              />
                            </a>
                          </div>
                        </Col>
                      </Row>
                      <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        
                      </CardHeader>
                      <CardBody className="pt-0 pt-md-4">
                        <Row>
                          <Col>
                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                              {
                                (user.role === "TUTOR")
                                  ? (
                                    <>
                                      <div>
                                        <span className="heading">22</span>
                                        <Link to="/user/student-list">
                                          <span className="description">H???c sinh</span>
                                        </Link>
                                      </div>
                                      <div>
                                        <span className="heading">10</span>
                                        <Link to="/user/teachschedule">
                                          <span className="description">L???ch d???y</span>
                                        </Link>
                                      </div>
                                      <div>
                                        <span className="heading">89</span>
                                        <Link to="/user/rating">
                                          <span className="description">????nh gi??</span>
                                        </Link>
                                      </div>
                                    </>
                                  )
                                : (
                                  <>
                                    <div>
                                      <span className="heading">22</span>
                                      <Link to="/user/tutor-list">
                                        <span className="description">Gia s??</span>
                                      </Link>
                                    </div>
                                    <div>
                                      <span className="heading">10</span>
                                      <Link to="/user/study-schedule">
                                        <span className="description">L???ch h???c</span>
                                      </Link>
                                    </div>
                                  </>
                                )
                              }
                            </div>
                          </Col>
                        </Row>
                        {
                          user.role === "STUDENT"
                            ? (
                              <Row className="d-flex justify-content-center">
                                <Button color="success" shape="pill" variant="outline" onClick={popUpNewPostForm}>
                                  ????ng k?? t??m gia s??
                                </Button>
                                <Modal
                                  className="modal-dialog-centered"
                                  isOpen={isOpenNewPostForm}
                                  toggle={popUpNewPostForm}
                                >
                                  <ModalHeader toggle={popUpNewPostForm}>
                                    <h2>????ng k?? t??m gia s??</h2>
                                  </ModalHeader>
                                  <ModalBody className="py-0">
                                    <NewPostLookingForTutorForm />
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button color="info" shape="pill">
                                      ????ng k??
                                    </Button>
                                    <Button color="danger" shape="pill">
                                      H???y
                                    </Button>
                                  </ModalFooter>
                                </Modal>
                              </Row>
                            )
                            : null
                        }
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="order-xl-1" xl="8">
                    <Card className="bg-secondary shadow">
                      <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                          <Col xs="7">
                            <h3 className="mb-0">Th??ng tin t??i kho???n</h3>
                          </Col>
                          <Col className="justify-content-between" xs="5">
                            <Button
                              color="primary"
                              href="#pablo"
                              onClick={popUpForm}
                              size="sm"
                            >
                              ?????i m???t kh???u
                            </Button>
                            <Modal
                              className="modal-dialog-centered"
                              isOpen={isOpenForm}
                              toggle={popUpForm}
                            >
                              <ModalHeader toggle={popUpForm}>
                                <h2>?????i m???t kh???u</h2>
                              </ModalHeader>
                              <ModalBody className="py-0">
                                <ChangePasswordForm user={user} />
                              </ModalBody>
                            </Modal>
                            <Button
                              color="primary"
                              href="#pablo"
                              onClick={setEditMode}
                              size="sm"
                            >
                              Ch???nh s???a
                            </Button>
                          </Col>
                        </Row>
                      </CardHeader>
                      <Form onSUbmit={handleUpdateUser}>
                        <CardBody>
                          <h6 className="heading-small text-muted mb-4">
                            Th??ng tin ng?????i d??ng
                          </h6>
                          <div className="pl-lg-4">
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-username"
                                  >
                                    T??n ????ng nh???p
                                  </label>
                                  <Input
                                    disabled={!isEditable}
                                    className="form-control-alternative"
                                    name="username"
                                    id="input-username"
                                    value={user.username}
                                    type="text"
                                    onChange={handleChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-email"
                                  >
                                    Email
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name="email"
                                    id="input-email"
                                    value={user.email}
                                    type="email"
                                    disabled={!isEditable}
                                    onChange={handleChange}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-first-name"
                                  >
                                    H??? v?? t??n
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name="fullname"
                                    id="input-first-name"
                                    value={user.fullname}
                                    type="text"
                                    disabled={!isEditable}
                                    onChange={handleChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-last-name"
                                  >
                                    S??? ??i???n tho???i
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name="phone"
                                    id="input-last-name"
                                    value={user.phone}
                                    type="text"
                                    disabled={!isEditable}
                                    onChange={handleChange}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-first-name"
                                  >
                                    Gi???i t??nh
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name="gender"
                                    id="input-first-name"
                                    value={user.gender ? "Nu" : "Nam"}
                                    type="text"
                                    disabled={!isEditable}
                                    onChange={handleChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-last-name"
                                  >
                                    Ng??y sinh
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name="birthday"
                                    id="input-last-name"
                                    value={user.birthday}
                                    type="text"
                                    disabled={!isEditable}
                                    onChange={handleChange}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                          <hr className="my-4" />
                          <h6 className="heading-small text-muted mb-4">
                            Th??ng tin li??n l???c
                          </h6>
                          <div className="pl-lg-4">
                            <Row>
                              <Col md="12">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-address"
                                  >
                                    ?????a ch???
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name="address"
                                    id="input-address"
                                    value={user.address}
                                    type="text"
                                    disabled={!isEditable}
                                    onChange={handleChange}
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                          </div>
                          {
                            (user.role === "TUTOR")
                              ? (
                                <>
                                  <hr className="my-4" />
                                  <h6 className="heading-small text-muted mb-4">
                                    Th??ng tin chung
                                  </h6>
                                  <div className="pl-lg-4">
                                    <img
                                    className="cv-img"
                                    alt="..."
                                    // className="rounded-circle"
                                    //src={`http://localhost:5000/api/uploads/${user.picture}`}
                                    src={`http://localhost:5000/api/uploads/${user.CV}`}
                                  />
                                </div>
                              </>
                            )
                            : null
                          }
                        </CardBody>
                        {
                          isEditable 
                            ? (
                              <CardFooter className="d-flex justify-content-center">
                                <Button color="secondary" data-dismiss="modal" type="button" onClick={setEditMode} >
                                  H???y
                                </Button>
                                <Button color="primary" type="submit">
                                  L??u thay ?????i
                                </Button>
                              </CardFooter>
                            )
                            : null
                        }
                      </Form>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </>
          )
          : <Redirect to="/user" />
      }
    </>
  );
};

export default ProfilePage;