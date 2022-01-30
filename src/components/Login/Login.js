import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LoginImage from "../../assets/images/bg/login.jpg"
import LoginForm from "./LoginForm";
import { loginUser } from "../../api/users";

const Login = (props) => {
  const history = useHistory();

  const onLogin = (credentials) => {
    loginUser(credentials)
      .then(({ data }) => {
        localStorage.setItem("token", data.token)
        history.push("/home");
      })
  }

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col className="p-0 h-100 Layout_ImageWrapper" sm={7}>
          <Image src={LoginImage} className="Layout_Image"/>
        </Col>
        <Col style={{ padding: '6rem 3rem' }} sm={5}>
          <LoginForm onLogin={onLogin}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
