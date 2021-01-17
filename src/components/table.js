import PropTypes from "prop-types";
import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    const {data} = this.props;
    this.state = {
      data: data
    };
    this.renderTableBody = this.renderTableBody.bind(this);
  }

  renderTableBody() {
    if (this.state.data != undefined) {
      return this.state.data.map((row) => {
        const { name, username, milestones } = row;
        const percent = ((milestones.length / 9.0) * 100).toFixed(1);
        milestones.sort((fst,scnd) => fst.datetime - scnd.datetime);
        const time = new Date(Number(milestones[milestones.length - 1].datetime));
        return (
          <tr className="border text-left hover:bg-gray-50 focus:ring-2" key={username}>
            <td className="">{name}</td>
            <td className="underline"><a target="_blank" rel="noopener noreferrer" href={`https://enlight.nyc/user/${username}/`}>enlight.nyc/user/{username}</a></td>
            <td className="pl-10">{percent}</td>
            <td className="pl-10">{milestones[milestones.length - 1].id}</td>
            <td>{String(time)}</td>
          </tr>
        )
      })
    }
  }

  render() {
    return(
      <div className="flex p-6 bg-white rounded-lg my-2">
        <table className="table-auto text-left w-full border-collapse pb-3">
          <thead className="bg-gray-50">
            <tr className="border text-left px-8 py-4 ">
              <th className="text-blue-600 font-extrabold border text-left px-8 py-4">Name</th>
              <th className="text-blue-600 font-extrabold border text-left px-8 py-4">Profile Link</th>
              <th className="text-blue-600 font-extrabold border text-left px-8 py-4">Compl Rate (%)</th>
              <th className="text-blue-600 font-extrabold border text-left px-8 py-4">Last Completed Milestone</th>
              <th className="text-blue-600 font-extrabold border text-left px-8 py-4">Last Completed Milestone Date/Time</th>
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
  data: PropTypes.array
};

export default Table;