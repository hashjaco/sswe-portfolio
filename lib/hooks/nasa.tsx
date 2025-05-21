import {useEffect, useLayoutEffect, useState} from "react";
import {NasaArticle} from "@/types/nasa";

/**
 * @function useNasaData
 * @description - A custom hook that fetches NASA data from a web worker.
 */
export function useNasaData() {
    const [data, setData] = useState<NasaArticle | null>(null);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        const worker = new Worker(new URL("@/lib/workers/nasa.worker.ts", import.meta.url));

        worker.onmessage = (e) => {
            const { type, payload } = e.data;
            if (type === "cached" || type === "fetched") {
                setData(payload);
                setLoading(false);
            } else if (type === "error") {
                console.error("NASA Worker error:", payload);
                setLoading(false);
            }
        };

        worker.postMessage("load-nasa");

        return () => worker.terminate();
    }, []);

    return { data, loading };
}
