// /* eslint-disable */
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import { logOut } from '../../App';
import { selectTrackFunction } from '../../../store/sliceSelectTrack';

export const NavMenu = () => {
  const dispatch = useDispatch();

  return (
    <S.NavMenuStyle>
      <S.MenuList>
        <S.MenuItem>
          <NavLink to="/">Главное</NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="/mytrack">Мой плейлист</NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink
            to="/signin"
            onClick={() => {
              logOut();
              dispatch(selectTrackFunction(null));
            }}
          >
            Выйти
          </NavLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenuStyle>
  );
};
