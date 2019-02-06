import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import currentHouse from "../actions";
import image from "../download.jpg";

class HouseModal extends React.Component {
  render() {
    let {
      address: { line1, line2 },
      location,
      vintage
    } = this.props;
    return (
      <div className="column">
        <div className="ui segment">
          <img src={image} alt="test" />
          <h3 style={{ color: "green" }}>Address</h3>
          <h3>{line1}</h3>
          <h3>{line2}</h3>
          <Link
            to="/details"
            className="ui primary button"
            onClick={() => {
              this.props.currentHouse(location, vintage, line1, line2);
            }}
          >
            More Details
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { currentHouse }
)(HouseModal);
