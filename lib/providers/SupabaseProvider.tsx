'use client';

import {ReactNode} from "react";
import {supabase} from "@/lib/utils/supabase/createBrowserClient";
import {SupabaseContext} from "@/lib/contexts/SupabaseContext";

export default function SupabaseClientProvider({ children }: { children: ReactNode }) {
    return (
        <SupabaseContext.Provider value={supabase}>
            {children}
        </SupabaseContext.Provider>
    );
}
