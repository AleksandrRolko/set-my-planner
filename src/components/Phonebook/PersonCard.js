import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import Anonymous from "../../assets/images/anonymous.png";
import { AiOutlineMore } from "react-icons/ai"
import "./PersonCard.css";
import { useHistory } from "react-router-dom";
import _ from "lodash";

const PersonCard = (props) => {
  const history = useHistory();

  const { person } = props;

  const onDetailClick = () => {
    history.push(`/person/${person.id}`)
  }

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md="auto">
            <Image src={_.isEmpty(person.image) ? Anonymous : person.image}
                   className="Phonebook_PersonImage"
            />
          </Col>
          <Col className="d-flex justify-content-center flex-column">
            <span className="fw-bold" style={{ fontSize: '1.625rem' }}>
              {person.name}
            </span>
            <span className="Phonebook_PersonPhone">
              {person.phone}
            </span>
          </Col>
          <Col md="auto" className="d-flex flex-column justify-content-center">
            <AiOutlineMore size="3rem"
                           color="#FFB600"
                           cursor="pointer"
                           onClick={onDetailClick}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
