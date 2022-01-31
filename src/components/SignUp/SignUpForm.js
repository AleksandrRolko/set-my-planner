import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { BsArrowLeft, BsPerson } from "react-icons/bs"
import { useHistory } from "react-router-dom";
import _ from "lodash";
import Button from "../Shared/Button";
import { EMAIL_REGEXP, PASSWORD_REGEXP } from "../../utils/constants";
import { getValidationResult } from "../../utils/validator";
import { InputAdornment, OutlinedInput, styled } from "@mui/material";
import { FiMail } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";

const CustomInput = styled(OutlinedInput)({
  "& legend": {
    display: "none"
  }
});

const VALIDATION_RULES = {
  name: [
    {
      invalid: value => _.isEmpty(_.trim(value)),
      message: 'Please enter a name.'
    }
  ],
  email: [
    {
      invalid: value => _.isEmpty(_.trim(value)),
      message: 'Please enter an email.'
    },
    {
      invalid: value => !EMAIL_REGEXP.test(value),
      message: 'Please enter valid email.'
    },
  ],
  password: [
    {
      invalid: value => _.isEmpty(_.trim(value)),
      message: 'Please enter a password.'
    },
    {
      invalid: value => _.trim(value).length < 8,
      message: 'Password should be more than 8 characters.'
    },
    {
      invalid: value => !PASSWORD_REGEXP.test(value),
      message: 'Password should include at least one number.'
    },
  ]
}

const SignUpForm = (props) => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationResult, setValidationResult] = useState({});

  const onBack = () => {
    history.push("/login")
  }

  const onSubmit = (user) => {
    const formValidation = getValidationResult(VALIDATION_RULES, user);

    if (formValidation.valid) {
      props.onSubmit(user);
    } else {
      setValidationResult(formValidation);
    }
  }

  return (
    <Container className="h-100">
      <Row className="d-flex justify-content-center">
        <h2 className="fw-bold d-flex justify-content-center">
          Create an account
        </h2>
      </Row>
      <Row className="d-flex justify-content-center align-items-center my-5"
           style={{ color: "rgba(0, 0, 0, 0.50)", fontSize: '1.125rem' }}>
        <span onClick={onBack}
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}>
          <BsArrowLeft/>&nbsp;Back
        </span>
      </Row>
      <Row className="my-4">
        <CustomInput
          value={name}
          variant="outlined"
          placeholder="Name"
          error={!!validationResult.name}
          onChange={({ target }) => setName(target.value)}
          startAdornment={
            <InputAdornment position="start">
              <BsPerson size="1.5rem"/>
            </InputAdornment>
          }
        />
        <span style={{ color: 'rgb(211, 47, 47)', padding: 0 }}>
          {validationResult.name}
        </span>
      </Row>
      <Row className="my-4">
        <CustomInput
          value={email}
          variant="outlined"
          placeholder="Email"
          error={!!validationResult.email}
          helperText={validationResult.email}
          onChange={({ target }) => setEmail(target.value)}
          startAdornment={
            <InputAdornment position="start">
              <FiMail size="1.5rem"/>
            </InputAdornment>
          }
        />
        <span style={{ color: 'rgb(211, 47, 47)', padding: 0 }}>
          {validationResult.email}
        </span>
      </Row>
      <Row className="my-4">
        <CustomInput
          value={password}
          variant="outlined"
          placeholder="Password"
          type="password"
          error={!!validationResult.password}
          helperText={validationResult.password}
          onChange={({ target }) => setPassword(target.value)}
          startAdornment={
            <InputAdornment position="start">
              <AiOutlineLock size="1.5rem"/>
            </InputAdornment>
          }
        />
        <span style={{ color: 'rgb(211, 47, 47)', padding: 0 }}>
          {validationResult.password}
        </span>
      </Row>
      <Row>
        <Button onClick={() => onSubmit({ name, email, password })}>
          SIGN UP
        </Button>
      </Row>

    </Container>
  );
}

export default SignUpForm;
