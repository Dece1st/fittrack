"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Define the VantaEffect type (manually since Vanta.js has no TS support)
type VantaEffect = {
    destroy: () => void;
};

const VantaBackground = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

    useEffect(() => {
        if (!vantaRef.current) return;

        import("vanta/dist/vanta.cells.min.js").then((VANTA) => {
            const effect = VANTA.default({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 100.0,
                minWidth: 100.0,
                scale: 1.0,
                color1: 0x000000, // Black
                color2: 0x693535, // Dark Red
                size: 1,
                speed: 1.9,
                THREE,
            });

            setVantaEffect(effect);
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return <div ref={vantaRef} className="fixed top-0 left-0 w-screen h-screen -z-10" />;
};

export default VantaBackground;