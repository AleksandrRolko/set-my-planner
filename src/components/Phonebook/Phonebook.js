import React, { useEffect, useMemo, useState, Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import PhonebookImage from "../../assets/images/bg/phonebook.jpg";
import LocationInformationComponent from "../Shared/LocationInformationComponent";
import Navigation from "../Shared/Navigation";
import { InputAdornment, OutlinedInput, styled } from "@mui/material";
import { BiSearchAlt2 } from "react-icons/bi";
import { getPersons } from "../../api/persons";
import { useDispatch, useSelector } from "react-redux";
import { personsFetched } from "../../store/slices/person";
import PersonCard from "./PersonCard";
import Scrollbars from "react-custom-scrollbars-2";
import _ from "lodash";

const CustomInput = styled(OutlinedInput)({
  borderRadius: 50,
  width: '75%',
  "& legend": {
    display: "none"
  }
});

const Phonebook = (props) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const persons = useSelector(state => _.orderBy(state.person.persons, ['name'], ['asc']));

  useEffect(() => {
    getPersons()
      .then(({ data }) => {
        dispatch(personsFetched(data))
      })
  }, [dispatch]);

  const filteredPersons = useMemo(() => {
    if (search.match(/^\d/)) {
      return _.filter(persons, person => person.phone.startsWith(search))
    } else if (search.match(/^[a-zA-Z]/)) {
      return _.filter(persons, person => person.name.toLowerCase().startsWith(search.toLowerCase()))
    } else {
      return persons;
    }
  }, [search, persons])

  const groupedPersons = useMemo(
    () => _.groupBy(filteredPersons, person => person.name.charAt(0).toUpperCase()),
    [filteredPersons]
  );


  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col className="p-0 h-100 Layout_ImageWrapper" sm={7}>
          <Image src={PhonebookImage} className="Layout_Image"/>
          <LocationInformationComponent/>
        </Col>
        <Col sm={5}>
          <Row>
            <Navigation/>
          </Row>
          <Row style={{ margin: '2rem 0' }}>
            <Col>
              <h2 className="fw-bold text-center m-0">
                My Phone Book
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <CustomInput
              id="outlined-adornment-password"
              value={search}
              label="Outlined"
              placeholder="Search by name or number"
              onChange={({ target }) => setSearch(target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <BiSearchAlt2 size="2rem"/>
                </InputAdornment>
              }
            />
          </Row>
          <Row className="Phonebook_ScrollbarWrapper">
            <Scrollbars autoHide={true}>
              {
                _.entries(groupedPersons)
                  .map(([letter, persons]) => (
                    <Fragment key={letter}>
                      {
                        persons.map((person, index) => (
                          <Container key={person.id}
                                     style={{ padding: '0.5rem 2rem' }}>
                            <Row>
                              <Col md={1} className="Phonebook_GroupCol">
                                {
                                  index === 0 && letter
                                }
                              </Col>
                              <Col className="p-0">
                                <PersonCard person={person}/>
                              </Col>
                            </Row>
                          </Container>
                        ))
                      }
                    </Fragment>
                  ))
              }
            </Scrollbars>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Phonebook;
