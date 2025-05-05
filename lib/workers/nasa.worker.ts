import { getTodayArticle, saveArticle } from "@/lib/storage/nasa.db";
import {fetchNASADataSSR} from "@/lib/utils/nasa.server";

self.onmessage = async (e) => {
    if (e.data === "load-nasa") {
        const cached = await getTodayArticle();
        if (cached) {
            postMessage({ type: "cached", payload: cached });
            return;
        }

        try {
            const fresh = await fetchNASADataSSR();
            if (fresh?.date) {
                await saveArticle(fresh);
                postMessage({ type: "fetched", payload: fresh });
            } else {
                postMessage({ type: "error", payload: "No valid date in API response" });
            }
        } catch (err) {
            postMessage({ type: "error", payload: (err as Error).message });
        }
    }
};
