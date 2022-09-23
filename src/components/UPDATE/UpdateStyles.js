import styled from "styled-components";

export const UpdatedCard = styled.div`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    height: 32px;
    margin-bottom: 0px;
  }
`;
