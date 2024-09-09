"use client";

import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import { Button } from "@/components/atoms";
import Konva from "konva";
import { Stage, Layer, Rect, Transformer } from "react-konva";

export const ClientComponents = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    const c = new fabric.Canvas("canvas");
    setCanvas(c);
    console.log(c);

    return () => {
      c.dispose();
    };
  }, []);

  const addRect1 = () => {
    if (canvas) {
      const rect = new fabric.Rect({
        left: Math.random() * 400,
        top: Math.random() * 400,
        fill: "red",
        width: 50 + Math.random() * 50,
        height: 50 + Math.random() * 50,
      });
      canvas.add(rect);
      canvas.requestRenderAll();
      console.log(canvas.getObjects());
    }
  };

  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const [selectedShape, setSelectedShape] = useState(null);

  const addRect2 = () => {
    const layer = layerRef.current;
    const rect = new Konva.Rect({
      x: Math.random() * 400,
      y: Math.random() * 400,
      width: 50 + Math.random() * 50,
      height: 50 + Math.random() * 50,
      fill: "green",
      draggable: true,
      name: "rect",
    });
    rect.on("click", () => {
      setSelectedShape(rect);
    });
    layer.add(rect);
    layer.draw();
  };

  useEffect(() => {
    const stage = stageRef.current;
    const layer = new Konva.Layer();
    stage.add(layer);
    layerRef.current = layer;

    stage.on("click", (e) => {
      if (e.target === stage) {
        setSelectedShape(null);
      }
    });
  }, []);

  return (
    <div>
      <canvas id="canvas" width={500} height={500} className="bg-red-100/50" />
      <Button onClick={addRect1} disabled={!canvas}>
        Add Rect
      </Button>
      <Stage width={500} height={500} className="w-96 h-96 bg-red-100/50" ref={stageRef}>
        <Layer>
          <Rect
            x={50}
            y={50}
            width={100}
            height={100}
            fill={"red"}
            draggable
            name="rect"
            onClick={() => setSelectedShape("rect")}
          />
          {selectedShape && (
            <Transformer
              nodes={[selectedShape]}
              boundBoxFunc={(oldBox, newBox) => {
                // limit resize
                if (newBox.width < 5 || newBox.height < 5) {
                  return oldBox;
                }
                return newBox;
              }}
            />
          )}
        </Layer>
      </Stage>
      <Button onClick={addRect2}>Add Rect</Button>
    </div>
  );
};
