import { useState, useEffect, useRef } from "react";

import { useResizeObserver } from "src/lib";

import "./global-styles.css";

function App() {
  const [isMounted, setMounted] = useState(false);
  const [containerRect, setContainerRect] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // ? Triggers a re-render after mount then makes refs available
  useEffect(() => {
    setMounted(true);
  }, []);

  // ? Just a tiny abstraction, go inside
  useResizeObserver({
    target: containerRef.current as HTMLDivElement,
    onResize: (entries) => {
      const containerChanges = entries[0];

      // ? Go see what else returned
      console.log({ containerChanges });

      setContainerRect(containerChanges.contentRect);
    },
  });

  return (
    <div className="container" ref={containerRef}>
      <div className="container-info">
        <div>Container width: {containerRect.width}</div>
        <div>Container height: {containerRect.height}</div>
      </div>

      <div>
        <div>Resizing this textarea or this whole preview pane</div>

        <textarea className="resizable-element" />

        <div>causes elements resize</div>
      </div>
    </div>
  );
}

export default App;
