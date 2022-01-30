import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TodoImage from "../../assets/images/bg/todo.jpg";
import LocationInformationComponent from "../Shared/LocationInformationComponent";
import Navigation from "../Shared/Navigation";
import { MdAddCircle } from "react-icons/md";
import { getTasks } from "../../api/tasks";
import TaskCard from "./TaskCard";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./Todo.css";
import { tasksFetched } from "../../store/slices/task";
import { useHistory } from "react-router-dom";

const Todo = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const tasks = useSelector(state => state.task.tasks);

  useEffect(() => {
    getTasks()
      .then(({ data }) => {
        dispatch(tasksFetched(data))
      })
  }, []);

  const onNewTaskClick = () => {
    history.push("/task/new")
  }

  return (
    <>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col className="p-0 h-100 Layout_ImageWrapper" sm={7}>
            <Image src={TodoImage} className="Layout_Image"/>
            <LocationInformationComponent/>
          </Col>
          <Col sm={5}>
            <Row>
              <Navigation/>
            </Row>
            <Row className="m-3 align-items-center">
              <Col sm={2}>

              </Col>
              <Col sm={8}>
                <h2 className="fw-bold text-center m-0">
                  My Today's Plan
                </h2>
              </Col>
              <Col sm={2}>
                <MdAddCircle size="3rem"
                             color="#FFB600"
                             cursor="pointer"
                             onClick={onNewTaskClick}
                />
              </Col>
            </Row>
            <Row className="Todo_TaskListContainer">
              <Scrollbars autoHide={true}
                          renderThumbVertical={({ style, ...props }) => (
                            <div {...props} style={{ ...style, width: '50px' }}/>
                          )}
              >
                {
                  tasks.map(task => (
                    <TaskCard key={task.id}
                              task={task}
                    />
                  ))
                }
              </Scrollbars>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Todo;
