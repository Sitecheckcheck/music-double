// /* eslint-disable */
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from '../nav/Nav';
import { MainSidebar, SidebarPersonal } from '../sidebar/styles';
import SMain from '../main/mainStyle';
import { MyTracksCenterBlock } from './mytrackcenterblock';
import { logOut } from '../../App';
import { selectTrackFunction } from '../../../store/sliceSelectTrack';

export const MyTrackMain = ({ setPlaylist }) => {
  let userName = useSelector((state) => state.userName.userName);

  if (userName) {
    const index = userName.lastIndexOf('@');
    userName = userName.substring(0, index);
  }

  return (
    <SMain>
      <Nav />
      <MyTracksCenterBlock setPlaylist={setPlaylist} />
      <MainSidebar>
        <SidebarPersonal>
          <NavLink to="/mytrack">{userName}</NavLink>
          <NavLink
            to="/signin"
            onClick={() => {
              logOut();
              useDispatch(selectTrackFunction(null));
            }}
          >
            <img src="/music/img/exit.svg" alt="exit" />
          </NavLink>
        </SidebarPersonal>
      </MainSidebar>
    </SMain>
  );
};
