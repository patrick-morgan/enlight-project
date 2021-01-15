import PropTypes from "prop-types";
import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.renderTableBody = this.renderTableBody.bind(this);
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

  renderTableBody() {
    return this.state.data.map((row) => {
      const { name, username, milestones } = row;
      const percent = ((milestones.length / 9.0) * 100).toFixed(1);
      milestones.sort((fst,scnd) => fst.datetime - scnd.datetime);
      const time = new Date(Number(milestones[milestones.length - 1].datetime));
      return (
        <tr key={username}>
          <td>{name}</td>
          <td><a target="_blank" rel="noopener noreferrer" href={`https://enlight.nyc/user/${username}/`}>enlight.nyc/user/{username}</a></td>
          <td>{percent}</td>
          <td>{milestones[milestones.length - 1].id}</td>
          <td>{String(time)}</td>
        </tr>
      )
    })
  }

  render() {
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Profile Link</th>
              <th>Compl Rate (%)</th>
              <th>Last Completed Milestone</th>
              <th>Last Completed Milestone Date/Time</th>
            </tr>
          </thead>
          <tbody>
            { this.renderTableBody() }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  url: PropTypes.string,
};

export default Table;