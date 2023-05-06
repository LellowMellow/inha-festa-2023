import styled from "styled-components";

const Flex = styled.div`
  ${(props) => props.theme.flex.flexCenter};
  ${(props) => props.column && props.theme.flex.flexCenterColumn}
  ${(props) => props.margin && "margin-left: 13px"};

  justify-content: ${(props) => props.justify && props.justify};
  align-items: ${(props) => props.align && props.align};
`;

export default Flex;
