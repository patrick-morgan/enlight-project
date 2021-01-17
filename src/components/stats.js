import PropTypes from "prop-types";
import React from "react";

class Stats extends React.Component {
  constructor(props) {
    super(props);
    const {data} = this.props;
    this.state = {
      data: data
    };
    this.calculateStats = this.calculateStats.bind(this);
  }

  calculateStats() {
    // Calculate Completion Percentage
    let completions = 0;
    let milestonesCompleted = 0;
    if (this.state.data != undefined) {
      this.state.data.map((row) => {
        const { milestones } = row;
        for (let i = 0; i < milestones.length; ++i) {
          if (milestones[i].id == "project-3") {
            ++completions;
          }
          ++milestonesCompleted;
        }
      })
      let complRate = (completions / this.state.data.length).toFixed(2);
      let avgMiles = (milestonesCompleted / this.state.data.length).toFixed(2);
      return(
        <div>
          <h4>Overall Completion Rate:</h4>
          <p>{complRate}</p>
          <h4>Average Number of Milestones Completed Per Cohort Member:</h4>
          <p>{avgMiles}</p>
        </div>
      )
    }
  }

  render() {
    return(
      <div >
      {this.calculateStats()}
      </div>
    );
  }
}

Stats.propTypes = {
  data: PropTypes.array
};

export default Stats;
