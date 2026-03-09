import { useCallback, useDeferredValue, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

type UseWindowScroll = () => [
    Scroll,
    (arg: Scroll) => void
];

interface Scroll {
    x?: number;
    y?: number;
}

interface ScrollOptions {
    top?: number;
    left?: number;
}

const eventListenerOptions: AddEventListenerOptions = {
    passive: true
};

export const useWindowScroll: UseWindowScroll = () => {
    const [scroll, setScroll] = useState<Scroll>({x: 0, y: 0});
    const deferredScroll = useDeferredValue(scroll);

    const handleScroll = useCallback(() => {
        setScroll({
            x: window.scrollX,
            y: window.scrollY
        });
    }, []);

    useWindowEvent('scroll', handleScroll, eventListenerOptions);

    const scrollTo = useCallback((newScroll: Scroll) => {
        const options: ScrollOptions = {};

        if (newScroll.y !== undefined) options.top = newScroll.y;
        if (newScroll.x !== undefined) options.left = newScroll.x;

        window.scrollTo(options);
    }, []);

    return [
        deferredScroll,
        scrollTo
    ]
}