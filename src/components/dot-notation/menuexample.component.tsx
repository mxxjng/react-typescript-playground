import React from 'react';

import { Menu } from '../../components';

const MenuExample = () => {
  return (
    <div>
      <p>Menu Example</p>
      <Menu>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Nav</Menu.Item>
      </Menu>
    </div>
  );
};
export default MenuExample;
