import { FC, PropsWithChildren } from "react";

import "./styles.css";

export type DraggableProps = PropsWithChildren & {
  className?: string;
};

export const Draggable: FC<DraggableProps> = ({ children, className = "" }) => {
  return (
    <div
      draggable
      className={`draggable-container ${className}`}
      onDrag={() => console.log("drag")}
      onDragCapture={() => console.log("drag-capture")}
      onDragStart={() => console.log("drag-start")}
      onDragStartCapture={() => console.log("drag-start-capture")}
      onDragEnter={() => console.log("drag-enter")}
      onDragEnterCapture={() => console.log("drag-enter-capture")}
      onDragEnd={() => console.log("drag-end")}
      onDragEndCapture={() => console.log("drag-end-capture")}
      onDragExit={() => console.log("drag-exit")}
      onDragExitCapture={() => console.log("drag-exit-capture")}
      onDragLeave={() => console.log("drag-leave")}
      onDragLeaveCapture={() => console.log("drag-leave-capture")}
      onDragOver={() => console.log("drag-over")}
      onDragOverCapture={() => console.log("drag-over-capture")}
    >
      {children}
    </div>
  );
};
