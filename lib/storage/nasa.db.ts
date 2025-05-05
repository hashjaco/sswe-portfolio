import { openDB } from 'idb';
import {NasaArticle} from "@/types/nasa";

export async function getNasaDB() {
    return openDB("nasa-store", 1, {
        upgrade(db) {
            db.createObjectStore("apod", { keyPath: "date" });
        },
    });
}

export async function getTodayArticle(): Promise<NasaArticle | null> {
    const db = await getNasaDB();
    const today = new Date().toISOString().split("T")[0];
    return db.get("apod", today);
}

export async function saveArticle(article: NasaArticle) {
    const db = await getNasaDB();
    await db.put("apod", article);
}
