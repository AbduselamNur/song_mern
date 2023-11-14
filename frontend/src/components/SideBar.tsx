import React from 'react';
import { SidebarContainer, SidebarLink } from './StyledComponents';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/genre">Genre</SidebarLink>
      <SidebarLink to="/album">Album</SidebarLink>
      <SidebarLink to="/artist">Artist</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;