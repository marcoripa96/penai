'use client';

import { ComponentProps, PropsWithChildren, useState } from "react";
import { CanvasPosition } from "./types";
import { GRID_SIZE } from "./constants";
import { useDrag } from "@use-gesture/react";
import { cn } from "@/lib/utils";

export type DraggableElementProps = ComponentProps<'div'> & {
  initialPos: CanvasPosition
}

export const DraggableElement = ({ initialPos, className, style, ...props }: DraggableElementProps) => {
  const [position, setPosition] = useState(initialPos);

  const snapToGrid = (value: number) => {
    return Math.round(value / GRID_SIZE) * GRID_SIZE;
  };

  const bind = useDrag(({ offset: [x, y] }) => {
    setPosition({ x: snapToGrid(x), y: snapToGrid(y) });
  });

  return (
    <div
      {...bind()}
      style={{ ...style, position: 'absolute', top: position.y, left: position.x }}
      className={cn('cursor-grab', className)}
      {...props}
    />
  );
}