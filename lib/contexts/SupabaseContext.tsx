import {createContext} from "react";
import { SupabaseClient } from "@supabase/supabase-js";

type Supabase = SupabaseClient;

export const SupabaseContext = createContext<Supabase | null>(null);
