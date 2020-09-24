import React from 'react';
import { Route } from 'react-router-dom'

import FadeInWrapper from '../transition_wrappers/fade_in_wrapper';
import MainPage from '../body_components/main_page/main_page';
import AboutPage from '../body_components/about_page/about_page';


const Body = () => (
  <div className='body'>
    {/* <Route exact path="/" component={MainPage}/> */}
    {/* <Route exact path="/about" component={AboutPage}/> */}
    <Route exact path="/" render={(props) => <FadeInWrapper {...props} comp={MainPage} />}/>
    <Route exact path="/about" render={(props) =>  <FadeInWrapper {...props} comp={AboutPage} />}/>
  </div>
)

export default Body;