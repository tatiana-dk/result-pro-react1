import { useRef, useState, useCallback } from 'react';
import type {LocalStorageSetValue, LocalStorageReturnValue, UseLocalStorage} from './types';

export const useLocalStorage: UseLocalStorage = (key) => {
    const localStorageRef = useRef(window.localStorage);
    const [value, setValue] = useState<LocalStorageReturnValue>(localStorageRef.current.getItem(key));

    const setItem = useCallback((newValue: LocalStorageSetValue) => {
        localStorageRef.current.setItem(key, newValue);
        setValue(newValue);
    }, [key]);

    const removeItem = useCallback(() => {
        localStorageRef.current.removeItem(key);
        setValue('');
    }, []);

    return [
        value,
        {
            setItem,
            removeItem
        }
    ]
}