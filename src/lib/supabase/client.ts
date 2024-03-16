import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

export const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL! || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! || ""
);
export const supabaseAdmin = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL! || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY! || ""
);
