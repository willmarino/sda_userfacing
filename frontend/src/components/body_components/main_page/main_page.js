import React from 'react';
import ChartFilterButtons from './chart_filter_buttons';
import ChartDisplay from './chart_display';

const MainPage = () => (
  <div className="main-page">
    <ChartFilterButtons/>
    <ChartDisplay/>
  </div>
)

export default MainPage;