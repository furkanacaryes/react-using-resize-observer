import { FC, PropsWithChildren } from "react";

import "./styles.css";
import { Draggable } from "../Draggable";

export const ResizableContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="resizable-container">
      <Draggable className="handle handle--top" />
      <Draggable className="handle handle--right" />
      <Draggable className="handle handle--bottom" />
      <Draggable className="handle handle--left" />
      {children}
    </div>
  );
};
