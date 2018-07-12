import React, { Component } from "react";
import { ImageCapture, AddImage, UserName, TableCard } from "../../components/FunctionComponents";
import { Wrapper, Container, Card } from "../../components/LayoutComponents";
import API from "../../utils/API";
import { show } from "bootstrap";
import $ from "jquery";
import "./Host.css"

class Host extends Component {
  state = {
      lastPhoto: "",
      name: "",
      matchName: "",
      faceId: "",
      imageName: "",
      initialPhoto: "",
      addConfirm: "",
      tablebuttonVisibility: false,
      tables: []
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const lastPhoto = this.webcam.getScreenshot();
    this.setState( {lastPhoto});

    API.checkImg(
      lastPhoto,
    )
    .then(res => handleMatchResult(res))
    .catch(err => console.log(err));

    const handleMatchResult = res => {
      let matchResult = ''
      if (res.data === 'Not recognized') {
        matchResult = 'Not recognized';
        this.setState({ matchName: matchResult });
        $('#addGuestModal').modal(show)
      } else if (res.data.message) {
        matchResult = res.data.message
        this.setState({matchName: matchResult})
        $('#message').html(`<h4>${this.state.matchName}</h4>`)
      } else if (res.data.FaceMatches) {
        this.setState({faceId: res.data.FaceMatches[0].Face.FaceId});
        API.getCustomer(res.data.FaceMatches[0].Face.FaceId).then(res => handleDisplayData(res.data),
        $('#priorGuestModal').modal(show)
        )

       const handleDisplayData = data => {
          this.setState({initialPhoto: data.photo});
           matchResult = data.name;
           this.setState({matchName: matchResult});
        }
      } else {
        matchResult = 'Unexpected result'
      }
      this.setState({matchName: matchResult})
    } // end function, handleMatchResult
  }; // end method, capture

  addPhoto = event => {
    event.preventDefault();
    API.addImg( {
      lastPhoto: this.state.lastPhoto,
      name: this.state.name
      }
    )
    .then(res => handlePostCustomer(res))
    .catch(err => console.log(err));

    const handlePostCustomer = res => {
      this.setState({
        faceId: res.data.FaceId,
        imageName: res.data.ExternalImageId
      });
      API.postCustomer(
        {
          faceId: this.state.faceId,
          name: this.state.imageName,
          photo: this.state.lastPhoto
        }
      )
    .then(res => handleDisplayData(res.data))
    .catch(err => console.log(err));
    }
    const handleDisplayData = data => {
      this.setState({initialPhoto: data.photo, tablebuttonVisibility: true, addConfirm: "Guest added!"});
    }
  }; // end method, addPhoto

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }; // end method, handleInputChange

  getTableData = () => {
   API.getTablesData()
   .then(res => this.handleTableData(res.data))
   .catch(err => console.log(err));
  }  // end method, getTableData

  handleTableData = data => {
    for (let value of data){
      if(value.tableAvailability === "available"){
        value.tableImg = "/images/table.png";
     };
     this.setState({tables: data});
    }
  } // end method, handleTableData

  handleDataTable = (id, data) =>{
    API.putTable(id, {
      tableNumber: data.tableNumber,
      tableAvailability: "occupied",
      customerId: this.state.faceId,
      tableImg: this.state.initialPhoto,
      customerName: this.state.matchName,
    })
    .then(this.getTableData())
    .catch(err => console.log(err));
  } // end method, handleDataTable

  render() {
    return (
      <div>
        <Container className='font'>
        <div className='title-bar-pers'>
          <h3>Host Page</h3>
          <UserName
            userName={this.props.location.state.referrer}/>
        </div>
          <Card title="Capture Guest Image">
          <ImageCapture
          setRef={this.setRef}
          capture={this.capture}
          matchName={this.state.matchName}
          lastPhoto={this.state.lastPhoto}
          initialPhoto={this.state.initialPhoto}
          />
          <div id='message'></div>
          </Card>
         </Container>

        {/* Assign Table Modal ===================================================*/}

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
              <div className="modal-body modl-body">

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
              />))}

          </Wrapper>

              </div>
              <div className=" text-center">
              <button type="button" className="btn button" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        {/* Prior Guest Modal ==================================================*/}

        <div id="priorGuestModal" className="modal fade" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal-header-pers">
                <h3 className="modal-title">Prior Guest</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body modl-body">
              <h4>Guest Name: {this.state.matchName}</h4>
                <h5>Initial Image</h5>
                <div >
                <img className="centered"
                src= {this.state.initialPhoto}
                alt="img" />
                </div>
              <div className="text-center">
               <button type="button" className="btn button " data-toggle="modal" data-target="#tableModal" data-dismiss="modal" onClick={this.getTableData}>Assign Table</button>
               </div>

              </div>

            </div>
          </div>
        </div>

        {/* Add Guest Modal ==================================================*/}

        <div id="addGuestModal" className="modal fade" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal-header-pers">
                <h5 className="modal-title">Add New Guest</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body modl-body">
                <img
                src= {this.state.lastPhoto}
                alt="img" />
              <br />
              <AddImage
              addPhoto={this.addPhoto}
              addConfirm={this.state.addConfirm}
              handleInputChange={this.handleInputChange}
              page="Guest"/>
              {
                 this.state.tablebuttonVisibility &&
                 <div className="text-center">
                  <button type="button" className="btn button " data-toggle="modal" data-target="#tableModal" data-dismiss="modal" onClick={this.getTableData}>Assign Table</button>
                </div>
              }
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  } // end function, render
} // end class, Host

export default Host;
