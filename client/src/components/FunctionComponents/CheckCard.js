import React from "react";
import { ListGroupItem, Col, Row } from 'reactstrap';
import "./FunctionComponents.css";

export const CheckCard = props => (
  
  <ListGroupItem className="item"><Row><Col md="8">{props.dish}:</Col><Col  md="4">{props.total}</Col></Row></ListGroupItem>
);

