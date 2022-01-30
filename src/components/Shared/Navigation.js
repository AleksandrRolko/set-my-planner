import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Image, Nav, Row } from "react-bootstrap";

import HomeIcon from "../../assets/images/icons/home_icon.svg";
import TodoIcon from "../../assets/images/icons/todo_icon.svg";
import QuoteIcon from "../../assets/images/icons/quote_icon.svg";
import PhoneIcon from "../../assets/images/icons/phone_icon.svg";

import "./Navigation.css";

const Navigation = (props) => {
  const history = useHistory();

  const onSelect = (selectedPath) => {
    history.push(selectedPath);
  }

  return (
    <Nav className="d-flex justify-content-center"
         onSelect={onSelect}
    >
      <Nav.Item>
        <NavigationLink href="/home"
                        text="Home"
                        icon={HomeIcon}
        />
      </Nav.Item>
      <Nav.Item>
        <NavigationLink href="/todo"
                        text="Todo"
                        icon={TodoIcon}
        />
      </Nav.Item>
      <Nav.Item>
        <NavigationLink href="/quote"
                        text="Quote"
                        icon={QuoteIcon}
        />
      </Nav.Item>
      <Nav.Item>
        <NavigationLink href="/phonebook"
                        text="Phone"
                        icon={PhoneIcon}
        />
      </Nav.Item>
    </Nav>
  );
}

const NavigationLink = (props) => {
  const { icon, text, href } = props;

  return (
    <Link to={href} className="px-5 nav-link">
      <Col className="d-flex flex-column align-items-center">
        <Row style={{ minHeight: 35, minWidth: 35 }}>
          <Image src={icon}/>
        </Row>
        <Row style={{ color: '#230B34' }}>
          <span>{text}</span>
        </Row>
      </Col>
    </Link>
  );
}

export default Navigation;
