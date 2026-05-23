import { createClient } from "@supabase/supabase-js";

// Shared Supabase client. Reads from env vars set in:
//  - .env.local (for local dev)
//  - Vercel Environment Variables (for production)
// Both vars are NEXT_PUBLIC_* meaning they're inlined into the client bundle,
// which is fine — the anon/publishable key is designed to be exposed publicly.
// Row Level Security (RLS) on the quote_requests table controls who can do what.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
