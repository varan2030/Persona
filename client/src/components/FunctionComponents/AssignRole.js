import React from "react";
import { Button, ButtonGroup } from 'reactstrap';

export const AssignRole = props => (
<div>
  <h5>Select Role: </h5>
  <ButtonGroup>
    <Button color="primary" onClick={() => props.onRadioBtnClick("Host")} active={props.employeeRole === "Host"}>Host</Button>
    <Button color="primary" onClick={() => props.onRadioBtnClick("Waiter")} active={props.employeeRole === "Waiter"}>Waiter</Button>
  </ButtonGroup>
  <p>Selected: {props.employeeRole}</p>
</div>
);
