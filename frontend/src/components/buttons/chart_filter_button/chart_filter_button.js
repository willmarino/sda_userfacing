import React from 'react';
import FilterButtonDropdown from './chart_filter_button_dropdown';

class FilterButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }
  render(){
    const { options, curOption, label } = this.props;
    const dropdown = (this.state.dropdownOpen) ? <FilterButtonDropdown options={options}/> : null;
    return(
      <div>
        <p>{label}</p>
        <div onClick={() => { this.setState({dropdownOpen: !this.state.dropdownOpen}) }}>
          <p>{curOption}</p>
        </div>
          {dropdown}
      </div>
    )
  }
}



export default FilterButton;