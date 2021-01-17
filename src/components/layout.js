import PropTypes from "prop-types";
import React from "react";
import Table from "../components/table";
import Stats from "../components/stats";
import BarChart from "../components/barchart";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true
    };
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
            isFetching: false
          });
          console.log(data.completions);
        }
      })
  }

  render() {
    let data = [];

    if (this.state.data.length > 0) {
      data = this.state.data;
    }
    
    const { isFetching} = this.state;

    return (
      <div className="max-w-screen-xl mx-auto">
        {this.props.children}
        {isFetching ? (<div></div>) : (
          <div>
            <Table data={data}/>
            <Stats data={data}/>
            <BarChart data={data}/>
          </div>
        )}
        <footer className="text-sm tracking-tight my-6">&copy; Enlight 2021</footer>
      </div>
    );
  }
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
