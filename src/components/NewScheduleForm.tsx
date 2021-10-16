import React, { FC, useState } from 'react';
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label,
  Button
} from "reactstrap";
import { Schedule, User } from '../styles/types/Models';

const NewScheduleForm: FC<{user: User}> = (props) => {
  const [schedule, setSchedule] = useState<Schedule>({
    tutorId: props.user._id,
    tutorName: props.user.fullname,
    subject: [],
    grade: [],
    time: [],
    price: [],
    image: [],
    address: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSchedule({ ...schedule, [name]: value });
  }

  const handleSubmit = () => {

  }

  console.log("schedule: ", schedule);
  

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Col>
          <h4>1. Môn học bạn có thể dạy : </h4>
          <Col>
            <h4>Các môn tự nhiên</h4>
            <Row className="justify-content-around mb-3">
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Toán Học" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Toán Học</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Vật Lý" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Vật Lý</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Hóa Học" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Hóa Học</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Sinh Học" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Sinh Học</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Tin Học" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Tin Học</Label>
              </FormGroup>
            </Row>
          </Col>
          <Col>
            <h4>Các môn xã hội</h4>
            <Row className="justify-content-around mb-3">
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Ngữ Văn" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Ngữ Văn</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Tiếng Việt" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Tiếng Việt</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Lịch sử" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lịch sử</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Địa Lý" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Địa Lý</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Luyện chữ đẹp" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Luyện chữ đẹp</Label>
              </FormGroup>
            </Row>
          </Col>
          <Col>
            <h4>Các môn ngoại ngữ</h4>
            <Row className="justify-content-around mb-3">
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Tiếng Anh" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Tiếng Anh</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Tiếng Nhật" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Tiếng Nhật</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Tiếng Pháp" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Tiếng Pháp</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Tiếng Hàn" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Tiếng Hàn</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Tiếng Tây Ban Nha" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Tiếng Tây Ban Nha</Label>
              </FormGroup>
            </Row>
          </Col>
          <Col>
            <h4>Các môn năng khiếu</h4>
            <Row className="justify-content-around mb-3">
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Piano" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Piano</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Ghita" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Ghita</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Organ" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Organ</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="subject" id="exampleCheck" value="Thanh nhạc" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Thanh nhạc</Label>
              </FormGroup>
            </Row>
          </Col>
        </Col>
        <Col>
          <h4>2. Khối lớp bạn có thể dạy : </h4>
          <Col>
            <h4>Cấp THPT</h4>
            <Row className="justify-content-around mb-3">
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Luyện thi đại học" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Luyện thi đại học</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 12" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 12</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 11" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 11</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 10" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 10</Label>
              </FormGroup>
            </Row>
          </Col>
          <Col>
            <h4>Cấp THCS</h4>
            <Row className="justify-content-around mb-3">
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 9" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 9</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 8" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 8</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 7" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 7</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 6" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 6</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 5" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 5</Label>
              </FormGroup>
            </Row>
          </Col>
          <Col>
            <h4>Cấp tiểu học</h4>
            <Row className="justify-content-around mb-3">
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 4" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 4</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 3" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 3</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 2" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 2</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Lớp 1" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Lớp 1</Label>
              </FormGroup>
            </Row>
          </Col>
          <Col>
            <h4>Cấp học khác</h4>
            <Row className="justify-content-around mb-3">
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Mầm non" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Mầm non</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="grade" id="exampleCheck" value="Người đi làm" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Người đi làm</Label>
              </FormGroup>
            </Row>
          </Col>
        </Col>
        <Col>
          <h4>3. Khu vực bạn có thể dạy : </h4>
          <Col>
            <Row className="justify-content-around mb-3">
              <FormGroup check>
                <Input type="checkbox" name="address" id="exampleCheck" value="Cẩm Lệ" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Cẩm Lệ</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="address" id="exampleCheck" value="Hải Châu" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Hải Châu</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="address" id="exampleCheck" value="Liên Chiểu" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Liên Chiểu</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="address" id="exampleCheck" value="Ngũ Hành Sơn" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Ngũ Hành Sơn</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="address" id="exampleCheck" value="Sơn Trà" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Sơn Trà</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="address" id="exampleCheck" value="Thanh Khê" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Thanh Khê</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="address" id="exampleCheck" value="Hoàng Sa" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Hoàng Sa</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="address" id="exampleCheck" value="Hòa Vang" onChange={handleChange}/>
                <Label for="exampleCheck" size="sm" check>Hòa Vang</Label>
              </FormGroup>
            </Row>
          </Col>
        </Col>
        <Col className="pt-5 d-flex justify-content-center">
          <Button color="secondary" data-dismiss="modal" type="button" >
            Hủy
          </Button>
          <Button color="primary" type="submit">
            Thêm mới
          </Button>
        </Col>
      </Form>
    </>
  );
}

export default NewScheduleForm;
