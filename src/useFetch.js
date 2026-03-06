import { useMemo, useRef, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);

    const [fetchFlag, setFetchFlag] = useState(true);

    const isLoading = useRef(false);

    const error = useRef('');

    useMemo(() => {
        if (isLoading.current) return;
        
        (async () => {
            try {
                isLoading.current = true;
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch(err) {
                error.current = err;
            } finally {
                isLoading.current = false;
            }
        })();
    }, [fetchFlag]);

    function refetch() {
        setFetchFlag(!fetchFlag);
    }

    return {
        data,
        isLoading: isLoading.current,
        error: error.current,
        refetch
    }
}