import { useState } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";

const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  /**
   *
   * @param Component : 열고싶은 모달 컴포넌트
   * @param props : 모달 컴포넌트로 넘겨줄 props
   */
  const open = (Component, props) =>
    setOpenedModals((modals) => [...modals, { Component, props }]);

  const close = (Component) => {
    setOpenedModals((modals) =>
      modals.filter((modal) => modal.Component !== Component)
    );
  };

  const dispatch = { open, close };

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
