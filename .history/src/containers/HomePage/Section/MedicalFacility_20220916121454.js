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
              <div className="specialty-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 1</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 2</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 3</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 4</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 5</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 6</div>
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
