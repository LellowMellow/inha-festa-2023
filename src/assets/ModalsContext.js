import { createContext } from "react";

// modal을 열고 닫는 함수
export const ModalsDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

// 현재 open된 modal들을 나타냄
export const ModalsStateContext = createContext([]);
