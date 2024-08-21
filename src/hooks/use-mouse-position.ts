import { useEffect, useState } from "react";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return position;
}

export default useMousePosition;
