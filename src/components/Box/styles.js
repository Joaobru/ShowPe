import styled from "styled-components/native";

export const ContentBox = styled.View`
  height: ${(props) => (props.size ? props.size : "100px")};
  margin-bottom: 10px;
  padding: 50px;
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.color ? props.color : "#ededed")};
`;
