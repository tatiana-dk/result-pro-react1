import { useState, useCallback, useEffect } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useViewportSize() {
    const [height, setHeight] = useState<number>(window.innerHeight);
    const [width, setWidth] = useState<number>(window.innerWidth);

    const handleWindowResize = useCallback(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }, []);

    useWindowEvent('resize', handleWindowResize, {});

    return {height, width};
}