import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [response, setResponse] = useState<any>();
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
            } catch (err: any) {
                setError(err);
            }
        };
        fetchData();
    }, [url]);

    return { response, error, loading };
};
