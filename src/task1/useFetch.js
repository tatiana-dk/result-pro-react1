import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const controller = useRef(new AbortController());

    const fetchData = useCallback(async (params = {}) => {
        const fullUrl = new URL(url);

        Object.entries(params).forEach(([key, value]) => {
            fullUrl.searchParams.set(key, value);
        });
        

        try {
            controller.current.abort();
            controller.current = new AbortController();

            setIsLoading(true);
            setError(false);

            const response = await fetch(
                fullUrl,
                {
                    signal: controller.current.signal
                }
            );

            if (!response.ok) throw new Error();

            const result = await response.json();
            setData(result);

        } catch(err) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, []);

    function refetch(options = {}) {
        fetchData(options.params);
    }

    return {
        data,
        isLoading,
        error,
        refetch
    }
}