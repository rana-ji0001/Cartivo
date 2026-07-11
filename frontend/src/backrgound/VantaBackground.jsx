import { useEffect, useRef } from "react";
import * as THREE from "three";
import * as VANTA from "vanta/dist/vanta.net.min.js";

const compatibleThree = {
  ...THREE,
  PlaneBufferGeometry: THREE.PlaneGeometry,
  VertexColors: true,
};

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const effect = useRef(null);

  useEffect(() => {
    const net = VANTA.default?.default || VANTA.default || VANTA;

    if (typeof net !== "function" || !vantaRef.current) {
      return undefined;
    }

    if (!effect.current) {
      effect.current = net({
        el: vantaRef.current,
        THREE: compatibleThree,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200,
        minWidth: 200,

        backgroundColor: 0x404E3B,

        color: 0x7B9669,
        points: 14,
        maxDistance: 24,
        spacing: 18,
        showDots: true,
      });
    }

    return () => {
      if (effect.current) {
        effect.current.destroy();
        effect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      aria-hidden="true"
      className="vanta-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100dvh",
        minHeight: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
