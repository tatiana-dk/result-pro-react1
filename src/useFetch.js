import { useRef } from "react";

export function useFetch() {

    const data = useRef();

    const isLoading = useRef(false);

    const error = useRef('');

    function refetch() {}

    return {
        data,
        isLoading,
        error,
        refetch
    }
}