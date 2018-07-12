import React from "react";
import "./FunctionComponents.css";

// Character card component
export const TableCard = props => (
  <div>
  <img className="tableImage close" data-dismiss="" aria-label="Close" src={props.tableImg} onClick={() => props.handleDataTable(props.tableNumber, props)} alt="img"/>
       <h3>{props.tableNumber}</h3>
  </div>
);

