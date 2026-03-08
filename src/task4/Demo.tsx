import { useViewportSize } from "./useViewportSize";

export function Task4Demo() {
    const { height, width } = useViewportSize();

    return (
        <>
        Width: {width}, height: {height}
        </>
    );
}