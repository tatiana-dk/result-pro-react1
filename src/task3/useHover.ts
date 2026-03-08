import { useRef, useState, useEffect, useCallback } from "react"

export function useHover() {

    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState<boolean>(false);

    const handleMouseenter = useCallback(() => {
        setHovered(true);
    }, []);

    const handleMouseleave = useCallback(() => {
        setHovered(false);
    }, []);


    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('mouseenter', handleMouseenter);
            ref.current.addEventListener('mouseleave', handleMouseleave);
        }

        return () => {
            if (ref.current) {
                ref.current.removeEventListener('mouseenter', handleMouseenter);
                ref.current.removeEventListener('mouseleave', handleMouseleave);
            }
        };
    }, [ref.current]);
    

    return {
        hovered,
        ref
    }
}