import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

class SocialsDropdown extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="socials-dropdown">
        <div className="socials-dropdown-row">
          <AiFillLinkedin/>
          <p>LinkedIn</p>
        </div>
        <div className="socials-dropdown-row">
          <AiFillGithub/>
          <p>Github</p>
        </div>
      </div>
    )
  }
}

export default SocialsDropdown;