import React, { useEffect, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import _ from "lodash";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import locale from "date-fns/esm/locale/en-US";

import "./Calendar.css";
import { getMonthMatrix } from "../../utils/dates";

const weekdays = [...Array(7).keys()].map(i => locale.localize.day(i, { width: 'abbreviated' }))

const Calendar = (props) => {
  const { date } = props;

  const monthMatrix = useMemo(() => {
    return getMonthMatrix(moment(date).month(), moment(date).year());
  }, [moment(date).month()]);

  const monthMatrixComponent = useMemo(() => (
    monthMatrix.map((days, weekIndex) => (
      <Row key={weekIndex}>
        {
          days.map((day, dayIndex) => {
            return (
              <Col key={`${weekIndex} - ${dayIndex}`} style={{ padding: '0' }}>
                <span className="Calendar_DaySpan">
                  {
                    _.isEmpty(day)
                      ? ''
                      : moment(day).date()
                  }
                </span>
              </Col>
            )
          })
        }
      </Row>
    ))
  ), [monthMatrix]);

  return (
    <Container className="Calendar_Container">
      <Row className="d-flex justify-content-between align-items-center">
        <Col className="d-flex justify-content-start">
          <AiOutlineLeft/>
        </Col>
        <Col className="d-flex justify-content-center fw-bold">
          {moment(date).format("MMM YYYY")}
        </Col>
        <Col className="d-flex justify-content-end">
          <AiOutlineRight/>
        </Col>
      </Row>
      <Row className="Calendar_WeekRow">
        {
          weekdays.map(weekday => (
            <Col key={weekday}
                 className="Calendar_WeekCol">
              <span className="Calendar_WeekSpan">
                {weekday}
              </span>
            </Col>
          ))
        }
      </Row>
      {monthMatrixComponent}
    </Container>
  );
}

export default Calendar;
