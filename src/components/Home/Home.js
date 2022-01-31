import React, { useEffect, useMemo, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import moment from "moment";

import Navigation from "../Shared/Navigation";
import HomeImage from "../../assets/images/bg/home.jpg";
import PersonImage from "../../assets/images/john.png";

import "./Home.css";
import LocationInformationComponent from "../Shared/LocationInformationComponent";
import { useHistory } from "react-router-dom";
import { StaticDatePicker } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { dateSelected } from "../../store/slices/task";


const Home = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [currentTime, setCurrentTime] = useState(moment());
  const selectedDate = useSelector(state => state.task.selectedDate);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
  }, []);

  const onDateSelected = (value) => {
    dispatch(dateSelected(value));
    history.push("/todo");
  }

  const timer = useMemo(() => {
    return (
      <Row className="Home_Timer">
        <Col className="d-flex justify-content-center align-items-center">
          <span className="Home_TimerTime">
            {currentTime.format('HH:mm:ss')}
          </span>
          <span>&nbsp;</span>
          <span className="Home_TimerNoon">
            {currentTime.format('a').toUpperCase()}
          </span>
        </Col>
      </Row>
    );
  }, [currentTime])

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col className="p-0 h-100 Layout_ImageWrapper" sm={7}>
          <Image src={HomeImage} className="Layout_Image"/>
          <LocationInformationComponent/>
        </Col>
        <Col sm={5}>
          <Row>
            <Navigation/>
          </Row>
          <Row className="d-flex text-center pt-3">
            <h2 className="fw-bold">
              Hello, {currentUser.firstName}!
            </h2>
            <h4>
              How are you today?
            </h4>
          </Row>
          <Row className="d-flex justify-content-center text-center pt-3">
            <Image src={currentUser.image}
                   style={{ maxWidth: 200, maxHeight: 200 }}
                   className="Home_PersonImage"
            />
            <h2 style={{ fontSize: '25px' }}
                className="fw-bold pt-3"
            >
              {`${currentUser.firstName} ${currentUser.lastName}`}
            </h2>
          </Row>
          {timer}
          <Row className="Home_Calendar">
            <StaticDatePicker value={selectedDate}
                              views={['day']}
                              format="EE-MM/dd/yyyy"
                              onChange={onDateSelected}
                              orientation="landscape"
                              showToolbar={false}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
