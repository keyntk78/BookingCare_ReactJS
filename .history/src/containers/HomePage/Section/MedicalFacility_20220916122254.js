import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import Slider from "react-slick";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-MedicalFacility">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cơ sở y tế nổi bật</span>
            <button className="btn-section">Tìm kiếm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image"></div>
                <div>Hệ thống Y tế Thu Cúc TCI 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image"></div>
                <div>Hệ thống Y tế Thu Cúc TCI 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image"></div>
                <div>Hệ thống Y tế Thu Cúc TCI 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image"></div>
                <div>Hệ thống Y tế Thu Cúc TCI 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image"></div>
                <div>Hệ thống Y tế Thu Cúc TCI 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image"></div>
                <div>Hệ thống Y tế Thu Cúc TCI 6</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
