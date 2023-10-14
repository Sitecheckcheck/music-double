// /* eslint-disable */
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarItem } from './SidebarItem';
import {
  MainSidebar,
  SidebarPersonal,
  SidebarBlock,
  SidebarList,
} from './styles';
import { logOut } from '../../App';
import { selectTrackFunction } from '../../../store/sliceSelectTrack';
import { useGetPlaylistAllQuery } from '../../../services/playlistApi';

export const Sidebar = () => {
  let userName = useSelector((state) => state.userName.userName);
  const dispatch = useDispatch();

  const {isLoading} = useGetPlaylistAllQuery()

  if (userName) {
    const index = userName.lastIndexOf('@');
    userName = userName.substring(0, index);
  }

  return (
    <MainSidebar>
      <SidebarPersonal>
        <NavLink to="/mytrack">{userName}</NavLink>
        <NavLink
          to="/signin"
          onClick={() => {
            logOut();
            dispatch(selectTrackFunction(null));
          }}
        >
          <img src="/music/img/exit.svg" alt="exit" />
        </NavLink>
      </SidebarPersonal>
      <SidebarBlock>
        <SidebarList>
          <SidebarItem
            playlist={
              isLoading
                ? '/music/img/playlist00.png'
                : '/music/img/playlist01.png'
            }
            page="/playlist/3"
          />
          <SidebarItem
            playlist={
              isLoading
                ? '/music/img/playlist00.png'
                : '/music/img/playlist02.png'
            }
            page="/playlist/1"
          />
          <SidebarItem
            playlist={
              isLoading
                ? '/music/img/playlist00.png'
                : '/music/img/playlist03.png'
            }
            page="/playlist/2"
          />
        </SidebarList>
      </SidebarBlock>
    </MainSidebar>
  );
};
