import React, { useMemo, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { BsCheckCircle, BsTrash } from "react-icons/bs";
import { Grow } from "@mui/material";
import _ from "lodash";

import EditTaskIcon from "../../assets/images/icons/edit_task_icon.svg"
import EyeIcon from "../../assets/images/icons/eye_icon.svg"

import "./TaskCard.css";
import moment from "moment";
import { deleteTask, updateTask } from "../../api/tasks";
import { taskDeleted, taskUpdated } from "../../store/slices/task";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const TaskCard = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { task } = props;

  const [isDetailsOpened, setIsDetailsOpened] = useState(false);
  const [animation, setAnimation] = useState(false);

  const checkIconColor = useMemo(() => {
    return task.isCompleted
      ? "green"
      : "rgba(0, 0, 0, 0.5)"
  }, [task.isCompleted]);

  const onViewDetailsClick = () => {
    if (isDetailsOpened) {
      setAnimation(false);
      setTimeout(() => {
        setIsDetailsOpened(false);
      }, 1000)
    } else {
      setAnimation(true);
      setIsDetailsOpened(true);
    }
  }

  const onCheckmarkClick = () => {
    updateTask({ ...task, isCompleted: !task.isCompleted })
      .then(({ data }) => {
        dispatch(taskUpdated(data))
      })
  }

  const onDeleteClick = () => {
    deleteTask(task.id)
      .then(_ => {
        dispatch(taskDeleted(task.id))
      })
  }

  const onEditClick = () => {
    history.push(`/task/${task.id}/edit`)
  }

  return (
    <Container style={{ padding: '0.5rem 3rem' }}>
      <Card className="p-4">
        <Card.Body className="p-0">
          <Row>
            <Col className="fw-bold" style={{ fontSize: 22 }}>
              <BsCheckCircle color={checkIconColor}
                             cursor="pointer"
                             onClick={onCheckmarkClick}
              />
              &nbsp;
              {task.topic}
            </Col>
            <Col md="auto" className="d-flex flex-column">
              {
                !_.isEmpty(task.startTime) && !_.isEmpty(task.endTime) &&
                <>
                <span className="w-100 text-end TaskCard_Time">
                  {moment(task.startTime, ['hh:mm:ss']).format("hh:mm a")}
                </span>
                  <span className="w-100 text-center" style={{ fontSize: 14, color: '#969393' }}>to</span>
                  <span className="w-100 text-end TaskCard_Time">
                  {moment(task.endTime, ['hh:mm:ss']).format("hh:mm a")}
                </span>
                </>
              }
            </Col>
          </Row>
          <Row className="mt-3">
            <Col style={{ fontSize: 18 }}>
              <span onClick={onViewDetailsClick}
                    style={{ cursor: 'pointer' }}
              >
                View details
              </span>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <div className="TaskCard_EditIcon">
                <Image src={EditTaskIcon}
                       style={{ cursor: "pointer" }}
                       onClick={onEditClick}
                />
              </div>
              <div className="TaskCard_TrashIcon">
                <BsTrash size="1.5rem"
                         color="#FFB600"
                         onClick={onDeleteClick}
                         cursor="pointer"
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {
        isDetailsOpened &&
        <Grow in={animation}
              style={{ transformOrigin: '0 0 0' }}
              {...(isDetailsOpened ? { timeout: 1000 } : {})}
        >
          <div className="p-0 d-flex justify-content-end" style={{ marginLeft: '1rem' }}>
            <Card className="p-4 mt-2" style={{ width: '85%' }}>
              <Card.Body className="p-0">
                <Row>
                  <Col>
                    {task.description}
                  </Col>
                  <Col md="auto" className="d-flex flex-column justify-content-end">
                    <Image src={EyeIcon}
                           onClick={onViewDetailsClick}
                           style={{ cursor: 'pointer' }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Grow>
      }
    </Container>
  );
}

export default TaskCard;
