import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import _ from "lodash";
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


const ManageTaskForm = (props) => {
  const { task, onChange, validationResult } = props;

  return (
    <>
      <Row style={{ height: '60%' }}>
        <Card className="p-4">
          <Card.Body>
            <Row style={{ marginBottom: '4rem' }}>
              <InputWithLabel label="Topic"
                              placeholder="Write Topic"
                              value={task.topic}
                              onChange={value => onChange({ topic: value })}
                              error={!!validationResult.topic}
                              errorMessage={validationResult.topic}
              />
            </Row>
            <Row style={{ marginBottom: '4rem' }}>
              <InputWithLabel label="Description"
                              placeholder="Write Description"
                              value={task.description}
                              multiline={true}
                              onChange={value => onChange({ description: value })}
              />
            </Row>
            <Row>
              <Label text="Time"/>
              <Row>
                <Col md={4} className="p-0">
                  <ThemeProvider theme={materialTheme}>
                    <TimePicker value={_.isEmpty(task.startTime) ? null : moment(task.startTime, ['hh:mm:ss'])}
                                placeholder="00:00 am"
                                format="hh:mm a"
                                onChange={value => onChange({ startTime: _.isEmpty(value) ? null : moment(value).format("hh:mm:ss") })}
                    />
                  </ThemeProvider>
                </Col>
                <Col md="auto" className="d-flex align-items-center" style={{ color: 'rgba(124, 135, 165, 0.6)' }}>
                  <span>to</span>
                </Col>
                <Col md={4} className="p-0">
                  <ThemeProvider theme={materialTheme}>
                    <TimePicker value={_.isEmpty(task.endTime) ? null : moment(task.endTime, ['hh:mm:ss'])}
                                placeholder="00:00 am"
                                format="hh:mm a"
                                onChange={value => onChange({ endTime: _.isEmpty(value) ? null : moment(value).format("hh:mm:ss") })}
                    />
                  </ThemeProvider>
                </Col>
              </Row>
            </Row>
          </Card.Body>
        </Card>
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
