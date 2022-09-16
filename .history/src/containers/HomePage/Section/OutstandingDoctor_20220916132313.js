import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class OutstandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-OutstandingDoctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
            <button className="btn-section">Tìm kiếm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div>
                  <div className="bg-image section-OutstandingDoctor"></div>
                </div>
                <div className="position text-center">
                  <div>Thạc sĩ, Bác sĩ Nguyễn Thị Mai Dung</div>
                  <div>Da Liễu</div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-OutstandingDoctor"></div>
                <div>Hệ thống Y tế Thu Cúc TCI 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-OutstandingDoctor"></div>
                <div>Hệ thống Y tế Thu Cúc TCI 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-OutstandingDoctor"></div>
                <div>Hệ thống Y tế Thu Cúc TCI 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-OutstandingDoctor"></div>
                <div>Hệ thống Y tế Thu Cúc TCI 5</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
