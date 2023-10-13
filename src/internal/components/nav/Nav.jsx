import { useState } from 'react';
import { NavMenu } from './NavMenu';
import * as S from './styles';

export const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/music/img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={() => setOpenNav(!openNav)}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {openNav && <NavMenu />}
    </S.MainNav>
  );
};
