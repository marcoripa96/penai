'use client';

import { useDrag } from "@use-gesture/react";
import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { GRID_SIZE } from "./constants";
import { createContext } from "@/utils/createContext";
import { CanvasPosition } from "./types";

type PlaneContextProps = {
  snapBehaviour: boolean;
  setSnapBehaviour: Dispatch<SetStateAction<boolean>>
}



const InfinitePlane = ({ children }: PropsWithChildren) => {
  const [position, setPosition] = useState<CanvasPosition>({ x: 0, y: 0 });

  // Set up drag behavior
  const bind = useDrag(({ offset: [x, y] }) => {
    setPosition({ x, y });
  });

  return (
    <div
      className="relative overflow-hidden w-full h-full"
    >
      <svg
        {...bind()}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <defs>
          <pattern
            id="grid"
            width={GRID_SIZE}
            height={GRID_SIZE}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`}
              fill="none"
              className="stroke-slate-300"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          transform={`translate(${position.x % GRID_SIZE}, ${position.y % GRID_SIZE
            })`}
        />
      </svg>

      <div
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
        }}
      >
        {children}
        {/* Regular HTML content */}
        {/* <DraggableDiv initialPos={{ x: 200, y: 100 }}>HELLO DIV</DraggableDiv> */}

        {/* More elements... */}
      </div>
    </div>

  );
};

export { InfinitePlane }