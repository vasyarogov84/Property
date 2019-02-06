import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import image from "../download.jpg";

class HouseDetails extends Component {
  render() {
    let { latitude, longitude } = this.props.house[0];
    let { lastModified } = this.props.house[1];
    let [, , line1, line2] = this.props.house;
    return (
      <div>
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider" />
            <div className="middle aligned row">
              <div className="column">
                <img alt="test" src={image} />
              </div>

              <div className="column">
                <p>
                  Address: {line1},{line2}
                </p>
                <p>Latitude: {latitude}</p>
                <p>Longitude: {longitude}</p>
                <p>Last Modified: {lastModified}</p>
              </div>
            </div>
          </div>
        </div>
        <Link className="ui primary button" to="/">Back</Link>
        <button 
        className="ui primary button"
        onClick={() => {alert("Congratulation")}}
        >Buy</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    house: state.currentHouse
  };
}

export default connect(mapStateToProps)(HouseDetails);
