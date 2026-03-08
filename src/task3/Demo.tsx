import { useHover } from "./useHover";

export function Task3Demo() {
    const { hovered, ref } = useHover();

    return (
        <div ref={ref}>
            {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    );
}