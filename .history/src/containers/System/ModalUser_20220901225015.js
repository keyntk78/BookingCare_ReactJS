import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleUserModal();
  };

  render() {
    console.log("check props: ", this.props);
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
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-6 form-group">
                <label>Email</label>
                <input
                  type="tetx"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="col-6 form-group">
                <label>Password</label>
                <input
                  type="tetx"
                  className="form-control"
                  placeholder="Password"
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
                />
              </div>
              <div className="col-6 form-group">
                <label>Last Name</label>
                <input
                  type="tetx"
                  className="form-control"
                  placeholder="Last Name"
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
                />
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
          >
            Do Something
          </Button>{" "}
          <Button
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
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
