import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export const useMousePosition: () => Position = () => {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};
