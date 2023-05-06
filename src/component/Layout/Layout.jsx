import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../../component/Header/Header";
import { motion } from "framer-motion";

const Width = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  padding: 0px 24px;
  ${(props) => props.theme.flex.flexCenterColumn};
  background: none;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  ${(props) => props.theme.flex.flexCenter};
  align-items: flex-start;
  background: none;
  z-index: 1;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Background>
          <Width>{children}</Width>
        </Background>
      </motion.div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
