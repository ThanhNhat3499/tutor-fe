import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import { logout } from "../../redux/actions/authAction";
import { User } from "../../styles/types/Models";
import AuthNavbar from './AuthNavbar';

const UserNavbar: FC<{brandText: string, user: User, history: any}> = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }
  
  return (
    <>
      {
        (props.user !== null)
          ? (
            <>
              <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
                <Container fluid>
                  {
                    props.history.length ? <i className="fas fa-arrow-left text-white" onClick={() => props.history.goBack()} /> : null
                  }
                  <Link
                    className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block px-2"
                    to="/user"
                  >
                    Trung tâm gia sư
                  </Link>
                  <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <FormGroup className="mb-0">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Search" type="text" />
                      </InputGroup>
                    </FormGroup>
                  </Form>
                  <Nav className="align-items-center d-none d-md-flex" navbar>
                    <UncontrolledDropdown nav>
                      <DropdownToggle className="pr-0" nav>
                        <Media className="align-items-center">
                          <span className="avatar avatar-sm rounded-circle">
                            <img
                              alt={props.user.fullname.charAt(0).toUpperCase()}
                              src={`http://localhost:5000/api/uploads/${props.user.picture}`}
                            />
                          </span>
                          <Media className="ml-2 d-none d-lg-block">
                            <span className="mb-0 text-sm font-weight-bold">
                              {props.user.username}
                            </span>
                          </Media>
                        </Media>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem className="noti-title" header tag="div">
                          <h6 className="text-overflow m-0">Xin chào!</h6>
                        </DropdownItem>
                        <DropdownItem to="/user/profile" tag={Link}>
                          <i className="ni ni-single-02" />
                          <span>Tài khoản</span>
                        </DropdownItem>
                        <DropdownItem to={props.user.role === "TUTOR" ? "/user/teach-schedule" : "/user/study-schedule"} tag={Link}>
                          <i className="ni ni-calendar-grid-58" />
                          <span>
                            {
                              props.user.role === "TUTOR"
                                ? "Lịch dạy"
                                : "Lịch học"
                            }
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#pablo" onClick={handleLogout}>
                          <i className="ni ni-user-run" />
                          <span>Đăng xuất</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Container>
              </Navbar>
            </>
          )
          : <AuthNavbar />
      }
    </>
  );
};

export default UserNavbar;
