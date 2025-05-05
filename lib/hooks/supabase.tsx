import {SupabaseContext} from "@/lib/contexts/SupabaseContext";
import {use} from "react";

export function useSupabase() {
    const client = use(SupabaseContext);

    if (!client) {
        throw new Error("useSupabase must be used within a SupabaseProvider");
    }
    return client;
}