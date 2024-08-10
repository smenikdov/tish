import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef<() => void>();
    const intervalId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }

        if (delay !== null) {
            intervalId.current = setInterval(tick, delay);
            return () => clearInterval(intervalId.current as NodeJS.Timeout);
        }
    }, [delay]);

    const clear = () => {
        if (intervalId.current) {
            clearInterval(intervalId.current);
            intervalId.current = null;
        }
    };

    return { clear };
}

export default useInterval;
