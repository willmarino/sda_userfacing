import React from 'react';
import ChartDisplayContainer from './chart_display/chart_display_container';
import SidebarContainer from './sidebar/sidebar_container';

const MainPage = () => (
  <div className="main-page">
    <ChartDisplayContainer/>
    <SidebarContainer/>
  </div>
)

export default MainPage;