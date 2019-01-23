import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Link from "next/link";

const Title = styled.h1`
  text-align: center;
  color: palevioletred;
  margin: 0;
  width: 100%;
  padding-top: 20px;
  line-height: 1.15;
  font-size: 40px;
`;

class AboutView extends React.Component {
  render() {
    return (
      <div>
        <div className="hero flex flex-alignCenter flex-column">
          <img src="static/img/boiler2.png" style={{ width: "70px" }} />
          <Title>This is About page!</Title>
          <p className="description">
            To get started, edit <code>pages/view/about</code> and save to
            reload.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutView;
