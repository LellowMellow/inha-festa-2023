import toast from "react-simple-toasts";
import styled from "styled-components";

const StyledToast = styled.div`
  width: calc(min(339px, 100vw - 20px));
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(31, 31, 31, 0.8);
  border-radius: 24px;
  color: #ffffff;
  font-family: "pretendard-semibold";
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
`;

export function Toast(message) {
  toast(message, {
    clickClosable: true,
    render: (m) => <StyledToast>{m}</StyledToast>,
  });
}

export default Toast;
