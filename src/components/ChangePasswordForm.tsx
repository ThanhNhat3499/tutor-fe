import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Col, Button } from 'reactstrap';
import { updatePassword } from '../redux/actions/authAction';
import { User } from '../styles/types/Models';

const ChangePasswordForm: FC<{user: User}> = (props) => {
  // console.log("change password: ", props.user);
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    console.log(name, value);
    
    setData({ ...data, [name]: value });
  }

  const handleSubmit = async () => {
    const status = await dispatch(updatePassword(props.user._id !== undefined ? props.user._id : "", data));
  }
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="oldPaaword" sm={5}>Mật khẩu cũ: </Label>
          <Col>
            <Input type="password" name="oldPassword" id="oldPaaword" placeholder="Mật khẩu cũ" onChange={handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="newPassword1" sm={5}>Mật khẩu mới: </Label>
          <Col>
            <Input type="password" name="newPassword" id="newPassword1" placeholder="Mật khẩu mới" onChange={handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="newPassword2" sm={5}>Nhập lại mật khẩu mới: </Label>
          <Col>
            <Input type="password" name="newPasswordAgain" id="newPassword2" placeholder="Nhập lại mật khẩu mới" onChange={handleChange} />
          </Col>
        </FormGroup>
        <div className="pb-5 d-flex justify-content-center">
          <Button color="primary" type="submit">
            Lưu thay đổi
          </Button>
        </div>
      </Form>
    </>
  );
}

export default ChangePasswordForm;