import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = 'https://ouovpuayfdoeilmymbra.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91b3ZwdWF5ZmRvZWlsbXltYnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NTI3MTYsImV4cCI6MjA0NzEyODcxNn0.NX-K5WYsZ3YrzL5FUM1FoO-0Dz_ZMgEQyDb4OF8BAnI';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
