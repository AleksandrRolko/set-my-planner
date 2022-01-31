import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ManageTaskImage from "../../assets/images/bg/manage_task.jpg";
import LocationInformationComponent from "../Shared/LocationInformationComponent";
import { BsArrowLeft } from "react-icons/bs";
import { useHistory, useParams } from "react-router-dom";
import ManageTaskForm from "./ManageTaskForm";
import { createTask, getTask, updateTask } from "../../api/tasks";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { taskCreated, taskUpdated } from "../../store/slices/task";
import _ from "lodash";
import Button from "../Shared/Button";
import { getValidationResult } from "../../utils/validator";

const VALIDATION_RULES = {
  topic: [
    {
      invalid: value => _.isEmpty(_.trim(value)),
      message: 'Please enter a topic.'
    }
  ]
}

const ManageTask = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { taskId } = useParams();
  const [task, setTask] = useState({});
  const [validationResult, setValidationResult] = useState({});
  const selectedDate = useSelector(state => state.task.selectedDate);

  useEffect(() => {
    if (!!taskId) {
      getTask(taskId)
        .then(({ data }) => {
          setTask(data);
        });
    }
  }, [taskId]);

  const onBack = () => {
    history.push("/todo");
  }

  const onSubmit = () => {
    const formValidation = getValidationResult(VALIDATION_RULES, task);

    if (formValidation.valid) {
      if (_.isEmpty(taskId)) {
        createTask({
          ...task,
          date: moment(selectedDate).format("YYYY-MM-DD")
        })
          .then(({ data }) => {
            history.push("/todo");
            dispatch(taskCreated(data))
          })
      } else {
        updateTask(task)
          .then(({ data }) => {
            history.push("/todo");
            dispatch(taskUpdated(data))
          })
      }
    } else {
      setValidationResult(formValidation);
    }
  }

  return (
    <>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col className="p-0 h-100 Layout_ImageWrapper" sm={7}>
            <Image src={ManageTaskImage} className="Layout_Image"/>
            <LocationInformationComponent/>
          </Col>
          <Col sm={5} style={{ padding: '0 5rem' }}>
            <Row className="d-flex justify-content-center align-items-center mt-5 mb-3"
                 style={{ color: "rgba(0, 0, 0, 0.50)", fontSize: '1.125rem' }}>
              <span onClick={onBack}
                    className="d-flex align-items-center p-0"
                    style={{ cursor: "pointer" }}>
                <BsArrowLeft/>&nbsp;Back
              </span>
            </Row>
            <Row className="text-center">
              <h2 className="fw-bold mb-4">
                {_.isEmpty(taskId) ? "Add New Tasks" : "Edit Task"}
              </h2>
            </Row>
            <ManageTaskForm task={task}
                            validationResult={validationResult}
                            onChange={properties => setTask(task => ({ ...task, ...properties }))}
            />
            <Row className="mt-5 d-flex justify-content-center">
              <Button className="w-75"
                      onClick={onSubmit}
              >
                {!!task?.id ? "EDIT" : "ADD"}
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ManageTask;
