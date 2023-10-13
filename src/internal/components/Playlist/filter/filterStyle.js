import styled from 'styled-components';

export const CenterblockFilter = styled.div`
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
  margin-bottom: 51px;

  .filter__title {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
  }
`;

export const FilterButton = styled.button`
  background-color: #181818;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #fff;
  border-radius: 60px;
  padding: 6px 20px;
  color: #fff;
  width: 144px;
  height: 39px;
  margin-right: 10px;
  position: relative;

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Filters = styled.div`
  width: 248px;
  height: 305px;
  background-color: #313131;
  position: absolute;
  padding: 34px;
  border-radius: 12px;

  .filtersList {
    width: 180px;
    height: 237px;
    overflow-y: auto;
  }

  .filters-item {
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 28px;
    display: block;
    cursor: pointer;
  }

  .filters-item-all {
    color: #9999;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 28px;
    display: block;
    cursor: pointer;
    font-weight: bold;
  }

  .filters-item-choose {
    color: #b672ff;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 28px;
    display: block;
    cursor: pointer;
  }

  .filters-item-active {
    color: #ad61ff;
  }

  .filtersList::-webkit-scrollbar {
    width: 4px;
  }

  .filtersList::-webkit-scrollbar-track {
    background: #4b4949;
    border-radius: 10px;
  }

  .filtersList::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 10px;
    width: 4px;
    height: 65px;
  }
`;

export const StyledFilterCounter = styled.div`
  background: #ad61ff;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  top: -10px;
  right: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
