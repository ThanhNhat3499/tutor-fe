import React, { FC, useState } from 'react';
import { Form, FormGroup, Label, Col, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NewPostLookingForTutorForm: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={3}>Môn học</Label>
          <Col sm={9}>
            <Input type="select" name="select" id="exampleSelect">
              <option>Toán</option>
              <option>Vật Lý</option>
              <option>Hóa Học</option>
              <option>Sinh Học</option>
              <option>Ngữ Văn</option>
              <option>Anh Văn</option>
              <option>Các môn năng khiếu</option>
              <option>Các môn khác</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={3}>Học lực hiện tại</Label>
          <Col sm={9}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={3}>Số buổi</Label>
          <Col sm={9}>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={3}>Thời gian học</Label>
          <Col sm={9}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={3}>Yêu cầu khác</Label>
          <Col sm={9}>
            <Input type="textarea" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
      </Form>
    </>
  );
}

export default NewPostLookingForTutorForm;