import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export async function fetchProjects() {
  try {
    const { data, error } = await supabase.from('projects').select(); // fetch from supabase
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching projects:', err);
  }
}
