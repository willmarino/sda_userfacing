import React from 'react';


class ExecuteFetchButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    const { fetchPredictions, fetchConfig } = this.props;
    fetchPredictions(fetchConfig);
  }
  render(){
    return(
      <div className="exec-fetch-button" onClick={this.handleClick}>
        <p>search!</p>
      </div>
    )
  }
}

export default ExecuteFetchButton