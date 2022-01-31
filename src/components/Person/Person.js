import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getPerson } from "../../api/persons";
import { Col, Container, Image, Row } from "react-bootstrap";
import Anonymous from "../../assets/images/anonymous.png";
import PersonImage from "../../assets/images/bg/person.jpg";
import LocationInformationComponent from "../Shared/LocationInformationComponent";
import { BsArrowLeft } from "react-icons/bs";
import PersonAvatar from "../Shared/PersonAvatar";
import _ from "lodash";

import "./Person.css"

const Person = (props) => {
  const history = useHistory();
  const { personId } = useParams();

  const [person, setPerson] = useState({});

  useEffect(() => {
    getPerson(personId)
      .then(({ data }) => {
        setPerson(data);
      })
  }, [personId]);

  const onBack = () => {
    history.push("/phonebook");
  }

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col className="p-0 h-100 Layout_ImageWrapper" sm={7}>
          <Image src={PersonImage} className="Layout_Image"/>
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
          <Row className="mt-5">
            <PersonAvatar src={_.isEmpty(person.image) ? Anonymous : person.image}
                          className="Phonebook_PersonImage"
                          style={{ maxHeight: 200, maxWidth: 200 }}
            />
          </Row>
          <Row className="Person_Name mt-3">
            <span>
              {person.name}
            </span>
          </Row>
          <Row className="Person_Phone">
            <span>
              {person.phone}
            </span>
          </Row>

        </Col>
      </Row>
    </Container>
  );
}

export default Person;
