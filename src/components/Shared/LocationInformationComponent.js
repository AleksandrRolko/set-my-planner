import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import _ from "lodash";
import moment from "moment";
import { getCurrentWeather } from "../../api/weather";
import WeatherIcon from "./WeatherIcon";

const LocationInformationComponent = (props) => {

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        getCurrentWeather(position.coords.longitude, position.coords.latitude)
          .then(data => {
            setWeatherData(data);
          })
      })
    }
  }, []);

  return (
    <>
      {
        _.isEmpty(weatherData)
          ? <div/>
          : (
            <Container className="Weather_Container" style={{ maxWidth: '50%' }}>
              <Row className="Weather_DateSpan">
                <Col>
                  {moment().format('dddd, MMMM D, YYYY')}
                </Col>
              </Row>
              <Row className="Weather_Temperature">
                <Col md="auto">
                  {weatherData.temperature}
                </Col>
                <Col md="auto" style={{ fontSize: '3rem', lineHeight: '3rem' }}>
                  °C
                </Col>
                <Col md="auto">
                  <Row md="auto"
                       className="d-flex flex-column justify-content-center align-items-center"
                       style={{ fontSize: '4rem', lineHeight: '4rem' }}>
                    <WeatherIcon code={weatherData.weatherCode}/>
                    <span style={{ fontSize: '1.5rem', lineHeight: '1.5rem' }}>{weatherData.weatherType}</span>
                  </Row>
                </Col>
              </Row>
              {/*<Row className="Weather_LocationContainer">*/}
              {/*  <Col>*/}
              {/*    Bangkok, Tailand*/}
              {/*  </Col>*/}
              {/*</Row>*/}
            </Container>
          )
      }
    </>
  );
}

export default LocationInformationComponent;
