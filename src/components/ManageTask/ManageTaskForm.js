import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "../Shared/Button";
import _ from "lodash";
import { getValidationResult } from "../../utils/validator";
import { TextField } from "@mui/material";
import { TimePicker } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import moment from "moment";

const materialTheme = createTheme({
  palette: {
    primary: {
      main: '#FFB600'
    }
  },
});


const VALIDATION_RULES = {
  topic: [
    {
      invalid: value => _.isEmpty(_.trim(value)),
      message: 'Please enter a topic.'
    }
  ]
}

const ManageTaskForm = (props) => {
  const { task } = props;

  const [topic, setTopic] = useState(task?.topic || "");
  const [description, setDescription] = useState(task?.description || "");
  const [startTime, setStartTime] = useState(_.isEmpty(task?.startTime) ? null : moment(task.startTime, ['hh:mm:ss']));
  const [endTime, setEndTime] = useState(_.isEmpty(task?.endTime) ? null : moment(task.endTime, ['hh:mm:ss']));
  const [validationResult, setValidationResult] = useState({});

  const onSubmit = (task) => {
    const formValidation = getValidationResult(VALIDATION_RULES, task);

    if (formValidation.valid) {
      props.onSubmit(task);
    } else {
      setValidationResult(formValidation);
    }
  }

  return (
    <>
      <Row style={{ height: '60%' }}>
        <Card className="p-4">
          <Card.Body>
            <Row style={{ marginBottom: '4rem' }}>
              <InputWithLabel label="Topic"
                              placeholder="Write Topic"
                              value={topic}
                              onChange={setTopic}
                              error={!!validationResult.topic}
                              errorMessage={validationResult.topic}
              />
            </Row>
            <Row style={{ marginBottom: '4rem' }}>
              <InputWithLabel label="Description"
                              placeholder="Write Description"
                              value={description}
                              multiline={true}
                              onChange={setDescription}
              />
            </Row>
            <Row>
              <Label text="Time"/>
              <Row>
                <Col md={4} className="p-0">
                  <ThemeProvider theme={materialTheme}>
                    <TimePicker value={startTime}
                                placeholder="00:00 am"
                                format="hh:mm a"
                                onChange={setStartTime}
                    />
                  </ThemeProvider>
                </Col>
                <Col md="auto" className="d-flex align-items-center" style={{ color: 'rgba(124, 135, 165, 0.6)' }}>
                  <span>to</span>
                </Col>
                <Col md={4} className="p-0">
                  <ThemeProvider theme={materialTheme}>
                    <TimePicker value={endTime}
                                placeholder="00:00 am"
                                format="hh:mm a"
                                onChange={setEndTime}
                    />
                  </ThemeProvider>
                </Col>
              </Row>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Button className="w-75"
                onClick={() => onSubmit({ topic, description, startTime, endTime })}
        >
          {!!task.id ? "EDIT" : "ADD"}
        </Button>
      </Row>
    </>
  );
}

const InputWithLabel = (props) => {
  const { value, onChange, label, placeholder, multiline, error, errorMessage } = props;

  return (
    <>
      <Label text={label}/>
      <TextField value={value}
                 onChange={({ target }) => onChange(target.value)}
                 placeholder={placeholder}
                 error={error}
                 variant="standard"
                 helperText={errorMessage}
                 multiline={multiline}
                 className="p-0"
                 fullWidth
      />
    </>
  );
}

const Label = (props) => {
  const { text } = props;

  return (
    <h4 className="fw-bold p-0"
        style={{ fontSize: '1.375rem' }}>
      {text}
    </h4>
  );
}

export default ManageTaskForm;
