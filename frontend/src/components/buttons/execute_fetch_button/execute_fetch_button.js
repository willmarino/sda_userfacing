import React from 'react';


class ExecuteFetchButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buttonId: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.switchButtonColor = this.switchButtonColor.bind(this);
  }
  handleClick(){
    const { stopDatafeed } = this.props;
    this.switchButtonColor();
    stopDatafeed();
  }
  switchButtonColor(){
    this.setState({ buttonId: 'exec-fetch-button-active' }, () => {
      setTimeout(() => {
        this.setState({ buttonId: null });
      }, 1000)
    })
  }
  render(){
    let { buttonId } = this.state;
    return(
      <div id={buttonId} className="exec-fetch-button" onClick={this.handleClick}>
        <p>Go</p>
      </div>
    )
  }
}

export default ExecuteFetchButton;