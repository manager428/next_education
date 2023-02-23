import styled from 'styled-components'

export const BlockPreviousChallenges = styled.div`
  padding: 80px 0;
  text-align: left;
  .title {
    font-weight: 600;
    font-size: 40px;
    line-height: 56px;
    color: #333;
    margin-bottom: 40px;
  }
  .sub-title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    cursor: pointer;
    color: #bdbdbd;
    background-color: transparent;
    border: 0px;
    &.active {
      color: #49ceb1;
    }
  }
  .content {
    display: flex;
  }
  .left-part {
    width: 500px;
    margin-right: 40px;
    img {
      width: 500px;
      height: 360px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  .right-part {
    width: calc(100% - 540px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .tabs-wrapper {
      display: flex;
      justify-content: space-between;
      max-width: 300px;
    }
    .winner-wrap:last-child {
      margin-bottom: 0;
    }
  }
  .challenge-info {
    display: flex;
    width: 500px;
    justify-content: space-between;
    margin-top: 20px;
  }
  .challenge-title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
  .challenge-date {
    font-size: 18px;
    line-height: 23px;
    color: #bdbdbd;
  }
  .slider-navigator {
    display: flex;
    width: 250px;
    justify-content: space-between;
    margin-top: 20px;
    .move-left,
    .move-right {
      display: flex;
      width: 50px;
      height: 50px;
      border: 2px solid #d3dae8;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      svg {
        width: 12px;
        height: 22px;
        fill: #d3dae8;
      }
      &.active {
        cursor: pointer;
        svg {
          fill: #49ceb1;
        }
      }
    }
    .move-right {
      margin: 0 20px;
      svg {
        transform: rotate(180deg);
      }
    }
    .count-items {
      font-size: 18px;
      color: #bdbdbd;
      display: flex;
      align-items: center;

      .active {
        color: #5f9ee1;
        font-size: 42px;
        font-weight: bold;
      }
    }
  }
`

export const Slide = styled.div`
  width: 100%;
  height: 410px;
`

export const Container = styled.div`
  margin-top: 40px;
  position: relative;
  flex-wrap: nowrap;
  width: 100%;
  display: flex;
  height: 410px;
  li {
    outline: 0;
  }
`

export const WinnerTitle = styled.div`
  margin-bottom: 14px;
  font-style: italic;
  font-size: 16px;
  line-height: 16px;
  color: #333333;
`
