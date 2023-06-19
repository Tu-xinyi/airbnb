import styled from "styled-components";

export const LeftWapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.primaryColor};
  .logo {
    margin: 20px;
    cursor: pointer;
  }
`;
