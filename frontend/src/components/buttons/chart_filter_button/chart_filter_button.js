import React from 'react';
import FilterButtonDropdown from './chart_filter_button_dropdown';

class ChartFilterButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }
  render(){
    const { options, curOption, label, changeFunc } = this.props;
    let dropdown;
    let buttonClassNames = "chart-filter-button-current";
    if(this.state.dropdownOpen){
      dropdown = <FilterButtonDropdown options={options} changeFunc={changeFunc}/>;
      buttonClassNames = "chart-filter-button-current cfbc-active";
    }
    return(
      <div className="chart-filter-button">
        <p className="chart-filter-button-label">{label}</p>
        <div className={buttonClassNames} onClick={this.handleClick}>
          <p>{curOption}</p>
        </div>
        {dropdown}
      </div>
    )
  }
}



export default ChartFilterButton;