import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[1] hidden md:block"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        width: 400,
        height: 400,
        background: "radial-gradient(circle, hsl(170 80% 45% / 0.06) 0%, transparent 70%)",
        borderRadius: "50%",
        transition: "left 0.15s ease-out, top 0.15s ease-out",
      }}
    />
  );
};

export default MouseGlow;
