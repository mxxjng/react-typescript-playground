import React from 'react';

type MenuComponent = React.FC & { Item: React.FC };

/**
 * Menu component
 * @param {React.ReactChild} children Menu Items
 * @returns {JSX.Element}
 */
const Menu: MenuComponent = ({ children }) => {
  return <div>{children}</div>;
};

const Item: React.FC = ({ children }) => {
  return <div className="p-1">{children}</div>;
};

Menu.Item = Item;

export default Menu;
