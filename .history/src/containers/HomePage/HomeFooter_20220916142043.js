/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <p>
          &copy; 2022 BookingCare.com. More information, please visit my Youtube
          chanel. &#8594;{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UC5IUyEvcLkB-M4wsXN1p9XQ"
          >
            click here
          </a>{" "}
          &#8592;
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
