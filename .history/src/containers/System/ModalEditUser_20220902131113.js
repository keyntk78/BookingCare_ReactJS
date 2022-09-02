import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import _ from "lodash";

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id:user.id
        email: user.email,
        password: "hadcoode",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
    console.log("edit", this.props.currentUser);
  }

  toggle = () => {
    this.props.toggleUserModal();
  };

  checkValideInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      // console.log("check loop:", this.state[arrInput[i]], arrInput[i]);
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

  handleSaveUser = () => {
    let isValid = this.checkValideInput();
    if (isValid === true) {
      //call api
      this.props.editUser(this.state);
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
          Edit a user
        </ModalHeader>
        <ModalBody className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-6 form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(event) => {
                    this.handleOnchaneInput(event, "email");
                  }}
                  value={this.state.email}
                  disabled
                />
              </div>
              <div className="col-6 form-group">
                <label>Password</label>
                <input
                  type="password"
                  disabled
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
              this.handleSaveUser();
            }}
            className="px-3"
          >
            Save Changes
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
