import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
const handlerTimeout = setTimeout (() => {
setDebouncedValue(value);
}, delay)

return () => {
   clearTimeout(handlerTimeout) 
}
    }, [value, delay]);

    return debouncedValue;
    
}