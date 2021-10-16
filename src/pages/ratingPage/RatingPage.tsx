import React, { FC, useState } from 'react';
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
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import Header from '../../components/common/Headers/Header';
import { useSelector } from 'react-redux';

const RatingPage: FC = () => {
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
                            <Col xs="5">
                              <h3 className="mb-0">Đánh giá</h3>
                            </Col>
                            <Form className="col-7 d-flex justify-content-between row">
                              <InputGroup className="col">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fas fa-search" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  placeholder="thời gian, tên học sinh, lớp, môn"
                                  type="text"
                                  name="password"
                                />
                              </InputGroup>
                              <Button color="primary" type="button">
                                Tìm kiếm
                              </Button>
                            </Form>
                        </Row>
                      </CardHeader>
                      <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Thời gian</th>
                            <th scope="col">Học sinh</th>
                            <th scope="col">Đánh giá</th>
                          </tr>
                        </thead>
                        <tbody className=" justify-content-center">
                          <tr onClick={() => showDetail(1)}>
                            <th scope="row">1</th>
                            <td>25/04/2021</td>
                            <td>Nguyễn Văn A</td>
                            <td>Dạy tốt .....</td>
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

export default RatingPage;