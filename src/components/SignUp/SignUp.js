import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import RegisterImage from "../../assets/images/bg/signup.jpg";
import SignUpForm from "./SignUpForm";
import { createUser } from "../../api/users";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  const history = useHistory();

  const onSubmit = (user) => {
    createUser(user)
      .then(({ data }) => {
        history.push("/login")
      })
  }

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col className="p-0 h-100 Layout_ImageWrapper" sm={7}>
          <Image src={RegisterImage} className="Layout_Image"/>
        </Col>
        <Col style={{ padding: '6rem 3rem' }} sm={5}>
          <SignUpForm onSubmit={onSubmit}/>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
