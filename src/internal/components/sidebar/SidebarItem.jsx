import { NavLink } from 'react-router-dom';
import { SidebarItemStyle, SidebarLink } from './styles';

export const SidebarItem = (props) => (
  <SidebarItemStyle>
    <SidebarLink>
      <NavLink to={props.page}>
        <img src={props.playlist} alt="day's playlist" />
      </NavLink>
    </SidebarLink>
  </SidebarItemStyle>
);
