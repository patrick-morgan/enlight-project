import PropTypes from "prop-types";
import React from "react";
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  LabelSeries
} from 'react-vis';

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
    let points = [];
    
    // iterate through data and calculate percentages for each outcome
    if(this.state.data != undefined) {
      let milestoneIds = {
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
      
      this.state.data.map((row) => {
        const { milestones } = row;
        for (let i = 0; i < milestones.length; ++i) {
          ++milestoneIds[milestones[i].id];
        }
      })

      for (const [key, value] of Object.entries(milestoneIds)) {
        let point = {"y": value, "x": key};
        points.push(point);
      }

      const chartHeight = 500;
      const chartWidth = 1200;
      const chartDomain = [0, 10];

      return (
        <XYPlot xType = "ordinal" width = {chartWidth} height = {chartHeight} yDomain = {chartDomain}>
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={points}/>
          <LabelSeries data={points.map(obj => {return { ...obj, label: obj.y.toString() }})} labelAnchorX="middle" labelAnchorY="text-after-edge"/>
        </XYPlot>
      )
    }
  }

  render() {
    return(
      <div className="flex flex-col  my-auto items-center">
        <h4 className="flex text-3xl leading-10 text-gray-900  tracking-tight font-extrabold sm:leading-none md:text-2xl">Number of Times Different Milestones Were Completed</h4>
        {this.calculateData()}
      </div>
    );
  }
}

BarChart.propTypes = {
  data: PropTypes.array
};

export default BarChart;
