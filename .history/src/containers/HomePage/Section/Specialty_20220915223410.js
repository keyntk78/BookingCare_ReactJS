/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyImg from "../../../assets/Speccialty/co-xuong-khop.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class Specialty extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className="section-specialty">
        <div className="specialty-container">
          <Slider {...settings}>
            <div className="specialty-body">
              <img src={specialtyImg} alt="co xuong khop" />
              <h3>Cơ xương khớp 1</h3>
            </div>
            <div className="specialty-body">
              <img src={specialtyImg} alt="co xuong khop" />
              <h3>Cơ xương khớp 2</h3>
            </div>
            <div className="specialty-body">
              <img src={specialtyImg} alt="co xuong khop" />
              <h3>Cơ xương khớp 3</h3>
            </div>
            <div className="specialty-body">
              <img src={specialtyImg} alt="co xuong khop" />
              <h3>Cơ xương khớp 4</h3>
            </div>
            <div className="specialty-body">
              <img src={specialtyImg} alt="co xuong khop" />
              <h3>Cơ xương khớp 5</h3>
            </div>
            <div className="specialty-body">
              <img src={specialtyImg} alt="co xuong khop" />
              <h3>Cơ xương khớp 6</h3>
            </div>
          </Slider>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
