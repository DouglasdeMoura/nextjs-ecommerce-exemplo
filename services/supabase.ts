import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wzuufpzgxwqznawvqlxb.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY_ECOMMERCE;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
