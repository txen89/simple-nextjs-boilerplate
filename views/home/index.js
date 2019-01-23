import React from "react";
import { connect } from "react-redux";
import * as actions from "./actionCreators";

class HomeView extends React.Component {
  componentDidMount() {
    this.props.testActionDispather("works");
  }

  render() {
    return (
      <div>
        <div className="hero flex flex-alignCenter flex-column">
          <img src="static/img/boiler.png" style={{ width: "70px" }} />
          <h1 className="title">Next JS Boilerplate</h1>
          <p className="description">w/ Redux Styled Components and SASS!</p>
          <p className="description">
            To get started, edit <code>pages/view/home</code> and save to
            reload.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

const mapDispatchToProps = dispatch => ({
  testActionDispather: data => dispatch(actions.testAction(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
