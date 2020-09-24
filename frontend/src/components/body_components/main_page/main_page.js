import React from 'react';

import ChartFilterButtons from './chart_filter_buttons';
import ChartDisplayContainer from './chart_display/chart_display_container';

const MainPage = () => (
  <div className="main-page">
    <ChartFilterButtons/>
    <ChartDisplayContainer/>
  </div>
)

export default MainPage;