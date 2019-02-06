import React, { Component } from 'react';
import uuid from "uuid";
import HouseModal from "./HouseModal";
import fakeData from "../fakedata/fake";

 class Landing extends Component {
    renderHouses = () => {
        return fakeData.property.map(house => {
         // console.log({...house});
          return <HouseModal key={uuid()} {...house} />;
        });
      };
  render() {
    return (
        <div className="ui three column grid">
        {this.renderHouses()}
      </div>
    )
  }
}

export default Landing;
