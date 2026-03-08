import type {LocalStorageSetValue, LocalStorageReturnValue, UseLocalStorage} from './types';

export const useLocalStorage: UseLocalStorage = (key) => {

    const localStorage = window.localStorage;
    
    const value: LocalStorageReturnValue = localStorage.getItem(key);

    const setItem = (newValue: LocalStorageSetValue) => {
        localStorage.setItem(key, newValue);
    };

    const removeItem = () => {
        localStorage.removeItem(key);
    }

    return [
        value,
        {
            setItem,
            removeItem
        }
    ]
}