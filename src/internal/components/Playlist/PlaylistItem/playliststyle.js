import styled from 'styled-components';

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;

  .playlist__track {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
  }
`;

export const TrackTitle = styled.div`
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
  width: 447px;

  .track__title-image {
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 17px;
  }

  .track__title-svg {
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
  }

  .track__title-link {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    cursor: pointer;
  }

  .track__title-span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
  }

  .playing-dot {
    width: 16px;
    height: 16px;
    background-color: #b672ff;
    border-radius: 8px;
    display: block;
    animation: bubble_out 0.6s ease-in-out infinite both;
  }

  @keyframes bubble_out {
    0%,
    to {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
  }
`;

export const TrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;

  .track__author-link {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    text-align: left;
  }
`;

export const TrackAlbum = styled.div`
  width: 245px;

  .track__album-link {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
  }
`;

export const TrackTime = styled.div`
  .track__time-svg {
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
  }

  .track__time-svg-choose {
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #b672ff;
  }

  .track__time-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
  }

  div {
    display: inline;
    cursor: pointer;
  }
`;
