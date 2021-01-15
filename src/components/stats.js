import React from "react";

class Stats extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.calculateStats = this.calculateStats.bind(this);
  }

  componentDidMount() {
    fetch('data.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) => {
        // handle error
        if(!response.ok) throw Error(response.statusText);
        console.log("successful api call");
        return response.json();
      }
      )
      .then((data) => {
        if (data != undefined) {
          this.setState({
            data: data.completions,
          });
          console.log(data.completions);
        }
      })
  }

  calculateStats() {
    // Calculate Completion Percentage
    let completions = 0;
    let milestonesCompleted = 0;
    if (this.state.data.length > 0) {
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
          <h4>Average Number of Milestones Completed Per Cohort Member</h4>
          <p>{avgMiles}</p>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
      {this.calculateStats()}
      </div>
    );
  }
}


export default Stats;
