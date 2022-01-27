import React, { useEffect, useState } from "react";
import { Col, Container, FormCheck, FormControl, Image, Row } from "react-bootstrap";
import LoginImage from "../../assets/images/bgImg-01.jpg"
import Logo from "../../assets/images/logo.svg"
import Button from "../Shared/Button";

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);


  useEffect(() => {
    console.log(email, password, rememberMe)
  }, [email, password, rememberMe]);

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col className="p-0 h-100 Layout_ImageWrapper" sm={7}>
          <Image src={LoginImage} className="Layout_Image"/>
        </Col>
        <Col style={{ padding: '6rem 3rem' }} sm={5}>
          <Container className="h-100">
            <Row className="d-flex justify-content-center">
              <Image src={Logo} className="p-0" style={{ width: '25vmax', height: '40vmin' }}/>
            </Row>
            <Row>
              <FormControl value={email}
                           onChange={({ target }) => setEmail(target.value)}
                           placeholder="Email"
                           type="email"
                           className="mb-3 mt-5"
                           aria-autocomplete="none"
                           style={{ height: '3rem' }}
              />
            </Row>
            <Row style={{ marginBottom: '3rem ' }}>
              <FormControl value={password}
                           onChange={({ target }) => setPassword(target.value)}
                           placeholder="Password"
                           type="password"
                           className="my-3"
                           style={{ height: '3rem' }}
              />
              <FormCheck value={rememberMe}
                         onChange={({ target }) => setRememberMe(target.checked)}
                         label="Remember me"
                         id="login-remember-me"
                         style={{ color: 'rgba(0, 0, 0, 0.5)' }}
              />
            </Row>
            <Row>
              <Button>
                LOG IN
              </Button>
              <div className="d-flex justify-content-center mt-3">
                Don't have an account?&nbsp;
                <span className="fw-bold"
                      style={{ cursor: 'pointer' }}
                      onClick={() => console.log("SIGN UP")}>
                  Sign up.
                </span>
              </div>
            </Row>

          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
