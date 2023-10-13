import styled from 'styled-components';

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 10px 40px 10px 36px;
`;

export const SidebarPersonal = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px 0;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    margin-right: 16px;
  }

  div {
    width: 43px;
    height: 43px;
    background-color: #313131;
    border-radius: 50%;
  }
`;

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const SidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const SidebarItemStyle = styled.div`
  width: 170px;
  height: 90px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const SidebarLink = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;
