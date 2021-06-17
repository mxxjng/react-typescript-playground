import * as React from 'react';
import Navigation from './navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};
export default Layout;
