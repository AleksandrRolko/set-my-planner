import React from "react";
import { Image } from "react-bootstrap";
import _ from "lodash";
import "./PersonAvatar.css";

const PersonAvatar = (props) => {
  const { src, style } = props;

  return (
    <>
      <Image src={src}
             className="PersonAvatar_Image"
             style={_.isEmpty(style) ? {} : style}
      />
    </>
  );
}

export default PersonAvatar;
