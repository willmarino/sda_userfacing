import React from 'react';
import SocialsDropdown from './socials_dropdown';

class SocialsButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }
  render(){
    const dropdown = (this.state.dropdownOpen) ? <SocialsDropdown/> : null;
    return(
      <div className="socials-button" onClick={() => { this.setState({ dropdownOpen: !this.state.dropdownOpen }) }}>
        <p>Web Presence</p>
        {dropdown}
      </div>
    )
  }
}

export default SocialsButton;