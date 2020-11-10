import React from 'react';
import ChartDisplayContainer from './chart_display/chart_display_container';
import Sidebar from './sidebar/sidebar';

const MainPage = () => (
  <div className="main-page">
    <ChartDisplayContainer/>
    <Sidebar/>
  </div>
)

export default MainPage;