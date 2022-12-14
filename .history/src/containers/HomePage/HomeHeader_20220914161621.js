import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo.svg";
import { FormattedMessage } from "react-intl";

class HomeHeader extends Component {
  render() {
    console.log("check prop:", this.props);
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <img className="header-logo" src={logo} alt="logo" />
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.speciality" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeHeader.searchDoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.healthFacility" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeHeader.selectRoom" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.doctor" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeHeader.selectDoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.fee" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeHeader.checkHealth" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id="homeHeader.support" />
              </div>
              <div className="flag-language-vi active">VN</div>
              <div className="flag-language-en">EN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">N???N T???NG Y T???</div>
            <div className="title2">CH??M S??C S???C KH???E TO??N DI???N</div>
            <div className="search">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="T??m chuy??n khoa kh??m b???nh" />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="text-child">Kh??m chuy??n khoa</div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile"></i>
                </div>
                <div className="text-child">Kh??m t??? xa</div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital-alt"></i>
                </div>
                <div className="text-child">Kh??m t???ng qu??t</div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-flask"></i>
                </div>
                <div className="text-child">X??t nghi???m y h???c</div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-walking"></i>
                </div>
                <div className="text-child">S???c kh???e tinh th???n</div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-user-md"></i>
                </div>
                <div className="text-child">Kh??m nha khoa</div>
              </div>
            </div>
          </div>
        </div>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
