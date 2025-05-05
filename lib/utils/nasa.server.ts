import {NasaArticle} from "@/types/nasa";

export async function fetchNASADataSSR(): Promise<NasaArticle | null> {
    const endpoint = process.env.NEXT_PUBLIC_NASA_IMAGE_OTD_URL;
    const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;

    if (!endpoint || !apiKey) {
        console.error("Missing NASA API environment variables");
        return null;
    }

    const url = new URL(endpoint);
    url.searchParams.set("api_key", apiKey);

    try {
        const res = await fetch(url.toString(), { cache: "no-store" });

        if (!res.ok) {
            console.error(`NASA API error: ${res.status} ${res.statusText}`);
            return null;
        }

        const json = await res.json();
        if (!json.date) {
            console.error("NASA response missing date");
            return null;
        }

        return json;
    } catch (err) {
        console.error("Error fetching NASA data (SSR):", err);
        return null;
    }
}
