import React, { FC } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardTitle,
  CardText,
  Table,
  Container,
  Row
} from "reactstrap";
import Header from '../../components/common/Headers/Header';

const TutionFeePage: FC = () => {
  return (
    <>
    <Header />
      <Container className="mt--7 pb-5" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h2>Học phí gia sư dạy 2 buổi/ tuần (1 tháng/ 8 buổi)</h2>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Lớp</th>
                      <th scope="col">Sinh viên</th>
                      <th scope="col">Giáo viên</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        1, 2, 3, 4, 5
                      </th>
                      <td>1.000.000</td>
                      <td>1.400.000 - 1.600.000</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        6, 7, 8, 9
                      </th>
                      <td>	1.100.000 - 1.200.000</td>
                      <td>1.600.000 - 1.800.000</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        10, 11, 12
                      </th>
                      <td>1.300.000 - 1.500.000</td>
                      <td>1.800.000 - 2.000.000</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col py-5">
            <Card>
              <CardHeader>
                <h2>Học phí gia sư dạy 3 buổi/ tuần (1 tháng/ 12 buổi)</h2>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Lớp</th>
                      <th scope="col">Sinh viên</th>
                      <th scope="col">Giáo viên</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        1, 2, 3, 4, 5
                      </th>
                      <td>1.300.000 - 1.400.000</td>
                      <td>2.200.000 - 2.400.000</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        6, 7, 8, 9
                      </th>
                      <td>	1.800.000 - 2.200.000</td>
                      <td>2.800.000 - 3.000.000</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        10, 11, 12
                      </th>
                      <td>1.300.000 - 1.500.000</td>
                      <td>1.800.000 - 2.000.000</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col py-5">
            <Card>
              <CardHeader>
                <h2>Học phí gia sư dạy 5 buổi/ tuần (1 tháng/ 20 buổi)</h2>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Lớp</th>
                      <th scope="col">Sinh viên</th>
                      <th scope="col">Giáo viên</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        1, 2, 3, 4, 5
                      </th>
                      <td>2.000.000 - 2.400.000</td>
                      <td>3.500.000 - 4.000.000</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        6, 7, 8, 9
                      </th>
                      <td>2.400.000 - 2.600.000</td>
                      <td>4.000.000 - 4.500.000</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        10, 11, 12
                      </th>
                      <td>2.800.000 - 3.000.000</td>
                      <td>4.500.000 - 5.000.000</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col py-5">
            <Card>
              <CardHeader>
                <h2>Học phí gia sư luyện thi tuyển sinh lớp 10 môn Toán, Văn, Tiếng Anh</h2>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Gia sư</th>
                      <th scope="col">2 buổi/tuần</th>
                      <th scope="col">3 buổi/tuần</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                       Sinh viên
                      </th>
                      <td>1.500.000</td>
                      <td>2.000.000</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Giáo viên
                      </th>
                      <td>2.000.000</td>
                      <td>3.000.000</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="col py-5">
            <Card>
              <CardHeader>
                <h2>Học phí gia sư dạy giao tiếp Tiếng Anh, Tiếng Hàn, Tiếng Nhật, Tiếng Pháp, Tiếng Trung</h2>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Gia sư</th>
                      <th scope="col">2 buổi/tuần</th>
                      <th scope="col">3 buổi/tuần</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                       Sinh viên
                      </th>
                      <td>1.600.000</td>
                      <td>2.400.000</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Giáo viên
                      </th>
                      <td>2.000.000</td>
                      <td>3.000.000</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>

    </>
  );
}

export default TutionFeePage;