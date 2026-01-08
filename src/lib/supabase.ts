import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://emcnyhdjewbrpfhztemj.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_7sT_sblLlvsWcHHfFHCWqw_1E7csqY-';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);