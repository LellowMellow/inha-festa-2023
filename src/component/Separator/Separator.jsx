import styled from "styled-components";
import Flex from "../Flex/Flex";
import { FaStarOfLife } from "react-icons/fa";
import theme from "../../assets/theme/Theme";

const StyledHr = styled.hr`
  border: 0;
  width: 52px;
  height: 1px;
  margin: 0px 8px;
  background-color: ${(props) => props.theme.colors.white};
`;

const Separator = () => (
  <Flex flexCenter style={{ width: "100%", marginBottom: "16px" }}>
    <Flex>
      <FaStarOfLife size="10px" color={theme.colors.white} />
      <StyledHr />
      <FaStarOfLife size="10px" color={theme.colors.white} />
    </Flex>
  </Flex>
);

export default Separator;
