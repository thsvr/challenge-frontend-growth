import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [response, setResponse] = useState();
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                setLoading(false);
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json);
            } catch (err) {
                setError(err as string);
            }
        };
        fetchData();
    }, [url]);

    return { response, error, loading };
};
