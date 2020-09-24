import React from 'react';
import { CSSTransition } from 'react-transition-group';

class FadeInWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ready: false
    }
  }

  componentDidMount(){
    debugger;
    this.setState({ ready: true });
  }

  render(){
    const { comp } = this.props;
    debugger;
    return(
      <CSSTransition in={this.state.ready} timeout={3000} classNames="fade-in" appear={true}>
        {comp}
      </CSSTransition>
    )
  }
}

export default FadeInWrapper;