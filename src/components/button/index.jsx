import React from "react";
import { Button } from "./styles";

const ButtonDefault = (props) => {
  return <Button {...props}>{props.title}</Button>;
};

export default ButtonDefault;
