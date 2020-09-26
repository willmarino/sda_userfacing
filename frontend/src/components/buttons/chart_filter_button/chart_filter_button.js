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
    let dropdown;
    let buttonClassNames = "chart-filter-button-current";
    if(this.state.dropdownOpen){
      dropdown = <FilterButtonDropdown options={options}/>;
      buttonClassNames = "chart-filter-button-current cfbc-active";
    }
    return(
      <div className="chart-filter-button">
        <p className="chart-filter-button-label">{label}</p>
        <div className={buttonClassNames} onClick={() => { this.setState({dropdownOpen: !this.state.dropdownOpen}) }}>
          <p>{curOption}</p>
        </div>
        {dropdown}
      </div>
    )
  }
}



export default FilterButton;