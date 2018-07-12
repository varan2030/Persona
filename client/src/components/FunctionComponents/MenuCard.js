import React from "react";
import "./FunctionComponents.css";
import { Alert } from 'reactstrap';

// Menu card component
export const MenuCard = props => (
  <Alert className="dish" onClick={() => props.postOrderData(props)}>
       {props.dishName}
  </Alert>

);
