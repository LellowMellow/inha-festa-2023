import styled from "styled-components";

const Typography = styled.p`
  word-break: keep-all;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  ${(props) => props.header && props.theme.font.header};
  ${(props) => props.title && props.theme.font.title};
  ${(props) => props.boxtitle && props.theme.font.boxtitle};
  ${(props) => props.boxtext && props.theme.font.boxtext};
`;

export default Typography;
