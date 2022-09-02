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
      phonenumber: "",
      gender: "",
      roldeId: "",
    };
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleUserModal();
  };

  handleOnchaneInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState(
      {
        ...copyState,
      },
      () => {
        console.log("check state:", this.state);
      }
    );
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
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6 form-group">
                <label>Phonenumber</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="xx12345678"
                  onChange={(event) => {
                    this.handleOnchaneInput(event, "phonenumber");
                  }}
                />
              </div>
              <div className="col-3 form-group">
                <label>Gender</label>
                <select
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnchaneInput(event, "gender");
                  }}
                >
                  <option value="0">Female</option>
                  <option value="1" selected>
                    Male
                  </option>
                </select>
              </div>
              <div className="col-3 form-group">
                <label>Role</label>
                <select
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnchaneInput(event, "roleId");
                  }}
                >
                  <option value="1">Admin</option>
                  <option value="2" selected>
                    Doctor
                  </option>
                  <option value="3" selected>
                    Paitent
                  </option>
                </select>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              this.toggle();
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
