import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xiaukzzqjixkycuepqzm.supabase.co'
const supabaseAnonKey = 'sb_publishable_ANUwxvL9ux63ATKGyX1leA_MIhWIUOg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)