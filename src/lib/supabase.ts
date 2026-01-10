import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://emcnyhdjewbrpfhztemj.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtY255aGRqZXdicnBmaHp0ZW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3NTIwMzEsImV4cCI6MjA4MzMyODAzMX0.GY_3a8idnhMQVjxAT0C8Gj6RLmgo6VOocgEfvXdBUNU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);