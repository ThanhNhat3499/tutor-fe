import React, { FC, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Collapse,
  CardBody,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Header from '../../components/common/Headers/Header';
import { useSelector } from 'react-redux';

const PersonList: FC = () => {
  const user = useSelector((state: any) => state.authReducer.user);
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

  return (
    <>
      {
        (user !== null)
          ? (
            <>
              <Header />
              <Container className="mt--7 pb-5" fluid>
                <Row>
                  <div className="col">
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <Col xs="10">
                              <h3 className="mb-0">
                                {
                                  user.role === "TUTOR"
                                    ? "Học sinh"
                                    : "Gia sư"
                                }
                              </h3>
                            </Col>
                        </Row>
                      </CardHeader>
                      <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Lớp</th>
                            <th scope="col">Môn</th>
                          </tr>
                        </thead>
                        <tbody className=" justify-content-center">
                          <tr onClick={() => showDetail(1)}>
                            <th scope="row">1</th>
                            <td>Nguyễn Văn A</td>
                            <td>2</td>
                            <td>Toán</td>
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

export default PersonList;