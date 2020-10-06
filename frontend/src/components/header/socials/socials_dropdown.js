import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

class SocialsDropdown extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="socials-dropdown">
        <a className="socials-dropdown-row" href="https://www.linkedin.com/in/william-marino/" target="_blank">
          <AiFillLinkedin/>
          <p>LinkedIn</p>
        </a>
        <a className="socials-dropdown-row" href="https://github.com/willmarino" target="_blank">
          <AiFillGithub/>
          <p>Github</p>
        </a>
      </div>
    )
  }
}

export default SocialsDropdown;