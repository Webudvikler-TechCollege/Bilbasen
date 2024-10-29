/* Henter createClient fra CDN */
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
/* Importerer Supabase credentials */
import { supabaseUrl, supabaseKey } from './credentials.js'
// Deklarerer supabase client object
export const supabase = createClient(supabaseUrl, supabaseKey)