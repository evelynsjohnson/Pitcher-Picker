import { createClient } from '@supabase/supabase-js'

// Replace with your Supabase project details
const supabaseUrl = 'https://llescyxcikhsckmsfipl.supabase.co'
const supabaseKey = 'sb_publishable_K69S9Lz9ixuk6M04ErEqXQ_p_yi8n8J'

export const supabase = createClient(supabaseUrl, supabaseKey)