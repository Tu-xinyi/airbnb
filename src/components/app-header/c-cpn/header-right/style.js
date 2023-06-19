import styled from "styled-components";

export const RightWapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.textColor.primaryColor};
  font-weight: 600;
  font-size: 14px;

  .btns {
    display: flex;
    align-items: center;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    display: flex;
    width: 77px;
    height: 42px;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    margin-right:20px;
    position: relative;

    ${props=>props.theme.mixin.boxShadow}

    .panel{
      position: absolute;
      top:60px;
      right: 0;
      width: 240px;
      /* height: 200px; */
      background-color: #fff;
      box-shadow: 0 0 2px 4px rgba(0,0,0,.18);
      border-radius: 10px;

      .top,.bottom{
        padding: 10px 0;

        .item{
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
        }
      }
      .top{
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
