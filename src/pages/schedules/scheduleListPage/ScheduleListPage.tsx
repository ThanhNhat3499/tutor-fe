import React, { FC, ReactElement } from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Collapse,
  CardBody,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import './ScheduleListPage.css';
import Header from '../../../components/common/Headers/Header';
import { useEffect } from 'react';
import { JsxElement } from 'typescript';
import NewScheduleForm from '../../../components/NewScheduleForm';
import { useSelector } from 'react-redux';

const ScheduleListPage: FC = () => {

  const user = useSelector((state: any) => state.authReducer.user);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [index, setIndex] = useState<number[]>([]);

  const showDetail = (id: number) => {
    const position = index.indexOf(id);
    let newIndex = index.slice();
    if (position !== -1) {
      newIndex.splice(position, 1);
    } else {
      newIndex = [...index, id];
    }
    setIndex(newIndex)
  }

  const popUpForm = () => {
    setIsOpenForm(prevState => !prevState);
  }

  useEffect(() => {
    if (index.length > 0) {
      console.log("rendering");
    }
  }, [index]);

  console.log("index: ", index);
  

  return (
    <>
      {
        (user !== null)
          ? (
            <>
              <Header />
              {/* Page content */}
              <Container className="mt--7 pb-5" fluid>
                {/* Table */}
                <Row>
                  <div className="col">
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <Col xs="10">
                              <h3 className="mb-0">
                                {
                                  user.role === "TUTOR"
                                    ? "Lịch dạy"
                                    : "Lịch học"
                                }
                              </h3>
                            </Col>
                            {
                              user.role === "TUTOR"
                                ? (
                                    <Col className="text-right" xs="2">
                                      <Button
                                        color="primary"
                                        href="#pablo"
                                        onClick={popUpForm}
                                        size="sm"
                                      >
                                        Thêm lịch dạy
                                      </Button>
                                      <Modal
                                        className="modal-dialog-centered"
                                        isOpen={isOpenForm}
                                        toggle={popUpForm}
                                      >
                                        <ModalHeader toggle={popUpForm}>
                                          <h2>Thêm lịch dạy</h2>
                                        </ModalHeader>
                                        <ModalBody>
                                          <NewScheduleForm user={user} />
                                        </ModalBody>
                                      </Modal>
                                    </Col>
                                )
                              : null
                            }
                        </Row>
                      </CardHeader>
                      <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Lớp</th>
                            <th scope="col">Môn</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Phí / buổi</th>
                            <th scope="col">Buổi/tuần</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody className=" justify-content-center">
                          <tr onClick={() => showDetail(1)}>
                            <th scope="row">
                              1
                            </th>
                            <td>10</td>
                            <td>Anh</td>
                            <td>TP Đà Nẵng</td>
                            <td>200.000</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <Collapse isOpen={index.includes(1)}>
                              <CardBody>
                                <h4>
                                  this is detail
                                </h4>
                                <p className="text-muted">User since: </p>
                                <Button size="sm" color="info">
                                  User Settings
                                </Button>
                                <Button size="sm" color="danger" className="ml-1">
                                  Delete
                                </Button>
                              </CardBody>
                            </Collapse>
                          </tr>
                          <tr onClick={() => showDetail(2)}>
                            <th scope="row">
                              1
                            </th>
                            <td>10</td>
                            <td>Anh</td>
                            <td>TP Đà Nẵng</td>
                            <td>200.000</td>
                            <td>2</td>
                          </tr>
                          <tr>
                          <Collapse isOpen={index.includes(2)}>
                              <CardBody>
                                <h4>
                                  this is detail
                                </h4>
                                <p className="text-muted">User since: </p>
                                <Button size="sm" color="info">
                                  User Settings
                                </Button>
                                <Button size="sm" color="danger" className="ml-1">
                                  Delete
                                </Button>
                              </CardBody>
                            </Collapse>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                  </div>
                </Row>
              </Container>
            </>
          )
          : <Redirect to="/user" />
      }
    </>
   );
 }

 export default ScheduleListPage;