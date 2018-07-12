import React, { Component } from "react";
import { Col, Row, Container, Wrapper, List, ListItem } from "../../components/LayoutComponents";
import { MenuCard, TableCard, CheckCard, DeleteBtn, UserName } from "../../components/FunctionComponents";
import { ListGroup} from 'reactstrap';
import API from "../../utils/API";
import "./Waiter.css"

class Waiter extends Component {
  state = {
    faceId: "",
    bevPref: "N/A",
    appPref: "N/A",
    protPref: "N/A",
    vegPref: "N/A",
    starchPref: "N/A",
    dessertPref: "N/A",
    custName: "N/A",
    table: 1,
    position: 1,
    tableImg: "/images/person-placeholder.jpg",
    menu: [],
    tables: [],
    orders: [],
    check: [],
    totalCheck: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }; // end method, handleInputChange

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('order placed');
  }; // end method, handleFormSubmit

  getMenuData = event => {
    API.getMenuData()
    .then(res => this.handleMenuData(res.data))
    .catch(err => console.log(err));
  } // end method, getMenuData

  handleMenuData = (data) => {
    this.setState({menu: data});
  console.log(this.state.menu);
  } // end method, handleMenuData

  postOrderData = (data) =>{
    API.postOrder({
    customerId: this.state.faceId,
    orderStatus: "open",
    dishName: data.dishName,
    alias: data.alias,
    price: data.price,
    menuSelection: data.menuSelection,
    table: this.state.table
    })
  .then(res => this.getCurrentOrderData(res.data.customerId))
  .catch(err => console.log(err));
  } // end method, postOrderData

  getCurrentOrderData = id =>{
  API.getOrder(id)
  .then(res => this.handleDisplayOrders(res.data))
  .catch(err => console.log(err));
  } // end method, getCurrentOrderData

  handleDisplayOrders = data =>{
    console.log(data)
    this.setState({orders: data})
  } // end method, handleDisplayOrders


  getTableData = () => {
    API.getTablesData()
    .then(res => this.handleTableData(res.data))
    .catch(err => console.log(err));
  } // end method, getTableData

  handleTableData = data => {
    for (let value of data){
      if(value.tableAvailability === "available"){
        value.tableImg = "/images/table.png";
      };
      this.setState({tables: data});
    }
  } // end method, handleTableData

  handleDataTable = (id, data) =>{
  API.getCustomer(data.customerId)
  .then(res=>this.handleDisplayCustomerInfo(data))
  .catch(err => console.log(err));
  } // end method, handleDataTable

  handleDisplayCustomerInfo = data =>{
    this.setState({
      faceId: data.customerId,
      custName: data.customerName,
      table: data.tableNumber,
      tableImg: data.tableImg,
    })
    this.getCurrentOrderData(this.state.faceId);
    API.getHistoricalData(data.customerId)
    .then(res => this.handleHistoricalData(res.data))
    .catch(err => console.log(err));
  } // end method, handleDisplayCustomerInfo

  handleHistoricalData = data => {
    let appetizer = [{dish: "N/A", value: 0}];
    let beverage = [{dish: "N/A", value: 0}];
    let protein = [{dish: "N/A", value: 0}];
    let vegetable = [{dish: "N/A", value: 0}];
    let starch = [{dish: "N/A", value: 0}];
    let dessert = [{dish: "N/A", value: 0}];


    for (let value of data){
      if(value._id.menu === "Appetizer"){
        appetizer.push({dish: value._id.dish, value: value.count});
      }else if(value._id.menu === "Beverage"){
        beverage.push({dish: value._id.dish, value: value.count});
      }else if(value._id.menu === "Protein"){
        protein.push({dish: value._id.dish, value: value.count});
      }else if(value._id.menu === "Vegetable"){
        vegetable.push({dish: value._id.dish, value: value.count});
      }else if(value._id.menu === "Starch"){
        starch.push({dish: value._id.dish, value: value.count});
      }else if(value._id.menu === "Dessert"){
        dessert.push({dish: value._id.dish, value: value.count});
      }
      }


    let obj1 = Math.max.apply(Math,appetizer.map(function(o){return o.value;}));
    let app = appetizer.find(function(o){ return o.value === obj1; });

    let obj2 = Math.max.apply(Math,beverage.map(function(o){return o.value;}));
    let bev = beverage.find(function(o){ return o.value === obj2; });

    let obj3 = Math.max.apply(Math,protein.map(function(o){return o.value;}));
    let prot = protein.find(function(o){ return o.value === obj3; });

    let obj4 = Math.max.apply(Math,vegetable.map(function(o){return o.value;}));
    let veg = vegetable.find(function(o){ return o.value === obj4; });

    let obj5 = Math.max.apply(Math,starch.map(function(o){return o.value;}));
    let star = starch.find(function(o){ return o.value === obj5; });

    let obj6 = Math.max.apply(Math,dessert.map(function(o){return o.value;}));
    let dess = dessert.find(function(o){ return o.value === obj6; });


    this.setState({
      bevPref: bev.dish,
      appPref: app.dish,
      protPref: prot.dish,
      vegPref: veg.dish,
      starchPref: star.dish,
      dessertPref: dess.dish
    })
  } // end method, handleHistoricalData


  getCheck = () => {
    API.getTotalAmountByDishes(this.state.faceId)
    .then(res=>this.handleTotalCheck(res.data))
    .catch(err => console.log(err));

    API.getTotalAmount(this.state.faceId)
    .then(res=>this.displayTotalCheck(res.data))
    .catch(err => console.log(err));
  } // end method, getCheck

  handleTotalCheck = data => {
    this.setState({check: data})
  }; // end method, handleTotalCheck

  displayTotalCheck = data => {
    this.setState({totalCheck: (Math.round(data[0].total *100)/100)})
  } // end method, displayTotalCheck

  closeTable = () =>{
    API.closeCurrentOrders(this.state.faceId)
    .then(res=> this.clearPage(res.data))
    .catch(err => console.log(err));

    API.closeTable(this.state.table)
    .then(res=> console.log(res.data))
    .catch(err => console.log(err));
  } // end method, closeTable

  clearPage = () =>{
    this.setState({
    orders:[],
    tableImg: "/images/person-placeholder.jpg",
    custName: "N/A",
    table: 1,
    bevPref: "N/A",
    appPref: "N/A",
    protPref: "N/A",
    vegPref: "N/A",
    starchPref: "N/A",
    dessertPref: "N/A"
    })
  } // end method, clearPage

  deleteCurrentOrder = (id) => {
    API.deleteOrder(id)
    .then(res=> this.getCurrentOrderData(this.state.faceId))
    .catch(err => console.log(err));
  } // end method, deleteCurrentOrder

  render() {
    return (
      <div>
      <Container>
        <h3>Waiter Page</h3>
        <UserName
          userName={this.props.location.state.referrer}
        />
        <Row>
          <Col size="md-3">
            <img className="image-small" src={this.state.tableImg} alt="img" />
          </Col>
          <Col size="md-9">
            <div className='table-info-pers'>
              <p>Table: {this.state.table} Position: {this.state.position}</p>
              <p>Guest Name: {this.state.custName}</p>
              <button type="button" className='btn button-pers'  data-toggle="modal" data-target="#tableModal" onClick={this.getTableData}>Get Table</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
          </Col>
          <h3 className="top-margin">Preferences</h3>
        </Row>
        <Row>
          <Col size="md-4">
              <h4>Beverage</h4>
              <p>{this.state.bevPref}</p>
          </Col>
          <Col size="md-4">
            <h4>Food</h4>
            <p>Appetizer: {this.state.appPref}</p>
            <p>Protein: {this.state.protPref}</p>
            <p>Vegetable: {this.state.vegPref}</p>
            <p>Starch: {this.state.starchPref}</p>
            <p>Dessert: {this.state.dessertPref}</p>
          </Col>
          <Col size="md-4">
            <h4>Current Order</h4>
            <Wrapper>
              <List>
                  {this.state.orders.map(order => (
                    <ListItem key={order._id}>
                      <div to={"/orders/" + order._id}>
                        <strong>
                        {order.dishName}:  {order.price}
                        </strong>
                      </div>
                      <DeleteBtn onClick={() => this.deleteCurrentOrder(order._id)} />
                    </ListItem>
                    ))
                  }
              </List>
            </Wrapper>
          </Col>
        </Row>
        <Row>
          <Col size="md-2 ">
          </Col>
          <Col size="md-7 ">
            <div className="text-center">
              <button
              type="button"
              className="btn button-pers" data-toggle="modal"
              data-target="#orderModal" onClick={this.getMenuData}>
              Take Order
              </button>
              <button
              type="button"
              className='btn button-pers'  data-toggle="modal" data-target="#calculationModal" onClick={this.getCheck}>Calculation</button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Menu Modal =======================================================================*/}
        <div className="modal fade" id="orderModal" tabIndex="-1" role="dialog" aria-labelledby="orderModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg dialog-margin-pers" role="document">
            <div className="modal-content order-modal-pers">
              <div className="modal-header modal-header-pers">
                <h5 className="modal-title" id="orderModalLabel">Order for Guest Name: {this.state.custName}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Row>
                  <Col size="md-2 ">
                    <p>Appetizer:</p>
                    <p>Beverage:</p>
                    <p>Dessert:</p>
                    <p>Protein:</p>
                    <p>Starch:</p>
                    <p>Vegetable:</p>
                  </Col>
                  <Col size="md-10 ">
                    <Wrapper>
                      {this.state.menu
                        .map(dishes => (
                          <MenuCard
                            key={dishes._id}
                            date={dishes.date}
                            dishName={dishes.dishName}
                            alias={dishes.alias}
                            menuSelection={dishes.menuSelection}
                            price={dishes.price}
                            postOrderData={this.postOrderData}
                          />
                        ))
                      }
                    </Wrapper>
                  </Col>
                </Row>
              </div>
              <div className=" text-center">
                <button
                type="button"
                className="btn button"
                data-dismiss="modal">
                Close
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* Table Modal =======================================================================*/}
        <div className="modal fade" id="tableModal" tabIndex="-1" role="dialog" aria-labelledby="orderModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal-header-pers">
                <h5 className="modal-title" id="orderModalLabel">Tables
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Wrapper>
                  {this.state.tables
                    .map(table => (
                      <TableCard
                        key={table._id}
                        date={table.date}
                        tableNumber={table.tableNumber}
                        tableImg={table.tableImg}
                        tableAvailability={table.tableAvailability}
                        customerId={table.customerId}
                        customerName={table.customerName}
                        handleDataTable={this.handleDataTable}
                        getCurrentOrderData={this.getCurrentOrderData}
                      />
                    ))
                  }
                </Wrapper>
              </div>
              <div className=" text-center">
                <button type="button" className="btn button" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      {/* Calculation Modal =======================================================================*/}
        <div className="modal fade" id="calculationModal" tabIndex="-1" role="dialog" aria-labelledby="orderModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal-header-pers">
                <h5 className="modal-title" id="orderModalLabel">Order for Guest Name: {this.state.custName}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Wrapper>
                  <ListGroup>
                    {this.state.check
                      .map(dish => (
                        <CheckCard
                          key={dish._id}
                          dish={dish._id}
                          total={dish.total}
                        />
                      ))
                    }
                  </ListGroup>
                </Wrapper>
              </div>
              <div className="modal-footer">
              <h2>Total: {this.state.totalCheck}</h2>
                <button
                type="button"
                className="btn button-pers" data-dismiss="modal"  onClick={this.closeTable}>
                Close Table
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    ); // end method, Return
  } // end method, Render
} // end Class, Waiter

export default Waiter;
