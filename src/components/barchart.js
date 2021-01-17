import PropTypes from "prop-types";
import React from "react";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    const {data} = this.props;
    this.state = {
      data: data
    };
    this.calculateData = this.calculateData.bind(this);
  }

  calculateData() {
    // const {data} = this.state;
    // let points = [];
    // let percents = [];
    let valu = {
      "kickoff": 0,
      "web-dev-fundamentals": 0,
      "setting-up": 0,
      "project-1": 0,
      "js-fundamentals": 0,
      "apis": 0,
      "project-2": 0,
      "project-3": 0,
      "databases": 0
    };
    console.log(valu);
    // iterate through data and calculate percentages for each outcome


  }

  render() {
    // const data = this.props.data;
    // const chartWidth = 800;
    // const chartHeight = 500;
    // const chartDomain = [0, chartHeight];
    return(
      <div>
        barchart
      </div>
    );
  }
}

BarChart.propTypes = {
  data: PropTypes.array
};

export default BarChart;
