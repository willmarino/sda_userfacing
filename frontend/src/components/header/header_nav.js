import React from 'react';

import HeaderButton from '../buttons/header_button/header_button';

const HeaderNav = () => {
  return(
    <ul>
      <HeaderButton destinationPath={"/"} label={"home"}/>
      <HeaderButton destinationPath={"/about"} label={"about"}/>
    </ul>
  )
}

export default HeaderNav;