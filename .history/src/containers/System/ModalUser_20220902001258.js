import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleUserModal();
  };

  checkValideInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firsName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      console.log("check loop:", this.state.[arrInput[i]], arrInput[i]);
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing paramter:" + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleOnchaneInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState({
      ...copyState,
    });
  };

  handlleAddNewUser = () => {
    let isValid = this.checkValideInput();
    if(isValid === true) {
        //call api
        console.log("Data user:", this.state);
    }
    
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-user-container"}
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Create a new user
        </ModalHeader>
        <ModalBody className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-6 form-group">
                <label>Email</label>
                <input
                  type="tetx"
                  className="form-control"
                  placeholder="Email"
                  onChange={(event) => {
                    this.handleOnchaneInput(event, "email");
                  }}
                  value={this.state.email}
                />
              </div>
              <div className="col-6 form-group">
                <label>Password</label>
                <input
                  type="tetx"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) => {
                    this.handleOnchaneInput(event, "password");
                  }}
                  value={this.state.password}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6 form-group">
                <label>First Name</label>
                <input
                  type="tetx"
                  className="form-control"
                  placeholder="First Name"
                  onChange={(event) => {
                    this.handleOnchaneInput(event, "firstName");
                  }}
                  value={this.state.firstName}
                />
              </div>
              <div className="col-6 form-group">
                <label>Last Name</label>
                <input
                  type="tetx"
                  className="form-control"
                  placeholder="Last Name"
                  onChange={(event) => {
                    this.handleOnchaneInput(event, "lastName");
                  }}
                  value={this.state.lastName}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 form-group">
                <label>Address</label>
                <input
                  type="tetx"
                  className="form-control"
                  placeholder="1234 Main St"
                  onChange={(event) => {
                    this.handleOnchaneInput(event, "address");
                  }}
                  value={this.state.address}
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              this.handlleAddNewUser();
            }}
            className="px-3"
          >
            Add New
          </Button>{" "}
          <Button
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
            className="px-3"
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
