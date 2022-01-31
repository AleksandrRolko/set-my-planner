import React, { useState } from "react";
import { Carousel, Container, Image, Row } from "react-bootstrap";
import _ from "lodash";

import Quote1 from "../../assets/images/quotes/quoteCard-01.png"
import Quote2 from "../../assets/images/quotes/quoteCard-02.png"
import Quote3 from "../../assets/images/quotes/quoteCard-03.png"
import Quote4 from "../../assets/images/quotes/quoteCard-04.png"
import Navigation from "../Shared/Navigation";

const QUOTES = [
  Quote1,
  Quote2,
  Quote3,
  Quote4,
]

const Quote = (props) => {

  const [selectedIndex, setSelectedIndex] = useState(_.sample(QUOTES.map((_, index) => index)));

  return (
    <>
      <Container className="h-100 p-5 d-flex flex-column justify-content-between">
        <Row className="d-flex justify-content-center text-center">
          <h2 className="fw-bold">
            Quote of the day
          </h2>
        </Row>
        <Row>
          <Carousel activeIndex={selectedIndex}
                    interval={null}
                    onSelect={setSelectedIndex}
          >
            {
              QUOTES.map((quoteImage, index) => (
                <Carousel.Item key={index}>
                  <Image src={quoteImage}/>
                </Carousel.Item>
              ))
            }
          </Carousel>
        </Row>
        <Row>
          <Navigation/>
        </Row>
      </Container>
    </>
  );
}

export default Quote;
