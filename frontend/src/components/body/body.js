import React from 'react';
import { Route } from 'react-router-dom'

import MainPage from '../body_components/main_page/main_page';
import AboutPage from '../body_components/about_page/about_page';


const Body = () => (
  <div className='body'>
    <Route exact path="/" component={MainPage}/>
    <Route exact path="/about" component={AboutPage}/>
  </div>
)

export default Body;