import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ManageTaskImage from "../../assets/images/bg/manage_task.jpg";
import LocationInformationComponent from "../Shared/LocationInformationComponent";
import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import ManageTaskForm from "./ManageTaskForm";
import { createTask } from "../../api/tasks";
import moment from "moment";
import { useDispatch } from "react-redux";
import { taskCreated } from "../../store/slices/task";


const ManageTask = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onBack = () => {
    history.push("/todo")
  }

  const onSubmit = (task) => {
    createTask({
      ...task,
      startTime: moment(task.startTime).format("hh:mm:ss"),
      endTime: moment(task.endTime).format("hh:mm:ss"),
    })
      .then(({ data }) => {
        history.push("/todo");
        dispatch(taskCreated(data))
      })
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
              <h2 className="fw-bold mb-4">Add New Tasks</h2>
            </Row>
            <ManageTaskForm onSubmit={onSubmit}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ManageTask;
